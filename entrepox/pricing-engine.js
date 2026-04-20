export const STORAGE_KEYS = {
  preps: "entrepox-preps-v1",
  receptions: "entrepox-receptions-v1",
  inventorySessions: "entrepox-inventory-sessions-v1",
  inventoryCounts: "entrepox-inventory-counts-v1",
  billingProfiles: "entrepox-billing-profiles-v1",
  pricingRuleSets: "entrepox-pricing-rule-sets-v1",
  billingAdjustments: "entrepox-billing-adjustments-v1",
  billingLineDecisions: "entrepox-billing-line-decisions-v1",
  storageSnapshots: "entrepox-storage-snapshots-v1",
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function roundMoney(value) {
  return Math.round(Number(value || 0) * 100) / 100;
}

function readCollection(key, fallback = []) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : clone(fallback);
  } catch (error) {
    console.warn("Lecture localStorage impossible", key, error);
    return clone(fallback);
  }
}

function normalizeString(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function normalizePeriod(period) {
  const key = typeof period === "string" && /^\d{4}-\d{2}$/.test(period) ? period : new Date().toISOString().slice(0, 7);
  return {
    key,
    start: key + "-01",
    endExclusive: new Date(key + "-01T00:00:00").toISOString().slice(0, 7),
  };
}

function isSameMonth(dateString, periodKey) {
  return String(dateString || "").slice(0, 7) === periodKey;
}

function resolveClientIdFromLabel(label, clients) {
  const normalizedLabel = normalizeString(label);
  const found = (clients || []).find((client) => normalizeString(client.clientName || client.nom || client.name || client.id) === normalizedLabel);
  return found ? found.clientId || found.id : null;
}

function deriveCutoffCode(label) {
  const normalized = normalizeString(label);
  if (normalized.includes("11")) {
    return "t11";
  }
  if (normalized.includes("15")) {
    return "t15";
  }
  if (normalized.includes("17")) {
    return "t17";
  }
  if (normalized.includes("urgence")) {
    return "urgence";
  }
  return "normal";
}

function buildPreparationEvents(dataset) {
  return (dataset.preps || []).flatMap((prep) => {
    const clientId = prep.clientId || resolveClientIdFromLabel(prep.client, dataset.clients);
    if (!clientId) {
      return [];
    }
    const billingMeta = prep.billingMeta || {};
    const baseEvent = {
      id: "bev-prep-" + prep.id,
      clientId,
      domain: "preparation",
      eventType: "preparation_order",
      eventDate: String(prep.receptionDate || "").split("/").reverse().join("-") || prep.eventDate || "",
      sourceType: "preparation",
      sourceId: prep.id,
      sourceLabel: prep.expe || prep.id,
      operationalStatus: prep.statut === "Terminée" ? "ready" : prep.statut === "Annulée" ? "cancelled" : "pending",
      metrics: {
        orderCount: 1,
        referencesCount:
          typeof billingMeta.referencesCount === "number"
            ? billingMeta.referencesCount
            : Array.isArray(prep.produits)
              ? prep.produits.length
              : 0,
        durationMinutes:
          typeof billingMeta.durationMinutes === "number"
            ? billingMeta.durationMinutes
            : Number(prep.duree || 0),
      },
      payload: {
        cutoff: prep.cutoff || "Normal 13h",
        cutoffCode: billingMeta.cutoffCode || deriveCutoffCode(prep.cutoff),
        canal: prep.canal || null,
        destination: prep.dest || null,
        status: prep.statut || null,
      },
      nonBillable: false,
    };
    return [
      baseEvent,
      {
        ...baseEvent,
        id: "bev-cutoff-" + prep.id,
        domain: "cutoff",
        eventType: "cutoff_surcharge",
      },
    ];
  });
}

function buildReceptionEvents(dataset) {
  return (dataset.receptions || []).map((entry) => ({
    id: "bev-rec-" + entry.id,
    clientId: entry.clientId,
    domain: "reception",
    eventType: "reception",
    eventDate: entry.receptionDate,
    sourceType: "reception",
    sourceId: entry.id,
    sourceLabel: entry.id,
    operationalStatus: entry.status === "received" ? "ready" : "pending",
    metrics: {
      receptionCount: 1,
      lostPalletCount: Number(entry.palettesSolPerdues || 0) + Number(entry.palettesRenduesPerdues || 0),
      totalPalletCount:
        Number(entry.palettesSolEurope || 0) +
        Number(entry.palettesSolPerdues || 0) +
        Number(entry.palettesRenduesEurope || 0) +
        Number(entry.palettesRenduesPerdues || 0),
    },
    payload: {
      storageMode: entry.storageMode || "sec",
      transporteur: entry.transporteur || null,
      anomaly: Boolean(entry.anomaly),
      billingStatus: entry.billingStatus || null,
    },
    nonBillable: Boolean(entry.nonBillable),
    reason: entry.nonBillableReason || null,
  }));
}

function buildInventoryEvents(dataset) {
  return (dataset.inventorySessions || []).map((session) => {
    const referencesCount = (dataset.inventoryCounts || []).filter((count) => count.inventorySessionId === session.id).length;
    return {
      id: "bev-inv-" + session.id,
      clientId: session.ownerClientId,
      domain: "inventory",
      eventType: "inventory_session",
      eventDate: session.sessionDate,
      sourceType: "inventory_session",
      sourceId: session.id,
      sourceLabel: session.id,
      operationalStatus: session.status === "VALIDATED" || session.status === "CLOSED" ? "ready" : "pending",
      metrics: {
        sessionCount: 1,
        durationMinutes: Number(session.durationMinutes || 0),
        referencesCount,
      },
      payload: {
        inventoryType: session.inventoryType || "scheduled",
        temperatureZone: session.temperatureZone || "dry",
        reason: session.reason || session.comment || null,
      },
      nonBillable: Boolean(session.nonBillable),
      reason: session.nonBillableReason || null,
    };
  });
}

function buildStorageEvents(dataset) {
  return (dataset.storageSnapshots || []).map((snapshot) => ({
    id: "bev-storage-" + snapshot.id,
    clientId: snapshot.clientId,
    domain: "storage",
    eventType: "storage_snapshot",
    eventDate: snapshot.eventDate,
    sourceType: "storage_snapshot",
    sourceId: snapshot.id,
    sourceLabel: snapshot.id,
    operationalStatus: "ready",
    metrics: {
      snapshotCount: 1,
      m2Dry: Number(snapshot.m2Dry || 0),
      m2Cold: Number(snapshot.m2Cold || 0),
    },
    payload: {
      temperatureZone: Number(snapshot.m2Cold || 0) > 0 ? "mixed" : "dry",
    },
    nonBillable: Boolean(snapshot.nonBillable),
    reason: snapshot.reason || null,
  }));
}

function buildConsumableEvents(dataset) {
  const explicitUsages = (dataset.consumableUsages || []).map((usage) => ({
    id: "bev-cons-" + usage.id,
    clientId: usage.clientId,
    domain: "consumables",
    eventType: "consumable_usage",
    eventDate: usage.eventDate,
    sourceType: "consumable_usage",
    sourceId: usage.id,
    sourceLabel: usage.ref || usage.id,
    operationalStatus: usage.operationalStatus || "ready",
    metrics: {
      quantity: Number(usage.quantity || 0),
    },
    payload: {
      consumableKey: usage.consumableKey,
    },
    nonBillable: Boolean(usage.nonBillable),
    reason: usage.reason || null,
  }));

  const derivedFromPrep = (dataset.preps || []).flatMap((prep) => {
    const clientId = prep.clientId || resolveClientIdFromLabel(prep.client, dataset.clients);
    const consumables = ((prep.billingMeta || {}).consumables) || {};
    const materialsBillable = Boolean((prep.billingMeta || {}).materialsBillable);
    if (!clientId || prep.statut === "Annulée" || !materialsBillable) {
      return [];
    }
    return Object.entries(consumables)
      .filter(([, quantity]) => Number(quantity || 0) > 0)
      .map(([consumableKey, quantity]) => ({
        id: "bev-cons-prep-" + prep.id + "-" + consumableKey,
        clientId,
        domain: "consumables",
        eventType: "consumable_usage",
        eventDate: String(prep.receptionDate || "").split("/").reverse().join("-") || prep.eventDate || "",
        sourceType: "preparation",
        sourceId: prep.id,
        sourceLabel: (prep.expe || prep.id) + " · " + consumableKey,
        operationalStatus: prep.statut === "Terminée" ? "ready" : "pending",
        metrics: {
          quantity: Number(quantity || 0),
        },
        payload: {
          consumableKey,
        },
        nonBillable: false,
        reason: null,
      }));
  });

  return explicitUsages.concat(derivedFromPrep);
}

export function buildBillableEvents(dataset = {}) {
  return []
    .concat(buildPreparationEvents(dataset))
    .concat(buildReceptionEvents(dataset))
    .concat(buildInventoryEvents(dataset))
    .concat(buildStorageEvents(dataset))
    .concat(buildConsumableEvents(dataset));
}

function getRuleSetForClient(pricingContext, clientId) {
  const direct = (pricingContext.pricingRuleSets || []).find((set) => set.clientId === clientId);
  if (direct) {
    return direct;
  }
  const profile = (pricingContext.billingProfiles || []).find((item) => item.clientId === clientId);
  return profile ? (pricingContext.pricingRuleSets || []).find((set) => set.id === profile.pricingRuleSetId) || null : null;
}

function matchesRule(rule, event) {
  if (rule.domain !== event.domain || rule.eventType !== event.eventType) {
    return false;
  }
  const match = rule.match || {};
  const eventScope = { ...(event.payload || {}), ...(event.metrics || {}) };
  const matchKeys = Object.keys(match);
  const matchesFields = matchKeys.every((key) => {
    if (match[key] === null || typeof match[key] === "undefined") {
      return true;
    }
    return eventScope[key] === match[key];
  });
  if (!matchesFields) {
    return false;
  }
  if (rule.range) {
    const value = Number((event.metrics || {})[rule.range.field] || 0);
    if (value < Number(rule.range.min || 0)) {
      return false;
    }
    if (rule.range.max !== null && typeof rule.range.max !== "undefined" && value > Number(rule.range.max)) {
      return false;
    }
  }
  return true;
}

function computeRuleQuantity(rule, event) {
  if (rule.calcMode === "flat") {
    return 1;
  }
  if (rule.calcMode === "per_unit") {
    const quantity = Number((event.metrics || {})[rule.unitField] || 0);
    return quantity;
  }
  return 0;
}

function computeRuleUnitLabel(rule) {
  if (rule.calcMode === "flat") {
    return "forfait";
  }
  if (rule.unitField === "durationMinutes") {
    return "min TTH";
  }
  if (rule.unitField === "m2Dry" || rule.unitField === "m2Cold") {
    return "m²";
  }
  return "u.";
}

function buildNonBillableLine(event) {
  return {
    id: "line-" + event.id + "-nonbillable",
    clientId: event.clientId,
    sourceEventId: event.id,
    eventDate: event.eventDate,
    domain: event.domain,
    label: "Non facturable · " + (event.sourceLabel || event.domain),
    quantity: 0,
    unitPrice: 0,
    amount: 0,
    currency: "EUR",
    status: "non_billable",
    ruleId: null,
    ruleLabel: "Exclusion manuelle",
    explanation: event.reason || "Exclu de la facturation",
  };
}

function buildPendingLine(event) {
  return {
    id: "line-" + event.id + "-pending",
    clientId: event.clientId,
    sourceEventId: event.id,
    eventDate: event.eventDate,
    domain: event.domain,
    label: "En attente · " + (event.sourceLabel || event.domain),
    quantity: 0,
    unitPrice: 0,
    amount: 0,
    currency: "EUR",
    status: "pending",
    ruleId: null,
    ruleLabel: "Fait non clôturé",
    explanation: "Le fait opérationnel n’est pas encore clôturé.",
  };
}

export function applyPricingRules(events = [], pricingContext = {}) {
  const lines = [];
  events.forEach((event) => {
    if (event.operationalStatus === "cancelled") {
      return;
    }
    if (event.nonBillable) {
      lines.push(buildNonBillableLine(event));
      return;
    }
    if (event.operationalStatus !== "ready") {
      lines.push(buildPendingLine(event));
      return;
    }
    const ruleSet = getRuleSetForClient(pricingContext, event.clientId);
    if (!ruleSet) {
      return;
    }
    const matchingRules = (ruleSet.rules || []).filter((rule) => matchesRule(rule, event));
    matchingRules.forEach((rule) => {
      const quantity = computeRuleQuantity(rule, event);
      if (quantity <= 0 && rule.calcMode !== "flat") {
        return;
      }
      lines.push({
        id: "line-" + event.id + "-" + rule.id,
        clientId: event.clientId,
        sourceEventId: event.id,
        eventDate: event.eventDate,
        domain: rule.domain,
        label: rule.label,
        quantity,
        unitLabel: computeRuleUnitLabel(rule),
        unitPrice: roundMoney(rule.rate),
        amount: roundMoney(quantity * Number(rule.rate || 0)),
        currency: rule.currency || "EUR",
        status: Number(rule.rate || 0) === 0 ? "review" : "billable",
        ruleId: rule.id,
        ruleLabel: rule.label,
        explanation: "Règle " + rule.label + " appliquée sur " + (event.sourceLabel || event.id),
      });
    });
  });
  return lines;
}

export function buildReviewIssues(events = [], lines = [], pricingContext = {}) {
  const issues = [];
  const linesByEvent = lines.reduce((acc, line) => {
    acc[line.sourceEventId] = acc[line.sourceEventId] || [];
    acc[line.sourceEventId].push(line);
    return acc;
  }, {});

  events.forEach((event) => {
    if (event.operationalStatus === "cancelled") {
      return;
    }
    const eventLines = linesByEvent[event.id] || [];
    if (event.operationalStatus === "pending") {
      issues.push({
        id: "issue-pending-" + event.id,
        clientId: event.clientId,
        domain: event.domain,
        sourceEventId: event.id,
        severity: "info",
        code: "PENDING_EVENT",
        label: event.sourceLabel || event.id,
        detail: "Le fait opérationnel n’est pas clôturé et ne peut pas être facturé pour l’instant.",
      });
      return;
    }
    if (event.nonBillable) {
      return;
    }
    if (!eventLines.length) {
      issues.push({
        id: "issue-rule-" + event.id,
        clientId: event.clientId,
        domain: event.domain,
        sourceEventId: event.id,
        severity: "high",
        code: "MISSING_RULE",
        label: event.sourceLabel || event.id,
        detail: "Aucune règle active ne couvre cet événement.",
      });
    }
    if (event.domain === "inventory" && Number((event.metrics || {}).durationMinutes || 0) === 0) {
      issues.push({
        id: "issue-duration-" + event.id,
        clientId: event.clientId,
        domain: event.domain,
        sourceEventId: event.id,
        severity: "medium",
        code: "MISSING_DURATION",
        label: event.sourceLabel || event.id,
        detail: "La session inventaire ne porte pas de TTH exploitable.",
      });
    }
    eventLines
      .filter((line) => line.status === "review")
      .forEach((line) => {
        issues.push({
          id: "issue-zero-" + line.id,
          clientId: event.clientId,
          domain: event.domain,
          sourceEventId: event.id,
          severity: "medium",
          code: "ZERO_RATE",
          label: line.label,
          detail: "Une règle existe mais le tarif vaut 0 €, à confirmer.",
        });
      });
  });

  if (!(pricingContext.billingProfiles || []).length) {
    issues.push({
      id: "issue-global-no-profile",
      clientId: null,
      domain: "billing",
      sourceEventId: null,
      severity: "high",
      code: "NO_PROFILE",
      label: "Tarification",
      detail: "Aucun profil de facturation enregistré.",
    });
  }

  return issues;
}

export function buildAdjustmentLines(period, clientId, pricingContext = {}, facturableAmount = 0) {
  const normalizedPeriod = normalizePeriod(period);
  return (pricingContext.billingAdjustments || [])
    .filter((item) => item && item.clientId === clientId && item.period === normalizedPeriod.key)
    .filter((item) => item.active !== false)
    .map((item) => {
      const mode = item.mode === "percent" ? "percent" : "amount";
      const rawValue = Number(item.value || 0);
      const amount = mode === "percent" ? roundMoney((facturableAmount * rawValue) / 100) : roundMoney(rawValue);
      return {
        id: item.id || "adj-" + clientId + "-" + normalizedPeriod.key,
        clientId,
        period: normalizedPeriod.key,
        label: item.label || "Ajustement commercial",
        mode,
        value: rawValue,
        amount,
        currency: "EUR",
        status: amount < 0 ? "discount" : "surcharge",
        explanation:
          mode === "percent"
            ? "Ajustement de " + rawValue + " % appliqué sur le total théorique."
            : "Ajustement forfaitaire appliqué sur la période.",
        comment: item.comment || "",
      };
    });
}

function applyLineDecisions(lines = [], period, clientId, pricingContext = {}) {
  const normalizedPeriod = normalizePeriod(period);
  const decisionMap = (pricingContext.billingLineDecisions || [])
    .filter((item) => item && item.clientId === clientId && item.period === normalizedPeriod.key)
    .reduce((acc, item) => {
      acc[item.lineId] = item;
      return acc;
    }, {});
  return lines.map((line) => {
    if (line.status !== "billable") {
      return {
        ...line,
        workflowStatus: line.status === "pending" ? "pending" : line.status === "non_billable" ? "non_billable" : "review",
        invoiceRef: "",
        workflowComment: "",
      };
    }
    const decision = decisionMap[line.id] || null;
    return {
      ...line,
      workflowStatus: decision ? decision.status || "ready_to_invoice" : "ready_to_invoice",
      invoiceRef: decision ? decision.invoiceRef || "" : "",
      workflowComment: decision ? decision.comment || "" : "",
    };
  });
}

export function computeClientBilling(period, clientId, dataset = {}, pricingContext = {}) {
  const normalizedPeriod = normalizePeriod(period);
  const events = buildBillableEvents(dataset).filter((event) => event.clientId === clientId && isSameMonth(event.eventDate, normalizedPeriod.key));
  const pricedLines = applyPricingRules(events, pricingContext);
  const lines = applyLineDecisions(pricedLines, normalizedPeriod.key, clientId, pricingContext);
  const reviewIssues = buildReviewIssues(events, pricedLines, pricingContext).filter((issue) => !issue.clientId || issue.clientId === clientId);
  const facturableLines = lines.filter((line) => line.status === "billable");
  const pendingLines = lines.filter((line) => line.status === "pending");
  const theoreticalAmount = roundMoney(facturableLines.reduce((sum, line) => sum + Number(line.amount || 0), 0));
  const adjustmentLines = buildAdjustmentLines(normalizedPeriod.key, clientId, pricingContext, theoreticalAmount);
  const adjustmentAmount = roundMoney(adjustmentLines.reduce((sum, line) => sum + Number(line.amount || 0), 0));
  const readyToInvoiceLines = facturableLines.filter((line) => line.workflowStatus === "ready_to_invoice");
  const invoicedLines = facturableLines.filter((line) => line.workflowStatus === "invoiced");
  const excludedLines = facturableLines.filter((line) => line.workflowStatus === "excluded");
  const nonBillableLines = lines.filter((line) => line.status === "non_billable");
  const invoiceBaseAmount = roundMoney(theoreticalAmount - excludedLines.reduce((sum, line) => sum + Number(line.amount || 0), 0));
  const finalAmount = roundMoney(invoiceBaseAmount + adjustmentAmount);
  return {
    clientId,
    period: normalizedPeriod.key,
    events,
    lines,
    adjustmentLines,
    reviewIssues,
    totals: {
      theoreticalAmount,
      facturableAmount: theoreticalAmount,
      invoiceBaseAmount,
      facturableCount: facturableLines.length,
      adjustmentAmount,
      finalAmount,
      adjustmentCount: adjustmentLines.length,
      readyToInvoiceAmount: roundMoney(readyToInvoiceLines.reduce((sum, line) => sum + Number(line.amount || 0), 0)),
      readyToInvoiceCount: readyToInvoiceLines.length,
      invoicedAmount: roundMoney(invoicedLines.reduce((sum, line) => sum + Number(line.amount || 0), 0)),
      invoicedCount: invoicedLines.length,
      excludedAmount: roundMoney(excludedLines.reduce((sum, line) => sum + Number(line.amount || 0), 0)),
      excludedCount: excludedLines.length,
      reviewCount: reviewIssues.length,
      pendingCount: pendingLines.length,
      nonBillableCount: nonBillableLines.length,
    },
  };
}

export function loadPricingContext() {
  const billingProfiles = readCollection(STORAGE_KEYS.billingProfiles, []);
  const pricingRuleSets = readCollection(STORAGE_KEYS.pricingRuleSets, []);
  const billingAdjustments = readCollection(STORAGE_KEYS.billingAdjustments, []);
  const billingLineDecisions = readCollection(STORAGE_KEYS.billingLineDecisions, []);
  return { billingProfiles, pricingRuleSets, billingAdjustments, billingLineDecisions };
}

export function loadOperationalDataset() {
  const pricingContext = loadPricingContext();
  const clients = (pricingContext.billingProfiles || []).map((profile) => ({
    id: profile.clientId,
    clientId: profile.clientId,
    clientName: profile.clientName,
  }));
  return {
    clients,
    preps: readCollection(STORAGE_KEYS.preps, []),
    receptions: readCollection(STORAGE_KEYS.receptions, []),
    inventorySessions: readCollection(STORAGE_KEYS.inventorySessions, []),
    inventoryCounts: readCollection(STORAGE_KEYS.inventoryCounts, []),
    storageSnapshots: readCollection(STORAGE_KEYS.storageSnapshots, []),
    consumableUsages: readCollection("entrepox-consumable-usage-v1", []),
  };
}
