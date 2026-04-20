
      const titles = {
        dashboard: "Tableau de bord",
        reception: "Réceptions",
        inventaires: "Inventaires",
        preparation: "Préparation",
        expeditions: "Expéditions",
        stock: "Stock",
        produits: "Produits",
        sav: "SAV / Tickets",
        rapports: "Rapports",
        clients: "Clients",
        transporteurs: "Transporteurs",
        config: "Configuration",
      };

      const CUTOFFS = [
        { id: "t11", label: "Avant 11h" },
        { id: "t13", label: "Normal 13h" },
        { id: "t15", label: "Avant 15h" },
        { id: "t17", label: "Avant 17h" },
        { id: "urg", label: "Urgence" },
      ];
      const SITE_OPERATIONS_STORAGE_KEY = "entrepox-site-operations-v1";
      const SITE_BANNER_STORAGE_KEY = "entrepox-site-banner-v1";
      const SITE_THEME_STORAGE_KEY = "entrepox-site-theme-v1";
      const SITE_DAY_LABELS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
      const SITE_OPERATIONS_DEFAULT = {
        timezone: "Europe/Paris",
        days: [
          { day: 1, open: true, start: "07:30", end: "18:00" },
          { day: 2, open: true, start: "07:30", end: "18:00" },
          { day: 3, open: true, start: "07:30", end: "18:00" },
          { day: 4, open: true, start: "07:30", end: "18:00" },
          { day: 5, open: true, start: "07:30", end: "18:00" },
          { day: 6, open: false, start: "08:00", end: "12:00" },
          { day: 7, open: false, start: "08:00", end: "12:00" },
        ],
      };
      const SITE_THEME_DEFAULT = "signature";
      const SITE_THEME_OPTIONS = {
        signature: {
          label: "Signature WMSito",
          shortLabel: "Signature",
          note: "Le langage historique WMSito: fond gris clair, bleus nets, contrastes doux et lecture très tenue.",
          vars: {
            "--bg": "#f5f6f8",
            "--surface": "#ffffff",
            "--surface-2": "#f8faff",
            "--surface-3": "#eef2f7",
            "--border": "#e4e7ec",
            "--border-md": "#cdd3de",
            "--text": "#1c2330",
            "--text2": "#5a6478",
            "--text3": "#9ba8bc",
            "--brand-orange": "#3b4fd8",
            "--brand-orange-2": "#5f74ea",
            "--brand-orange-p": "#eef2ff",
            "--brand-orange-t": "#2b5ab8",
            "--brand-gold": "#9a6010",
            "--brand-gold-2": "#c78f3d",
            "--brand-gold-p": "#fff0d6",
            "--brand-gold-t": "#9a6010",
            "--brand-green": "#1a7a66",
            "--brand-green-2": "#2d9a84",
            "--brand-green-p": "#d6f5ef",
            "--brand-green-t": "#1a7a66",
          },
          swatches: ["#3b4fd8", "#1a7a66", "#9a6010", "#f5f6f8"],
        },
        atelier: {
          label: "Atelier Clair",
          shortLabel: "Clair",
          note: "Plus clair et éditorial, mais toujours dans le registre froid et tenu de WMSito.",
          vars: {
            "--bg": "#f7f8fb",
            "--surface": "#ffffff",
            "--surface-2": "#f9fbff",
            "--surface-3": "#eff3fb",
            "--border": "#e2e7f0",
            "--border-md": "#cfd7e5",
            "--text": "#1d2431",
            "--text2": "#606b82",
            "--text3": "#9aa6bb",
            "--brand-orange": "#5367dd",
            "--brand-orange-2": "#7284ea",
            "--brand-orange-p": "#f0f3ff",
            "--brand-orange-t": "#3856b5",
            "--brand-gold": "#a96d19",
            "--brand-gold-2": "#cf9950",
            "--brand-gold-p": "#fff2dd",
            "--brand-gold-t": "#8b5d14",
            "--brand-green": "#2c7f78",
            "--brand-green-2": "#4aa59c",
            "--brand-green-p": "#def4f1",
            "--brand-green-t": "#216f69",
          },
          swatches: ["#5367dd", "#2c7f78", "#a96d19", "#f7f8fb"],
        },
        bio: {
          label: "Exploitation Verte",
          shortLabel: "BIO",
          note: "Le plus végétal, mais avec la même discipline visuelle et les mêmes contrastes sobres.",
          vars: {
            "--bg": "#f4f8f4",
            "--surface": "#ffffff",
            "--surface-2": "#f6fbf7",
            "--surface-3": "#ebf4ee",
            "--border": "#dce6df",
            "--border-md": "#c8d5cb",
            "--text": "#1d2430",
            "--text2": "#5d6774",
            "--text3": "#93a0ab",
            "--brand-orange": "#2f63c7",
            "--brand-orange-2": "#577fd7",
            "--brand-orange-p": "#edf3ff",
            "--brand-orange-t": "#2c59ab",
            "--brand-gold": "#8b6a1b",
            "--brand-gold-2": "#b28d3e",
            "--brand-gold-p": "#f8f0d8",
            "--brand-gold-t": "#735815",
            "--brand-green": "#2d7c51",
            "--brand-green-2": "#4f9f71",
            "--brand-green-p": "#def2e5",
            "--brand-green-t": "#236445",
          },
          swatches: ["#2d7c51", "#2f63c7", "#8b6a1b", "#f4f8f4"],
        },
        graphite: {
          label: "Graphite Opérations",
          shortLabel: "Graphite",
          note: "Version la plus froide et la plus technique, inspirée du même système mais plus grisée.",
          vars: {
            "--bg": "#f3f5f8",
            "--surface": "#ffffff",
            "--surface-2": "#f7f8fb",
            "--surface-3": "#edf1f6",
            "--border": "#dce2ea",
            "--border-md": "#c7d0dd",
            "--text": "#1b2230",
            "--text2": "#586274",
            "--text3": "#94a1b6",
            "--brand-orange": "#4458b9",
            "--brand-orange-2": "#6a79ca",
            "--brand-orange-p": "#edf1ff",
            "--brand-orange-t": "#394ba1",
            "--brand-gold": "#7d6b46",
            "--brand-gold-2": "#9e8d68",
            "--brand-gold-p": "#f2eee6",
            "--brand-gold-t": "#67573a",
            "--brand-green": "#4d7484",
            "--brand-green-2": "#7396a3",
            "--brand-green-p": "#e6f0f4",
            "--brand-green-t": "#3e606d",
          },
          swatches: ["#4458b9", "#4d7484", "#7d6b46", "#f3f5f8"],
        },
      };

      const CERTIF_OPTIONS = ["BIO", "Alcool", "Batteries", "Toxique", "Halal", "Casher", "Vegan", "Gluten free"];

      const CARTON_VOLS = { XS: 2.7, S: 3.6, MC: 7.38, LC: 10.68, XL: 12.6 };

      const CAPS = {
        XS: { "60v": 24, "240v": 8, "300v": 6, "500v": 4, "1000v": 2, p60: 4, p240: 1, p300: 1, p500: 1 },
        S: { "60v": 36, "240v": 12, "300v": 8, "500v": 5, "1000v": 3, p60: 6, p240: 2, p300: 2, p500: 1 },
        MC: { "60v": 72, "240v": 24, "300v": 16, "500v": 10, "1000v": 5, p60: 10, p240: 4, p300: 4, p500: 3 },
        LC: { "60v": 96, "240v": 30, "300v": 24, "500v": 14, "1000v": 7, p60: 14, p240: 5, p300: 5, p500: 4 },
        XL: { "60v": 120, "240v": 40, "300v": 30, "500v": 18, "1000v": 9, p60: 18, p240: 6, p300: 6, p500: 5 },
      };

      const UNIT_VOLS = {
        "60v": 0.065,
        "240v": 0.255,
        "300v": 0.315,
        "500v": 0.525,
        "1000v": 1.05,
        p60: 0.58,
        p240: 1.55,
        p300: 1.45,
        p500: 2.15,
      };

      const TAG = {
        XS: { bg: "#1E3A5F", tx: "#fff" },
        S: { bg: "#14532D", tx: "#fff" },
        MC: { bg: "#78350F", tx: "#fff" },
        LC: { bg: "#3B0764", tx: "#fff" },
        XL: { bg: "#7F1D1D", tx: "#fff" },
      };

      const clientsDB = {
        yumi: {
          id: "yumi",
          nom: "Yumi / Paf",
          emoji: "🧃",
          secteur: "Boissons fraîches",
          statut: "Actif",
          ca: "39,2k€ / mois",
          accentVar: "cobalt",
          certifications: ["BIO"],
          contact: { nom: "Camille R.", role: "Responsable supply", email: "ops@yumi.fr", tel: "06 12 44 77 91" },
          users: [
            { nom: "Camille R.", email: "ops@yumi.fr", tel: "06 12 44 77 91", role: "Admin client", actif: true, lastLogin: "16/04/2026 07:18" },
            { nom: "Paul A.", email: "adv@yumi.fr", tel: "06 61 20 13 40", role: "ADV", actif: true, lastLogin: "15/04/2026 16:32" },
          ],
          usersMax: 5,
          cutoff: {
            h: 13,
            days: [1, 2, 3, 4, 5],
            tarifs: { normal: 1, t11: 0.95, t15: 1.1, t17: 1.25, urgence: 1.5 },
            exceptions: [{ label: "Fermeture fournisseur", date: "01/05/2026" }],
          },
          features: {
            pav: true,
            canaux: true,
            stockCible: false,
            multiRef: true,
            dlcMode: "short",
            dlcAlert: 7,
            chaine: "froid",
            cyke: true,
            zapier: false,
            teamdesk: true,
            bl: true,
          },
          catalogue: [
            { nom: "Shot gingembre 60mL", type: "Boisson", format: "60mL", poids: "0,09kg", pav: 8, code: "s60", cible: "FIFO", actif: true },
            { nom: "Amour BIO 240mL", type: "Boisson", format: "240mL", poids: "0,31kg", pav: 6, code: "j240", cible: "FIFO", actif: true },
            { nom: "Pureté BIO 500mL", type: "Boisson", format: "500mL", poids: "0,61kg", pav: 4, code: "p500", cible: "FIFO", actif: true },
            { nom: "Amour BIO 1000mL", type: "VRAC", format: "1000mL", poids: "1,1kg", pav: 0, code: "j1l", cible: "FIFO", actif: true },
          ],
        },
        rebelle: {
          id: "rebelle",
          nom: "Re-Belle",
          emoji: "🍓",
          secteur: "Confitures artisanales",
          statut: "Actif",
          ca: "11,4k€ / mois",
          accentVar: "jam",
          certifications: ["BIO"],
          contact: { nom: "Morgane L.", role: "Co-fondatrice", email: "log@re-belle.fr", tel: "06 23 14 51 83" },
          users: [
            { nom: "Morgane L.", email: "log@re-belle.fr", tel: "06 23 14 51 83", role: "Direction", actif: true, lastLogin: "14/04/2026 12:11" },
          ],
          usersMax: 3,
          cutoff: {
            h: 17,
            days: [1, 2, 3, 4, 5],
            tarifs: { normal: 1, t11: 1, t15: 1, t17: 1.08, urgence: 1.25 },
            exceptions: [{ label: "Salon pro", date: "22/04/2026" }],
          },
          features: {
            pav: false,
            canaux: false,
            stockCible: true,
            multiRef: true,
            dlcMode: "long",
            dlcAlert: 30,
            chaine: "sec",
            cyke: false,
            zapier: true,
            teamdesk: false,
            bl: true,
          },
          catalogue: [
            { nom: "Confiture Mirabelle", type: "Pot", format: "Pot", poids: "0,42kg", pav: 0, code: "rb-mir", cible: "Stock cible", actif: true },
            { nom: "Chutney Oignon", type: "Pot", format: "Pot", poids: "0,39kg", pav: 0, code: "rb-oni", cible: "Stock cible", actif: true },
          ],
        },
        xoco: {
          id: "xoco",
          nom: "Xoco",
          emoji: "🍫",
          secteur: "Chocolat",
          statut: "Actif",
          ca: "6,2k€ / mois",
          accentVar: "purple",
          certifications: ["Vegan"],
          contact: { nom: "Lina F.", role: "Ops", email: "ops@xoco.fr", tel: "06 40 22 10 63" },
          users: [
            { nom: "Lina F.", email: "ops@xoco.fr", tel: "06 40 22 10 63", role: "Ops logistique", actif: true, lastLogin: "16/04/2026 08:02" },
          ],
          usersMax: 4,
          cutoff: {
            h: 17,
            days: [1, 2, 3, 4, 5, 6],
            tarifs: { normal: 1, t11: 1, t15: 1.05, t17: 1.12, urgence: 1.4 },
            exceptions: [],
          },
          features: {
            pav: true,
            canaux: false,
            stockCible: false,
            multiRef: false,
            dlcMode: "long",
            dlcAlert: 45,
            chaine: "sec",
            cyke: false,
            zapier: false,
            teamdesk: false,
            bl: true,
          },
          catalogue: [
            { nom: "Tablette noir 70%", type: "Tablette", format: "Unité", poids: "0,1kg", pav: 12, code: "xo70", cible: "FIFO", actif: true },
          ],
        },
        popmate: {
          id: "popmate",
          nom: "Pop Maté",
          emoji: "🧉",
          secteur: "Boissons",
          statut: "Actif",
          ca: "9,4k€ / mois",
          accentVar: "mint",
          certifications: ["BIO", "Ecocert"],
          contact: { nom: "Apolline B.", role: "Logistique", email: "apolline@popmate.fr", tel: "06 80 12 43 90" },
          users: [
            { nom: "Apolline B.", email: "apolline@popmate.fr", tel: "06 80 12 43 90", role: "Ops logistique", actif: true, lastLogin: "17/04/2026 09:14" },
          ],
          usersMax: 4,
          cutoff: {
            h: 17,
            days: [1, 2, 3, 4, 5],
            tarifs: { normal: 1, t11: 1, t15: 1.08, t17: 1.16, urgence: 1.35 },
            exceptions: [],
          },
          features: {
            pav: false,
            canaux: true,
            stockCible: false,
            multiRef: true,
            dlcMode: "long",
            dlcAlert: 60,
            chaine: "sec",
            cyke: true,
            zapier: false,
            teamdesk: false,
            bl: true,
          },
          catalogue: [
            { nom: "Pop Maté Original · bouteilles", type: "Boisson", format: "12 bouteilles", poids: "0,45kg", pav: 0, code: "pm-ob", cible: "FIFO lot", actif: true },
            { nom: "Pop Maté Original · canettes", type: "Boisson", format: "24 canettes", poids: "0,33kg", pav: 0, code: "pm-oc", cible: "FIFO lot", actif: true },
            { nom: "Pop Maté Gingembre · bouteilles", type: "Boisson", format: "12 bouteilles", poids: "0,45kg", pav: 0, code: "pm-gb", cible: "FIFO lot", actif: true },
            { nom: "Pop Maté Gingembre · canettes", type: "Boisson", format: "24 canettes", poids: "0,33kg", pav: 0, code: "pm-gc", cible: "FIFO lot", actif: true },
            { nom: "Pop Maté Framboise · bouteilles", type: "Boisson", format: "12 bouteilles", poids: "0,45kg", pav: 0, code: "pm-fb", cible: "FIFO lot", actif: true },
            { nom: "Pop Maté Framboise · canettes", type: "Boisson", format: "24 canettes", poids: "0,33kg", pav: 0, code: "pm-fc", cible: "FIFO lot", actif: true },
            { nom: "Pop Maté Rainbow · bouteilles", type: "Boisson", format: "12 bouteilles", poids: "0,45kg", pav: 0, code: "pm-rb", cible: "FIFO lot", actif: true },
          ],
        },
        joyons: {
          id: "joyons",
          nom: "Joyons",
          emoji: "🍾",
          secteur: "Vins pétillants",
          statut: "Actif",
          ca: "6,8k€ / mois",
          accentVar: "jam",
          certifications: ["BIO"],
          contact: { nom: "Marco B.", role: "Co-fondateur", email: "marco@joyons.fr", tel: "06 50 24 18 77" },
          users: [
            { nom: "Marco B.", email: "marco@joyons.fr", tel: "06 50 24 18 77", role: "Direction", actif: true, lastLogin: "17/04/2026 10:08" },
          ],
          usersMax: 3,
          cutoff: {
            h: 17,
            days: [1, 2, 3, 4, 5],
            tarifs: { normal: 1, t11: 1, t15: 1.08, t17: 1.15, urgence: 1.35 },
            exceptions: [],
          },
          features: {
            pav: false,
            canaux: true,
            stockCible: false,
            multiRef: true,
            dlcMode: "long",
            dlcAlert: 90,
            chaine: "sec",
            cyke: true,
            zapier: false,
            teamdesk: false,
            bl: true,
          },
          catalogue: [
            { nom: "Joyons Rouge · bouteilles", type: "Vin pétillant", format: "12 bouteilles", poids: "0,75kg", pav: 0, code: "jy-r", cible: "BIO lot/millésime", actif: true },
            { nom: "Joyons Blanc · bouteilles", type: "Vin pétillant", format: "12 bouteilles", poids: "0,75kg", pav: 0, code: "jy-b", cible: "BIO lot/millésime", actif: true },
            { nom: "Joyons Rosé · bouteilles", type: "Vin pétillant", format: "12 bouteilles", poids: "0,75kg", pav: 0, code: "jy-rs", cible: "BIO lot/millésime", actif: true },
            { nom: "Joyons Pet Nat · bouteilles", type: "Vin pétillant", format: "12 bouteilles", poids: "0,75kg", pav: 0, code: "jy-pn", cible: "BIO lot/millésime", actif: true },
          ],
        },
        embrace: {
          id: "embrace",
          nom: "Embrace",
          emoji: "🌿",
          secteur: "Épicerie BIO",
          statut: "Actif",
          ca: "3,8k€ / mois",
          accentVar: "mint",
          certifications: ["BIO"],
          contact: { nom: "Contact Embrace", role: "Opérations", email: "ops@embrace.fr", tel: "06 00 00 00 00" },
          users: [
            { nom: "Contact Embrace", email: "ops@embrace.fr", tel: "06 00 00 00 00", role: "Ops logistique", actif: true, lastLogin: "17/04/2026 09:00" },
          ],
          usersMax: 3,
          cutoff: {
            h: 17,
            days: [1, 2, 3, 4, 5],
            tarifs: { normal: 1, t11: 1, t15: 1.05, t17: 1.12, urgence: 1.3 },
            exceptions: [],
          },
          features: {
            pav: false,
            canaux: true,
            stockCible: false,
            multiRef: true,
            dlcMode: "long",
            dlcAlert: 30,
            chaine: "sec",
            cyke: false,
            zapier: false,
            teamdesk: false,
            bl: true,
          },
          catalogue: [],
        },
        trinci: {
          id: "trinci",
          nom: "Trinci",
          emoji: "☕",
          secteur: "Épicerie sèche",
          statut: "Actif",
          ca: "2,9k€ / mois",
          accentVar: "cobalt",
          certifications: [],
          contact: { nom: "Contact Trinci", role: "Opérations", email: "ops@trinci.fr", tel: "06 00 00 00 00" },
          users: [
            { nom: "Contact Trinci", email: "ops@trinci.fr", tel: "06 00 00 00 00", role: "Ops logistique", actif: true, lastLogin: "17/04/2026 09:00" },
          ],
          usersMax: 3,
          cutoff: {
            h: 17,
            days: [1, 2, 3, 4, 5],
            tarifs: { normal: 1, t11: 1, t15: 1.05, t17: 1.12, urgence: 1.25 },
            exceptions: [],
          },
          features: {
            pav: false,
            canaux: true,
            stockCible: false,
            multiRef: false,
            dlcMode: "long",
            dlcAlert: 30,
            chaine: "sec",
            cyke: false,
            zapier: false,
            teamdesk: false,
            bl: true,
          },
          catalogue: [],
        },
        sauvagine: {
          id: "sauvagine",
          nom: "Sauvagine",
          emoji: "🫒",
          secteur: "Épicerie fine",
          statut: "Actif",
          ca: "3,1k€ / mois",
          accentVar: "jam",
          certifications: ["BIO"],
          contact: { nom: "Contact Sauvagine", role: "Opérations", email: "ops@sauvagine.fr", tel: "06 00 00 00 00" },
          users: [
            { nom: "Contact Sauvagine", email: "ops@sauvagine.fr", tel: "06 00 00 00 00", role: "Ops logistique", actif: true, lastLogin: "17/04/2026 09:00" },
          ],
          usersMax: 3,
          cutoff: {
            h: 17,
            days: [1, 2, 3, 4, 5],
            tarifs: { normal: 1, t11: 1, t15: 1.05, t17: 1.12, urgence: 1.25 },
            exceptions: [],
          },
          features: {
            pav: false,
            canaux: true,
            stockCible: false,
            multiRef: false,
            dlcMode: "long",
            dlcAlert: 30,
            chaine: "sec",
            cyke: false,
            zapier: false,
            teamdesk: false,
            bl: true,
          },
          catalogue: [],
        },
        wils: {
          id: "wils",
          nom: "Wil's Déli",
          emoji: "🥗",
          secteur: "Restauration",
          statut: "Actif",
          ca: "7,7k€ / mois",
          accentVar: "mint",
          certifications: ["BIO", "Gluten free"],
          contact: { nom: "Sonia P.", role: "Appro", email: "ops@wils.fr", tel: "06 77 50 10 10" },
          users: [
            { nom: "Sonia P.", email: "ops@wils.fr", tel: "06 77 50 10 10", role: "Support", actif: true, lastLogin: "15/04/2026 09:48" },
          ],
          usersMax: 4,
          cutoff: {
            h: 17,
            days: [1, 2, 3, 4, 5],
            tarifs: { normal: 1, t11: 1, t15: 1.1, t17: 1.18, urgence: 1.42 },
            exceptions: [],
          },
          features: {
            pav: true,
            canaux: true,
            stockCible: false,
            multiRef: true,
            dlcMode: "short",
            dlcAlert: 7,
            chaine: "froid",
            cyke: false,
            zapier: false,
            teamdesk: false,
            bl: true,
          },
          catalogue: [
            { nom: "Sauce verte 250g", type: "Pot", format: "250g", poids: "0,28kg", pav: 6, code: "wd-sv", cible: "FIFO", actif: true },
          ],
        },
      };

      const CURRENT_APP_ROLE = "admin";
      const PREP_STORAGE_KEY = "entrepox-preps-v1";

      function roundMoney(value) {
        return Math.round(Number(value || 0) * 100) / 100;
      }

      function normalizeString(value) {
        return String(value || "")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/\s+/g, " ")
          .trim()
          .toLowerCase();
      }

      function cloneSkuBands(bands) {
        return (bands || []).map((band) => ({ range: band.range, delta: band.delta }));
      }

      function buildBillingConfig(source, cutoff) {
        const billing = source || {};
        const storage = billing.storage || {};
        const preparation = billing.preparation || {};
        const receptions = billing.receptions || {};
        const consumables = billing.consumables || {};
        const cutoffPricing = billing.cutoffPricing || {};
        const inventory = billing.inventory || {};
        const baseStorageRate = Number(storage.dryRate ?? billing.storageRate ?? 0);
        const basePrepRate = Number(preparation.baseRate ?? billing.prepBaseRate ?? 0);
        const tariffs = (cutoff && cutoff.tarifs) || {};
        const legacyConsumables = consumables.items || billing.consumables || {};

        return {
          currency: "EUR",
          storage: {
            mode: storage.mode || billing.storageModel || "m2_snapshot",
            dryRate: roundMoney(baseStorageRate),
            coldRate: roundMoney(storage.coldRate ?? (baseStorageRate ? baseStorageRate * 1.35 : 0)),
          },
          preparation: {
            mode: preparation.mode || billing.prepModel || "per_order",
            baseRate: roundMoney(basePrepRate),
            skuBands: cloneSkuBands(preparation.skuBands || billing.skuBands || []),
          },
          receptions: {
            mode: receptions.mode || "per_reception",
            baseRate: roundMoney(receptions.baseRate ?? 18),
            coldSurcharge: roundMoney(receptions.coldSurcharge ?? 8),
            handlingLostPaletteRate: roundMoney(receptions.handlingLostPaletteRate ?? 4),
          },
          consumables: {
            mode: consumables.mode || "per_unit",
            items: {
              carton: roundMoney(legacyConsumables.carton ?? 0),
              scotch: roundMoney(legacyConsumables.scotch ?? 0),
              pochette: roundMoney(legacyConsumables.pochette ?? 0),
              etiquette: roundMoney(legacyConsumables.etiquette ?? 0),
              document: roundMoney(legacyConsumables.document ?? 0),
            },
          },
          cutoffPricing: {
            mode: cutoffPricing.mode || "flat_surcharge",
            rates: {
              normal: roundMoney((cutoffPricing.rates || {}).normal ?? 0),
              t11: roundMoney((cutoffPricing.rates || {}).t11 ?? (tariffs.t11 != null ? basePrepRate * (tariffs.t11 - 1) : 0)),
              t15: roundMoney((cutoffPricing.rates || {}).t15 ?? (tariffs.t15 != null ? basePrepRate * (tariffs.t15 - 1) : 0)),
              t17: roundMoney((cutoffPricing.rates || {}).t17 ?? (tariffs.t17 != null ? basePrepRate * (tariffs.t17 - 1) : 0)),
              urgence: roundMoney((cutoffPricing.rates || {}).urgence ?? (tariffs.urgence != null ? basePrepRate * (tariffs.urgence - 1) : 0)),
            },
          },
          inventory: {
            mode: inventory.mode || "per_minute",
            ratePerMinute: roundMoney(inventory.ratePerMinute ?? 0.42),
            ratePerSession: roundMoney(inventory.ratePerSession ?? 28),
            onDemandSurcharge: roundMoney(inventory.onDemandSurcharge ?? 12),
            coldMultiplier: roundMoney(inventory.coldMultiplier ?? 1.2) || 1.2,
          },
        };
      }

      function buildBillingProfileFromClient(client) {
        return {
          id: "bp-" + client.id,
          clientId: client.id,
          clientName: client.nom,
          currency: (client.billing && client.billing.currency) || "EUR",
          pricingRuleSetId: "prs-" + client.id,
          blocks: JSON.parse(JSON.stringify(client.billing || buildBillingConfig({}, client.cutoff))),
        };
      }

      function buildRangeCondition(rangeLabel) {
        const digits = String(rangeLabel || "").match(/\d+/g) || [];
        if (!digits.length) {
          return null;
        }
        if (String(rangeLabel).includes("+")) {
          return { field: "referencesCount", min: Number(digits[0]), max: null };
        }
        return {
          field: "referencesCount",
          min: Number(digits[0]),
          max: digits[1] ? Number(digits[1]) : Number(digits[0]),
        };
      }

      function buildPricingRuleSetFromProfile(profile) {
        const blocks = profile.blocks || {};
        const rules = [];
        const pushRule = (rule) => {
          rules.push({
            id: "rule-" + profile.clientId + "-" + rule.domain + "-" + rules.length,
            clientId: profile.clientId,
            ruleSetId: "prs-" + profile.clientId,
            active: true,
            currency: profile.currency || "EUR",
            ...rule,
          });
        };

        pushRule({
          domain: "storage",
          eventType: "storage_snapshot",
          label: "Stockage sec",
          calcMode: "per_unit",
          unitField: "m2Dry",
          rate: roundMoney((((blocks.storage || {}).dryRate) || 0)),
          match: { temperatureZone: "dry" },
        });
        pushRule({
          domain: "storage",
          eventType: "storage_snapshot",
          label: "Stockage froid",
          calcMode: "per_unit",
          unitField: "m2Cold",
          rate: roundMoney((((blocks.storage || {}).coldRate) || 0)),
          match: { temperatureZone: "cold" },
        });

        pushRule({
          domain: "preparation",
          eventType: "preparation_order",
          label: "Préparation · base",
          calcMode: "flat",
          rate: roundMoney((((blocks.preparation || {}).baseRate) || 0)),
        });
        (((blocks.preparation || {}).skuBands) || []).forEach((band) => {
          if (band.delta === null || Number(band.delta || 0) === 0) {
            return;
          }
          pushRule({
            domain: "preparation",
            eventType: "preparation_order",
            label: "Préparation · bande SKU " + band.range,
            calcMode: "flat",
            rate: roundMoney(band.delta),
            range: buildRangeCondition(band.range),
          });
        });

        pushRule({
          domain: "reception",
          eventType: "reception",
          label: "Réception · base",
          calcMode: "flat",
          rate: roundMoney((((blocks.receptions || {}).baseRate) || 0)),
        });
        pushRule({
          domain: "reception",
          eventType: "reception",
          label: "Réception · froid",
          calcMode: "flat",
          rate: roundMoney((((blocks.receptions || {}).coldSurcharge) || 0)),
          match: { storageMode: "frais" },
        });
        pushRule({
          domain: "reception",
          eventType: "reception",
          label: "Réception · palettes perdues",
          calcMode: "per_unit",
          unitField: "lostPalletCount",
          rate: roundMoney((((blocks.receptions || {}).handlingLostPaletteRate) || 0)),
        });

        Object.entries((((blocks.consumables || {}).items) || {})).forEach(([key, value]) => {
          pushRule({
            domain: "consumables",
            eventType: "consumable_usage",
            label: "Consommable · " + key,
            calcMode: "per_unit",
            unitField: "quantity",
            rate: roundMoney(value),
            match: { consumableKey: key },
          });
        });

        Object.entries((((blocks.cutoffPricing || {}).rates) || {})).forEach(([key, value]) => {
          if (key === "normal" || Number(value || 0) === 0) {
            return;
          }
          pushRule({
            domain: "cutoff",
            eventType: "cutoff_surcharge",
            label: "Cutoff · " + key,
            calcMode: "flat",
            rate: roundMoney(value),
            match: { cutoffCode: key },
          });
        });

        const inventoryMode = (((blocks.inventory || {}).mode) || "per_minute") === "per_session" ? "per_session" : "per_minute";
        ["scheduled", "on_demand"].forEach((inventoryType) => {
          ["dry", "cold"].forEach((temperatureZone) => {
            const rateBase =
              inventoryMode === "per_session"
                ? roundMoney((((blocks.inventory || {}).ratePerSession) || 0))
                : roundMoney((((blocks.inventory || {}).ratePerMinute) || 0));
            const rate =
              temperatureZone === "cold"
                ? roundMoney(rateBase * ((((blocks.inventory || {}).coldMultiplier) || 1)))
                : rateBase;
            pushRule({
              domain: "inventory",
              eventType: "inventory_session",
              label: "Inventaire · " + (inventoryType === "scheduled" ? "programmé" : "à la demande") + " · " + (temperatureZone === "cold" ? "froid" : "sec"),
              calcMode: inventoryMode === "per_session" ? "flat" : "per_unit",
              unitField: inventoryMode === "per_session" ? null : "durationMinutes",
              rate: rate,
              match: { inventoryType: inventoryType, temperatureZone: temperatureZone },
            });
          });
        });
        pushRule({
          domain: "inventory",
          eventType: "inventory_session",
          label: "Inventaire · supplément à la demande",
          calcMode: "flat",
          rate: roundMoney((((blocks.inventory || {}).onDemandSurcharge) || 0)),
          match: { inventoryType: "on_demand" },
        });

        return {
          id: "prs-" + profile.clientId,
          clientId: profile.clientId,
          clientName: profile.clientName,
          currency: profile.currency || "EUR",
          rules: rules,
        };
      }

      const CLIENT_OPERATIONAL_DEFAULTS = {
        yumi: {
          contactCargonautes: {
            nom: "Léa M.",
            role: "Responsable commerciale Cargonautes",
            email: "lea@cargonautes.fr",
            tel: "06 70 14 82 11",
            slackTarget: "commercial-yumi",
          },
          contract: {
            prepNotes: "Mono-référence encouragée. Contrôle lot + DLC obligatoire. BL signé pour CHR/B2B.",
            prepRequirements: ["FIFO", "Contrôle DLC", "BL signé B2B", "Photo BL si note signer"],
            materialsAllowed: true,
            materialsPricingMode: "stock entrepôt",
            materialsNotes: "Cartons, scotch, pochettes et étiquettes autorisés depuis le stock Cargonautes.",
          },
          billing: {
            storageModel: "m2",
            storageRate: 22,
            prepModel: "grille durée × volume",
            prepBaseRate: 3.8,
            cutoffBase: "normal",
            consumables: { carton: 1.4, scotch: 0.03, pochette: 0.05, etiquette: 0.03, document: 0.02 },
            skuBands: [
              { range: "1 à 5", delta: 0 },
              { range: "6 à 15", delta: 0.5 },
              { range: "16 à 30", delta: 1.5 },
              { range: "30+", delta: null },
            ],
          },
        },
        rebelle: {
          contactCargonautes: {
            nom: "Malo C.",
            role: "Responsable commerciale Cargonautes",
            email: "malo@cargonautes.fr",
            tel: "06 61 18 40 92",
            slackTarget: "commercial-rebelle",
          },
          contract: {
            prepNotes: "Stock cible par référence. Picking pot à pot. Nota BL systématique si remise en main propre.",
            prepRequirements: ["Stock cible", "BIO séparé", "Nota BL manuel"],
            materialsAllowed: true,
            materialsPricingMode: "stock entrepôt",
            materialsNotes: "Consommables refacturés à l’usage réel.",
          },
          billing: {
            storageModel: "m2",
            storageRate: 18,
            prepModel: "prépa unitaire",
            prepBaseRate: 4.6,
            cutoffBase: "17h",
            consumables: { carton: 0.9, scotch: 0.03, pochette: 0.05, etiquette: 0.03, document: 0.02 },
            skuBands: [
              { range: "1 à 5", delta: 0 },
              { range: "6 à 15", delta: 0.4 },
              { range: "16 à 30", delta: 1.2 },
              { range: "30+", delta: null },
            ],
          },
        },
        xoco: {
          contactCargonautes: {
            nom: "Léa M.",
            role: "Responsable commerciale Cargonautes",
            email: "lea@cargonautes.fr",
            tel: "06 70 14 82 11",
            slackTarget: "commercial-xoco",
          },
          contract: {
            prepNotes: "Peu de SKU, attente zéro erreur. Prépa compacte avec contrôle final opérateur.",
            prepRequirements: ["FIFO", "Contrôle final", "Palette si GMS"],
            materialsAllowed: false,
            materialsPricingMode: "non autorisé",
            materialsNotes: "Pas de matériel de préparation mis à disposition hors validation.",
          },
          billing: {
            storageModel: "m3",
            storageRate: 46,
            prepModel: "prépa commande",
            prepBaseRate: 4.2,
            cutoffBase: "17h",
            consumables: { carton: 1.2, scotch: 0.03, pochette: 0.05, etiquette: 0.03, document: 0.02 },
            skuBands: [
              { range: "1 à 5", delta: 0 },
              { range: "6 à 15", delta: 0.5 },
              { range: "16 à 30", delta: 1 },
              { range: "30+", delta: null },
            ],
          },
        },
        popmate: {
          contactCargonautes: {
            nom: "Léa M.",
            role: "Responsable commerciale Cargonautes",
            email: "lea@cargonautes.fr",
            tel: "06 70 14 82 11",
            slackTarget: "commercial-popmate",
          },
          contract: {
            prepNotes: "Traçabilité BIO Ecocert, contrôle hebdo stock, FIFO lot. Peu de SKU favorisé pour limiter le SAV.",
            prepRequirements: ["FIFO lot", "Contrôle BIO", "Lecture hebdo", "Limiter les SKU par commande"],
            materialsAllowed: true,
            materialsPricingMode: "stock entrepôt",
            materialsNotes: "Cartons et consommables autorisés, tarifs définis par l’admin.",
          },
          billing: {
            storageModel: "m2 + étagères",
            storageRate: 24,
            prepModel: "grille durée × lignes",
            prepBaseRate: 4.8,
            cutoffBase: "15h",
            consumables: { carton: 1.4, scotch: 0.03, pochette: 0.05, etiquette: 0.03, document: 0.02 },
            skuBands: [
              { range: "1 à 5", delta: 0 },
              { range: "6 à 15", delta: 0.5 },
              { range: "16 à 30", delta: 1.5 },
              { range: "30+", delta: null },
            ],
          },
        },
        joyons: {
          contactCargonautes: {
            nom: "Malo C.",
            role: "Responsable commerciale Cargonautes",
            email: "malo@cargonautes.fr",
            tel: "06 61 18 40 92",
            slackTarget: "commercial-joyons",
          },
          contract: {
            prepNotes: "BIO lot/millésime. Prépa peu fréquente mais haut niveau d’attention marque et casse.",
            prepRequirements: ["BIO lot/millésime", "Contrôle casse", "FIFO lot"],
            materialsAllowed: false,
            materialsPricingMode: "sur accord",
            materialsNotes: "Matériel de préparation uniquement sur validation commerciale.",
          },
          billing: {
            storageModel: "m2",
            storageRate: 20,
            prepModel: "prépa commande",
            prepBaseRate: 4,
            cutoffBase: "17h",
            consumables: { carton: 1.1, scotch: 0.03, pochette: 0.05, etiquette: 0.03, document: 0.02 },
            skuBands: [
              { range: "1 à 5", delta: 0 },
              { range: "6 à 15", delta: 0.6 },
              { range: "16 à 30", delta: 1.4 },
              { range: "30+", delta: null },
            ],
          },
        },
        embrace: {
          contactCargonautes: {
            nom: "Léa M.",
            role: "Responsable commerciale Cargonautes",
            email: "lea@cargonautes.fr",
            tel: "06 70 14 82 11",
            slackTarget: "commercial-embrace",
          },
          contract: {
            prepNotes: "Préparation simple, prix unitaire par préparation. Contrôle de base avant départ.",
            prepRequirements: ["Contrôle final", "Palette si besoin"],
            materialsAllowed: true,
            materialsPricingMode: "stock entrepôt",
            materialsNotes: "Consommables refacturés à l’usage réel.",
          },
          billing: {
            storageModel: "m2",
            storageRate: 18,
            prepModel: "prépa commande",
            prepBaseRate: 4.3,
            cutoffBase: "17h",
            consumables: { carton: 1.1, scotch: 0.03, pochette: 0.05, etiquette: 0.03, document: 0.02 },
            skuBands: [],
          },
        },
        trinci: {
          contactCargonautes: {
            nom: "Malo C.",
            role: "Responsable commerciale Cargonautes",
            email: "malo@cargonautes.fr",
            tel: "06 61 18 40 92",
            slackTarget: "commercial-trinci",
          },
          contract: {
            prepNotes: "Prix de préparation unitaire, peu de références, exécution simple.",
            prepRequirements: ["Contrôle final"],
            materialsAllowed: true,
            materialsPricingMode: "stock entrepôt",
            materialsNotes: "Consommables au réel si utilisés.",
          },
          billing: {
            storageModel: "m2",
            storageRate: 18,
            prepModel: "prépa commande",
            prepBaseRate: 3,
            cutoffBase: "17h",
            consumables: { carton: 1, scotch: 0.03, pochette: 0.05, etiquette: 0.03, document: 0.02 },
            skuBands: [],
          },
        },
        sauvagine: {
          contactCargonautes: {
            nom: "Malo C.",
            role: "Responsable commerciale Cargonautes",
            email: "malo@cargonautes.fr",
            tel: "06 61 18 40 92",
            slackTarget: "commercial-sauvagine",
          },
          contract: {
            prepNotes: "Préparation sobre, prix unitaire par préparation, vigilance qualité.",
            prepRequirements: ["Contrôle final"],
            materialsAllowed: true,
            materialsPricingMode: "stock entrepôt",
            materialsNotes: "Consommables refacturables au réel.",
          },
          billing: {
            storageModel: "m2",
            storageRate: 18,
            prepModel: "prépa commande",
            prepBaseRate: 4,
            cutoffBase: "17h",
            consumables: { carton: 1.1, scotch: 0.03, pochette: 0.05, etiquette: 0.03, document: 0.02 },
            skuBands: [],
          },
        },
        wils: {
          contactCargonautes: {
            nom: "Léa M.",
            role: "Responsable commerciale Cargonautes",
            email: "lea@cargonautes.fr",
            tel: "06 70 14 82 11",
            slackTarget: "commercial-wils",
          },
          contract: {
            prepNotes: "DLC courte, flux froid, zéro rupture en service. Prépa à forte vigilance opérationnelle.",
            prepRequirements: ["Froid", "Contrôle DLC", "FIFO", "Alerte rupture anticipée"],
            materialsAllowed: true,
            materialsPricingMode: "stock entrepôt",
            materialsNotes: "Consommables et supports froid autorisés selon tarif admin.",
          },
          billing: {
            storageModel: "m3 froid",
            storageRate: 58,
            prepModel: "prépa commande",
            prepBaseRate: 5.6,
            cutoffBase: "17h",
            consumables: { carton: 1.4, scotch: 0.03, pochette: 0.05, etiquette: 0.03, document: 0.02 },
            skuBands: [
              { range: "1 à 5", delta: 0 },
              { range: "6 à 15", delta: 0.7 },
              { range: "16 à 30", delta: 1.8 },
              { range: "30+", delta: null },
            ],
          },
        },
      };

      Object.keys(clientsDB).forEach((clientId) => {
        const defaults = CLIENT_OPERATIONAL_DEFAULTS[clientId] || {
          contactCargonautes: {
            nom: "Équipe commerciale",
            role: "Responsable commerciale Cargonautes",
            email: "commercial@cargonautes.fr",
            tel: "01 00 00 00 00",
            slackTarget: "commercial",
          },
          contract: {
            prepNotes: "",
            prepRequirements: [],
            materialsAllowed: false,
            materialsPricingMode: "sur accord",
            materialsNotes: "",
          },
          billing: {
            storageModel: "m2",
            storageRate: 0,
            prepModel: "prépa commande",
            prepBaseRate: 0,
            cutoffBase: "normal",
            consumables: { carton: 0, scotch: 0, pochette: 0, etiquette: 0, document: 0 },
            skuBands: [],
          },
        };
        clientsDB[clientId].contactCargonautes = { ...defaults.contactCargonautes, ...(clientsDB[clientId].contactCargonautes || {}) };
        clientsDB[clientId].contract = {
          ...defaults.contract,
          ...(clientsDB[clientId].contract || {}),
          prepRequirements: (clientsDB[clientId].contract && clientsDB[clientId].contract.prepRequirements) || defaults.contract.prepRequirements.slice(),
        };
        clientsDB[clientId].billing = buildBillingConfig(
          {
            ...defaults.billing,
            ...(clientsDB[clientId].billing || {}),
            consumables: { ...defaults.billing.consumables, ...((clientsDB[clientId].billing || {}).consumables || {}) },
            skuBands: ((clientsDB[clientId].billing || {}).skuBands || defaults.billing.skuBands).slice(),
          },
          clientsDB[clientId].cutoff
        );
      });

      function mergeStoredClientRecord(target, stored) {
        if (!stored || !target) {
          return target;
        }
        if (stored.contact) {
          target.contact = { ...(target.contact || {}), ...stored.contact };
        }
        if (stored.contactCargonautes) {
          target.contactCargonautes = { ...(target.contactCargonautes || {}), ...stored.contactCargonautes };
        }
        if (stored.cutoff) {
          target.cutoff = {
            ...(target.cutoff || {}),
            ...stored.cutoff,
            tarifs: { ...((target.cutoff || {}).tarifs || {}), ...((stored.cutoff || {}).tarifs || {}) },
            exceptions: Array.isArray(stored.cutoff.exceptions) ? stored.cutoff.exceptions : (target.cutoff || {}).exceptions || [],
          };
        }
        if (stored.features) {
          target.features = { ...(target.features || {}), ...stored.features };
        }
        if (stored.contract) {
          target.contract = {
            ...(target.contract || {}),
            ...stored.contract,
            prepRequirements: Array.isArray(stored.contract.prepRequirements)
              ? stored.contract.prepRequirements
              : (target.contract || {}).prepRequirements || [],
          };
        }
        if (stored.billing) {
          target.billing = buildBillingConfig(
            {
              ...(target.billing || {}),
              ...stored.billing,
              storage: { ...((target.billing || {}).storage || {}), ...((stored.billing || {}).storage || {}) },
              preparation: { ...((target.billing || {}).preparation || {}), ...((stored.billing || {}).preparation || {}) },
              receptions: { ...((target.billing || {}).receptions || {}), ...((stored.billing || {}).receptions || {}) },
              consumables: {
                ...((target.billing || {}).consumables || {}),
                ...((stored.billing || {}).consumables || {}),
                items: {
                  ...((((target.billing || {}).consumables || {}).items) || {}),
                  ...((((stored.billing || {}).consumables || {}).items) || {}),
                },
              },
              cutoffPricing: { ...((target.billing || {}).cutoffPricing || {}), ...((stored.billing || {}).cutoffPricing || {}), rates: { ...((((target.billing || {}).cutoffPricing || {}).rates) || {}), ...((((stored.billing || {}).cutoffPricing || {}).rates) || {}) } },
              inventory: { ...((target.billing || {}).inventory || {}), ...((stored.billing || {}).inventory || {}) },
            },
            target.cutoff
          );
        }
        Object.keys(stored).forEach((key) => {
          if (["contact", "contactCargonautes", "cutoff", "features", "contract", "billing"].includes(key)) {
            return;
          }
          target[key] = stored[key];
        });
        return target;
      }

      function hydrateClientsStore() {
        const storedClients = loadLocalCollection(CLIENTS_STORAGE_KEY, null);
        if (!storedClients || typeof storedClients !== "object") {
          return;
        }
        Object.keys(storedClients).forEach((clientId) => {
          if (!clientsDB[clientId]) {
            return;
          }
          mergeStoredClientRecord(clientsDB[clientId], storedClients[clientId]);
        });
      }

      const PREP_STORE_SEED = [
        {
          id: "PREP-2026-142",
          receptionDate: "07/04/2026",
          receptionHeure: "18:42",
          shift: "matin",
          expe: "Expe0112525",
          client: "Yumi / Paf",
          dest: "Biocoop Lancry",
          adresse: "15 rue de Lancry, 75010 Paris",
          contact: "M. Garnier",
          tel: "01 44 32 18 19",
          canal: "CHR & Indep",
          cutoff: "Normal 13h",
          statut: "Terminée",
          agent: "Sophie B.",
          duree: 23,
          note: "Donner en main propre le BL - Faire signer le BL et prendre en photo",
          produits: [
            { ref: "Amour BIO 240mL", qte: 12, colis: 2, pav: true, lot: "6082078", dlc: "26/05/2026" },
            { ref: "Pureté BIO 500mL", qte: 8, colis: 2, pav: true, lot: "5071120", dlc: "18/05/2026" },
          ],
        },
        {
          id: "PREP-2026-143",
          receptionDate: "08/04/2026",
          receptionHeure: "08:12",
          shift: "matin",
          expe: "Expe0112526",
          client: "Yumi / Paf",
          dest: "Chronofresh Client B2C",
          adresse: "20 avenue Ledru-Rollin, 75012 Paris",
          contact: "Mme Roche",
          tel: "06 02 19 88 31",
          canal: "B2C",
          cutoff: "Avant 11h",
          statut: "En cours",
          agent: "Hugo M.",
          duree: 14,
          note: "Livraison avant midi",
          produits: [
            { ref: "Absolu BIO 60mL", qte: 8, colis: 1, pav: true, lot: "6011102", dlc: "29/04/2026" },
            { ref: "Amour BIO 1000mL", qte: 2, colis: 0, pav: false, lot: "1000891", dlc: "04/05/2026" },
          ],
        },
        {
          id: "PREP-2026-144",
          receptionDate: "08/04/2026",
          receptionHeure: "12:48",
          shift: "soir",
          expe: "Expe0112531",
          client: "Yumi / Paf",
          dest: "STEF GMS Nord",
          adresse: "Hub STEF, 93290 Tremblay",
          contact: "Quai 4",
          tel: "01 55 18 82 20",
          canal: "GMS",
          cutoff: "Avant 17h",
          statut: "En attente",
          agent: "Nora T.",
          duree: 0,
          note: "Palette filmée obligatoire",
          produits: [
            { ref: "Bonheur BIO 240mL", qte: 36, colis: 6, pav: true, lot: "6082080", dlc: "25/05/2026" },
            { ref: "Force BIO 300mL", qte: 16, colis: 4, pav: true, lot: "3081990", dlc: "22/05/2026" },
            { ref: "Vitalité BIO 500mL", qte: 20, colis: 5, pav: true, lot: "5087440", dlc: "20/05/2026" },
          ],
        },
        {
          id: "PREP-2026-145",
          receptionDate: "08/04/2026",
          receptionHeure: "15:02",
          shift: "soir",
          expe: "RB-250413C",
          client: "Re-Belle",
          dest: "La Grande Epicerie",
          adresse: "38 rue de Sèvres, 75007 Paris",
          contact: "Réception",
          tel: "01 44 39 81 00",
          canal: "CHR & Indep",
          cutoff: "Avant 17h",
          statut: "En cours",
          agent: "Sophie B.",
          duree: 17,
          note: "Donner en main propre le BL - Faire signer le BL et prendre en photo",
          produits: [
            { ref: "Confiture Mirabelle", qte: 24, colis: 0, pav: false, lot: "250413C", dlc: "13/10/2026" },
            { ref: "Chutney Oignon", qte: 12, colis: 0, pav: false, lot: "250409B", dlc: "09/10/2026" },
          ],
        },
        {
          id: "PREP-2026-146",
          receptionDate: "09/04/2026",
          receptionHeure: "09:30",
          shift: "matin",
          expe: "XO-020418",
          client: "Xoco",
          dest: "Maison Plisson",
          adresse: "93 boulevard Beaumarchais, 75003 Paris",
          contact: "Rayon épicerie",
          tel: "01 40 29 03 39",
          canal: "Bureaux",
          cutoff: "Normal 13h",
          statut: "En attente",
          agent: "Hugo M.",
          duree: 0,
          note: "Prévoir étiquette lot carton",
          produits: [
            { ref: "Tablette noir 70%", qte: 48, colis: 4, pav: true, lot: "XO260401", dlc: "15/12/2026" },
          ],
        },
      ];

      let PREP_STORE = loadLocalCollection(PREP_STORAGE_KEY, PREP_STORE_SEED);

      function resolveClientIdByPrepLabel(label) {
        const normalized = String(label || "")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/\s+/g, " ")
          .trim()
          .toLowerCase();
        return (
          Object.keys(clientsDB).find((clientId) => {
            const client = clientsDB[clientId];
            return (
              [client.nom, client.id]
                .filter(Boolean)
                .some(
                  (value) =>
                    String(value)
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replace(/\s+/g, " ")
                      .trim()
                      .toLowerCase() === normalized
                )
            );
          }) || null
        );
      }

      function derivePrepConsumableCounts(prep) {
        const totalColis = (prep.produits || []).reduce((sum, item) => sum + Number(item.colis || 0), 0);
        const cartonCount = Math.max(totalColis, 1);
        return {
          carton: cartonCount,
          scotch: cartonCount,
          etiquette: cartonCount,
          document: 1,
          pochette: 1,
        };
      }

      function derivePrepCutoffCode(label) {
        const normalized = String(label || "")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
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

      function derivePrepShippingMethod(prep) {
        const explicit = String(prep.expeditionMethod || "").trim();
        if (explicit) {
          return explicit;
        }
        const destination = String(prep.dest || "").toLowerCase();
        const canal = String(prep.canal || "").toLowerCase();
        if (destination.includes("chronofresh")) {
          return "Chronofresh";
        }
        if (destination.includes("stef")) {
          return "Transporteur palette";
        }
        if (canal.includes("b2c")) {
          return "Messagerie B2C";
        }
        if (canal.includes("gms")) {
          return "Palette / hub";
        }
        if (canal.includes("bureaux")) {
          return "Livraison pro";
        }
        return "Livraison dédiée";
      }

      PREP_STORE = PREP_STORE.map((prep) => {
        const clientId = prep.clientId || resolveClientIdByPrepLabel(prep.client);
        const billingMeta = prep.billingMeta || {};
        return {
          ...prep,
          clientId: clientId || prep.clientId || null,
          expeditionMethod: derivePrepShippingMethod(prep),
          billingMeta: {
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
            cutoffCode: billingMeta.cutoffCode || derivePrepCutoffCode(prep.cutoff),
            materialsBillable:
              typeof billingMeta.materialsBillable === "boolean"
                ? billingMeta.materialsBillable
                : Boolean(clientId && ((clientsDB[clientId].contract || {}).materialsAllowed)),
            consumables: {
              ...derivePrepConsumableCounts(prep),
              ...((billingMeta.consumables || {})),
            },
          },
        };
      });

      try {
        window.localStorage.setItem(PREP_STORAGE_KEY, JSON.stringify(PREP_STORE));
      } catch (error) {
        console.warn("Initialisation stockage prépa impossible.", error);
      }

      let palettesDB = [
        { id: "plt-eu", label: "Palette Europe", dims: "80×120 cm", poidsMax: 1500, defaut: true, actif: true },
        { id: "plt-half", label: "Demi-palette", dims: "80×60 cm", poidsMax: 700, defaut: false, actif: true },
        { id: "plt-us", label: "Palette US", dims: "101×121 cm", poidsMax: 1350, defaut: false, actif: true },
      ];

      const YUMI_STOCK_SNAPSHOT = [
        {
          id: "stk-yum-abs60",
          clientId: "yumi",
          ref: "Absolu BIO 60mL",
          refKey: "ABSOLU 60ML",
          format: "60ML",
          qty: 3560,
          dlc: "14/07/2026",
          snapshotAt: "15/04/2026 18:13",
          zone: "Z-BIO",
          emplacement: "A-01",
          certif: "BIO Ecocert",
          trace: "Sorties tracées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "5 065 095",
          lotSamples: ["5 065 095", "5 194 095", "5 187 095"],
          source: "Inventaire hebdo + sorties",
          note: "Le fichier inventaire ne porte pas le lot, mais les sorties observées couvrent plusieurs lots récents.",
        },
        {
          id: "stk-yum-att60",
          clientId: "yumi",
          ref: "Attraction BIO 60mL",
          refKey: "ATTRACTION 60ML",
          format: "60ML",
          qty: 16,
          dlc: "21/07/2026",
          snapshotAt: "15/04/2026 18:14",
          zone: "Z-BIO",
          emplacement: "A-02",
          certif: "BIO Ecocert",
          trace: "Sorties tracées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "5 350 106",
          lotSamples: ["5 350 106", "5 069 106", "5 188 106"],
          source: "Inventaire hebdo + sorties",
          note: "Faible stock disponible, mais traçabilité de sortie forte.",
        },
        {
          id: "stk-yum-am240",
          clientId: "yumi",
          ref: "Amour BIO 240mL",
          refKey: "AMOUR 240ML",
          format: "240ML",
          qty: 42,
          dlc: "18/05/2026",
          snapshotAt: "15/04/2026 18:17",
          zone: "Z-BIO",
          emplacement: "B-01",
          certif: "BIO Ecocert",
          trace: "Sorties tracées",
          traceLevel: "partial",
          auditState: "risk",
          lotHint: "5 090 078",
          lotSamples: ["5 090 078", "5 272 078", "5 097 078"],
          source: "Inventaire hebdo + sorties",
          note: "DLC courte à surveiller avant audit, preuve lot seulement côté sorties.",
        },
        {
          id: "stk-yum-bo240",
          clientId: "yumi",
          ref: "Bonheur BIO 240mL",
          refKey: "BONHEUR 240ML",
          format: "240ML",
          qty: 1191,
          dlc: "10/06/2026",
          snapshotAt: "15/04/2026 18:17",
          zone: "Z-BIO",
          emplacement: "B-02",
          certif: "BIO Ecocert",
          trace: "Sorties tracées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "5 187 072",
          lotSamples: ["5 187 072", "5 194 072", "5 251 072"],
          source: "Inventaire hebdo + sorties",
          note: "Référence bien couverte en inventaire et en historique de livraison.",
        },
        {
          id: "stk-yum-co240",
          clientId: "yumi",
          ref: "Confiance BIO 240mL",
          refKey: "CONFIANCE 240ML",
          format: "240ML",
          qty: 1587,
          dlc: "10/06/2026",
          snapshotAt: "15/04/2026 18:16",
          zone: "Z-BIO",
          emplacement: "B-03",
          certif: "BIO Ecocert",
          trace: "Sorties tracées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "5 349 060",
          lotSamples: ["5 349 060", "5 180 060", "5 279 060"],
          source: "Inventaire hebdo + sorties",
          note: "Bon volume, bonne couverture sortie, manque uniquement la preuve lot à l'entrée.",
        },
        {
          id: "stk-yum-fo240",
          clientId: "yumi",
          ref: "Force BIO 240mL",
          refKey: "FORCE 240ML",
          format: "240ML",
          qty: 276,
          dlc: "09/06/2026",
          snapshotAt: "15/04/2026 18:17",
          zone: "Z-BIO",
          emplacement: "B-04",
          certif: "BIO Ecocert",
          trace: "Sorties tracées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "5 082 074",
          lotSamples: ["5 082 074", "5 187 074", "5 264 074"],
          source: "Inventaire hebdo + sorties",
          note: "Référence compatible audit si l'export production rattache les lots d'entrée.",
        },
        {
          id: "stk-yum-gr240",
          clientId: "yumi",
          ref: "Gratitude BIO 240mL",
          refKey: "GRATITUDE 240ML",
          format: "240ML",
          qty: 1011,
          dlc: "09/06/2026",
          snapshotAt: "15/04/2026 18:18",
          zone: "Z-BIO",
          emplacement: "B-05",
          certif: "BIO Ecocert",
          trace: "Sorties tracées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "5 084 090",
          lotSamples: ["5 084 090", "5 252 090", "5 090 090"],
          source: "Inventaire hebdo + sorties",
          note: "Preuves cohérentes entre inventaire hebdo et historique de commandes.",
        },
        {
          id: "stk-yum-jo240",
          clientId: "yumi",
          ref: "Joie BIO 240mL",
          refKey: "JOIE 240ML",
          format: "240ML",
          qty: 591,
          dlc: "25/05/2026",
          snapshotAt: "15/04/2026 18:18",
          zone: "Z-BIO",
          emplacement: "B-06",
          certif: "BIO Ecocert",
          trace: "Sorties tracées",
          traceLevel: "partial",
          auditState: "risk",
          lotHint: "5 187 065",
          lotSamples: ["5 187 065", "5 111 065", "5 250 065"],
          source: "Inventaire hebdo + sorties",
          note: "DLC courte, à prioriser dans les contrôles et le picking FIFO.",
        },
        {
          id: "stk-yum-le240",
          clientId: "yumi",
          ref: "Légèreté BIO 240mL",
          refKey: "LEGERETE 240ML",
          format: "240ML",
          qty: 18,
          dlc: "26/05/2026",
          snapshotAt: "15/04/2026 18:18",
          zone: "Z-BIO",
          emplacement: "B-07",
          certif: "BIO Ecocert",
          trace: "Sorties tracées",
          traceLevel: "partial",
          auditState: "risk",
          lotHint: "5 181 069",
          lotSamples: ["5 181 069", "5 139 069", "5 188 069"],
          source: "Inventaire hebdo + sorties",
          note: "Stock faible et DLC courte, à arbitrer rapidement.",
        },
        {
          id: "stk-yum-pu240",
          clientId: "yumi",
          ref: "Pureté BIO 240mL",
          refKey: "PURETE 240ML",
          format: "240ML",
          qty: 27,
          dlc: "02/06/2026",
          snapshotAt: "15/04/2026 18:19",
          zone: "Z-BIO",
          emplacement: "B-08",
          certif: "BIO Ecocert",
          trace: "Sorties tracées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "5 252 087",
          lotSamples: ["5 252 087", "5 350 087", "5 097 087"],
          source: "Inventaire hebdo + sorties",
          note: "Historique de sorties très riche, stock actuel faible mais lisible.",
        },
        {
          id: "stk-yum-vi240",
          clientId: "yumi",
          ref: "Vitalité BIO 240mL",
          refKey: "VITALITE 240ML",
          format: "240ML",
          qty: 256,
          dlc: "25/05/2026",
          snapshotAt: "15/04/2026 18:19",
          zone: "Z-BIO",
          emplacement: "B-09",
          certif: "BIO Ecocert",
          trace: "Sorties tracées",
          traceLevel: "partial",
          auditState: "risk",
          lotHint: "5 077 110",
          lotSamples: ["5 077 110", "5 279 110", "5 259 110"],
          source: "Inventaire hebdo + sorties",
          note: "DLC sous surveillance, bonne preuve lot côté sorties.",
        },
        {
          id: "stk-yum-am1000",
          clientId: "yumi",
          ref: "Amour BIO 1000mL",
          refKey: "AMOUR 1000ML",
          format: "1000ML",
          qty: 278,
          dlc: "10/06/2026",
          snapshotAt: "15/04/2026 18:21",
          zone: "Z-BIO",
          emplacement: "C-02",
          certif: "BIO Ecocert",
          trace: "Production requise",
          traceLevel: "needs-production",
          auditState: "watch",
          lotHint: "",
          lotSamples: [],
          source: "Inventaire hebdo",
          note: "Le stock est visible, mais aucun lot de sortie n'a été recoupé dans le CSV. L'export production est nécessaire.",
        },
        {
          id: "stk-pop-framboise-bouteille-1",
          clientId: "popmate",
          ref: "Pop Maté Framboise · bouteilles",
          refKey: "POP MATE FRAMBOISE BOUTEILLES",
          format: "12 bouteilles",
          qty: 805,
          dlc: "DDM à compléter",
          snapshotAt: "Base Ecocert · 17/04/2026",
          zone: "Z-BIO",
          emplacement: "PM-BTL-F",
          certif: "BIO Ecocert",
          trace: "Entrées Ecocert + sorties livrées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "L24138",
          lotSamples: ["L24138"],
          source: "Suivi de réceptions Pop Maté",
          note: "Traçabilité d'entrée Ecocert forte, sorties recoupées sans affectation lot explicite.",
        },
        {
          id: "stk-pop-framboise-bouteille-2",
          clientId: "popmate",
          ref: "Pop Maté Framboise · bouteilles",
          refKey: "POP MATE FRAMBOISE BOUTEILLES",
          format: "12 bouteilles",
          qty: 480,
          dlc: "DDM à compléter",
          snapshotAt: "Base Ecocert · 17/04/2026",
          zone: "Z-BIO",
          emplacement: "PM-BTL-F",
          certif: "BIO Ecocert",
          trace: "Entrées Ecocert + sorties livrées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "NOIRES CAPSULES L24138",
          lotSamples: ["NOIRES CAPSULES L24138"],
          source: "Suivi de réceptions Pop Maté",
          note: "Traçabilité d'entrée Ecocert forte, sorties recoupées sans affectation lot explicite.",
        },
        {
          id: "stk-pop-framboise-canette-3",
          clientId: "popmate",
          ref: "Pop Maté Framboise · canettes",
          refKey: "POP MATE FRAMBOISE CANETTES",
          format: "24 canettes",
          qty: 1169,
          dlc: "DDM à compléter",
          snapshotAt: "Base Ecocert · 17/04/2026",
          zone: "Z-BIO",
          emplacement: "PM-CAN-F",
          certif: "BIO Ecocert",
          trace: "Entrées Ecocert + sorties livrées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "L24137CF",
          lotSamples: ["L24137CF"],
          source: "Suivi de réceptions Pop Maté",
          note: "Traçabilité d'entrée Ecocert forte, sorties recoupées sans affectation lot explicite.",
        },
        {
          id: "stk-pop-gingembre-bouteille-4",
          clientId: "popmate",
          ref: "Pop Maté Gingembre · bouteilles",
          refKey: "POP MATE GINGEMBRE BOUTEILLES",
          format: "12 bouteilles",
          qty: 1303,
          dlc: "DDM à compléter",
          snapshotAt: "Base Ecocert · 17/04/2026",
          zone: "Z-BIO",
          emplacement: "PM-BTL-G",
          certif: "BIO Ecocert",
          trace: "Entrées Ecocert + sorties livrées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "L24102",
          lotSamples: ["L24102"],
          source: "Suivi de réceptions Pop Maté",
          note: "Traçabilité d'entrée Ecocert forte, sorties recoupées sans affectation lot explicite.",
        },
        {
          id: "stk-pop-gingembre-bouteille-5",
          clientId: "popmate",
          ref: "Pop Maté Gingembre · bouteilles",
          refKey: "POP MATE GINGEMBRE BOUTEILLES",
          format: "12 bouteilles",
          qty: 456,
          dlc: "DDM à compléter",
          snapshotAt: "Base Ecocert · 17/04/2026",
          zone: "Z-BIO",
          emplacement: "PM-BTL-G",
          certif: "BIO Ecocert",
          trace: "Entrées Ecocert + sorties livrées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "L24102 - NOIRES CAPSULES",
          lotSamples: ["L24102 - NOIRES CAPSULES"],
          source: "Suivi de réceptions Pop Maté",
          note: "Traçabilité d'entrée Ecocert forte, sorties recoupées sans affectation lot explicite.",
        },
        {
          id: "stk-pop-gingembre-bouteille-6",
          clientId: "popmate",
          ref: "Pop Maté Gingembre · bouteilles",
          refKey: "POP MATE GINGEMBRE BOUTEILLES",
          format: "12 bouteilles",
          qty: 360,
          dlc: "DDM à compléter",
          snapshotAt: "Base Ecocert · 17/04/2026",
          zone: "Z-BIO",
          emplacement: "PM-BTL-G",
          certif: "BIO Ecocert",
          trace: "Entrées Ecocert + sorties livrées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "L24186",
          lotSamples: ["L24186"],
          source: "Suivi de réceptions Pop Maté",
          note: "Traçabilité d'entrée Ecocert forte, sorties recoupées sans affectation lot explicite.",
        },
        {
          id: "stk-pop-gingembre-canette-7",
          clientId: "popmate",
          ref: "Pop Maté Gingembre · canettes",
          refKey: "POP MATE GINGEMBRE CANETTES",
          format: "24 canettes",
          qty: 811,
          dlc: "DDM à compléter",
          snapshotAt: "Base Ecocert · 17/04/2026",
          zone: "Z-BIO",
          emplacement: "PM-CAN-G",
          certif: "BIO Ecocert",
          trace: "Entrées Ecocert + sorties livrées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "L23190CG",
          lotSamples: ["L23190CG"],
          source: "Suivi de réceptions Pop Maté",
          note: "Traçabilité d'entrée Ecocert forte, sorties recoupées sans affectation lot explicite.",
        },
        {
          id: "stk-pop-gingembre-canette-8",
          clientId: "popmate",
          ref: "Pop Maté Gingembre · canettes",
          refKey: "POP MATE GINGEMBRE CANETTES",
          format: "24 canettes",
          qty: 720,
          dlc: "DDM à compléter",
          snapshotAt: "Base Ecocert · 17/04/2026",
          zone: "Z-BIO",
          emplacement: "PM-CAN-G",
          certif: "BIO Ecocert",
          trace: "Entrées Ecocert + sorties livrées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "L23191CG",
          lotSamples: ["L23191CG"],
          source: "Suivi de réceptions Pop Maté",
          note: "Traçabilité d'entrée Ecocert forte, sorties recoupées sans affectation lot explicite.",
        },
        {
          id: "stk-pop-original-bouteille-9",
          clientId: "popmate",
          ref: "Pop Maté Original · bouteilles",
          refKey: "POP MATE ORIGINAL BOUTEILLES",
          format: "12 bouteilles",
          qty: 1596,
          dlc: "DDM à compléter",
          snapshotAt: "Base Ecocert · 17/04/2026",
          zone: "Z-BIO",
          emplacement: "PM-BTL-O",
          certif: "BIO Ecocert",
          trace: "Entrées Ecocert + sorties livrées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "19",
          lotSamples: ["19"],
          source: "Suivi de réceptions Pop Maté",
          note: "Stock théorique FIFO à partir des réceptions Ecocert et des sorties livrées.",
        },
        {
          id: "stk-pop-original-bouteille-10",
          clientId: "popmate",
          ref: "Pop Maté Original · bouteilles",
          refKey: "POP MATE ORIGINAL BOUTEILLES",
          format: "12 bouteilles",
          qty: 2880,
          dlc: "DDM à compléter",
          snapshotAt: "Base Ecocert · 17/04/2026",
          zone: "Z-BIO",
          emplacement: "PM-BTL-O",
          certif: "BIO Ecocert",
          trace: "Entrées Ecocert + sorties livrées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "24169",
          lotSamples: ["24169"],
          source: "Suivi de réceptions Pop Maté",
          note: "Stock théorique FIFO à partir des réceptions Ecocert et des sorties livrées.",
        },
        {
          id: "stk-pop-original-bouteille-11",
          clientId: "popmate",
          ref: "Pop Maté Original · bouteilles",
          refKey: "POP MATE ORIGINAL BOUTEILLES",
          format: "12 bouteilles",
          qty: 1307,
          dlc: "DDM à compléter",
          snapshotAt: "Base Ecocert · 17/04/2026",
          zone: "Z-BIO",
          emplacement: "PM-BTL-O",
          certif: "BIO Ecocert",
          trace: "Entrées Ecocert + sorties livrées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "A - Lot 18",
          lotSamples: ["A - Lot 18"],
          source: "Suivi de réceptions Pop Maté",
          note: "Stock théorique FIFO à partir des réceptions Ecocert et des sorties livrées.",
        },
        {
          id: "stk-pop-original-bouteille-12",
          clientId: "popmate",
          ref: "Pop Maté Original · bouteilles",
          refKey: "POP MATE ORIGINAL BOUTEILLES",
          format: "12 bouteilles",
          qty: 2880,
          dlc: "DDM à compléter",
          snapshotAt: "Base Ecocert · 17/04/2026",
          zone: "Z-BIO",
          emplacement: "PM-BTL-O",
          certif: "BIO Ecocert",
          trace: "Entrées Ecocert + sorties livrées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "L24109",
          lotSamples: ["L24109"],
          source: "Suivi de réceptions Pop Maté",
          note: "Stock théorique FIFO à partir des réceptions Ecocert et des sorties livrées.",
        },
        {
          id: "stk-pop-original-bouteille-13",
          clientId: "popmate",
          ref: "Pop Maté Original · bouteilles",
          refKey: "POP MATE ORIGINAL BOUTEILLES",
          format: "12 bouteilles",
          qty: 1440,
          dlc: "DDM à compléter",
          snapshotAt: "Base Ecocert · 17/04/2026",
          zone: "Z-BIO",
          emplacement: "PM-BTL-O",
          certif: "BIO Ecocert",
          trace: "Entrées Ecocert + sorties livrées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "NOIRES CAPSULES L24109",
          lotSamples: ["NOIRES CAPSULES L24109"],
          source: "Suivi de réceptions Pop Maté",
          note: "Stock théorique FIFO à partir des réceptions Ecocert et des sorties livrées.",
        },
        {
          id: "stk-pop-original-canette-14",
          clientId: "popmate",
          ref: "Pop Maté Original · canettes",
          refKey: "POP MATE ORIGINAL CANETTES",
          format: "24 canettes",
          qty: 2508,
          dlc: "DDM à compléter",
          snapshotAt: "Base Ecocert · 17/04/2026",
          zone: "Z-BIO",
          emplacement: "PM-CAN-O",
          certif: "BIO Ecocert",
          trace: "Entrées Ecocert + sorties livrées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "L23285CO",
          lotSamples: ["L23285CO"],
          source: "Suivi de réceptions Pop Maté",
          note: "Stock théorique FIFO à partir des réceptions Ecocert et des sorties livrées.",
        },
        {
          id: "stk-pop-original-canette-15",
          clientId: "popmate",
          ref: "Pop Maté Original · canettes",
          refKey: "POP MATE ORIGINAL CANETTES",
          format: "24 canettes",
          qty: 2592,
          dlc: "DDM à compléter",
          snapshotAt: "Base Ecocert · 17/04/2026",
          zone: "Z-BIO",
          emplacement: "PM-CAN-O",
          certif: "BIO Ecocert",
          trace: "Entrées Ecocert + sorties livrées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "L23286CO",
          lotSamples: ["L23286CO"],
          source: "Suivi de réceptions Pop Maté",
          note: "Stock théorique FIFO à partir des réceptions Ecocert et des sorties livrées.",
        },
        {
          id: "stk-pop-original-canette-16",
          clientId: "popmate",
          ref: "Pop Maté Original · canettes",
          refKey: "POP MATE ORIGINAL CANETTES",
          format: "24 canettes",
          qty: 2592,
          dlc: "DDM à compléter",
          snapshotAt: "Base Ecocert · 17/04/2026",
          zone: "Z-BIO",
          emplacement: "PM-CAN-O",
          certif: "BIO Ecocert",
          trace: "Entrées Ecocert + sorties livrées",
          traceLevel: "partial",
          auditState: "stable",
          lotHint: "L24135CO",
          lotSamples: ["L24135CO"],
          source: "Suivi de réceptions Pop Maté",
          note: "Stock théorique FIFO à partir des réceptions Ecocert et des sorties livrées.",
        },
        {
          id: "stk-pop-rainbow-bouteille-17",
          clientId: "popmate",
          ref: "Pop Maté Rainbow · bouteilles",
          refKey: "POP MATE RAINBOW BOUTEILLES",
          format: "12 bouteilles",
          qty: 840,
          dlc: "DDM à compléter",
          snapshotAt: "Base Ecocert · 17/04/2026",
          zone: "Z-BIO",
          emplacement: "PM-BTL-R",
          certif: "BIO Ecocert",
          trace: "Entrées Ecocert + sorties livrées",
          traceLevel: "needs-production",
          auditState: "watch",
          lotHint: "L24109",
          lotSamples: ["L24109"],
          source: "Suivi de réceptions Pop Maté",
          note: "Edition spécifique visible en réceptions, peu ou pas de sorties recoupées dans la base fournie.",
        },
        {
          id: "stk-joy-rouge",
          clientId: "joyons",
          ref: "Joyons Rouge · bouteilles",
          refKey: "JOYONS ROUGE",
          format: "12 bouteilles",
          qty: 480,
          dlc: "Millésime à compléter",
          snapshotAt: "Suivi Joyons · 29/07/2025",
          zone: "Z-BIO",
          emplacement: "JY-ROUGE",
          certif: "BIO",
          trace: "Inventaire + suivi client",
          traceLevel: "needs-production",
          auditState: "watch",
          lotHint: "Non relevé",
          lotSamples: [],
          source: "Suivi de stock Joyons BIO",
          note: "Stock BIO visible par référence, sans numéro de lot ni millésime dans le fichier transmis.",
        },
        {
          id: "stk-joy-blanc",
          clientId: "joyons",
          ref: "Joyons Blanc · bouteilles",
          refKey: "JOYONS BLANC",
          format: "12 bouteilles",
          qty: 1104,
          dlc: "Millésime à compléter",
          snapshotAt: "Suivi Joyons · 29/07/2025",
          zone: "Z-BIO",
          emplacement: "JY-BLANC",
          certif: "BIO",
          trace: "Inventaire + suivi client",
          traceLevel: "needs-production",
          auditState: "watch",
          lotHint: "Non relevé",
          lotSamples: [],
          source: "Suivi de stock Joyons BIO",
          note: "Stock BIO visible par référence, sans numéro de lot ni millésime dans le fichier transmis.",
        },
        {
          id: "stk-joy-rose",
          clientId: "joyons",
          ref: "Joyons Rosé · bouteilles",
          refKey: "JOYONS ROSE",
          format: "12 bouteilles",
          qty: 1203,
          dlc: "Millésime à compléter",
          snapshotAt: "Suivi Joyons · 29/07/2025",
          zone: "Z-BIO",
          emplacement: "JY-ROSE",
          certif: "BIO",
          trace: "Inventaire + suivi client",
          traceLevel: "needs-production",
          auditState: "watch",
          lotHint: "Non relevé",
          lotSamples: [],
          source: "Suivi de stock Joyons BIO",
          note: "Stock BIO visible par référence, sans numéro de lot ni millésime dans le fichier transmis.",
        },
        {
          id: "stk-joy-petnat",
          clientId: "joyons",
          ref: "Joyons Pet Nat · bouteilles",
          refKey: "JOYONS PETNAT",
          format: "12 bouteilles",
          qty: 180,
          dlc: "Millésime à compléter",
          snapshotAt: "Suivi Joyons · 29/07/2025",
          zone: "Z-BIO",
          emplacement: "JY-PETNAT",
          certif: "BIO",
          trace: "Inventaire + suivi client",
          traceLevel: "needs-production",
          auditState: "watch",
          lotHint: "Non relevé",
          lotSamples: [],
          source: "Suivi de stock Joyons BIO",
          note: "Stock BIO visible par référence, sans numéro de lot ni millésime dans le fichier transmis.",
        },
      ];

      const STOCK_MOVEMENTS = [
        { id: "mov-stock-001", at: "15/04/2026 18:21", type: "inventaire", ref: "Amour BIO 1000mL", qty: 278, lot: "—", dlc: "10/06/2026", detail: "Snapshot hebdo Yumi", source: "Inventaire" },
        { id: "mov-stock-002", at: "15/04/2026 18:19", type: "inventaire", ref: "Pureté BIO 240mL", qty: 27, lot: "—", dlc: "02/06/2026", detail: "Snapshot hebdo Yumi", source: "Inventaire" },
        { id: "mov-stock-003", at: "15/04/2026 18:17", type: "inventaire", ref: "Amour BIO 240mL", qty: 42, lot: "—", dlc: "18/05/2026", detail: "Snapshot hebdo Yumi", source: "Inventaire" },
        { id: "mov-stock-004", at: "10/03/2026", type: "sortie", ref: "Pureté BIO 240mL", qty: -12, lot: "6 025 087", dlc: "01/04/2026", detail: "Expe0110734", source: "BL / lignes préparées" },
        { id: "mov-stock-005", at: "10/03/2026", type: "sortie", ref: "Amour BIO 240mL", qty: -4, lot: "6054078", dlc: "28/04/2026", detail: "Expe0110735", source: "BL / lignes préparées" },
        { id: "mov-stock-006", at: "10/03/2026", type: "sortie", ref: "Force BIO 240mL", qty: -1, lot: "6060074", dlc: "04/05/2026", detail: "Expe0110735", source: "BL / lignes préparées" },
        { id: "mov-stock-007", at: "10/03/2026", type: "sortie", ref: "Légèreté BIO 240mL", qty: -1, lot: "6060069", dlc: "04/05/2026", detail: "Expe0110735", source: "BL / lignes préparées" },
        { id: "mov-stock-008", at: "10/03/2026", type: "sortie", ref: "Absolu BIO 60mL", qty: -1, lot: "6039095", dlc: "25/05/2026", detail: "Expe0110735", source: "BL / lignes préparées" },
        { id: "mov-pop-001", at: "12/02/2024", type: "réception", ref: "Pop Maté Original · bouteilles", qty: 1596, lot: "A - Lot 18", dlc: "DDM à compléter", detail: "Réception Ecocert · 133 cartons", source: "POP MATE BIO · entrées" },
        { id: "mov-pop-002", at: "07/03/2024", type: "réception", ref: "Pop Maté Original · canettes", qty: 2592, lot: "L23285CO", dlc: "DDM à compléter", detail: "Réception Ecocert · 108 cartons", source: "POP MATE BIO · entrées" },
        { id: "mov-pop-003", at: "25/04/2024", type: "réception", ref: "Pop Maté Gingembre · bouteilles", qty: 1200, lot: "L24102", dlc: "DDM à compléter", detail: "Réception Ecocert · 100 cartons", source: "POP MATE BIO · entrées" },
        { id: "mov-pop-004", at: "27/05/2024", type: "réception", ref: "Pop Maté Framboise · canettes", qty: 1200, lot: "L24137CF", dlc: "DDM à compléter", detail: "Réception Ecocert · 50 cartons", source: "POP MATE BIO · entrées" },
        { id: "mov-pop-005", at: "01/04/2025", type: "sortie", ref: "Pop Maté Original · bouteilles", qty: -20, lot: "FIFO théorique", dlc: "DDM à compléter", detail: "Livraison Cyke 896229", source: "POP MATE BIO · sorties" },
        { id: "mov-pop-006", at: "01/04/2025", type: "sortie", ref: "Pop Maté Original · bouteilles", qty: -6, lot: "FIFO théorique", dlc: "DDM à compléter", detail: "Livraison Cyke 896232", source: "POP MATE BIO · sorties" },
        { id: "mov-pop-007", at: "02/04/2025", type: "sortie", ref: "Pop Maté Original · bouteilles", qty: -6, lot: "FIFO théorique", dlc: "DDM à compléter", detail: "Relivraison Cyke 899237", source: "POP MATE BIO · sorties" },
        { id: "mov-pop-008", at: "03/04/2025", type: "sortie", ref: "Pop Maté Original · canettes", qty: -8, lot: "FIFO théorique", dlc: "DDM à compléter", detail: "Livraison Cyke 900723", source: "POP MATE BIO · sorties" },
        { id: "mov-joy-001", at: "05/05/2025", type: "inventaire", ref: "Joyons Rouge · bouteilles", qty: 228, lot: "Non relevé", dlc: "Millésime à compléter", detail: "Inventaire client", source: "Suivi de stock Joyons BIO" },
        { id: "mov-joy-002", at: "05/05/2025", type: "inventaire", ref: "Joyons Blanc · bouteilles", qty: 300, lot: "Non relevé", dlc: "Millésime à compléter", detail: "Inventaire client", source: "Suivi de stock Joyons BIO" },
        { id: "mov-joy-003", at: "05/05/2025", type: "inventaire", ref: "Joyons Rosé · bouteilles", qty: 252, lot: "Non relevé", dlc: "Millésime à compléter", detail: "Inventaire client", source: "Suivi de stock Joyons BIO" },
        { id: "mov-joy-004", at: "05/05/2025", type: "inventaire", ref: "Joyons Pet Nat · bouteilles", qty: 72, lot: "Non relevé", dlc: "Millésime à compléter", detail: "Inventaire client", source: "Suivi de stock Joyons BIO" },
        { id: "mov-joy-005", at: "29/07/2025", type: "réception", ref: "Joyons Rouge · bouteilles", qty: 216, lot: "Non relevé", dlc: "Millésime à compléter", detail: "Réception client la plus récente", source: "Suivi de stock Joyons BIO" },
        { id: "mov-joy-006", at: "29/07/2025", type: "réception", ref: "Joyons Blanc · bouteilles", qty: 288, lot: "Non relevé", dlc: "Millésime à compléter", detail: "Réception client la plus récente", source: "Suivi de stock Joyons BIO" },
        { id: "mov-joy-007", at: "29/07/2025", type: "réception", ref: "Joyons Rosé · bouteilles", qty: 240, lot: "Non relevé", dlc: "Millésime à compléter", detail: "Réception client la plus récente", source: "Suivi de stock Joyons BIO" },
        { id: "mov-joy-008", at: "29/07/2025", type: "réception", ref: "Joyons Pet Nat · bouteilles", qty: 72, lot: "Non relevé", dlc: "Millésime à compléter", detail: "Réception client la plus récente", source: "Suivi de stock Joyons BIO" },
      ];

      const STOCK_WEEKLY_READINGS = [
        {
          id: "wk16-abs60",
          week: "2026-W16",
          weekLabel: "Semaine 16",
          refId: "stk-yum-abs60",
          ref: "Absolu BIO 60mL",
          lot: "5 065 095",
          qty: 3560,
          zone: "Z-BIO",
          emplacement: "A-01",
          coordinate: "Z-BIO · A-01",
          observedAt: "15/04/2026 18:13",
          proof: "Inventaire hebdo",
          proofLevel: "bc",
        },
        {
          id: "wk16-att60",
          week: "2026-W16",
          weekLabel: "Semaine 16",
          refId: "stk-yum-att60",
          ref: "Attraction BIO 60mL",
          lot: "5 350 106",
          qty: 16,
          zone: "Z-BIO",
          emplacement: "A-02",
          coordinate: "Z-BIO · A-02",
          observedAt: "15/04/2026 18:14",
          proof: "Inventaire hebdo",
          proofLevel: "bc",
        },
        {
          id: "wk16-am240",
          week: "2026-W16",
          weekLabel: "Semaine 16",
          refId: "stk-yum-am240",
          ref: "Amour BIO 240mL",
          lot: "5 090 078",
          qty: 42,
          zone: "Z-BIO",
          emplacement: "B-01",
          coordinate: "Z-BIO · B-01",
          observedAt: "15/04/2026 18:17",
          proof: "Inventaire + lot témoin",
          proofLevel: "bm",
        },
        {
          id: "wk16-bo240",
          week: "2026-W16",
          weekLabel: "Semaine 16",
          refId: "stk-yum-bo240",
          ref: "Bonheur BIO 240mL",
          lot: "5 187 072",
          qty: 1191,
          zone: "Z-BIO",
          emplacement: "B-02",
          coordinate: "Z-BIO · B-02",
          observedAt: "15/04/2026 18:17",
          proof: "Inventaire + lot témoin",
          proofLevel: "bm",
        },
        {
          id: "wk16-co240",
          week: "2026-W16",
          weekLabel: "Semaine 16",
          refId: "stk-yum-co240",
          ref: "Confiance BIO 240mL",
          lot: "5 349 060",
          qty: 1587,
          zone: "Z-BIO",
          emplacement: "B-03",
          coordinate: "Z-BIO · B-03",
          observedAt: "15/04/2026 18:16",
          proof: "Inventaire + lot témoin",
          proofLevel: "bm",
        },
        {
          id: "wk16-fo240",
          week: "2026-W16",
          weekLabel: "Semaine 16",
          refId: "stk-yum-fo240",
          ref: "Force BIO 240mL",
          lot: "5 082 074",
          qty: 276,
          zone: "Z-BIO",
          emplacement: "B-04",
          coordinate: "Z-BIO · B-04",
          observedAt: "15/04/2026 18:17",
          proof: "Inventaire + lot témoin",
          proofLevel: "bm",
        },
        {
          id: "wk16-gr240",
          week: "2026-W16",
          weekLabel: "Semaine 16",
          refId: "stk-yum-gr240",
          ref: "Gratitude BIO 240mL",
          lot: "5 084 090",
          qty: 1011,
          zone: "Z-BIO",
          emplacement: "B-05",
          coordinate: "Z-BIO · B-05",
          observedAt: "15/04/2026 18:18",
          proof: "Inventaire + lot témoin",
          proofLevel: "bm",
        },
        {
          id: "wk16-jo240",
          week: "2026-W16",
          weekLabel: "Semaine 16",
          refId: "stk-yum-jo240",
          ref: "Joie BIO 240mL",
          lot: "5 187 065",
          qty: 591,
          zone: "Z-BIO",
          emplacement: "B-06",
          coordinate: "Z-BIO · B-06",
          observedAt: "15/04/2026 18:18",
          proof: "Inventaire + lot témoin",
          proofLevel: "bm",
        },
        {
          id: "wk16-le240",
          week: "2026-W16",
          weekLabel: "Semaine 16",
          refId: "stk-yum-le240",
          ref: "Légèreté BIO 240mL",
          lot: "5 181 069",
          qty: 18,
          zone: "Z-BIO",
          emplacement: "B-07",
          coordinate: "Z-BIO · B-07",
          observedAt: "15/04/2026 18:18",
          proof: "Inventaire + lot témoin",
          proofLevel: "bm",
        },
        {
          id: "wk16-pu240",
          week: "2026-W16",
          weekLabel: "Semaine 16",
          refId: "stk-yum-pu240",
          ref: "Pureté BIO 240mL",
          lot: "5 252 087",
          qty: 27,
          zone: "Z-BIO",
          emplacement: "B-08",
          coordinate: "Z-BIO · B-08",
          observedAt: "15/04/2026 18:19",
          proof: "Inventaire + lot témoin",
          proofLevel: "bm",
        },
        {
          id: "wk16-vi240",
          week: "2026-W16",
          weekLabel: "Semaine 16",
          refId: "stk-yum-vi240",
          ref: "Vitalité BIO 240mL",
          lot: "5 077 110",
          qty: 256,
          zone: "Z-BIO",
          emplacement: "B-09",
          coordinate: "Z-BIO · B-09",
          observedAt: "15/04/2026 18:19",
          proof: "Inventaire + lot témoin",
          proofLevel: "bm",
        },
        {
          id: "wk16-am1000",
          week: "2026-W16",
          weekLabel: "Semaine 16",
          refId: "stk-yum-am1000",
          ref: "Amour BIO 1000mL",
          lot: "À recouper",
          qty: 278,
          zone: "Z-BIO",
          emplacement: "C-02",
          coordinate: "Z-BIO · C-02",
          observedAt: "15/04/2026 18:21",
          proof: "Inventaire sans lot",
          proofLevel: "ba",
        },
        {
          id: "wk15-am240",
          week: "2026-W15",
          weekLabel: "Semaine 15",
          refId: "stk-yum-am240",
          ref: "Amour BIO 240mL",
          lot: "6082078",
          qty: 12,
          zone: "Z-BIO",
          emplacement: "B-01",
          coordinate: "Z-BIO · B-01",
          observedAt: "07/04/2026 18:42",
          proof: "Contrôle prépa",
          proofLevel: "bg",
        },
        {
          id: "wk15-pu500",
          week: "2026-W15",
          weekLabel: "Semaine 15",
          refId: "stk-yum-pu240",
          ref: "Pureté BIO 500mL",
          lot: "5071120",
          qty: 8,
          zone: "Z-BIO",
          emplacement: "B-08",
          coordinate: "Z-BIO · B-08",
          observedAt: "07/04/2026 18:42",
          proof: "Contrôle prépa",
          proofLevel: "bg",
        },
        {
          id: "wk15-ab60",
          week: "2026-W15",
          weekLabel: "Semaine 15",
          refId: "stk-yum-abs60",
          ref: "Absolu BIO 60mL",
          lot: "6011102",
          qty: 8,
          zone: "Z-BIO",
          emplacement: "A-01",
          coordinate: "Z-BIO · A-01",
          observedAt: "08/04/2026 08:12",
          proof: "Contrôle prépa",
          proofLevel: "bg",
        },
        {
          id: "wk-pop-framboise-bouteille-1",
          week: "2024-W22",
          weekLabel: "Semaine 22 · 2024",
          refId: "stk-pop-framboise-bouteille-1",
          ref: "Pop Maté Framboise · bouteilles",
          lot: "L24138",
          qty: 805,
          zone: "Z-BIO",
          emplacement: "PM-BTL-F",
          coordinate: "Z-BIO · PM-BTL-F",
          observedAt: "27/05/2024",
          proof: "Réception certifiée",
          proofLevel: "bm",
        },
        {
          id: "wk-pop-framboise-bouteille-2",
          week: "2024-W28",
          weekLabel: "Semaine 28 · 2024",
          refId: "stk-pop-framboise-bouteille-2",
          ref: "Pop Maté Framboise · bouteilles",
          lot: "NOIRES CAPSULES L24138",
          qty: 480,
          zone: "Z-BIO",
          emplacement: "PM-BTL-F",
          coordinate: "Z-BIO · PM-BTL-F",
          observedAt: "11/07/2024",
          proof: "Réception certifiée",
          proofLevel: "bm",
        },
        {
          id: "wk-pop-framboise-canette-3",
          week: "2024-W22",
          weekLabel: "Semaine 22 · 2024",
          refId: "stk-pop-framboise-canette-3",
          ref: "Pop Maté Framboise · canettes",
          lot: "L24137CF",
          qty: 1169,
          zone: "Z-BIO",
          emplacement: "PM-CAN-F",
          coordinate: "Z-BIO · PM-CAN-F",
          observedAt: "27/05/2024",
          proof: "Réception certifiée",
          proofLevel: "bm",
        },
        {
          id: "wk-pop-gingembre-bouteille-4",
          week: "2024-W17",
          weekLabel: "Semaine 17 · 2024",
          refId: "stk-pop-gingembre-bouteille-4",
          ref: "Pop Maté Gingembre · bouteilles",
          lot: "L24102",
          qty: 1303,
          zone: "Z-BIO",
          emplacement: "PM-BTL-G",
          coordinate: "Z-BIO · PM-BTL-G",
          observedAt: "25/04/2024",
          proof: "Réception certifiée",
          proofLevel: "bm",
        },
        {
          id: "wk-pop-gingembre-bouteille-5",
          week: "2024-W28",
          weekLabel: "Semaine 28 · 2024",
          refId: "stk-pop-gingembre-bouteille-5",
          ref: "Pop Maté Gingembre · bouteilles",
          lot: "L24102 - NOIRES CAPSULES",
          qty: 456,
          zone: "Z-BIO",
          emplacement: "PM-BTL-G",
          coordinate: "Z-BIO · PM-BTL-G",
          observedAt: "11/07/2024",
          proof: "Réception certifiée",
          proofLevel: "bm",
        },
        {
          id: "wk-pop-gingembre-bouteille-6",
          week: "2025-W08",
          weekLabel: "Semaine 08 · 2025",
          refId: "stk-pop-gingembre-bouteille-6",
          ref: "Pop Maté Gingembre · bouteilles",
          lot: "L24186",
          qty: 360,
          zone: "Z-BIO",
          emplacement: "PM-BTL-G",
          coordinate: "Z-BIO · PM-BTL-G",
          observedAt: "19/02/2025",
          proof: "Réception certifiée",
          proofLevel: "bm",
        },
        {
          id: "wk-pop-gingembre-canette-7",
          week: "2024-W12",
          weekLabel: "Semaine 12 · 2024",
          refId: "stk-pop-gingembre-canette-7",
          ref: "Pop Maté Gingembre · canettes",
          lot: "L23190CG",
          qty: 811,
          zone: "Z-BIO",
          emplacement: "PM-CAN-G",
          coordinate: "Z-BIO · PM-CAN-G",
          observedAt: "21/03/2024",
          proof: "Réception certifiée",
          proofLevel: "bm",
        },
        {
          id: "wk-pop-gingembre-canette-8",
          week: "2024-W20",
          weekLabel: "Semaine 20 · 2024",
          refId: "stk-pop-gingembre-canette-8",
          ref: "Pop Maté Gingembre · canettes",
          lot: "L23191CG",
          qty: 720,
          zone: "Z-BIO",
          emplacement: "PM-CAN-G",
          coordinate: "Z-BIO · PM-CAN-G",
          observedAt: "15/05/2024",
          proof: "Réception certifiée",
          proofLevel: "bm",
        },
        {
          id: "wk-pop-original-bouteille-9",
          week: "2024-W12",
          weekLabel: "Semaine 12 · 2024",
          refId: "stk-pop-original-bouteille-9",
          ref: "Pop Maté Original · bouteilles",
          lot: "19",
          qty: 1596,
          zone: "Z-BIO",
          emplacement: "PM-BTL-O",
          coordinate: "Z-BIO · PM-BTL-O",
          observedAt: "21/03/2024",
          proof: "Réception certifiée",
          proofLevel: "bm",
        },
        {
          id: "wk-pop-original-bouteille-10",
          week: "2024-W28",
          weekLabel: "Semaine 28 · 2024",
          refId: "stk-pop-original-bouteille-10",
          ref: "Pop Maté Original · bouteilles",
          lot: "24169",
          qty: 2880,
          zone: "Z-BIO",
          emplacement: "PM-BTL-O",
          coordinate: "Z-BIO · PM-BTL-O",
          observedAt: "11/07/2024",
          proof: "Réception certifiée",
          proofLevel: "bm",
        },
        {
          id: "wk-pop-original-bouteille-11",
          week: "2024-W07",
          weekLabel: "Semaine 07 · 2024",
          refId: "stk-pop-original-bouteille-11",
          ref: "Pop Maté Original · bouteilles",
          lot: "A - Lot 18",
          qty: 1307,
          zone: "Z-BIO",
          emplacement: "PM-BTL-O",
          coordinate: "Z-BIO · PM-BTL-O",
          observedAt: "12/02/2024",
          proof: "Réception certifiée",
          proofLevel: "bm",
        },
        {
          id: "wk-pop-original-bouteille-12",
          week: "2024-W20",
          weekLabel: "Semaine 20 · 2024",
          refId: "stk-pop-original-bouteille-12",
          ref: "Pop Maté Original · bouteilles",
          lot: "L24109",
          qty: 2880,
          zone: "Z-BIO",
          emplacement: "PM-BTL-O",
          coordinate: "Z-BIO · PM-BTL-O",
          observedAt: "15/05/2024",
          proof: "Réception certifiée",
          proofLevel: "bm",
        },
        {
          id: "wk-pop-original-bouteille-13",
          week: "2024-W17",
          weekLabel: "Semaine 17 · 2024",
          refId: "stk-pop-original-bouteille-13",
          ref: "Pop Maté Original · bouteilles",
          lot: "NOIRES CAPSULES L24109",
          qty: 1440,
          zone: "Z-BIO",
          emplacement: "PM-BTL-O",
          coordinate: "Z-BIO · PM-BTL-O",
          observedAt: "25/04/2024",
          proof: "Réception certifiée",
          proofLevel: "bm",
        },
        {
          id: "wk-pop-original-canette-14",
          week: "2024-W10",
          weekLabel: "Semaine 10 · 2024",
          refId: "stk-pop-original-canette-14",
          ref: "Pop Maté Original · canettes",
          lot: "L23285CO",
          qty: 2508,
          zone: "Z-BIO",
          emplacement: "PM-CAN-O",
          coordinate: "Z-BIO · PM-CAN-O",
          observedAt: "07/03/2024",
          proof: "Réception certifiée",
          proofLevel: "bm",
        },
        {
          id: "wk-pop-original-canette-15",
          week: "2024-W17",
          weekLabel: "Semaine 17 · 2024",
          refId: "stk-pop-original-canette-15",
          ref: "Pop Maté Original · canettes",
          lot: "L23286CO",
          qty: 2592,
          zone: "Z-BIO",
          emplacement: "PM-CAN-O",
          coordinate: "Z-BIO · PM-CAN-O",
          observedAt: "23/04/2024",
          proof: "Réception certifiée",
          proofLevel: "bm",
        },
        {
          id: "wk-pop-original-canette-16",
          week: "2024-W22",
          weekLabel: "Semaine 22 · 2024",
          refId: "stk-pop-original-canette-16",
          ref: "Pop Maté Original · canettes",
          lot: "L24135CO",
          qty: 2592,
          zone: "Z-BIO",
          emplacement: "PM-CAN-O",
          coordinate: "Z-BIO · PM-CAN-O",
          observedAt: "27/05/2024",
          proof: "Réception certifiée",
          proofLevel: "bm",
        },
        {
          id: "wk-pop-rainbow-bouteille-17",
          week: "2024-W20",
          weekLabel: "Semaine 20 · 2024",
          refId: "stk-pop-rainbow-bouteille-17",
          ref: "Pop Maté Rainbow · bouteilles",
          lot: "L24109",
          qty: 840,
          zone: "Z-BIO",
          emplacement: "PM-BTL-R",
          coordinate: "Z-BIO · PM-BTL-R",
          observedAt: "15/05/2024",
          proof: "Réception certifiée",
          proofLevel: "bm",
        },
        {
          id: "wk-joy-rouge",
          week: "2025-W19",
          weekLabel: "Semaine 19 · 2025",
          refId: "stk-joy-rouge",
          ref: "Joyons Rouge · bouteilles",
          lot: "Non relevé",
          qty: 228,
          zone: "Z-BIO",
          emplacement: "JY-ROUGE",
          coordinate: "Z-BIO · JY-ROUGE",
          observedAt: "05/05/2025",
          proof: "Inventaire client",
          proofLevel: "bc",
        },
        {
          id: "wk-joy-blanc",
          week: "2025-W19",
          weekLabel: "Semaine 19 · 2025",
          refId: "stk-joy-blanc",
          ref: "Joyons Blanc · bouteilles",
          lot: "Non relevé",
          qty: 300,
          zone: "Z-BIO",
          emplacement: "JY-BLANC",
          coordinate: "Z-BIO · JY-BLANC",
          observedAt: "05/05/2025",
          proof: "Inventaire client",
          proofLevel: "bc",
        },
        {
          id: "wk-joy-rose",
          week: "2025-W19",
          weekLabel: "Semaine 19 · 2025",
          refId: "stk-joy-rose",
          ref: "Joyons Rosé · bouteilles",
          lot: "Non relevé",
          qty: 252,
          zone: "Z-BIO",
          emplacement: "JY-ROSE",
          coordinate: "Z-BIO · JY-ROSE",
          observedAt: "05/05/2025",
          proof: "Inventaire client",
          proofLevel: "bc",
        },
        {
          id: "wk-joy-petnat",
          week: "2025-W19",
          weekLabel: "Semaine 19 · 2025",
          refId: "stk-joy-petnat",
          ref: "Joyons Pet Nat · bouteilles",
          lot: "Non relevé",
          qty: 72,
          zone: "Z-BIO",
          emplacement: "JY-PETNAT",
          coordinate: "Z-BIO · JY-PETNAT",
          observedAt: "05/05/2025",
          proof: "Inventaire client",
          proofLevel: "bc",
        },
      ];

      const SAV_STORAGE_KEY = "entrepox-sav-tickets-v1";
      const LEGACY_SAV_STORAGE_KEYS = ["okistoki-sav-tickets-v1", "wmsito-sav-tickets-v1"];
      const SIDEBAR_STORAGE_KEY = "entrepox-sidebar-collapsed-v1";
      const LEGACY_SIDEBAR_STORAGE_KEY = "okistoki-sidebar-collapsed-v1";
      const RECEPTIONS_STORAGE_KEY = "entrepox-receptions-v1";
      const RECEPTION_AGENTS_STORAGE_KEY = "entrepox-reception-agents-v1";
      const ARCHIVE_LOG_STORAGE_KEY = "entrepox-archive-log-v1";
      const CLIENTS_STORAGE_KEY = "entrepox-clients-v1";
      const LEDGER_PRODUCTS_STORAGE_KEY = "entrepox-products-v1";
      const LEDGER_LOCATIONS_STORAGE_KEY = "entrepox-locations-v1";
      const LEDGER_SOURCE_DOCS_STORAGE_KEY = "entrepox-source-documents-v1";
      const LEDGER_MOVEMENTS_STORAGE_KEY = "entrepox-stock-movements-v1";
      const LEDGER_INVENTORY_SESSIONS_STORAGE_KEY = "entrepox-inventory-sessions-v1";
      const LEDGER_INVENTORY_COUNTS_STORAGE_KEY = "entrepox-inventory-counts-v1";
      const BILLING_PROFILES_STORAGE_KEY = "entrepox-billing-profiles-v1";
      const PRICING_RULE_SETS_STORAGE_KEY = "entrepox-pricing-rule-sets-v1";
      const STORAGE_SNAPSHOTS_STORAGE_KEY = "entrepox-storage-snapshots-v1";
      const BILLING_PREP_RATE_MIGRATION_KEY = "entrepox-billing-prep-rates-v1";
      const LEDGER_TRACE_LINKS_STORAGE_KEY = "entrepox-traceability-links-v1";

      const MOVEMENT_TYPE_LABELS = {
        IN: "Entrée",
        OUT: "Sortie",
        MOVE_OUT: "Déplacement sortie",
        MOVE_IN: "Déplacement entrée",
        ADJUST_IN: "Ajustement +",
        ADJUST_OUT: "Ajustement -",
      };

      const OUT_REASON_LABELS = {
        SHIPMENT_CLIENT: "Expédition client",
        RETURN_SUPPLIER: "Retour fournisseur",
        BREAKAGE: "Casse",
        LOSS: "Perte",
        INTERNAL_USE: "Usage interne",
        QUALITY_HOLD_REMOVAL: "Retrait qualité",
        DESTRUCTION: "Destruction",
        RETURN_TO_CLIENT: "Retour client",
      };

      const ADJUST_REASON_LABELS = {
        INVENTORY_RECONCILIATION: "Réconciliation inventaire",
        COUNTING_ERROR_CORRECTION: "Correction erreur de comptage",
        LOT_NOT_CONFIRMED_RECLASS: "Correction lot non confirmé",
        DLC_DATA_CORRECTION: "Correction DLC / DDM",
        BIO_STATUS_CORRECTION: "Correction statut BIO",
        LOCATION_CORRECTION: "Correction emplacement",
        DAMAGE_DECLARATION: "Déclaration casse",
        SYSTEM_IMPORT_FIX: "Correction import système",
      };

      const CONSUMABLE_OPTIONS = [
        { key: "carton", label: "Carton" },
        { key: "scotch", label: "Scotch" },
        { key: "pochette", label: "Pochette" },
        { key: "etiquette", label: "Étiquette" },
        { key: "document", label: "Document imprimé" },
        { key: "palette_eur", label: "Palette EUR" },
        { key: "palette_perdue", label: "Palette perdue" },
      ];

      function inferContractConsumables(client) {
        const billingItems = (((client || {}).billing || {}).consumables || {}).items || {};
        const note = normalizeString((((client || {}).contract || {}).materialsNotes) || "");
        return CONSUMABLE_OPTIONS.filter((item) => {
          if (Number(billingItems[item.key] || 0) > 0) {
            return true;
          }
          const normalizedLabel = normalizeString(item.label);
          return note.includes(normalizedLabel) || note.includes(item.key.replace("_", " "));
        }).map((item) => item.key);
      }

      function renderConsumableTags(keys) {
        const activeKeys = Array.isArray(keys) ? keys : [];
        return activeKeys.length
          ? activeKeys
              .map((key) => {
                const found = CONSUMABLE_OPTIONS.find((item) => item.key === key);
                return '<span class="chip">' + esc(found ? found.label : key) + "</span>";
              })
              .join("")
          : '<span class="badge bg">Aucun consommable défini</span>';
      }

      function ensureClientConsumables(client) {
        if (!client.contract) {
          client.contract = {};
        }
        if (!Array.isArray(client.contract.materialConsumables) || !client.contract.materialConsumables.length) {
          client.contract.materialConsumables = inferContractConsumables(client);
        }
        return client.contract.materialConsumables;
      }

      function getClientFlowLabel(client) {
        const chaine = normalizeString((client.features || {}).chaine || "");
        if (chaine === "froid") {
          return "Froid";
        }
        if (chaine === "sec") {
          return "Sec";
        }
        return "Froid + Sec";
      }

      function getLatestStorageSnapshotForClient(clientId) {
        return storageSnapshots
          .filter((item) => item.clientId === clientId)
          .sort((left, right) => right.eventDate.localeCompare(left.eventDate))[0] || null;
      }

      function estimateClientPallets(stockRows, client) {
        const catalogue = Array.isArray(client.catalogue) ? client.catalogue : [];
        const cartons = stockRows.reduce((sum, row) => {
          const ref = catalogue.find((item) => row.productName && row.productName.includes(item.nom.split(" · ")[0]));
          const pav = Number((ref && ref.pav) || 0);
          if (pav > 0) {
            return sum + row.theoreticalStock / pav;
          }
          return sum + row.theoreticalStock / 12;
        }, 0);
        return Math.max(0, Math.round(cartons / 40));
      }

      function getClientStockSummary(clientId) {
        const client = clientsDB[clientId];
        const rows = computeLedgerCurrentStock(false).filter((row) => row.ownerClientId === clientId);
        const units = rows.reduce((sum, row) => sum + Number(row.theoreticalStock || 0), 0);
        const latestSnapshot = getLatestStorageSnapshotForClient(clientId);
        const m2Cold = Number((latestSnapshot && latestSnapshot.m2Cold) || 0);
        const m2Dry = Number((latestSnapshot && latestSnapshot.m2Dry) || 0);
        const m2Total = Math.round(m2Cold + m2Dry);
        const pallets = estimateClientPallets(rows, client);
        const totalSurface = m2Total || 0;
        return {
          units,
          pallets,
          m2Total,
          m2Dry: Math.round(m2Dry),
          m2Cold: Math.round(m2Cold),
          coldShare: totalSurface ? Math.round((m2Cold / totalSurface) * 100) : 0,
          dryShare: totalSurface ? Math.round((m2Dry / totalSurface) * 100) : 0,
        };
      }

      function getClientReceptionSignal(clientId) {
        const today = getTodayIsoDate();
        const active = getActiveReceptionEntries().filter((entry) => entry.clientId === clientId && (entry.status === "planned" || entry.receptionDate === today));
        return active.length;
      }

      function getClientPriorityLabel(index, role) {
        if (index === 0) {
          return "Prioritaire · incident majeur";
        }
        if (normalizeString(role).includes("adv")) {
          return "Spécifique · commandes";
        }
        if (normalizeString(role).includes("commercial")) {
          return "Spécifique · commercial";
        }
        return "Secondaire";
      }

      function getClientSubjectLabel(role) {
        const normalizedRole = normalizeString(role);
        if (normalizedRole.includes("adv")) {
          return "Commandes B2B / B2C";
        }
        if (normalizedRole.includes("commercial")) {
          return "Marketing / commerce";
        }
        if (normalizedRole.includes("stock")) {
          return "Stock";
        }
        return "Opérations";
      }

      function getClientAvailability(contact, isWarehouse) {
        if (contact && contact.availability) {
          return contact.availability;
        }
        if (isWarehouse) {
          return "Lun-ven · 7h30-18h";
        }
        return "Lun-ven · à confirmer";
      }

      function buildClientContacts(client) {
        const contacts = [];
        if (client.contact && (client.contact.nom || client.contact.email || client.contact.tel)) {
          contacts.push({
            nom: client.contact.nom || "Contact principal",
            role: client.contact.role || "Opérations",
            email: client.contact.email || "",
            tel: client.contact.tel || "",
            availability: getClientAvailability(client.contact, false),
            priority: getClientPriorityLabel(0, client.contact.role || ""),
            subject: "Incident majeur",
          });
        }
        (client.users || []).forEach((user) => {
          if (contacts.some((item) => item.email && user.email && item.email === user.email)) {
            return;
          }
          contacts.push({
            nom: user.nom || "Utilisateur",
            role: user.role || "Utilisateur",
            email: user.email || "",
            tel: user.tel || "",
            availability: getClientAvailability(user, false),
            priority: getClientPriorityLabel(contacts.length, user.role || ""),
            subject: getClientSubjectLabel(user.role || ""),
          });
        });
        return contacts.slice(0, 4);
      }

      function buildCargonautesContacts(client) {
        const contacts = [];
        const commercial = client.contactCargonautes || {};
        if (commercial.nom || commercial.email || commercial.tel) {
          contacts.push({
            nom: commercial.nom || "Référent Cargonautes",
            role: commercial.role || "Responsable exploitation",
            email: commercial.email || "",
            tel: commercial.tel || "",
            slackTarget: commercial.slackTarget || "commercial",
            availability: getClientAvailability(commercial, false),
          });
        }
        contacts.push({
          nom: "Antoine G.",
          role: "Référent entrepôt",
          email: "entrepot@cargonautes.fr",
          tel: "01 84 60 28 40",
          slackTarget: "entrepot",
          availability: getClientAvailability(null, true),
        });
        return contacts;
      }

      function buildOperationalRules(client) {
        const rules = [];
        if ((client.features || {}).multiRef === false) {
          rules.push("Mono-référence encouragée");
        }
        if ((client.features || {}).dlcMode) {
          rules.push("Contrôle DLC");
        }
        if (normalizeString(((client.contract || {}).prepNotes || "")).includes("lot")) {
          rules.push("Contrôle lot");
        }
        if ((client.features || {}).bl) {
          rules.push("BL signé");
          rules.push("Photo si non signé");
        }
        rules.push("Nom de réception obligatoire");
        if (normalizeString(((client.contract || {}).prepNotes || "")).includes("fifo") || (client.catalogue || []).some((item) => normalizeString(item.cible).includes("fifo"))) {
          rules.push("FIFO");
        }
        return [...new Set(rules)];
      }

      function buildPreparationFacts(client) {
        const formats = [...new Set((client.catalogue || []).map((item) => item.format).filter(Boolean))].slice(0, 3).join(" · ") || "À préciser";
        return [
          { label: "Type", value: (client.features || {}).multiRef ? "Multi-référence" : "Mono-référence" },
          { label: "Unités", value: (client.features || {}).pav ? "Unité + carton" : "Carton / colis" },
          { label: "Formats", value: formats },
          { label: "Complexité", value: (client.features || {}).multiRef ? "Multi-SKU sensible" : "Flux simple" },
        ];
      }

      function buildServiceRecap(client) {
        const expected = []
          .concat((client.contract || {}).prepRequirements || [])
          .concat((client.features || {}).chaine === "froid" ? ["Respect chaîne du froid"] : [])
          .slice(0, 4);
        const delivered = []
          .concat(buildOperationalRules(client).slice(0, 3))
          .concat((client.features || {}).cyke ? ["Suivi Cyke"] : [])
          .concat((client.features || {}).bl ? ["BL systématique"] : [])
          .slice(0, 4);
        return {
          expected: expected.length ? expected : ["Cadre à préciser"],
          delivered: delivered.length ? delivered : ["Exécution standard entrepôt"],
        };
      }

      function renderContactCards(contacts, type) {
        return '<div class="client-sheet-contact-list">' +
          contacts
            .map((contact, index) =>
              '<article class="client-sheet-contact' + (type === "client" && index === 0 ? " is-priority" : "") + '">' +
              '<div class="client-sheet-contact-head"><div class="client-sheet-contact-main"><strong>' +
              esc(contact.nom) +
              "</strong><span class='mini'>" +
              esc(contact.role) +
              "</span></div>" +
              (type === "client"
                ? '<span class="client-contact-priority">' + esc(index === 0 ? "Prioritaire" : contact.priority) + "</span>"
                : (contact.slackTarget ? '<a class="mini" href="' + esc(buildSlackLink(contact.slackTarget)) + '" target="_blank" rel="noreferrer">Slack</a>' : "")) +
              "</div><div class='client-sheet-contact-meta'>" +
              (contact.subject ? "<span>" + esc(contact.subject) + "</span>" : "") +
              "<span>" + esc(contact.availability || "Disponibilité à préciser") + "</span></div><div class='client-sheet-contact-meta'>" +
              (contact.tel ? "<span>" + esc(contact.tel) + "</span>" : "") +
              (contact.email ? '<a href="mailto:' + esc(contact.email) + '">' + esc(contact.email) + "</a>" : "") +
              "</div>" +
              "</article>"
            )
            .join("") +
          "</div>";
      }

      function renderClientOperationalSheet(client) {
        const stock = getClientStockSummary(client.id);
        const contactsClient = buildClientContacts(client);
        const contactsCg = buildCargonautesContacts(client);
        const rules = buildOperationalRules(client);
        const prepFacts = buildPreparationFacts(client);
        const recap = buildServiceRecap(client);
        const consumables = ensureClientConsumables(client);
        const openTickets = SAV_TICKETS.filter((ticket) => ticket.clientId === client.id && ticket.status !== "Résolu").length;
        const activeReceptions = getClientReceptionSignal(client.id);
        return `
          <div class="client-sheet">
            <section class="client-sheet-header">
              <div class="client-sheet-header-top">
                <div class="client-sheet-title">
                  <p class="eyebrow">${esc(client.secteur)}</p>
                  <h2>${esc(client.nom)}</h2>
                  <div class="client-sheet-tag-row">
                    ${(client.certifications || []).map((cert) => `<span class="chip">${esc(cert)}</span>`).join("")}
                  </div>
                </div>
                <div class="client-sheet-actions">
                  <button class="btn primary sm" type="button" onclick="openClientConfiguration()">Configurer</button>
                  <button class="btn soft sm" type="button" onclick="visualiserClient()">Voir le portail</button>
                  <button class="btn sm" type="button" onclick="openQuickTicket({ clientId: '${esc(client.id)}', sourceType: 'client', sourceId: '${esc(client.id)}', title: 'Sujet client à qualifier', summary: 'Ticket créé depuis la fiche client.' })">Créer ticket</button>
                  <span class="badge ${accentBadge(client.accentVar)}">${esc(client.statut)}</span>
                  <button class="btn soft sm" type="button" onclick="closeClientFiche()">Fermer</button>
                </div>
              </div>
            </section>
            <div class="client-sheet-grid">
              <div class="client-sheet-main">
                <section class="client-sheet-card">
                  <div class="client-sheet-card-head">
                    <div><p class="eyebrow">Pilotage</p></div>
                  </div>
                  <div class="client-sheet-metrics">
                    <div class="client-sheet-metric"><span class="eyebrow">Cutoff principal</span><strong>${esc(client.cutoff.h + "h")}</strong></div>
                    <div class="client-sheet-metric"><span class="eyebrow">Flux</span><strong>${esc(getClientFlowLabel(client))}</strong></div>
                    <div class="client-sheet-metric"><span class="eyebrow">Tickets ouverts</span><strong>${esc(String(openTickets))}</strong></div>
                    <div class="client-sheet-metric"><span class="eyebrow">Réceptions actives</span><strong>${esc(String(activeReceptions))}</strong></div>
                  </div>
                </section>
                <section class="client-sheet-card">
                  <div class="client-sheet-card-head">
                    <div><p class="eyebrow">Stock</p></div>
                  </div>
                  <div class="client-sheet-metrics">
                    <div class="client-sheet-metric"><span class="eyebrow">Unités</span><strong>${esc(String(stock.units))}</strong></div>
                    <div class="client-sheet-metric"><span class="eyebrow">Palettes</span><strong>${esc(String(stock.pallets))}</strong></div>
                    <div class="client-sheet-metric"><span class="eyebrow">Surface</span><strong>${esc(String(stock.m2Total).replace(".", ","))} m²</strong></div>
                    <div class="client-sheet-metric"><span class="eyebrow">Répartition</span><strong>${esc("Froid " + stock.coldShare + "% · Sec " + stock.dryShare + "%")}</strong></div>
                  </div>
                  <div class="client-sheet-stock-line mini">
                    <span>Froid ${esc(String(stock.m2Cold).replace(".", ","))} m²</span>
                    <span>Sec ${esc(String(stock.m2Dry).replace(".", ","))} m²</span>
                  </div>
                </section>
                <section class="client-sheet-card">
                  <div class="client-sheet-card-head">
                    <div><p class="eyebrow">Règles opérationnelles</p></div>
                  </div>
                  <div class="client-sheet-checklist">
                    ${rules.map((rule) => `<span class="client-sheet-rule">${esc(rule)}</span>`).join("")}
                  </div>
                </section>
                <section class="client-sheet-card">
                  <div class="client-sheet-card-head">
                    <div><p class="eyebrow">Préparation</p></div>
                  </div>
                  <dl class="client-sheet-definition">
                    ${prepFacts.map((item) => `<dt>${esc(item.label)}</dt><dd>${esc(item.value)}</dd>`).join("")}
                  </dl>
                </section>
                <section class="client-sheet-card">
                  <div class="client-sheet-card-head">
                    <div><p class="eyebrow">Consommables</p></div>
                    <button class="btn soft sm" type="button" onclick="openClientConsumablePicker()">+</button>
                  </div>
                  <div class="client-sheet-tag-row">
                    ${renderConsumableTags(consumables)}
                  </div>
                </section>
                <section class="client-sheet-card">
                  <div class="client-sheet-card-head">
                    <div><p class="eyebrow">Récap prestation</p></div>
                  </div>
                  <div class="client-sheet-service-grid">
                    <div class="client-sheet-service-block">
                      <strong>Ce que le client attend</strong>
                      <ul>${recap.expected.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
                    </div>
                    <div class="client-sheet-service-block">
                      <strong>Ce que nous faisons</strong>
                      <ul>${recap.delivered.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
                    </div>
                  </div>
                </section>
              </div>
              <div class="client-sheet-side">
                <section class="client-sheet-card compact-head">
                  <p class="eyebrow">Contacts client</p>
                  ${renderContactCards(contactsClient, "client")}
                </section>
                <section class="client-sheet-card compact-head">
                  <p class="eyebrow">Contacts Cargonautes</p>
                  ${renderContactCards(contactsCg, "cg")}
                </section>
              </div>
            </div>
          </div>
        `;
      }

      function openClientConfiguration(tabId) {
        currentClientViewMode = "configure";
        currentFicheTab = tabId || currentFicheTab || "infos";
        renderOverlay();
      }

      function openClientConfigurationFor(clientId, tabId) {
        currentClientId = clientId;
        currentClientViewMode = "configure";
        currentFicheTab = tabId || "infos";
        openOverlay("clientFiche", { clientId: clientId });
      }

      function returnToClientOverview() {
        applyClientFicheTabChanges(currentFicheTab);
        currentClientViewMode = "overview";
        overlayState = { type: "clientFiche", payload: { clientId: currentClientId } };
        renderOverlay();
      }

      function openClientConsumablePicker() {
        consumablePickerSearch = "";
        openOverlay("clientConsumablePicker", { clientId: currentClientId });
      }

      function setConsumablePickerSearch(value) {
        consumablePickerSearch = value || "";
        renderOverlay();
      }

      function addClientConsumable(key) {
        const client = clientsDB[currentClientId];
        const selected = ensureClientConsumables(client);
        if (!selected.includes(key)) {
          selected.push(key);
        }
        if (!client.billing.consumables.items[key]) {
          client.billing.consumables.items[key] = 0;
        }
        persistClientsStore();
        renderClientCards();
        returnToClientOverview();
      }

      function createClientConsumable() {
        const raw = consumablePickerSearch.trim();
        if (!raw) {
          return;
        }
        const key = normalizeString(raw).replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
        if (!key) {
          return;
        }
        if (!CONSUMABLE_OPTIONS.some((item) => item.key === key)) {
          CONSUMABLE_OPTIONS.push({ key: key, label: raw });
        }
        addClientConsumable(key);
      }

      const DEFAULT_RECEPTIONS = [
        {
          id: "REC-2026-003",
          clientId: "joyons",
          receptionDate: "2026-04-18",
          palettesSolEurope: 0,
          palettesSolPerdues: 0,
          palettesRenduesEurope: 0,
          palettesRenduesPerdues: 0,
          storageMode: "sec",
          temperature: null,
          transporteur: "GEODIS",
          arrivalTime: "14:30",
          vehiclePlate: "AA-518-JY",
          anomaly: null,
          ticketId: null,
          createdAt: "18/04/2026 08:10",
          stockStatus: "Prévu",
          billingStatus: "À réceptionner",
          status: "planned",
        },
        {
          id: "REC-2026-001",
          clientId: "popmate",
          receptionDate: "2026-04-17",
          palettesSolEurope: 4,
          palettesSolPerdues: 0,
          palettesRenduesEurope: 4,
          palettesRenduesPerdues: 0,
          storageMode: "sec",
          temperature: null,
          transporteur: "DB Schenker",
          arrivalTime: "08:35",
          vehiclePlate: "FR-482-PM",
          anomaly: null,
          ticketId: null,
          createdAt: "17/04/2026 08:41",
          stockStatus: "Disponible",
          billingStatus: "Réception à facturer",
          status: "received",
        },
        {
          id: "REC-2026-002",
          clientId: "yumi",
          receptionDate: "2026-04-17",
          palettesSolEurope: 3,
          palettesSolPerdues: 1,
          palettesRenduesEurope: 2,
          palettesRenduesPerdues: 0,
          storageMode: "frais",
          temperature: 3.8,
          transporteur: "STEF",
          arrivalTime: "10:12",
          vehiclePlate: "GV-931-YM",
          anomaly: {
            title: "Palette Europe cassée à réception",
            detail: "Une palette Europe reçue avec film déchiré et coin palette cassé. Photos à transmettre au client.",
            severity: "Haute",
          },
          ticketId: null,
          createdAt: "17/04/2026 10:18",
          stockStatus: "Disponible avec réserve",
          billingStatus: "Réception + manutention",
          status: "received",
        },
      ];

      const RECEPTION_AGENTS_SEED = ["Sophie B.", "Hugo M.", "Nora T.", "Antoine G.", "ADV Cargonautes"];
      const DEFAULT_TRANSPORTEURS_SEED = ["STEF", "DB Schenker", "Chronofresh", "GEODIS", "Kuehne+Nagel"];
      const RECEPTION_BIO_CHECK_GROUPS = [
        {
          key: "transport",
          title: "Contrôle transport",
          items: [
            { key: "enclosureTemperature", label: "Température de l’enceinte" },
            { key: "betweenPackagesTemperature", label: "Température entre 2 conditionnements" },
            { key: "vehicleCleanliness", label: "Propreté véhicule" },
            { key: "vehicleMaintenance", label: "Maintenance véhicule" },
            { key: "scheduleCompliance", label: "Respect horaire" },
          ],
        },
        {
          key: "bio",
          title: "Checklist BIO produits",
          items: [
            { key: "visualVerification", label: "Vérification visuelle", hint: "Logo BIO et lisibilité de l’étiquette." },
            { key: "documentVerification", label: "Vérification documentaire", hint: "Certificats fournisseur et documents de traçabilité." },
            { key: "traceabilityVerification", label: "Vérification de la traçabilité", hint: "Chaîne d’approvisionnement complète et cohérente." },
            { key: "productIntegrity", label: "Intégrité des produits", hint: "Pas de contamination non BIO, conditions de transport respectées." },
          ],
        },
      ];

      const LEDGER_PRODUCTS_SEED = [
        { id: "prd-yum-am240", ownerClientId: "yumi", sku: "AM240", productMasterName: "Amour BIO 240mL", unit: "unité", isBioTracked: true, minimumInventoryUnits: 48, inventoryFrequencyWeeks: 1, actif: true },
        { id: "prd-yum-abs60", ownerClientId: "yumi", sku: "ABS60", productMasterName: "Absolu BIO 60mL", unit: "unité", isBioTracked: true, minimumInventoryUnits: 64, inventoryFrequencyWeeks: 1, actif: true },
        { id: "prd-pop-ob", ownerClientId: "popmate", sku: "PM-OB", productMasterName: "Pop Maté Original · bouteilles", unit: "unité", isBioTracked: true, minimumInventoryUnits: 120, inventoryFrequencyWeeks: 1, actif: true },
        { id: "prd-pop-oc", ownerClientId: "popmate", sku: "PM-OC", productMasterName: "Pop Maté Original · canettes", unit: "unité", isBioTracked: true, minimumInventoryUnits: 144, inventoryFrequencyWeeks: 1, actif: true },
        { id: "prd-joy-rouge", ownerClientId: "joyons", sku: "JY-R", productMasterName: "Joyons Rouge · bouteilles", unit: "unité", isBioTracked: true, minimumInventoryUnits: 96, inventoryFrequencyWeeks: 2, actif: true },
        { id: "prd-joy-blanc", ownerClientId: "joyons", sku: "JY-B", productMasterName: "Joyons Blanc · bouteilles", unit: "unité", isBioTracked: true, minimumInventoryUnits: 96, inventoryFrequencyWeeks: 2, actif: true },
        { id: "prd-joy-rose", ownerClientId: "joyons", sku: "JY-RS", productMasterName: "Joyons Rosé · bouteilles", unit: "unité", isBioTracked: true, minimumInventoryUnits: 72, inventoryFrequencyWeeks: 2, actif: true },
        { id: "prd-joy-petnat", ownerClientId: "joyons", sku: "JY-PN", productMasterName: "Joyons Pet Nat · bouteilles", unit: "unité", isBioTracked: true, minimumInventoryUnits: 72, inventoryFrequencyWeeks: 2, actif: true },
      ];

      const LEDGER_LOCATIONS_SEED = [
        { id: "loc-zbio-a01", locationCode: "Z-BIO · A-01", locationLabel: "Zone BIO A-01", bioZone: true, actif: true },
        { id: "loc-zbio-b01", locationCode: "Z-BIO · B-01", locationLabel: "Zone BIO B-01", bioZone: true, actif: true },
        { id: "loc-zbio-pm", locationCode: "Z-BIO · PM", locationLabel: "Zone BIO Pop Maté", bioZone: true, actif: true },
        { id: "loc-zbio-joy", locationCode: "Z-BIO · JY", locationLabel: "Zone BIO Joyons", bioZone: true, actif: true },
        { id: "loc-zsec-01", locationCode: "Z-SEC · 01", locationLabel: "Zone sèche 01", bioZone: false, actif: true },
      ];

      const LEDGER_SOURCE_DOCUMENTS_SEED = [
        { id: "doc-ledger-yum-in-001", ownerClientId: "yumi", docType: "ASN", docRef: "ASN-YUMI-2026-0415", docDate: "2026-04-15T08:30:00.000Z", createdAt: "2026-04-15T08:30:00.000Z" },
        { id: "doc-ledger-pop-in-001", ownerClientId: "popmate", docType: "RECEPTION", docRef: "POP-REC-2025-0401", docDate: "2025-04-01T09:15:00.000Z", createdAt: "2025-04-01T09:15:00.000Z" },
        { id: "doc-ledger-joy-inv-001", ownerClientId: "joyons", docType: "INVENTAIRE", docRef: "JOY-INV-2025-0505", docDate: "2025-05-05T17:00:00.000Z", createdAt: "2025-05-05T17:00:00.000Z" },
      ];

      const LEDGER_MOVEMENTS_SEED = [
        {
          id: "mov-ledger-yum-in-001",
          movementGroupId: null,
          movementType: "IN",
          ownerClientId: "yumi",
          productId: "prd-yum-am240",
          productLabelSnapshot: "Amour BIO 240mL",
          quantity: 120,
          unit: "unité",
          bioStatus: "BIO",
          locationId: "loc-zbio-b01",
          eventTimestamp: "2026-04-15T08:35:00.000Z",
          userId: "usr-sophie",
          sourceDocumentId: "doc-ledger-yum-in-001",
          sourceDocumentReference: "ASN-YUMI-2026-0415",
          outReasonCode: null,
          adjustReasonCode: null,
          lot: "L260415A",
          lotStatus: "CONFIRMED",
          dlc: "2026-05-20",
          confidenceLevel: "CONFIRMED",
          traceabilityStatus: "CONFIRMED",
          inventorySessionId: null,
          comment: "Réception fournisseur validée",
          reversalOfMovementId: null,
          createdAt: "2026-04-15T08:35:00.000Z",
        },
        {
          id: "mov-ledger-yum-out-001",
          movementGroupId: null,
          movementType: "OUT",
          ownerClientId: "yumi",
          productId: "prd-yum-am240",
          productLabelSnapshot: "Amour BIO 240mL",
          quantity: 24,
          unit: "unité",
          bioStatus: "BIO",
          locationId: "loc-zbio-b01",
          eventTimestamp: "2026-04-16T11:10:00.000Z",
          userId: "usr-hugo",
          sourceDocumentId: null,
          sourceDocumentReference: "BL-YUMI-110735",
          outReasonCode: "SHIPMENT_CLIENT",
          adjustReasonCode: null,
          lot: "L260415A",
          lotStatus: "CONFIRMED",
          dlc: "2026-05-20",
          confidenceLevel: "CONFIRMED",
          traceabilityStatus: "CONFIRMED",
          inventorySessionId: null,
          comment: "Sortie client confirmée",
          reversalOfMovementId: null,
          createdAt: "2026-04-16T11:10:00.000Z",
        },
        {
          id: "mov-ledger-pop-in-001",
          movementGroupId: null,
          movementType: "IN",
          ownerClientId: "popmate",
          productId: "prd-pop-ob",
          productLabelSnapshot: "Pop Maté Original · bouteilles",
          quantity: 600,
          unit: "unité",
          bioStatus: "BIO",
          locationId: "loc-zbio-pm",
          eventTimestamp: "2025-04-01T09:20:00.000Z",
          userId: "usr-sophie",
          sourceDocumentId: "doc-ledger-pop-in-001",
          sourceDocumentReference: "POP-REC-2025-0401",
          outReasonCode: null,
          adjustReasonCode: null,
          lot: "L240401O",
          lotStatus: "CONFIRMED",
          dlc: null,
          confidenceLevel: "CONFIRMED",
          traceabilityStatus: "CONFIRMED",
          inventorySessionId: null,
          comment: "Réception Pop Maté",
          reversalOfMovementId: null,
          createdAt: "2025-04-01T09:20:00.000Z",
        },
        {
          id: "mov-ledger-pop-out-001",
          movementGroupId: null,
          movementType: "OUT",
          ownerClientId: "popmate",
          productId: "prd-pop-ob",
          productLabelSnapshot: "Pop Maté Original · bouteilles",
          quantity: 48,
          unit: "unité",
          bioStatus: "BIO",
          locationId: "loc-zbio-pm",
          eventTimestamp: "2025-04-03T14:00:00.000Z",
          userId: "usr-nora",
          sourceDocumentId: null,
          sourceDocumentReference: "CYKE-900723",
          outReasonCode: "SHIPMENT_CLIENT",
          adjustReasonCode: null,
          lot: null,
          lotStatus: "NOT_CONFIRMED",
          dlc: null,
          confidenceLevel: "INFERRED",
          traceabilityStatus: "INFERRED",
          inventorySessionId: null,
          comment: "Sortie client sans lot confirmé",
          reversalOfMovementId: null,
          createdAt: "2025-04-03T14:00:00.000Z",
        },
        {
          id: "mov-ledger-joy-in-001",
          movementGroupId: null,
          movementType: "IN",
          ownerClientId: "joyons",
          productId: "prd-joy-blanc",
          productLabelSnapshot: "Joyons Blanc · bouteilles",
          quantity: 864,
          unit: "unité",
          bioStatus: "BIO",
          locationId: "loc-zbio-joy",
          eventTimestamp: "2025-04-16T09:00:00.000Z",
          userId: "usr-sophie",
          sourceDocumentId: null,
          sourceDocumentReference: "JOY-REC-2025-0416",
          outReasonCode: null,
          adjustReasonCode: null,
          lot: null,
          lotStatus: "NOT_CONFIRMED",
          dlc: null,
          confidenceLevel: "CONFIRMED",
          traceabilityStatus: "UNKNOWN",
          inventorySessionId: null,
          comment: "Réception client sans détail lot/millésime",
          reversalOfMovementId: null,
          createdAt: "2025-04-16T09:00:00.000Z",
        },
        {
          id: "mov-ledger-joy-adjust-out-001",
          movementGroupId: null,
          movementType: "ADJUST_OUT",
          ownerClientId: "joyons",
          productId: "prd-joy-blanc",
          productLabelSnapshot: "Joyons Blanc · bouteilles",
          quantity: 12,
          unit: "unité",
          bioStatus: "BIO",
          locationId: "loc-zbio-joy",
          eventTimestamp: "2025-05-05T17:20:00.000Z",
          userId: "usr-sophie",
          sourceDocumentId: "doc-ledger-joy-inv-001",
          sourceDocumentReference: "JOY-INV-2025-0505",
          outReasonCode: null,
          adjustReasonCode: "INVENTORY_RECONCILIATION",
          lot: null,
          lotStatus: "NOT_CONFIRMED",
          dlc: null,
          confidenceLevel: "ADJUSTED",
          traceabilityStatus: "UNKNOWN",
          inventorySessionId: "invsess-seed-joy-001",
          comment: "Réconciliation inventaire sans lot confirmé",
          reversalOfMovementId: null,
          createdAt: "2025-05-05T17:20:00.000Z",
        },
      ];

      const LEDGER_INVENTORY_SESSIONS_SEED = [
        {
          id: "invsess-seed-joy-001",
          ownerClientId: "joyons",
          sessionDate: "2025-05-05",
          inventoryType: "scheduled",
          temperatureZone: "dry",
          nonBillable: false,
          reason: "Contrôle hebdomadaire planifié",
          scope: "LOCATION",
          scopeReference: "Z-BIO · JY",
          createdBy: "usr-sophie",
          validatedBy: "usr-hugo",
          status: "VALIDATED",
          durationMinutes: 52,
          comment: "Contrôle hebdo Joyons BIO",
          createdAt: "2025-05-05T16:30:00.000Z",
        },
      ];

      const LEDGER_INVENTORY_COUNTS_SEED = [
        {
          id: "invcount-seed-joy-001",
          inventorySessionId: "invsess-seed-joy-001",
          ownerClientId: "joyons",
          productId: "prd-joy-blanc",
          locationId: "loc-zbio-joy",
          lot: null,
          lotStatus: "NOT_CONFIRMED",
          dlc: null,
          countedQuantity: 300,
          unit: "unité",
          bioStatus: "BIO",
          countedBy: "usr-sophie",
          countedAt: "2025-05-05T16:45:00.000Z",
          comment: "Inventaire client",
        },
      ];

      const LEDGER_TRACE_LINKS_SEED = [
        {
          id: "trl-seed-yum-001",
          ownerClientId: "yumi",
          outboundMovementId: "mov-ledger-yum-out-001",
          inboundMovementId: "mov-ledger-yum-in-001",
          linkedQuantity: 24,
          linkStatus: "CONFIRMED",
          linkMethod: "AUTO_CONFIRMED",
          createdBy: "system",
          createdAt: "2026-04-16T11:11:00.000Z",
          comment: null,
        },
      ];

      const STORAGE_SNAPSHOTS_SEED = [
        { id: "stg-yumi-2026-04", clientId: "yumi", eventDate: "2026-04-01", m2Dry: 1.1, m2Cold: 3.6, comment: "Snapshot mensuel froid dominant" },
        { id: "stg-popmate-2026-04", clientId: "popmate", eventDate: "2026-04-01", m2Dry: 4.2, m2Cold: 0, comment: "Stock sec sur palettes et étagères" },
        { id: "stg-joyons-2026-04", clientId: "joyons", eventDate: "2026-04-01", m2Dry: 2.8, m2Cold: 0, comment: "Bouteilles BIO · zone sèche" },
      ];

      function cloneSeed(value) {
        return JSON.parse(JSON.stringify(value));
      }

      function loadLocalCollection(key, seed) {
        try {
          const raw = window.localStorage.getItem(key);
          return raw ? JSON.parse(raw) : cloneSeed(seed);
        } catch (error) {
          console.warn("Lecture localStorage impossible", key, error);
          return cloneSeed(seed);
        }
      }

      function loadSiteThemeId() {
        try {
          const raw = window.localStorage.getItem(SITE_THEME_STORAGE_KEY);
          return raw ? JSON.parse(raw) : SITE_THEME_DEFAULT;
        } catch (error) {
          console.warn("Lecture thème impossible", error);
          return SITE_THEME_DEFAULT;
        }
      }

      const DEFAULT_SAV_TICKETS = [
        {
          id: "TKT-089",
          clientId: "yumi",
          sourceType: "shipment",
          sourceId: "Expe0112525",
          sourceLabel: "BL · Expe0112525",
          status: "Ouvert",
          priority: "Critique",
          owner: "ADV Cargonautes",
          slaDueAt: "2026-04-16T10:30:00",
          title: "BL absent à la livraison",
          summary: "Le coursier est passé sans BL dans la pochette pour Biocoop Lancry.",
          createdAt: "16/04/2026 08:12",
          tags: ["BL", "transport", "signature"],
          events: [
            { label: "Ticket créé", detail: "Créé depuis un incident livraison BL.", at: "16/04/2026 08:12" },
          ],
          messages: [
            {
              kind: "public",
              author: "Client",
              text: "Le coursier est passé sans BL dans la pochette.",
              at: "08:12",
              attachments: [{ name: "photo-livraison.jpg", mimeType: "image/jpeg", size: 184000, dataUrl: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" }],
            },
            { kind: "internal", author: "Sophie B.", text: "Vérifier impression Cyke et poste quai 2.", at: "08:15" },
          ],
          waitingOn: "cargonautes",
        },
        {
          id: "TKT-087",
          clientId: "yumi",
          sourceType: "prep",
          sourceId: "PREP-2026-143",
          sourceLabel: "Prépa · PREP-2026-143",
          status: "En cours",
          priority: "Critique",
          owner: "Hugo M.",
          slaDueAt: "2026-04-16T12:00:00",
          title: "Étiquettes DLC incohérentes",
          summary: "Deux cartons affichent une DLC différente du BL avant départ Chronofresh.",
          createdAt: "16/04/2026 07:42",
          tags: ["DLC", "étiquette", "qualité"],
          events: [
            { label: "Ticket créé", detail: "Prépa Chronofresh en écart DLC.", at: "16/04/2026 07:42" },
          ],
          messages: [
            { kind: "public", author: "Client", text: "Deux cartons affichent une DLC différente du BL.", at: "07:42" },
            { kind: "internal", author: "Hugo M.", text: "Corriger le lot 6082078 sur les étiquettes de reprise.", at: "07:56" },
          ],
        },
        {
          id: "TKT-085",
          clientId: "rebelle",
          sourceType: "lot",
          sourceId: "250409B",
          sourceLabel: "Lot · 250409B",
          status: "En attente",
          priority: "Haute",
          owner: "Nora T.",
          slaDueAt: "2026-04-16T15:00:00",
          title: "Écart lot / DLC sur BL",
          summary: "Le lot du chutney ne correspond pas à la photo transmise au client.",
          createdAt: "15/04/2026 17:14",
          tags: ["lot", "BL", "photo"],
          events: [
            { label: "Ticket créé", detail: "Réclamation lot / photo côté client.", at: "15/04/2026 17:14" },
          ],
          messages: [
            { kind: "public", author: "Client", text: "Le lot du chutney ne correspond pas à la photo reçue.", at: "Hier" },
          ],
          waitingOn: "cargonautes",
        },
        {
          id: "TKT-079",
          clientId: "xoco",
          sourceType: "client",
          sourceId: "xoco",
          sourceLabel: "Client · Xoco",
          status: "Résolu",
          priority: "Normale",
          owner: "ADV Cargonautes",
          slaDueAt: "2026-04-15T16:00:00",
          title: "Demande de formatage export",
          summary: "Le client souhaitait un CSV simplifié pour contrôle interne.",
          createdAt: "14/04/2026 11:08",
          tags: ["export", "csv"],
          events: [
            { label: "Ticket créé", detail: "Demande export manuelle.", at: "14/04/2026 11:08" },
            { label: "Ticket résolu", detail: "Export simplifié transmis.", at: "14/04/2026 15:42" },
          ],
          messages: [
            {
              kind: "internal",
              author: "Ops",
              text: "Changement livré via export manuel.",
              at: "14/04",
              attachments: [{ name: "export-xoco.csv", mimeType: "text/csv", size: 4200, dataUrl: "data:text/csv;charset=utf-8,commande;statut%0AEX-01;envoy%C3%A9" }],
            },
          ],
          waitingOn: null,
        },
      ];

      let SAV_TICKETS = [];
      let RECEPTIONS_LOG = loadLocalCollection(RECEPTIONS_STORAGE_KEY, DEFAULT_RECEPTIONS).map((entry) => {
        if (isBioClient(entry.clientId)) {
          return {
            ...entry,
            bioControl: entry.bioControl
              ? normalizeReceptionBioControl(entry.bioControl)
              : entry.status === "received"
                ? buildReceptionBioControlTemplate("conforme")
                : null,
          };
        }
        return {
          ...entry,
          bioControl: null,
        };
      });
      let siteOperations = loadLocalCollection(SITE_OPERATIONS_STORAGE_KEY, SITE_OPERATIONS_DEFAULT);
      let siteBanner = loadLocalCollection(SITE_BANNER_STORAGE_KEY, { title: "", body: "", audience: "team", active: false });
      let siteThemeId = loadSiteThemeId();
      let ledgerProducts = loadLocalCollection(LEDGER_PRODUCTS_STORAGE_KEY, LEDGER_PRODUCTS_SEED);
      let ledgerLocations = loadLocalCollection(LEDGER_LOCATIONS_STORAGE_KEY, LEDGER_LOCATIONS_SEED);
      let ledgerSourceDocuments = loadLocalCollection(LEDGER_SOURCE_DOCS_STORAGE_KEY, LEDGER_SOURCE_DOCUMENTS_SEED);
      let ledgerMovements = loadLocalCollection(LEDGER_MOVEMENTS_STORAGE_KEY, LEDGER_MOVEMENTS_SEED);
      let ledgerInventorySessions = loadLocalCollection(LEDGER_INVENTORY_SESSIONS_STORAGE_KEY, LEDGER_INVENTORY_SESSIONS_SEED);
      let ledgerInventoryCounts = loadLocalCollection(LEDGER_INVENTORY_COUNTS_STORAGE_KEY, LEDGER_INVENTORY_COUNTS_SEED);
      let ledgerTraceabilityLinks = loadLocalCollection(LEDGER_TRACE_LINKS_STORAGE_KEY, LEDGER_TRACE_LINKS_SEED);
      let storageSnapshots = loadLocalCollection(STORAGE_SNAPSHOTS_STORAGE_KEY, STORAGE_SNAPSHOTS_SEED);
      let receptionAgents = loadLocalCollection(RECEPTION_AGENTS_STORAGE_KEY, RECEPTION_AGENTS_SEED);
      let archiveLog = loadLocalCollection(ARCHIVE_LOG_STORAGE_KEY, []);
      let billingProfiles = loadLocalCollection(BILLING_PROFILES_STORAGE_KEY, []);
      let pricingRuleSets = loadLocalCollection(PRICING_RULE_SETS_STORAGE_KEY, []);

      function persistClientsStore() {
        try {
          window.localStorage.setItem(CLIENTS_STORAGE_KEY, JSON.stringify(clientsDB));
        } catch (error) {
          console.warn("Impossible de persister les fiches clients.", error);
        }
      }

      const LEDGER_PRODUCT_DEFAULTS = Object.fromEntries(
        LEDGER_PRODUCTS_SEED.map((product) => [
          product.id,
          {
            minimumInventoryUnits: product.minimumInventoryUnits || 0,
            inventoryFrequencyWeeks: product.inventoryFrequencyWeeks || 1,
          },
        ])
      );

      ledgerProducts = ledgerProducts.map((product) => ({
        ...product,
        minimumInventoryUnits:
          typeof product.minimumInventoryUnits === "number"
            ? product.minimumInventoryUnits
            : ((LEDGER_PRODUCT_DEFAULTS[product.id] || {}).minimumInventoryUnits || 0),
        inventoryFrequencyWeeks:
          typeof product.inventoryFrequencyWeeks === "number"
            ? product.inventoryFrequencyWeeks
            : ((LEDGER_PRODUCT_DEFAULTS[product.id] || {}).inventoryFrequencyWeeks || 1),
      }));

      ledgerInventorySessions = ledgerInventorySessions.map((session) => ({
        ...session,
        inventoryType: session.inventoryType || "scheduled",
        temperatureZone: session.temperatureZone || "dry",
        nonBillable: Boolean(session.nonBillable),
        reason: session.reason || null,
        durationMinutes:
          typeof session.durationMinutes === "number"
            ? session.durationMinutes
            : null,
      }));

      storageSnapshots = storageSnapshots.map((snapshot) => ({
        ...snapshot,
        m2Dry: Number(snapshot.m2Dry || 0),
        m2Cold: Number(snapshot.m2Cold || 0),
      }));

      function applyStoredBillingProfiles() {
        if (!billingProfiles.length) {
          return;
        }
        billingProfiles.forEach((profile) => {
          const client = clientsDB[profile.clientId];
          if (!client) {
            return;
          }
          client.billing = buildBillingConfig(profile.blocks || {}, client.cutoff);
        });
      }

      function syncPricingStoresFromClients() {
        billingProfiles = Object.values(clientsDB).map((client) => buildBillingProfileFromClient(client));
        pricingRuleSets = billingProfiles.map((profile) => buildPricingRuleSetFromProfile(profile));
        window.localStorage.setItem(BILLING_PROFILES_STORAGE_KEY, JSON.stringify(billingProfiles));
        window.localStorage.setItem(PRICING_RULE_SETS_STORAGE_KEY, JSON.stringify(pricingRuleSets));
        window.localStorage.setItem(STORAGE_SNAPSHOTS_STORAGE_KEY, JSON.stringify(storageSnapshots));
      }

      function getStorageSnapshotMonthKey(dateString) {
        return String(dateString || new Date().toISOString().slice(0, 10)).slice(0, 7);
      }

      function upsertStorageSnapshot(clientId, monthKey, m2Dry, m2Cold) {
        const eventDate = monthKey + "-01";
        const existing = storageSnapshots.find((item) => item.clientId === clientId && getStorageSnapshotMonthKey(item.eventDate) === monthKey);
        if (existing) {
          existing.m2Dry = Math.round(Number(m2Dry || 0));
          existing.m2Cold = Math.round(Number(m2Cold || 0));
          existing.eventDate = eventDate;
          return existing;
        }
        const created = {
          id: "stg-" + clientId + "-" + monthKey,
          clientId: clientId,
          eventDate: eventDate,
          m2Dry: Math.round(Number(m2Dry || 0)),
          m2Cold: Math.round(Number(m2Cold || 0)),
          comment: null,
        };
        storageSnapshots.unshift(created);
        return created;
      }

      function getStorageSnapshotForClient(clientId, monthKey) {
        return storageSnapshots.find((item) => item.clientId === clientId && getStorageSnapshotMonthKey(item.eventDate) === monthKey) || null;
      }

      function applyPreparationRateMigration() {
        const targetRates = {
          embrace: 4.3,
          joyons: 4,
          sauvagine: 4,
          trinci: 3,
          wils: 5.6,
          xoco: 4.2,
        };
        const migrated = window.localStorage.getItem(BILLING_PREP_RATE_MIGRATION_KEY);
        if (migrated === "done") {
          return;
        }
        Object.entries(targetRates).forEach(([clientId, rate]) => {
          if (clientsDB[clientId] && clientsDB[clientId].billing && clientsDB[clientId].billing.preparation) {
            clientsDB[clientId].billing.preparation.baseRate = rate;
            clientsDB[clientId].billing.preparation.mode = "per_preparation";
          }
        });
        window.localStorage.setItem(BILLING_PREP_RATE_MIGRATION_KEY, "done");
      }

      hydrateClientsStore();
      applyStoredBillingProfiles();
      applyPreparationRateMigration();
      syncPricingStoresFromClients();

      let historiqueLog = [
        { date: "15/04/2026 10:18", user: "Admin Cargonautes", action: "Palette par défaut confirmée", avant: "Palette Europe", apres: "Palette Europe" },
      ];

      let openCutoffKey = null;
      let openDateKey = null;
      let semaineOffset = 0;
      let mockData = {};
      let currentPage = "dashboard";
      const STOCK_CLIENT_META = {
        all: {
          title: "Traçabilité multi-clients",
          snapshotLabel: "Base croisée · clients visibles",
          stockLead: "Base visible",
          stockLeadValue: "multi",
          stockLeadSub: "Vue croisée",
          auditBadge: "Base mixte",
          movementBadge: "Entrées + sorties",
        },
        yumi: {
          title: "Ecocert · Yumi",
          snapshotLabel: "Snapshot 15/04/2026 · inventaire hebdo",
          stockLead: "Inventaire",
          stockLeadValue: "15/04",
          stockLeadSub: "Capture 18:30",
          auditBadge: "Traçabilité partielle",
          movementBadge: "Inventaire + sorties",
        },
        popmate: {
          title: "Ecocert · Pop Maté",
          snapshotLabel: "Inventaire hebdo 15/04/2026 · réceptions + livraisons",
          stockLead: "Base Ecocert",
          stockLeadValue: "2024→2025",
          stockLeadSub: "FIFO théorique",
          auditBadge: "Entrées fortes",
          movementBadge: "Réceptions + sorties",
        },
        joyons: {
          title: "BIO · Joyons",
          snapshotLabel: "Suivi stock 29/07/2025 · inventaire + flux",
          stockLead: "Suivi client",
          stockLeadValue: "29/07",
          stockLeadSub: "Base Joyons BIO",
          auditBadge: "Sans lots",
          movementBadge: "Réceptions + inventaire",
        },
      };

      const POPMATE_WEEKLY_INVENTORY = [
        ["2025-04-02", 46, 43, 22, 37, 47, 23, 2, "14,2025"],
        ["2025-04-09", 36, 118, 12, 33, 29, 23, 2, "15,2025"],
        ["2025-04-18", 32, 63, 15, 15, 1, 17, 2, "16,2025"],
        ["2025-04-23", 32, 35, 13, 15, 1, 17, 2, "17,2025"],
        ["2025-04-30", 45, 12, 2, 12, 2, 16, 0, "18,2025"],
        ["2025-05-09", 71, 95, 72, 27, 51, 36, 0, "19,2025"],
        ["2025-05-14", 85, 73, 66, 27, 49, 34, 0, "20,2025"],
        ["2025-05-21", 83, 37, 58, 22, 34, 32, 0, "21,2025"],
        ["2025-05-28", 73, 92, 50, 25, 109, 27, 0, "22,2025"],
        ["2025-06-04", 71, 84, 24, 25, 103, 27, 0, "23,2025"],
        ["2025-06-11", 69, 19, 41, 24, 84, 26, 0, "24,2025"],
        ["2025-06-18", 63, 32, 39, 28, 64, 21, 100, "25,2025"],
        ["2025-06-25", 58, 180, 31, 21, 27, 21, 54, "26,2025"],
        ["2025-07-02", 58, 156, 25, 21, 22, 21, 46, "27,2025"],
        ["2025-07-09", 58, 123, 45, 14, 62, 25, 46, "28,2025"],
        ["2025-07-16", 58, 104, 44, 14, 43, 25, 42, "29,2025"],
        ["2025-07-23", 39, 48, 41, 14, 22, 17, 29, "30,2025"],
        ["2025-08-06", 68, 121, 70, 2, 66, 7, 31, "32,2025"],
        ["2025-08-13", 68, 121, 43, 2, 106, 7, 32, "33,2025"],
        ["2025-08-20", 68, 107, 63, 2, 52, 3, 32, "34,2025"],
        ["2025-08-27", 68, 77, 63, 2, 52, 3, 32, "35,2025"],
        ["2025-09-03", 63, 61, 56, 0, 36, 0, 28, "36,2025"],
        ["2025-09-10", 63, 93, 53, 19, 32, 2, 8, "37,2025"],
        ["2025-09-17", 62, 71, 50, 13, 24, 0, 7, "38,2025"],
        ["2025-09-24", 56, 45, 51, 9, 18, 1, 7, "39,2025"],
        ["2025-10-01", 57, 8, 40, 9, 14, 1, 2, "40,2025"],
        ["2025-10-08", 57, 0, 40, 7, 13, 0, 2, "41,2025"],
        ["2025-10-15", 57, 78, 40, 34, 38, 21, 0, "42,2025"],
        ["2025-10-22", 60, 63, 42, 24, 28, 15, 0, "43,2025"],
        ["2025-10-29", 57, 20, 40, 24, 28, 15, 0, "44,2025"],
        ["2025-11-12", 47, 96, 31, 33, 29, 37, 0, "46,2025"],
        ["2025-11-19", 45, 89, 29, 24, 16, 37, 0, "47,2025"],
        ["2025-11-26", 45, 66, 29, 24, 16, 37, 0, "48,2025"],
        ["2025-12-03", 43, 52, 12, 19, 6, 17, 0, "49,2025"],
        ["2025-12-10", 43, 48, 12, 19, 6, 21, 0, "50,2025"],
        ["2025-12-17", 43, 40, 0, 16, 3, 16, 0, "51,2025"],
        ["2025-12-24", 43, 147, 32, 40, 47, 40, 0, "52,2025"],
        ["2025-12-31", 43, 128, 26, 40, 43, 40, 0, "1,2025"],
        ["2026-01-07", 43, 86, 25, 30, 26, 32, 0, "2,2026"],
        ["2026-01-21", 41, 62, 21, 35, 3, 30, null, "4,2026"],
        ["2026-01-27", 39, 54, 21, 35, 3, 26, null, "5,2026"],
        ["2026-02-04", 39, 34, 21, 29, 0, 23, null, "6,2026"],
        ["2026-02-11", 32, 121, 15, 16, 0, 19, null, "7,2026"],
        ["2026-02-18", 32, 117, 49, 46, 108, 37, 0, "8,2026"],
        ["2026-02-25", 27, 103, 47, 43, 61, 37, null, "9,2026"],
        ["2026-03-04", 20, 87, 42, 41, 56, 31, 0, "10,2026"],
        ["2026-03-11", 20, 53, 42, 36, 53, 26, 0, "11,2026"],
        ["2026-03-18", 19, 51, 41, 36, 42, 25, 0, "12,2026"],
        ["2026-03-25", 33, 99, 46, 34, 98, 31, 0, "13,2026"],
        ["2026-04-01", 30, 75, 42, 24, 92, 24, 0, "14,2026"],
        ["2026-04-08", 25, 51, 36, 24, 92, 24, null, "15,2026"],
        ["2026-04-15", 33, 123, 35, 31, 127, 30, null, "16,2026"],
      ];

      const POPMATE_WEEKLY_COLUMNS = [
        { key: "gb", index: 1, refId: "stk-pop-gingembre-bouteille-6", ref: "Pop Maté Gingembre · bouteilles", format: "12 bouteilles", unitsPerCarton: 12, coordinate: "Z-BIO · PM-BTL-G" },
        { key: "ob", index: 2, refId: "stk-pop-original-bouteille-11", ref: "Pop Maté Original · bouteilles", format: "12 bouteilles", unitsPerCarton: 12, coordinate: "Z-BIO · PM-BTL-O" },
        { key: "fb", index: 3, refId: "stk-pop-framboise-bouteille-2", ref: "Pop Maté Framboise · bouteilles", format: "12 bouteilles", unitsPerCarton: 12, coordinate: "Z-BIO · PM-BTL-F" },
        { key: "gc", index: 4, refId: "stk-pop-gingembre-canette-8", ref: "Pop Maté Gingembre · canettes", format: "24 canettes", unitsPerCarton: 24, coordinate: "Z-BIO · PM-CAN-G" },
        { key: "oc", index: 5, refId: "stk-pop-original-canette-16", ref: "Pop Maté Original · canettes", format: "24 canettes", unitsPerCarton: 24, coordinate: "Z-BIO · PM-CAN-O" },
        { key: "fc", index: 6, refId: "stk-pop-framboise-canette-3", ref: "Pop Maté Framboise · canettes", format: "24 canettes", unitsPerCarton: 24, coordinate: "Z-BIO · PM-CAN-F" },
        { key: "rb", index: 7, refId: "stk-pop-rainbow-bouteille-17", ref: "Pop Maté Rainbow · bouteilles", format: "12 bouteilles", unitsPerCarton: 12, coordinate: "Z-BIO · PM-BTL-R" },
      ];

      function formatIsoDateToFr(dateIso) {
        if (!dateIso) {
          return "";
        }
        const parts = String(dateIso).split("-");
        if (parts.length !== 3) {
          return String(dateIso);
        }
        return parts[2] + "/" + parts[1] + "/" + parts[0];
      }

      function getWeekLabelFromToken(token) {
        const parts = String(token || "").split(",");
        if (parts.length !== 2) {
          return "Semaine";
        }
        return "Semaine " + parts[0].padStart(2, "0") + " · " + parts[1];
      }

      function buildPopmateWeeklyInventoryReadings() {
        const readings = [];
        POPMATE_WEEKLY_INVENTORY.forEach((entry) => {
          const dateIso = entry[0];
          const weekToken = entry[8];
          const weekParts = String(weekToken || "").split(",");
          const week = weekParts.length === 2 ? weekParts[1] + "-W" + weekParts[0].padStart(2, "0") : dateIso;
          POPMATE_WEEKLY_COLUMNS.forEach((column) => {
            const cartons = entry[column.index];
            if (cartons === null || cartons === undefined || cartons === "") {
              return;
            }
            const linked = YUMI_STOCK_SNAPSHOT.find((row) => row.id === column.refId);
            readings.push({
              id: "wk-pop-inv-" + column.key + "-" + dateIso,
              week,
              weekLabel: getWeekLabelFromToken(weekToken),
              refId: column.refId,
              ref: column.ref,
              lot: "Non relevé",
              qty: cartons * column.unitsPerCarton,
              cartons,
              zone: linked ? linked.zone : "Z-BIO",
              emplacement: linked ? linked.emplacement : column.coordinate.split(" · ")[1],
              coordinate: column.coordinate,
              observedAt: formatIsoDateToFr(dateIso),
              proof: "Inventaire hebdo (cartons)",
              proofLevel: "bc",
              format: column.format,
            });
          });
        });
        return readings;
      }

      function getAllStockWeeklyReadings() {
        return STOCK_WEEKLY_READINGS.concat(buildPopmateWeeklyInventoryReadings());
      }

      let currentClientId = "yumi";
      let currentFicheTab = "infos";
      let currentClientViewMode = "overview";
      let overlayState = null;
      let currentShiftTab = "all";
      let prepExpanded = new Set();
      let selectedExpes = new Set();
      let visiblePrepIds = [];
      let cartonsCollapsed = false;
      let historyVisible = false;
      let appBooted = false;
      let savOpenTicketId = "TKT-089";
      let savPendingAttachments = [];
      let savOpenFilterKey = null;
      let savFilterState = {
        status: new Set(),
        priority: new Set(),
        client: new Set(),
        owner: new Set(),
        source: new Set(),
      };
      let sidebarCollapsed = false;
      let stockOpenRowId = "stk-pop-original-bouteille-11";
      let selectedStockRowIds = new Set();
      let activeInventorySessionId = null;
      let inventoryWeekOffset = 0;
      let receptionAnomalyDraft = null;
      let receptionComboOpenKey = null;
      let stockFilterComboOpenKey = null;
      let prepFilterComboOpenKey = null;
      let receptionPlannedInlineVisible = false;
      let consumablePickerSearch = "";
      let expandedClientCards = new Set();

      const esc = (value) =>
        String(value ?? "")
          .replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;")
          .replaceAll('"', "&quot;");

      const SAV_OWNER_OPTIONS = ["ADV Cargonautes", "Sophie B.", "Hugo M.", "Nora T."];
      const SAV_STATUS_OPTIONS = ["Ouvert", "En cours", "En attente", "Résolu"];
      const SAV_PRIORITY_OPTIONS = ["Normale", "Haute", "Critique"];
      const RECEPTION_TIME_SUGGESTIONS = Array.from({ length: 26 }, (_, index) => {
        const totalMinutes = 7 * 60 + index * 30;
        const hours = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
        const minutes = String(totalMinutes % 60).padStart(2, "0");
        return hours + ":" + minutes;
      });

      function iconSvg(name) {
        const icons = {
          eye: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M1.5 12s3.8-6 10.5-6 10.5 6 10.5 6-3.8 6-10.5 6S1.5 12 1.5 12Z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="1.9"/></svg>',
          edit: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4l10.4-10.4a2 2 0 0 0 0-2.8l-1.2-1.2a2 2 0 0 0-2.8 0L4 16v4Z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          trash: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3m-8 0 1 12a2 2 0 0 0 2 1.8h4a2 2 0 0 0 2-1.8L17 7" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          ticket: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5v3a2 2 0 0 0 0 4v2A1.5 1.5 0 0 1 18.5 18h-13A1.5 1.5 0 0 1 4 16.5v-2a2 2 0 0 0 0-4v-3Z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          anomaly: '<img src="./icons/anomalie.svg" alt="" aria-hidden="true" />',
          close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>',
        };
        return icons[name] || "";
      }

      function canViewFinance() {
        return CURRENT_APP_ROLE === "admin";
      }

      function buildSlackLink(target) {
        return "https://slack.com/app_redirect?channel=" + encodeURIComponent(target || "commercial");
      }

      function persistLedgerStores() {
        try {
          window.localStorage.setItem(LEDGER_PRODUCTS_STORAGE_KEY, JSON.stringify(ledgerProducts));
          window.localStorage.setItem(LEDGER_LOCATIONS_STORAGE_KEY, JSON.stringify(ledgerLocations));
          window.localStorage.setItem(LEDGER_SOURCE_DOCS_STORAGE_KEY, JSON.stringify(ledgerSourceDocuments));
          window.localStorage.setItem(LEDGER_MOVEMENTS_STORAGE_KEY, JSON.stringify(ledgerMovements));
          window.localStorage.setItem(LEDGER_INVENTORY_SESSIONS_STORAGE_KEY, JSON.stringify(ledgerInventorySessions));
          window.localStorage.setItem(LEDGER_INVENTORY_COUNTS_STORAGE_KEY, JSON.stringify(ledgerInventoryCounts));
          window.localStorage.setItem(LEDGER_TRACE_LINKS_STORAGE_KEY, JSON.stringify(ledgerTraceabilityLinks));
        } catch (error) {
          console.warn("Persistance ledger impossible.", error);
        }
      }

      function persistPrepStore() {
        try {
          window.localStorage.setItem(PREP_STORAGE_KEY, JSON.stringify(PREP_STORE));
        } catch (error) {
          console.warn("Persistance prépa impossible.", error);
        }
      }

      function ledgerNowIso() {
        return new Date().toISOString();
      }

      function buildLedgerId(prefix) {
        return prefix + "-" + Math.random().toString(36).slice(2, 10);
      }

      function getClientNameById(clientId) {
        return clientsDB[clientId] ? clientsDB[clientId].nom : clientId;
      }

      function getLedgerProductById(productId) {
        return ledgerProducts.find((item) => item.id === productId) || null;
      }

      function getLedgerLocationById(locationId) {
        return ledgerLocations.find((item) => item.id === locationId) || null;
      }

      function getLedgerMovementLabel(movementType) {
        return MOVEMENT_TYPE_LABELS[movementType] || movementType;
      }

      function getLedgerReasonLabel(movement) {
        return OUT_REASON_LABELS[movement.outReasonCode] || ADJUST_REASON_LABELS[movement.adjustReasonCode] || "—";
      }

      function getLedgerClientFilterValue() {
        const node = document.getElementById("stock-client-filter");
        return node ? node.value : "all";
      }

      function getLedgerSearchValue() {
        const node = document.getElementById("stock-search");
        return node ? node.value.trim().toLowerCase() : "";
      }

      function collectStockSearchSuggestions() {
        const client = getLedgerClientFilterValue();
        const suggestions = new Set();

        computeLedgerCurrentStock(false)
          .filter((row) => client === "all" || row.ownerClientId === client)
          .forEach((row) => {
            [row.productName, row.lot, row.locationLabel, getClientNameById(row.ownerClientId)]
              .filter(Boolean)
              .forEach((value) => suggestions.add(String(value)));
          });

        ledgerMovements
          .filter((movement) => client === "all" || movement.ownerClientId === client)
          .forEach((movement) => {
            const location = getLedgerLocationById(movement.locationId);
            [
              movement.productLabelSnapshot,
              movement.sourceDocumentReference,
              movement.lot,
              location ? location.locationCode : null,
              getLedgerReasonLabel(movement),
            ]
              .filter(Boolean)
              .forEach((value) => suggestions.add(String(value)));
          });

        YUMI_STOCK_SNAPSHOT
          .filter((row) => client === "all" || row.clientId === client)
          .forEach((row) => {
            [row.ref, row.refKey, row.lotHint, row.emplacement, row.zone]
              .filter(Boolean)
              .forEach((value) => suggestions.add(String(value)));
          });

        getAllStockWeeklyReadings().forEach((reading) => {
          const linked = YUMI_STOCK_SNAPSHOT.find((item) => item.id === reading.refId);
          if (client !== "all" && (!linked || linked.clientId !== client)) {
            return;
          }
          [reading.ref, reading.lot, reading.coordinate, reading.weekLabel]
            .filter(Boolean)
            .forEach((value) => suggestions.add(String(value)));
        });

        return Array.from(suggestions).sort((left, right) => left.localeCompare(right, "fr"));
      }

      function updateStockSearchSuggestions() {
        const input = document.getElementById("stock-search");
        const datalist = document.getElementById("stock-search-suggestions");
        if (!input || !datalist) {
          return;
        }
        const term = input.value.trim().toLowerCase();
        const ranked = collectStockSearchSuggestions()
          .filter((value) => !term || value.toLowerCase().includes(term))
          .sort((left, right) => {
            const leftStarts = term && left.toLowerCase().startsWith(term) ? 0 : 1;
            const rightStarts = term && right.toLowerCase().startsWith(term) ? 0 : 1;
            if (leftStarts !== rightStarts) {
              return leftStarts - rightStarts;
            }
            return left.localeCompare(right, "fr");
          })
          .slice(0, 20);
        datalist.innerHTML = ranked.map((value) => '<option value="' + esc(value) + '"></option>').join("");
      }

      function buildClientOptionsMarkup(selectedClientId) {
        return Object.values(clientsDB)
          .map((client) => '<option value="' + esc(client.id) + '"' + (client.id === selectedClientId ? " selected" : "") + ">" + esc(client.nom) + "</option>")
          .join("");
      }

      function buildProductOptionsMarkup(selectedClientId, selectedProductId) {
        return getLedgerProductsForClient(selectedClientId)
          .map((product) => '<option value="' + esc(product.id) + '"' + (product.id === selectedProductId ? " selected" : "") + ">" + esc(product.productMasterName) + "</option>")
          .join("");
      }

      function buildLocationOptionsMarkup(selectedLocationId) {
        return ledgerLocations
          .filter((location) => location.actif)
          .map((location) => '<option value="' + esc(location.id) + '"' + (location.id === selectedLocationId ? " selected" : "") + ">" + esc(location.locationCode) + "</option>")
          .join("");
      }

      function isBioLocationCompatible(locationId, bioStatus) {
        const location = getLedgerLocationById(locationId);
        if (!location) {
          return false;
        }
        return bioStatus !== "BIO" || location.bioZone === true;
      }

      const cloneData = (value) => JSON.parse(JSON.stringify(value));

      const applySidebarState = () => {
        const app = document.querySelector(".app");
        if (!app) {
          return;
        }
        app.classList.toggle("sidebar-collapsed", sidebarCollapsed);
      };

      const loadSidebarState = () => {
        try {
          const saved = window.localStorage.getItem(SIDEBAR_STORAGE_KEY);
          const legacy = window.localStorage.getItem(LEGACY_SIDEBAR_STORAGE_KEY);
          sidebarCollapsed = saved === "1" || (!saved && legacy === "1");
        } catch (error) {
          sidebarCollapsed = false;
        }
        applySidebarState();
      };

      const normalizeSavAttachment = (attachment, index) => ({
        id: attachment.id || "att-" + Date.now() + "-" + index,
        name: attachment.name || attachment.fileName || "Pièce jointe",
        mimeType: attachment.mimeType || attachment.type || "application/octet-stream",
        size: Number(attachment.size || 0),
        dataUrl: attachment.dataUrl || null,
      });

      function getPrimaryClientContact(clientId) {
        const client = clientsDB[clientId];
        const contacts = client ? buildClientContacts(client) : [];
        return contacts[0] || null;
      }

      function getSavTicketContact(ticket) {
        if (ticket.contactName || ticket.contactEmail || ticket.contactPhone) {
          return {
            name: ticket.contactName || "Contact client",
            organization: getTicketClientName(ticket.clientId),
            role: ticket.contactRole || "",
            availability: ticket.contactAvailability || "",
            email: ticket.contactEmail || "",
            phone: ticket.contactPhone || "",
          };
        }
        const primary = getPrimaryClientContact(ticket.clientId);
        return primary
          ? {
              name: primary.nom,
              organization: getTicketClientName(ticket.clientId),
              role: primary.role || "",
              availability: primary.availability || "",
              email: primary.email || "",
              phone: primary.tel || "",
            }
          : {
              name: getTicketClientName(ticket.clientId),
              organization: getTicketClientName(ticket.clientId),
              role: "",
              availability: "",
              email: "",
              phone: "",
            };
      }

      const normalizeSavTicket = (ticket) => {
        const normalizedId = String(ticket.id || ticket.code || "TKT-000").toUpperCase();
        const normalizedMessages = Array.isArray(ticket.messages)
          ? ticket.messages
              .map((message, index) => ({
                kind: message.kind || (message.internal ? "internal" : "public"),
                author: message.author || "Ops",
                text: String(message.text || ""),
                at: message.at || message.when || "",
                attachments: Array.isArray(message.attachments) ? message.attachments.map(normalizeSavAttachment) : [],
              }))
          : Array.isArray(ticket.timeline)
          ? ticket.timeline.map((entry, index) => ({
              kind: entry.internal ? "internal" : "public",
              author: entry.author || "Ops",
              text: String(entry.text || ""),
              at: entry.at || entry.when || "",
              attachments: Array.isArray(entry.attachments) ? entry.attachments.map(normalizeSavAttachment) : [],
            }))
          : [];
        const defaultContact = getPrimaryClientContact(ticket.clientId || "yumi");
        return {
          id: normalizedId,
          clientId: ticket.clientId || "yumi",
          cykeId: ticket.cykeId || "",
          sourceType: ticket.sourceType || "client",
          sourceId: ticket.sourceId || "",
          sourceLabel: ticket.sourceLabel || "",
          status: ticket.status || "Ouvert",
          priority: ticket.priority || "Normale",
          owner: ticket.owner || "ADV Cargonautes",
          slaDueAt: ticket.slaDueAt || new Date(Date.now() + 6 * 3600000).toISOString(),
          title: ticket.title || "Ticket opérationnel",
          summary: ticket.summary || "",
          createdAt: ticket.createdAt || new Date().toLocaleString("fr-FR"),
          tags: Array.isArray(ticket.tags) ? ticket.tags : [],
          events: Array.isArray(ticket.events) ? ticket.events : [],
          messages: normalizedMessages,
          clientAutoCloseHours: typeof ticket.clientAutoCloseHours === "number" ? ticket.clientAutoCloseHours : null,
          clientAutoCloseAt: ticket.clientAutoCloseAt || null,
          clientNotificationStatus: ticket.clientNotificationStatus || null,
          publicReplyLink: ticket.publicReplyLink || null,
          clientRepliedAt: ticket.clientRepliedAt || null,
          waitingOn: ticket.waitingOn || null,
          contactName: ticket.contactName || (defaultContact ? defaultContact.nom : ""),
          contactRole: ticket.contactRole || (defaultContact ? defaultContact.role : ""),
          contactAvailability: ticket.contactAvailability || (defaultContact ? defaultContact.availability : ""),
          contactEmail: ticket.contactEmail || (defaultContact ? defaultContact.email : ""),
          contactPhone: ticket.contactPhone || (defaultContact ? defaultContact.tel : ""),
        };
      };

      const persistSavTickets = () => {
        try {
          window.localStorage.setItem(SAV_STORAGE_KEY, JSON.stringify(SAV_TICKETS));
        } catch (error) {
          console.warn("Impossible de persister les tickets SAV.", error);
        }
      };

      const loadSavTickets = () => {
        try {
          const raw =
            window.localStorage.getItem(SAV_STORAGE_KEY) ||
            LEGACY_SAV_STORAGE_KEYS.map((key) => window.localStorage.getItem(key)).find(Boolean);
          if (!raw) {
            SAV_TICKETS = cloneData(DEFAULT_SAV_TICKETS).map(normalizeSavTicket);
            persistSavTickets();
            return;
          }
          const parsed = JSON.parse(raw);
          SAV_TICKETS = Array.isArray(parsed) ? parsed.map(normalizeSavTicket) : cloneData(DEFAULT_SAV_TICKETS).map(normalizeSavTicket);
          if (!Array.isArray(parsed)) {
            persistSavTickets();
          }
        } catch (error) {
          console.warn("Impossible de charger les tickets SAV partagés.", error);
          SAV_TICKETS = cloneData(DEFAULT_SAV_TICKETS).map(normalizeSavTicket);
          persistSavTickets();
        }
      };

      const persistReceptions = () => {
        try {
          window.localStorage.setItem(RECEPTIONS_STORAGE_KEY, JSON.stringify(RECEPTIONS_LOG));
        } catch (error) {
          console.warn("Impossible de persister les réceptions.", error);
        }
      };

      const persistReceptionAgents = () => {
        try {
          window.localStorage.setItem(RECEPTION_AGENTS_STORAGE_KEY, JSON.stringify(receptionAgents));
        } catch (error) {
          console.warn("Impossible de persister les agents de réception.", error);
        }
      };

      const persistArchiveLog = () => {
        try {
          window.localStorage.setItem(ARCHIVE_LOG_STORAGE_KEY, JSON.stringify(archiveLog));
        } catch (error) {
          console.warn("Impossible de persister les archives.", error);
        }
      };

      function archiveEntity(entityType, entity, options) {
        archiveLog.unshift({
          id: "arc-" + Date.now() + "-" + Math.random().toString(16).slice(2, 6),
          entityType: entityType,
          entityId: entity && entity.id ? entity.id : null,
          archivedAt: new Date().toISOString(),
          archivedBy: ((options || {}).archivedBy) || "usr-local",
          reason: ((options || {}).reason) || "Suppression UI convertie en archivage",
          context: ((options || {}).context) || null,
          snapshot: cloneData(entity),
        });
        persistArchiveLog();
      }

      function isArchivedEntity(entity) {
        return Boolean(entity && entity.archivedAt);
      }

      function getActiveReceptionEntries() {
        return RECEPTIONS_LOG.filter((entry) => !isArchivedEntity(entry));
      }

      function getActiveCutoffRows(dateKey, cutoffId) {
        const rows = (mockData[dateKey] && mockData[dateKey][cutoffId]) || [];
        return rows.filter((row) => !isArchivedEntity(row));
      }

      const isoDay = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return year + "-" + month + "-" + day;
      };

      const daysLabel = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

      const shiftBadgeClass = (shift) => (shift === "soir" ? "ba" : "bm");

      const accentBadge = (accentVar) => {
        const map = { cobalt: "bc", mint: "bm", jam: "bj", purple: "bp" };
        return map[accentVar] || "bg";
      };

      const statusBadge = (status) => {
        const map = {
          Ouvert: "br",
          "En cours": "ba",
          "En attente": "bp",
          Résolu: "bm",
          Terminée: "bm",
          Rupture: "br",
          Annulée: "br",
        };
        return map[status] || "bg";
      };

      const summarizePacks = (packs) => {
        const summary = {};
        packs.forEach((pack) => {
          summary[pack.taille] = (summary[pack.taille] || 0) + 1;
        });
        return ["XL", "LC", "MC", "S", "XS"]
          .filter((size) => summary[size])
          .map((size) => ({ taille: size, count: summary[size] }));
      };

      const formatCutoffDay = (key) => {
        const date = new Date(key + "T12:00:00");
        return new Intl.DateTimeFormat("fr-FR", { weekday: "short", day: "2-digit", month: "short" }).format(date);
      };

      const formatCutoffDayHead = (key) => {
        const date = new Date(key + "T12:00:00");
        return {
          weekday: new Intl.DateTimeFormat("fr-FR", { weekday: "short" }).format(date).replace(".", ""),
          shortDate: new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short" }).format(date),
        };
      };

      const cutoffToneClass = (cutoffId) => {
        const tones = { t11: "bm", t13: "bc", t15: "ba", t17: "bp", urg: "br" };
        return tones[cutoffId] || "bg";
      };

      const summarizeCutoffClients = (rows) => {
        const map = {};
        rows.forEach((row) => {
          if (!map[row.client]) {
            map[row.client] = { client: row.client, count: 0, items: 0 };
          }
          map[row.client].count += 1;
          map[row.client].items += Number(row.items || 0);
        });
        return Object.values(map).sort((left, right) => right.count - left.count || right.items - left.items);
      };

      const totalCutoffItems = (rows) => rows.reduce((acc, row) => acc + Number(row.items || 0), 0);

      const isCommandReady = (row) => row.etat === "Terminée";

      const isCommandInRupture = (row) => row.etat === "Rupture";

      const isCommandCancelled = (row) => row.etat === "Annulée";

      const getCutoffReadyCount = (rows) => rows.filter((row) => isCommandReady(row)).length;

      const getCutoffRuptureCount = (rows) => rows.filter((row) => isCommandInRupture(row)).length;

      const getCutoffCancelledCount = (rows) => rows.filter((row) => isCommandCancelled(row)).length;

      function getDayCommandSummary(dateKey) {
        const rows = CUTOFFS.flatMap((cutoff) =>
          getActiveCutoffRows(dateKey, cutoff.id).map((row) => ({
            ...row,
            _cutoffId: cutoff.id,
          }))
        );
        const errorCount = rows.filter((row) => {
          const sourceId = dateKey + "|" + row._cutoffId + "|" + row.id;
          return row.etat === "Rupture" || Boolean(getActiveSavTicketBySource("commande", sourceId));
        }).length;
        return {
          total: rows.length,
          done: rows.filter((row) => row.etat === "Terminée").length,
          cancelled: rows.filter((row) => row.etat === "Annulée").length,
          errors: errorCount,
        };
      }

      function getMonthlyPrepStats() {
        const now = new Date();
        const month = now.getMonth();
        const year = now.getFullYear();
        const monthRows = PREP_STORE.filter((item) => {
          const parsed = parseFrDate(item.receptionDate);
          return parsed && parsed.getMonth() === month && parsed.getFullYear() === year;
        });
        const issueCount = monthRows.filter((item) => item.statut === "Annulée" || Boolean(getLinkedPrepTicket(item))).length;
        const total = monthRows.length;
        return {
          total: total,
          issueCount: issueCount,
          errorRate: total ? Math.round((issueCount / total) * 100) : 0,
        };
      }

      const getCutoffProgress = (rows) => {
        const total = rows.length;
        const ready = getCutoffReadyCount(rows);
        const ruptureCount = getCutoffRuptureCount(rows);
        if (!total) {
          return { label: "—", ready: false, total: 0, readyCount: 0, ruptureCount: 0 };
        }
        if (ready === total) {
          return { label: "Tout prêt", ready: true, total: total, readyCount: ready, ruptureCount: 0 };
        }
        return {
          label: ruptureCount ? ruptureCount + " rupture" + (ruptureCount > 1 ? "s" : "") : ready + "/" + total + " prêtes",
          ready: false,
          total: total,
          readyCount: ready,
          ruptureCount: ruptureCount,
        };
      };

      const DASHBOARD_KPI_CONFIG = {
        receptions: {
          page: "reception",
          title: "Réceptions aujourd’hui",
          tooltipTitle: "Réceptions aujourd’hui",
        },
        preparation: {
          page: "preparation",
          title: "Préparations en cours",
          tooltipTitle: "Préparations en cours",
        },
        expeditions: {
          page: "expeditions",
          title: "Expéditions du jour",
          tooltipTitle: "Expéditions du jour",
        },
        sav: {
          page: "sav",
          title: "Tickets à traiter",
          tooltipTitle: "Tickets nécessitant une attention",
        },
        prepMonth: {
          page: "preparation",
          title: "Prépas du mois",
          tooltipTitle: "Préparations du mois en cours",
        },
        prepError: {
          page: "sav",
          title: "Taux d’erreur",
          tooltipTitle: "Prépas du mois avec incident ou annulation",
        },
        semaine: {
          page: "dashboard",
          title: "Expéditions semaine",
          tooltipTitle: "Expéditions semaine",
        },
        clients: {
          page: "clients",
          title: "Clients visibles",
          tooltipTitle: "Clients visibles",
        },
        palettes: {
          page: "reception",
          title: "Palettes du jour",
          tooltipTitle: "Entrées / sorties palettes",
        },
        shift: {
          page: "preparation",
          title: "Shift courant",
          tooltipTitle: "Shift courant",
        },
        critique: {
          page: "dashboard",
          title: "Fenêtre critique",
          tooltipTitle: "Fenêtre critique",
        },
      };

      function showKpiBubble(kpiId, evt) {
        const cfg = DASHBOARD_KPI_CONFIG[kpiId];
        if (!cfg) {
          return;
        }
        const tip = document.getElementById("global-tooltip");
        const lines = Array.isArray(cfg.lines) ? cfg.lines : [];
        tip.innerHTML =
          "<strong>" +
          esc(cfg.tooltipTitle || cfg.title) +
          "</strong><span>" +
          esc(cfg.subtitle || "Cliquer pour ouvrir le module.") +
          "</span>" +
          (lines.length
            ? '<div class="tooltip-list">' +
              lines
                .map((line) => '<div class="tooltip-row"><span>' + esc(line.label) + "</span><strong>" + esc(line.value) + "</strong></div>")
                .join("") +
              "</div>"
            : "");
        tip.style.left = evt.clientX + 18 + "px";
        tip.style.top = evt.clientY + 18 + "px";
        tip.classList.add("visible");
      }

      function openDashboardKpi(kpiId) {
        const cfg = DASHBOARD_KPI_CONFIG[kpiId];
        if (!cfg) {
          return;
        }
        if (kpiId === "critique") {
          const todayKey = isoDay(new Date());
          const urgentRows = ((mockData[todayKey] || {}).urg || []);
          if (urgentRows.length) {
            openCutoffDetail(todayKey, "urg");
          }
        }
        navigate(cfg.page);
        if (cfg.page === "dashboard") {
          renderCutoffGrid();
        }
      }

      function clampPercent(value) {
        return Math.max(0, Math.min(100, Math.round(value)));
      }

      function getDashboardKpiVisual(kpiId) {
        const dashboardReference = getDashboardReferenceDate();
        const focusKey = dashboardReference.focusKey;
        const siteStatus = getSiteOperationalStatus(dashboardReference.today);
        const monthlyPrepStats = getMonthlyPrepStats();
        const openTickets = SAV_TICKETS.filter((ticket) => ticket.status !== "Résolu");
        const criticalTickets = openTickets.filter((ticket) => ticket.priority === "Critique").length;
        const savNewCount = openTickets.filter((ticket) => ticket.status === "Ouvert").length;
        const savNeedsActionCount = openTickets.filter((ticket) => getSavWaitingAction(ticket) === "Action Cargonautes").length;
        const savAttentionCount = openTickets.filter((ticket) => {
          return (
            ticket.status === "Ouvert" ||
            ticket.priority === "Critique" ||
            getSavWaitingAction(ticket) === "Action Cargonautes" ||
            getSlaTone(ticket) === "sla-risk"
          );
        }).length;
        const paletteTraffic = getPaletteTrafficForDate(focusKey);
        const paletteTotal = paletteTraffic.in + paletteTraffic.out;
        const map = {
          prepMonth: {
            percent: clampPercent(Math.min(100, (monthlyPrepStats.total / Math.max(120, monthlyPrepStats.total || 1)) * 100)),
            tone: "blue",
            trend: monthlyPrepStats.total ? monthlyPrepStats.total + " prépas" : "Aucune prépa",
          },
          prepError: {
            percent: clampPercent(monthlyPrepStats.errorRate),
            tone: monthlyPrepStats.errorRate >= 5 ? "orange" : monthlyPrepStats.errorRate >= 2 ? "purple" : "green",
            trend: monthlyPrepStats.issueCount ? monthlyPrepStats.issueCount + " incident(s)" : "RAS",
          },
          sav: {
            percent: clampPercent(Math.min(100, savAttentionCount * 12)),
            tone: criticalTickets ? "orange" : "purple",
            trend: savNewCount ? savNewCount + " nouveau(x)" : savNeedsActionCount ? savNeedsActionCount + " à traiter" : "Calme",
          },
          palettes: {
            percent: clampPercent(paletteTotal ? (paletteTraffic.in / paletteTotal) * 100 : 0),
            tone: "green",
            trend: paletteTotal ? paletteTotal + " mouvements" : "Aucun flux",
          },
          shift: {
            percent: dashboardReference.mode === "preview" ? 62 : siteStatus.state === "open" ? 84 : siteStatus.state === "outside" ? 44 : 18,
            tone: dashboardReference.mode === "preview" ? "green" : "blue",
            trend: dashboardReference.mode === "preview" ? "Preview" : siteStatus.label,
          },
        };
        return map[kpiId] || { percent: 50, tone: "green", trend: "+0" };
      }

      function renderKpiRing(percent, tone) {
        const radius = 19;
        const circ = 2 * Math.PI * radius;
        const offset = circ - (clampPercent(percent) / 100) * circ;
        return (
          '<span class="kpi-ring kpi-tone-' +
          esc(tone) +
          '"><svg viewBox="0 0 54 54" aria-hidden="true"><circle class="kpi-ring-track" cx="27" cy="27" r="' +
          radius +
          '"></circle><circle class="kpi-ring-progress" cx="27" cy="27" r="' +
          radius +
          '" stroke-dasharray="' +
          circ.toFixed(1) +
          '" stroke-dashoffset="' +
          offset.toFixed(1) +
          '"></circle></svg><span class="kpi-ring-label">' +
          clampPercent(percent) +
          '%</span></span>'
        );
      }

      function renderDashboardKpi(kpiId, value, subtitle) {
        const cfg = DASHBOARD_KPI_CONFIG[kpiId];
        const visual = getDashboardKpiVisual(kpiId);
        const lines = Array.isArray(cfg.lines) ? cfg.lines.slice(0, 3) : [];
        return (
          '<button class="kpi kpi-link kpi-tone-' +
          esc(visual.tone) +
          " kpi-" +
          esc(kpiId) +
          '" type="button" onclick="openDashboardKpi(\'' +
          kpiId +
          '\')" onmouseenter="showKpiBubble(\'' +
          kpiId +
          '\', event)" onmouseleave="hideCutoffTooltip()"><div class="kpi-copy"><span class="kpi-eyebrow">' +
          esc(cfg.title) +
          '</span><div class="kpi-value-row"><strong>' +
          esc(value) +
          "</strong><span class='kpi-trend'>" +
          esc(visual.trend) +
          "</span></div><p class='mini kpi-subtitle'>" +
          esc(subtitle) +
          "</p>" +
          (lines.length
            ? "<div class='kpi-meta-list'>" +
              lines
                .map(
                  (line) =>
                    "<div class='kpi-meta-item'><span>" +
                    esc(line.label) +
                    "</span><strong>" +
                    esc(line.value) +
                    "</strong></div>"
                )
                .join("") +
              "</div>"
            : "") +
          "</div>" +
          renderKpiRing(visual.percent, visual.tone) +
          "</button>"
        );
      }

      const buildPackChips = (packs) =>
        summarizePacks(packs)
          .map((item) => {
            const tag = TAG[item.taille];
            return '<span class="pack-chip" style="background:' + tag.bg + ";color:" + tag.tx + '"><strong>' + item.count + '</strong><span>' + item.taille + "</span></span>";
          })
          .join("");

      const priorityBadge = (priority) => {
        const map = { Critique: "br", Haute: "ba", Normale: "bg" };
        return map[priority] || "bg";
      };

      const getTicketClientName = (clientId) => (clientsDB[clientId] ? clientsDB[clientId].nom : clientId);

      const getSlaTone = (ticket) => {
        const due = new Date(ticket.slaDueAt);
        const hours = (due.getTime() - Date.now()) / 3600000;
        if (hours <= 2) {
          return "sla-risk";
        }
        if (hours <= 6) {
          return "sla-warn";
        }
        return "sla-ok";
      };

      const getPrepById = (prepId) => PREP_STORE.find((item) => item.id === prepId);

      const getPrepByShipment = (shipmentId) => PREP_STORE.find((item) => item.expe === shipmentId);

      const getPrepByLot = (lotId) => PREP_STORE.find((item) => item.produits.some((prod) => prod.lot === lotId));

      const buildTicketSourceMeta = (ticket) => {
        if (ticket.sourceType === "prep") {
          const prep = getPrepById(ticket.sourceId);
          if (!prep) {
            return null;
          }
          return {
            page: "preparation",
            prepId: prep.id,
            actionLabel: "Voir la préparation",
            title: prep.dest,
            line1: prep.expe + " · " + prep.client,
            line2: prep.canal + " · " + prep.statut,
          };
        }
        if (ticket.sourceType === "shipment") {
          const prep = getPrepByShipment(ticket.sourceId);
          if (!prep) {
            return { page: "expeditions", actionLabel: "Ouvrir le BL", title: ticket.sourceId, line1: "Expédition / BL", line2: "Référence externe" };
          }
          return {
            page: "preparation",
            prepId: prep.id,
            actionLabel: "Ouvrir le BL",
            title: prep.dest,
            line1: prep.expe + " · " + prep.client,
            line2: prep.note,
          };
        }
        if (ticket.sourceType === "client") {
          const client = clientsDB[ticket.clientId];
          if (!client) {
            return null;
          }
          return {
            page: "clients",
            clientId: ticket.clientId,
            actionLabel: "Voir le client",
            title: client.nom,
            line1: client.secteur,
            line2: client.contact.nom + " · " + client.contact.email,
          };
        }
        if (ticket.sourceType === "lot") {
          const prep = getPrepByLot(ticket.sourceId);
          if (!prep) {
            return { page: "stock", actionLabel: "Voir le contexte source", title: ticket.sourceId, line1: "Lot", line2: "Référence à investiguer" };
          }
          const product = prep.produits.find((prod) => prod.lot === ticket.sourceId);
          return {
            page: "preparation",
            prepId: prep.id,
            actionLabel: "Voir le contexte source",
            title: product.ref,
            line1: "Lot " + ticket.sourceId,
            line2: prep.dest + " · DLC " + product.dlc,
          };
        }
        if (ticket.sourceType === "reception") {
          const reception = RECEPTIONS_LOG.find((item) => item.id === ticket.sourceId);
          if (!reception) {
            return { page: "reception", actionLabel: "Voir la réception", title: ticket.sourceId, line1: "Réception", line2: "Entrée à vérifier" };
          }
          return {
            page: "reception",
            receptionId: reception.id,
            actionLabel: "Voir la réception",
            title: getClientNameById(reception.clientId),
            line1: "Réception " + reception.id,
            line2: (reception.transporteur || "Transporteur") + " · " + (reception.arrivalTime || "Heure à confirmer"),
          };
        }
        if (ticket.sourceType === "commande") {
          const parts = String(ticket.sourceId || "").split("|");
          const dateKey = parts[0];
          const cutoffId = parts[1];
          const commandId = parts[2];
          const command = getCommandByRef(dateKey, cutoffId, commandId);
          if (!command) {
            return { page: "dashboard", actionLabel: "Voir la commande", title: ticket.sourceId, line1: "Commande", line2: "Contexte dashboard à rouvrir" };
          }
          return {
            page: "dashboard",
            dateKey: dateKey,
            cutoffId: cutoffId,
            commandId: commandId,
            actionLabel: "Voir la commande",
            title: command.id,
            line1: command.client + " · " + ((CUTOFFS.find((item) => item.id === cutoffId) || {}).label || cutoffId),
            line2: command.cyke + " · " + command.etat,
          };
        }
        return null;
      };

      const buildIndexContextHref = (ticket) => {
        const meta = buildTicketSourceMeta(ticket);
        const params = new URLSearchParams();
        if (meta && meta.page) {
          params.set("page", meta.page);
        }
        if (meta && meta.prepId) {
          params.set("prep", meta.prepId);
        }
        if (meta && meta.clientId) {
          params.set("client", meta.clientId);
        }
        if (meta && meta.receptionId) {
          params.set("reception", meta.receptionId);
        }
        if (meta && meta.dateKey && meta.cutoffId && meta.commandId) {
          params.set("date", meta.dateKey);
          params.set("cutoff", meta.cutoffId);
          params.set("commande", meta.commandId);
        }
        if (meta && meta.page === "stock" && ticket.sourceId) {
          params.set("lot", ticket.sourceId);
        }
        return "index.html" + (params.toString() ? "?" + params.toString() : "");
      };

      const pushTicketEvent = (ticket, label, detail) => {
        if (!ticket.events) {
          ticket.events = [];
        }
        ticket.events.unshift({
          label: label,
          detail: detail,
          at: new Date().toLocaleString("fr-FR"),
        });
      };

      const updateSelectionCopy = () => {
        const count = getSelectedExpes().length;
        const label = count === 0 ? "Aucune expédition sélectionnée" : count + " expédition(s) sélectionnée(s)";
        document.getElementById("prep-selection-copy").textContent = label;
      };

      const renderOverlay = () => {
        const root = document.getElementById("overlay-root");
        if (!overlayState) {
          root.innerHTML = "";
          return;
        }

        if (overlayState.type === "clientFiche") {
          const client = clientsDB[currentClientId];
          if (currentClientViewMode === "overview") {
            root.innerHTML =
              '<div class="overlay-shell" onclick="if(event.target===this){closeOverlay();}">' +
              '<div class="overlay-panel client-sheet-panel">' +
              renderClientOperationalSheet(client) +
              "</div>" +
              "</div>";
            return;
          }
          const contract = client.contract || {};
          const contactOps = client.contact || {};
          const billing = client.billing || {};
          const tabDefs = [
            { id: "infos", label: "Base & contacts" },
            { id: "contrat", label: "Contrat" },
            { id: "cutoff", label: "Cutoff" },
            { id: "users", label: "Utilisateurs" },
            { id: "catalogue", label: "Catalogue" },
          ];
          if (canViewFinance()) {
            tabDefs.push({ id: "finance", label: "Finance admin" });
          }
          root.innerHTML =
            '<div class="overlay-shell" onclick="if(event.target===this){closeOverlay();}">' +
            '<div class="overlay-panel">' +
            '<div class="client-fiche-hero"><div class="client-fiche-headline">' +
            "<div>" +
            '<p class="eyebrow">Client</p>' +
            "<h3>" +
            esc(client.emoji + " " + client.nom) +
            "</h3>" +
            '<p class="mini">Configuration client séparée de la fiche terrain.</p>' +
            "</div>" +
            '<div class="overlay-actions">' +
            '<button class="btn soft" onclick="returnToClientOverview()">Retour fiche</button>' +
            '<button class="btn soft" onclick="visualiserClient()">Prévisualiser le portail</button>' +
            '<button class="btn primary" onclick="saveClientFiche()">Enregistrer</button>' +
            '<button class="btn" onclick="closeClientFiche()">Fermer</button>' +
            "</div>" +
            "</div>" +
            '<div class="client-fiche-meta-strip">' +
            '<div class="client-fiche-meta"><span class="eyebrow">Pilotage</span><strong>' +
            esc("Cutoff " + client.cutoff.h + "h") +
            "</strong><span class='mini'>" +
            esc((client.cutoff.days || []).length + " jour(s) actif(s)") +
            "</span></div>" +
            '<div class="client-fiche-meta"><span class="eyebrow">Contrat</span><strong>' +
            esc(contract.materialsAllowed ? "Matériel autorisé" : "Matériel sur accord") +
            "</strong><span class='mini'>" +
            esc((contract.prepRequirements || []).length ? (contract.prepRequirements || []).slice(0, 2).join(" · ") : "Aucune exigence courte") +
            "</span></div>" +
            '<div class="client-fiche-meta"><span class="eyebrow">Contact client</span><strong>' +
            esc(contactOps.nom || "À définir") +
            "</strong><span class='mini'>" +
            esc(contactOps.email || contactOps.tel || "Coordonnées à compléter") +
            "</span></div>" +
            '<div class="client-fiche-meta"><span class="eyebrow">Finance</span><strong>' +
            esc(canViewFinance() ? String(((billing.preparation || {}).baseRate) || 0) + " € / prépa" : "Admin seulement") +
            "</strong><span class='mini'>" +
            esc(canViewFinance() ? "Repère discret visible dans la fiche" : "Tarification masquée") +
            "</span></div>" +
            "</div></div>" +
            '<div class="fiche-tabs">' +
            tabDefs
              .map((tab) => '<button class="tab' + (currentFicheTab === tab.id ? " active" : "") + '" onclick="switchFicheTab(\'' + tab.id + '\', this)">' + tab.label + "</button>")
              .join("") +
            "</div>" +
            '<div class="fiche-tab-content">' +
            loadFicheTab(currentFicheTab) +
            "</div>" +
            "</div>" +
            "</div>";
          setTimeout(() => {
            renderCertifs();
            renderCutoffPreview();
          }, 0);
          return;
        }

        if (overlayState.type === "clientConsumablePicker") {
          const client = clientsDB[currentClientId];
          const selected = ensureClientConsumables(client);
          const search = normalizeString(consumablePickerSearch);
          const options = CONSUMABLE_OPTIONS.filter((item) => {
            if (!search) {
              return true;
            }
            return normalizeString(item.label).includes(search) || item.key.includes(search.replace(/\s+/g, "_"));
          });
          root.innerHTML =
            '<div class="overlay-shell" onclick="if(event.target===this){returnToClientOverview();}">' +
            '<div class="overlay-panel">' +
            '<div class="overlay-head"><div><p class="eyebrow">Consommables</p><h3>Ajouter un consommable</h3><p class="mini">Sélectionner un consommable existant ou préparer la création d’un nouveau.</p></div><button class="btn" onclick="returnToClientOverview()">Fermer</button></div>' +
            '<div class="overlay-form">' +
            '<div class="field"><label for="client-consumable-search">Rechercher</label><input id="client-consumable-search" type="text" value="' +
            esc(consumablePickerSearch) +
            '" oninput="setConsumablePickerSearch(this.value)" placeholder="Ex. carton, pochette, document..." /></div>' +
            '<div class="field"><label>Déjà utilisés</label><div class="client-tag-list">' +
            renderConsumableTags(selected) +
            "</div></div>" +
            '<div class="field"><label>Consommables disponibles</label><div class="consumable-picker">' +
            (options.length
              ? options
                  .map(
                    (item) =>
                      '<button class="btn soft sm" type="button" onclick="addClientConsumable(\'' +
                      esc(item.key) +
                      "')\">" +
                      esc(item.label) +
                      "</button>"
                  )
                  .join("")
              : '<div class="empty-state">Aucun consommable trouvé.</div>') +
            "</div></div>" +
            '<div class="overlay-actions"><button class="btn primary" type="button" onclick="createClientConsumable()">Créer un consommable</button><button class="btn" type="button" onclick="returnToClientOverview()">Annuler</button></div>' +
            "</div></div></div>";
          return;
        }

        if (overlayState.type === "addUser") {
          root.innerHTML =
            '<div class="overlay-shell" onclick="if(event.target===this){cancelUserEdit();}">' +
            '<div class="overlay-panel">' +
            '<div class="overlay-head"><div><p class="eyebrow">Utilisateur</p><h3>Ajouter un utilisateur</h3></div><button class="btn" onclick="cancelUserEdit()">Fermer</button></div>' +
            '<div class="overlay-form">' +
            '<div class="form-split">' +
            '<div class="field"><label for="user-name">Nom</label><input id="user-name" type="text" placeholder="Nom complet" /></div>' +
            '<div class="field"><label for="user-email">Email</label><input id="user-email" type="email" placeholder="prenom@client.fr" /></div>' +
            "</div>" +
            '<div class="form-split">' +
            '<div class="field"><label for="user-tel">Téléphone</label><input id="user-tel" type="text" placeholder="06..." /></div>' +
            '<div class="field"><label for="user-role">Rôle</label><input id="user-role" type="text" list="roles-list" placeholder="Role libre" /></div>' +
            "</div>" +
            '<div class="overlay-actions"><button class="btn primary" onclick="confirmAddUser()">Ajouter</button><button class="btn" onclick="cancelUserEdit()">Annuler</button></div>' +
            "</div></div></div>";
          return;
        }

        if (overlayState.type === "editUser") {
          const user = clientsDB[currentClientId].users[overlayState.payload.index];
          root.innerHTML =
            '<div class="overlay-shell" onclick="if(event.target===this){cancelUserEdit();}">' +
            '<div class="overlay-panel">' +
            '<div class="overlay-head"><div><p class="eyebrow">Utilisateur</p><h3>Modifier ' +
            esc(user.nom) +
            '</h3></div><button class="btn" onclick="cancelUserEdit()">Fermer</button></div>' +
            '<div class="overlay-form">' +
            '<div class="form-split">' +
            '<div class="field"><label for="edit-user-name">Nom</label><input id="edit-user-name" type="text" value="' +
            esc(user.nom) +
            '" /></div>' +
            '<div class="field"><label for="edit-user-email">Email</label><input id="edit-user-email" type="email" value="' +
            esc(user.email) +
            '" /></div>' +
            "</div>" +
            '<div class="form-split">' +
            '<div class="field"><label for="edit-user-tel">Téléphone</label><input id="edit-user-tel" type="text" value="' +
            esc(user.tel) +
            '" /></div>' +
            '<div class="field"><label for="edit-user-role">Rôle</label><input id="edit-user-role" type="text" list="roles-list" value="' +
            esc(user.role) +
            '" /></div>' +
            "</div>" +
            '<div class="overlay-actions"><button class="btn primary" onclick="saveUserEdit()">Enregistrer</button><button class="btn" onclick="cancelUserEdit()">Annuler</button></div>' +
            "</div></div></div>";
          return;
        }

        if (overlayState.type === "addRef") {
          root.innerHTML =
            '<div class="overlay-shell" onclick="if(event.target===this){currentFicheTab=\'catalogue\';openOverlay(\'clientFiche\', { clientId: currentClientId });}">' +
            '<div class="overlay-panel">' +
            '<div class="overlay-head"><div><p class="eyebrow">Catalogue</p><h3>Ajouter une référence</h3></div><button class="btn" onclick="currentFicheTab=\'catalogue\';openOverlay(\'clientFiche\', { clientId: currentClientId })">Fermer</button></div>' +
            '<div class="overlay-form">' +
            '<div class="form-split">' +
            '<div class="field"><label for="ref-name">Nom</label><input id="ref-name" type="text" placeholder="Nom produit" /></div>' +
            '<div class="field"><label for="ref-type">Type</label><input id="ref-type" type="text" placeholder="Boisson, Pot..." /></div>' +
            "</div>" +
            '<div class="form-split">' +
            '<div class="field"><label for="ref-format">Format</label><input id="ref-format" type="text" placeholder="240mL" /></div>' +
            '<div class="field"><label for="ref-weight">Poids</label><input id="ref-weight" type="text" placeholder="0,31kg" /></div>' +
            "</div>" +
            '<div class="form-split">' +
            '<div class="field"><label for="ref-pav">PAV</label><input id="ref-pav" type="number" min="0" placeholder="0" /></div>' +
            '<div class="field"><label for="ref-code">Code</label><input id="ref-code" type="text" placeholder="code" /></div>' +
            "</div>" +
            '<div class="overlay-actions"><button class="btn primary" onclick="confirmAddRef()">Ajouter</button><button class="btn" onclick="currentFicheTab=\'catalogue\';openOverlay(\'clientFiche\', { clientId: currentClientId })">Annuler</button></div>' +
            "</div></div></div>";
          return;
        }

        if (overlayState.type === "print") {
          root.innerHTML =
            '<div class="overlay-shell" onclick="if(event.target===this){closeOverlay();}">' +
            '<div class="overlay-panel">' +
            '<div class="overlay-head"><div><p class="eyebrow">Impression</p><h3>' +
            esc(overlayState.payload.title) +
            '</h3></div><div class="overlay-actions"><button class="btn soft" onclick="window.print()">Imprimer</button><button class="btn" onclick="closeOverlay()">Fermer</button></div></div>' +
            '<div class="card" style="box-shadow:none;border-style:dashed">' +
            overlayState.payload.body +
            "</div></div></div>";
          return;
        }

        if (overlayState.type === "ledgerMovement") {
          const payload = overlayState.payload || {};
          const defaultClientId = payload.ownerClientId || (getLedgerClientFilterValue() !== "all" ? getLedgerClientFilterValue() : "yumi");
          const defaultProduct = getLedgerProductsForClient(defaultClientId)[0] || ledgerProducts[0];
          const defaultLocation = ledgerLocations.find((item) => item.bioZone) || ledgerLocations[0];
          const kind = payload.kind || "IN";
          const nowValue = new Date().toISOString().slice(0, 16);
          root.innerHTML =
            '<div class="overlay-shell" onclick="if(event.target===this){closeOverlay();}"><div class="overlay-panel"><div class="overlay-head"><div><p class="eyebrow">Mouvement stock</p><h3>' +
            esc(kind === "MOVE" ? "Nouveau déplacement" : kind === "ADJUST" ? "Nouvel ajustement" : kind === "OUT" ? "Nouvelle sortie" : "Nouvelle entrée") +
            '</h3><p class="mini">Chaque mouvement crée une trace immuable dans le ledger.</p></div><button class="btn" onclick="closeOverlay()">Fermer</button></div><div class="overlay-form">' +
            '<div class="form-split"><div class="field"><label for="ledger-owner-client">Client propriétaire</label><select id="ledger-owner-client" onchange="refreshLedgerMovementProducts()">' +
            buildClientOptionsMarkup(defaultClientId) +
            '</select></div><div class="field"><label for="ledger-product-id">Produit</label><select id="ledger-product-id" onchange="syncLedgerMovementProductSnapshot()">' +
            buildProductOptionsMarkup(defaultClientId, defaultProduct ? defaultProduct.id : "") +
            "</select></div></div>" +
            '<div class="form-split"><div class="field"><label for="ledger-product-label">Nom produit (snapshot)</label><input id="ledger-product-label" type="text" value="' +
            esc(defaultProduct ? defaultProduct.productMasterName : "") +
            '" /></div><div class="field"><label for="ledger-quantity">Quantité</label><input id="ledger-quantity" type="number" min="0.001" step="0.001" value="1" /></div></div>' +
            '<div class="form-split"><div class="field"><label for="ledger-unit">Unité</label><input id="ledger-unit" type="text" value="' +
            esc(defaultProduct ? defaultProduct.unit : "unité") +
            '" /></div><div class="field"><label for="ledger-bio-status">Statut BIO</label><select id="ledger-bio-status"><option value="BIO">BIO</option><option value="NON-BIO">NON-BIO</option></select></div></div>' +
            (kind === "MOVE"
              ? '<div class="form-split"><div class="field"><label for="ledger-from-location">Emplacement source</label><select id="ledger-from-location">' +
                buildLocationOptionsMarkup(defaultLocation ? defaultLocation.id : "") +
                '</select></div><div class="field"><label for="ledger-to-location">Emplacement destination</label><select id="ledger-to-location">' +
                buildLocationOptionsMarkup("loc-zbio-a01") +
                "</select></div></div>"
              : '<div class="field"><label for="ledger-location-id">Emplacement</label><select id="ledger-location-id">' + buildLocationOptionsMarkup(defaultLocation ? defaultLocation.id : "") + "</select></div>") +
            '<div class="form-split"><div class="field"><label for="ledger-event-timestamp">Date / heure mouvement</label><input id="ledger-event-timestamp" type="datetime-local" value="' +
            esc(nowValue) +
            '" /></div><div class="field"><label for="ledger-source-reference">Document source</label><input id="ledger-source-reference" type="text" placeholder="ASN, BL, inventaire..." /></div></div>' +
            (kind === "OUT"
              ? '<div class="field"><label for="ledger-out-reason">Motif sortie</label><select id="ledger-out-reason">' +
                Object.keys(OUT_REASON_LABELS).map((code) => '<option value="' + code + '">' + OUT_REASON_LABELS[code] + "</option>").join("") +
                "</select></div>"
              : kind === "ADJUST"
                ? '<div class="form-split"><div class="field"><label for="ledger-adjust-type">Type ajustement</label><select id="ledger-adjust-type"><option value="ADJUST_IN">Ajustement +</option><option value="ADJUST_OUT">Ajustement -</option></select></div><div class="field"><label for="ledger-adjust-reason">Motif ajustement</label><select id="ledger-adjust-reason">' +
                  Object.keys(ADJUST_REASON_LABELS).map((code) => '<option value="' + code + '">' + ADJUST_REASON_LABELS[code] + "</option>").join("") +
                  "</select></div></div>"
                : "") +
            '<div class="form-split"><div class="field"><label for="ledger-lot">Lot</label><input id="ledger-lot" type="text" placeholder="L260417A" /></div><div class="field"><label for="ledger-dlc">DLC / DDM</label><input id="ledger-dlc" type="date" /></div></div>' +
            '<div class="field"><label for="ledger-comment">Commentaire</label><textarea id="ledger-comment" placeholder="Contexte opérationnel"></textarea></div>' +
            '<div class="overlay-actions"><button class="btn primary" onclick="saveLedgerMovement()">Enregistrer</button><button class="btn" onclick="closeOverlay()">Annuler</button></div></div></div></div>';
          return;
        }

        if (overlayState.type === "inventorySession") {
          const defaultClientId = getLedgerClientFilterValue() !== "all" ? getLedgerClientFilterValue() : "yumi";
          root.innerHTML =
            '<div class="overlay-shell" onclick="if(event.target===this){closeOverlay();}"><div class="overlay-panel"><div class="overlay-head"><div><p class="eyebrow">Session inventaire</p><h3>Nouvelle session</h3></div><button class="btn" onclick="closeOverlay()">Fermer</button></div><div class="overlay-form">' +
            '<div class="form-split"><div class="field"><label for="inventory-session-client">Client</label><select id="inventory-session-client">' +
            buildClientOptionsMarkup(defaultClientId) +
            '</select></div><div class="field"><label for="inventory-session-date">Date session</label><input id="inventory-session-date" type="date" value="' +
            esc(new Date().toISOString().slice(0, 10)) +
            '" /></div></div>' +
            '<div class="form-split"><div class="field"><label for="inventory-session-scope">Périmètre</label><select id="inventory-session-scope"><option value="FULL">Complet</option><option value="PARTIAL">Partiel</option><option value="LOCATION">Emplacement</option></select></div><div class="field"><label for="inventory-session-scope-ref">Référence périmètre</label><input id="inventory-session-scope-ref" type="text" placeholder="Ex. Z-BIO · A-01" /></div></div>' +
            '<div class="form-split"><div class="field"><label for="inventory-session-type">Type</label><select id="inventory-session-type"><option value="scheduled">Programmé</option><option value="on_demand">À la demande</option></select></div><div class="field"><label for="inventory-session-zone">Zone</label><select id="inventory-session-zone"><option value="dry">Sec</option><option value="cold">Froid</option></select></div></div>' +
            '<div class="form-split"><div class="field"><label for="inventory-session-duration">Durée prévue (min)</label><input id="inventory-session-duration" type="number" min="0" step="1" value="45" /></div><div class="field"><label for="inventory-session-created-by">Agent</label><input id="inventory-session-created-by" type="text" value="usr-local" /></div></div>' +
            '<div class="form-split"><div class="field"><label for="inventory-session-reason">Motif</label><input id="inventory-session-reason" type="text" placeholder="Ex. demande client, contrôle hebdo" /></div><div class="field"><label for="inventory-session-nonbillable"><input id="inventory-session-nonbillable" type="checkbox" /> Non facturable</label><input id="inventory-session-nonbillable-reason" type="text" placeholder="Ex. erreur interne" /></div></div>' +
            '<div class="field"><label for="inventory-session-comment">Commentaire</label><textarea id="inventory-session-comment" placeholder="Contexte de comptage"></textarea></div>' +
            '<div class="overlay-actions"><button class="btn primary" onclick="saveInventorySession()">Créer la session</button><button class="btn" onclick="closeOverlay()">Annuler</button></div></div></div></div>';
          return;
        }

        if (overlayState.type === "inventoryCount") {
          const payload = overlayState.payload || {};
          const session = ledgerInventorySessions.find((item) => item.id === payload.sessionId);
          if (!session) {
            closeOverlay();
            return;
          }
          const defaultProduct = getLedgerProductsForClient(session.ownerClientId)[0] || ledgerProducts[0];
          root.innerHTML =
            '<div class="overlay-shell" onclick="if(event.target===this){closeOverlay();}"><div class="overlay-panel"><div class="overlay-head"><div><p class="eyebrow">Comptage</p><h3>Ajouter une ligne de comptage</h3></div><button class="btn" onclick="closeOverlay()">Fermer</button></div><div class="overlay-form">' +
            '<div class="form-split"><div class="field"><label for="inventory-count-product">Produit</label><select id="inventory-count-product">' +
            buildProductOptionsMarkup(session.ownerClientId, defaultProduct ? defaultProduct.id : "") +
            '</select></div><div class="field"><label for="inventory-count-location">Emplacement</label><select id="inventory-count-location">' +
            buildLocationOptionsMarkup("loc-zbio-a01") +
            '</select></div></div>' +
            '<div class="form-split"><div class="field"><label for="inventory-count-lot">Lot</label><input id="inventory-count-lot" type="text" placeholder="Lot si connu" /></div><div class="field"><label for="inventory-count-dlc">DLC / DDM</label><input id="inventory-count-dlc" type="date" /></div></div>' +
            '<div class="form-split"><div class="field"><label for="inventory-count-quantity">Qté comptée</label><input id="inventory-count-quantity" type="number" min="0" step="0.001" value="0" /></div><div class="field"><label for="inventory-count-bio">Statut BIO</label><select id="inventory-count-bio"><option value="BIO">BIO</option><option value="NON-BIO">NON-BIO</option></select></div></div>' +
            '<div class="field"><label for="inventory-count-comment">Commentaire</label><textarea id="inventory-count-comment" placeholder="Observation de comptage"></textarea></div>' +
            '<div class="overlay-actions"><button class="btn primary" onclick="saveInventoryCount()">Ajouter la ligne</button><button class="btn" onclick="closeOverlay()">Annuler</button></div></div></div></div>';
          return;
        }

        if (overlayState.type === "quickTicket") {
          const payload = overlayState.payload || {};
          root.innerHTML =
            '<div class="overlay-shell" onclick="if(event.target===this){closeOverlay();}">' +
            '<div class="overlay-panel">' +
            '<div class="overlay-head"><div><p class="eyebrow">Ticket rapide</p><h3>Créer un ticket intégré</h3><p class="mini">Incident rattaché à un client, une prépa, une expédition, un lot ou un BL.</p></div><button class="btn" onclick="closeOverlay()">Fermer</button></div>' +
            '<div class="overlay-form">' +
            '<div class="form-split">' +
            '<div class="field"><label for="quick-ticket-title">Titre</label><input id="quick-ticket-title" type="text" value="' + esc(payload.title || "") + '" placeholder="Ex. BL absent à la livraison" /></div>' +
            '<div class="field"><label for="quick-ticket-client">Client</label><select id="quick-ticket-client">' +
            Object.values(clientsDB)
              .map((client) => '<option value="' + client.id + '"' + ((payload.clientId || "yumi") === client.id ? " selected" : "") + ">" + esc(client.nom) + "</option>")
              .join("") +
            "</select></div></div>" +
            '<div class="form-split">' +
            '<div class="field"><label for="quick-ticket-source-type">Source</label><select id="quick-ticket-source-type"><option value="prep"' + ((payload.sourceType || "") === "prep" ? " selected" : "") + '>Préparation</option><option value="shipment"' + ((payload.sourceType || "") === "shipment" ? " selected" : "") + '>Expédition / BL</option><option value="client"' + ((payload.sourceType || "") === "client" ? " selected" : "") + '>Client</option><option value="lot"' + ((payload.sourceType || "") === "lot" ? " selected" : "") + '>Lot</option><option value="reception"' + ((payload.sourceType || "") === "reception" ? " selected" : "") + '>Réception</option><option value="commande"' + ((payload.sourceType || "") === "commande" ? " selected" : "") + '>Commande</option></select></div>' +
            '<div class="field"><label for="quick-ticket-source-id">Référence source</label><input id="quick-ticket-source-id" type="text" value="' + esc(payload.sourceId || "") + '" placeholder="PREP-..., Expe..., lot..." /></div></div>' +
            '<div class="field"><label for="quick-ticket-cyke-id">ID Cyke</label><input id="quick-ticket-cyke-id" type="text" value="' + esc(payload.cykeId || "") + '" placeholder="Ex. Expe0112525" /></div>' +
            '<div class="form-split">' +
            '<div class="field"><label for="quick-ticket-priority">Priorité</label><select id="quick-ticket-priority"><option' + ((payload.priority || "Normale") === "Normale" ? " selected" : "") + '>Normale</option><option' + ((payload.priority || "") === "Haute" ? " selected" : "") + '>Haute</option><option' + ((payload.priority || "") === "Critique" ? " selected" : "") + '>Critique</option></select></div>' +
            '<div class="field"><label for="quick-ticket-owner">Responsable</label><select id="quick-ticket-owner"><option' + ((payload.owner || "") === "ADV Cargonautes" ? " selected" : "") + '>ADV Cargonautes</option><option' + ((payload.owner || "") === "Sophie B." ? " selected" : "") + '>Sophie B.</option><option' + ((payload.owner || "") === "Hugo M." ? " selected" : "") + '>Hugo M.</option><option' + ((payload.owner || "") === "Nora T." ? " selected" : "") + '>Nora T.</option></select></div></div>' +
            '<div class="field"><label for="quick-ticket-summary">Résumé</label><textarea id="quick-ticket-summary" placeholder="Décris l’incident, l’impact opérationnel et le contexte.">' + esc(payload.summary || "") + "</textarea></div>" +
            '<div class="overlay-actions"><button class="btn primary" onclick="saveQuickTicket()">Créer le ticket</button><button class="btn" onclick="closeOverlay()">Annuler</button></div>' +
            "</div></div></div>";
          return;
        }

        if (overlayState.type === "receptionAnomaly") {
          const payload = overlayState.payload || {};
          root.innerHTML =
            '<div class="overlay-shell" onclick="if(event.target===this){closeOverlay();}">' +
            '<div class="overlay-panel">' +
            '<div class="overlay-head"><div><p class="eyebrow">Anomalie réception</p><h3>Décrire l’anomalie</h3><p class="mini">Cette anomalie pourra créer un ticket client avec rappel 48h.</p></div><button class="btn" onclick="closeOverlay()">Fermer</button></div>' +
            '<div class="overlay-form">' +
            '<div class="field"><label for="reception-anomaly-title">Titre</label><input id="reception-anomaly-title" type="text" value="' +
            esc(payload.title || "") +
            '" placeholder="Ex. Palette cassée à réception" /></div>' +
            '<div class="field"><label for="reception-anomaly-severity">Priorité ticket</label><select id="reception-anomaly-severity"><option' +
            ((payload.severity || "Normale") === "Normale" ? " selected" : "") +
            '>Normale</option><option' +
            ((payload.severity || "") === "Haute" ? " selected" : "") +
            '>Haute</option><option' +
            ((payload.severity || "") === "Critique" ? " selected" : "") +
            '>Critique</option></select></div>' +
            '<div class="field"><label for="reception-anomaly-detail">Description</label><textarea id="reception-anomaly-detail" placeholder="Décris l’anomalie constatée, l’impact et les éléments à transmettre au client.">' +
            esc(payload.detail || "") +
            "</textarea></div>" +
            '<div class="overlay-actions"><button class="btn primary" onclick="saveReceptionAnomaly()">Enregistrer l’anomalie</button><button class="btn" onclick="closeOverlay();updateReceptionAnomalyInline()">Annuler</button></div>' +
            "</div></div></div>";
          return;
        }

        if (overlayState.type === "receptionDetail") {
          const entry = RECEPTIONS_LOG.find((item) => item.id === (overlayState.payload || {}).receptionId);
          if (!entry) {
            closeOverlay();
            return;
          }
          const stockDecision = getReceptionStockDecision(entry);
        root.innerHTML =
          '<div class="overlay-shell" onclick="if(event.target===this){closeOverlay();}"><div class="overlay-panel"><div class="overlay-head"><div><p class="eyebrow">Réception</p><h3>' +
          esc(entry.id) +
          '</h3></div><button class="btn" onclick="closeOverlay()">Fermer</button></div>' +
          '<div class="chip-cloud" style="margin-bottom:14px"><span class="badge ' +
          stockDecision.badge +
          '">' +
          esc(stockDecision.label) +
          "</span><span class='mini'>" +
          renderReceptionStateMarkup(entry) +
          " · " +
          esc(stockDecision.detail) +
          "</span></div>" +
          '<div class="info-grid">' +
          '<div class="info-tile"><span class="eyebrow">Client</span><strong>' + esc(getClientNameById(entry.clientId)) + "</strong></div>" +
            '<div class="info-tile"><span class="eyebrow">Agent</span><strong>' + esc(entry.agent || "—") + "</strong></div>" +
            '<div class="info-tile"><span class="eyebrow">Date / heure</span><strong>' + esc(getReceptionDateLabel(entry.receptionDate) + " · " + (entry.arrivalTime || "—")) + "</strong></div>" +
            '<div class="info-tile"><span class="eyebrow">Flux</span><strong>' + esc(entry.storageMode === "frais" ? "Frais" : "Sec") + (entry.temperature !== null && entry.temperature !== undefined ? " · " + esc(String(entry.temperature)) + " °C" : "") + "</strong></div>" +
            '<div class="info-tile"><span class="eyebrow">Transporteur</span><strong>' + esc(entry.transporteur || "—") + "</strong></div>" +
            '<div class="info-tile"><span class="eyebrow">Plaque</span><strong>' + esc(entry.vehiclePlate || "—") + "</strong></div>" +
            "</div>" +
            '<div class="stock-detail-grid" style="margin-top:14px"><div class="stock-detail-block"><strong>Palettes</strong><div class="stock-keyvals"><div><span>Au sol · EUR</span><strong>' +
            esc(String(entry.palettesSolEurope || 0)) +
            "</strong></div><div><span>Au sol · perdues</span><strong>" +
            esc(String(entry.palettesSolPerdues || 0)) +
            "</strong></div><div><span>Rendues · EUR</span><strong>" +
            esc(String(entry.palettesRenduesEurope || 0)) +
            "</strong></div><div><span>Rendues · perdues</span><strong>" +
            esc(String(entry.palettesRenduesPerdues || 0)) +
            "</strong></div></div></div><div class='stock-detail-block'><strong>Anomalie</strong><span class='mini'>" +
            esc(entry.anomaly ? entry.anomaly.detail : "Aucune anomalie signalée.") +
            "</span></div>" +
            buildReceptionBioSummaryMarkup(entry.bioControl) +
            "</div>" +
            '<div class="overlay-actions"><button class="btn soft" onclick="openReceptionConfig(\'' +
            esc(entry.id) +
            "')\">Configurer</button><button class='btn' onclick='closeOverlay()'>Fermer</button></div></div></div>";
          return;
        }

        if (overlayState.type === "receptionConfig") {
          const entry = RECEPTIONS_LOG.find((item) => item.id === (overlayState.payload || {}).receptionId);
          if (!entry) {
            closeOverlay();
            return;
          }
          const transporteurOptions = getReceptionTransporteurs()
            .map((item) => '<option value="' + esc(item) + '"></option>')
            .join("");
          root.innerHTML =
            '<div class="overlay-shell" onclick="if(event.target===this){closeOverlay();}"><div class="overlay-panel"><div class="overlay-head"><div><p class="eyebrow">Configurer</p><h3>' +
            esc(entry.id) +
            '</h3></div><button class="btn" onclick="closeOverlay()">Fermer</button></div><div class="overlay-form">' +
            '<div class="form-split"><div class="field"><label for="config-reception-agent">Agent</label><select id="config-reception-agent">' +
            receptionAgents.map((agent) => '<option value="' + esc(agent) + '"' + (entry.agent === agent ? " selected" : "") + ">" + esc(agent) + "</option>").join("") +
            '</select></div><div class="field"><label for="config-reception-client">Client</label><select id="config-reception-client">' +
            Object.values(clientsDB).map((client) => '<option value="' + esc(client.id) + '"' + (entry.clientId === client.id ? " selected" : "") + ">" + esc(client.nom) + "</option>").join("") +
            "</select></div></div>" +
            '<div class="form-split"><div class="field"><label for="config-reception-date">Date</label><input id="config-reception-date" type="date" value="' + esc(entry.receptionDate || "") + '" /></div><div class="field"><label for="config-reception-time">Heure d’arrivée</label><input id="config-reception-time" type="time" value="' + esc(entry.arrivalTime || "") + '" /></div></div>' +
            '<div class="form-split"><div class="field"><label for="config-reception-transporteur">Transporteur</label><input id="config-reception-transporteur" type="text" list="config-reception-transporteurs" value="' + esc(entry.transporteur || "") + '" /><datalist id="config-reception-transporteurs">' + transporteurOptions + '</datalist></div><div class="field"><label for="config-reception-plate">Plaque</label><input id="config-reception-plate" type="text" value="' + esc(entry.vehiclePlate || "") + '" /></div></div>' +
            '<div class="form-split"><div class="field"><label for="config-reception-mode">Flux</label><select id="config-reception-mode"><option value="sec"' + (entry.storageMode === "sec" ? " selected" : "") + '>Sec</option><option value="frais"' + (entry.storageMode === "frais" ? " selected" : "") + '>Frais</option></select></div><div class="field"><label for="config-reception-temperature">Température</label><input id="config-reception-temperature" type="number" step="0.1" value="' + esc(entry.temperature ?? "") + '" /></div></div>' +
            '<div class="form-split"><div class="field"><label for="config-reception-sol-eur">Au sol · EUR</label><input id="config-reception-sol-eur" type="number" min="0" value="' + esc(String(entry.palettesSolEurope || 0)) + '" /></div><div class="field"><label for="config-reception-sol-perdues">Au sol · perdues</label><input id="config-reception-sol-perdues" type="number" min="0" value="' + esc(String(entry.palettesSolPerdues || 0)) + '" /></div></div>' +
            '<div class="form-split"><div class="field"><label for="config-reception-rendues-eur">Rendues · EUR</label><input id="config-reception-rendues-eur" type="number" min="0" value="' + esc(String(entry.palettesRenduesEurope || 0)) + '" /></div><div class="field"><label for="config-reception-rendues-perdues">Rendues · perdues</label><input id="config-reception-rendues-perdues" type="number" min="0" value="' + esc(String(entry.palettesRenduesPerdues || 0)) + '" /></div></div>' +
            '<div class="overlay-actions"><button class="btn danger" onclick="deleteReceptionEntry(\'' +
            esc(entry.id) +
            "')\">Supprimer</button><div class='button-row'><button class='btn' onclick='closeOverlay()'>Annuler</button><button class='btn primary' onclick=\"saveReceptionConfig('" +
            esc(entry.id) +
            "')\">Enregistrer</button></div></div></div></div></div>";
          return;
        }

        if (overlayState.type === "editCommand") {
          const payload = overlayState.payload || {};
          const row = getCommandByRef(payload.dateKey, payload.cutoffId, payload.commandId);
          if (!row) {
            closeOverlay();
            return;
          }
          root.innerHTML =
            '<div class="overlay-shell" onclick="if(event.target===this){closeOverlay();}">' +
            '<div class="overlay-panel">' +
            '<div class="overlay-head"><div><p class="eyebrow">Commande</p><h3>Modifier ' +
            esc(row.id) +
            '</h3><p class="mini">Ajuste le client, le statut, la préparation et les volumes sans quitter le cutoff.</p></div><button class="btn" onclick="closeOverlay()">Fermer</button></div>' +
            '<div class="command-context"><strong>' +
            esc((CUTOFFS.find((item) => item.id === payload.cutoffId) || {}).label || "") +
            " · " +
            esc(formatCutoffDay(payload.dateKey)) +
            "</strong><span class='mini'>" +
            esc(row.client) +
            " · " +
            esc(row.cyke) +
            "</span></div>" +
            '<div class="overlay-form">' +
            '<div class="command-edit-grid">' +
            '<div class="field"><label for="edit-command-client">Client</label><input id="edit-command-client" type="text" value="' +
            esc(row.client) +
            '" /></div>' +
            '<div class="field"><label for="edit-command-status">État</label><select id="edit-command-status"><option' +
            (row.etat === "En attente" ? " selected" : "") +
            '>En attente</option><option' +
            (row.etat === "En cours" ? " selected" : "") +
            '>En cours</option><option' +
            (row.etat === "Terminée" ? " selected" : "") +
            '>Terminée</option><option' +
            (row.etat === "Rupture" ? " selected" : "") +
            '>Rupture</option><option' +
            (row.etat === "Annulée" ? " selected" : "") +
            '>Annulée</option></select></div>' +
            '<div class="field"><label for="edit-command-date">Date expéd.</label><input id="edit-command-date" type="text" value="' +
            esc(row.dateExp) +
            '" /></div>' +
            '<div class="field"><label for="edit-command-prep">Préparé par</label><input id="edit-command-prep" type="text" value="' +
            esc(row.prepPar) +
            '" /></div>' +
            '<div class="field"><label for="edit-command-items">Items</label><input id="edit-command-items" type="number" min="0" value="' +
            esc(String(row.items)) +
            '" /></div>' +
            '<div class="field"><label for="edit-command-cyke">Réf. Cyke</label><input id="edit-command-cyke" type="text" value="' +
            esc(row.cyke) +
            '" /></div>' +
            "</div>" +
            '<div class="overlay-actions"><button class="btn primary" onclick="saveCommandEdit()">Enregistrer</button><button class="btn" onclick="closeOverlay()">Annuler</button></div>' +
            "</div></div></div>";
          return;
        }
      };

      const toggleSelectedExpe = (id, checked) => {
        if (checked) {
          selectedExpes.add(id);
        } else {
          selectedExpes.delete(id);
        }
        updateSelectionCopy();
      };

      function navigate(page, el) {
        currentPage = page;
        document.querySelectorAll(".page").forEach((node) => node.classList.remove("active"));
        document.getElementById("page-" + page).classList.add("active");
        document.querySelectorAll(".nav-link").forEach((node) => node.classList.remove("active"));
        if (el) {
          el.classList.add("active");
        } else {
          document.querySelectorAll(".nav-link").forEach((node) => {
            if (node.dataset.page === page) {
              node.classList.add("active");
            }
          });
        }
        const pageTitle = document.getElementById("page-title");
        if (pageTitle) {
          pageTitle.textContent = titles[page] || page;
        }
        updateTopbarMode();
        closeAllDropdowns();
        if (page === "dashboard") {
          renderCutoffGrid();
        }
        if (page === "reception") {
          renderReceptionPage();
        }
        if (page === "preparation") {
          renderPrepList();
          lancerCartons();
        }
        if (page === "config") {
          renderPalettes();
        }
        if (page === "clients") {
          renderClientCards();
        }
        if (page === "stock") {
          renderStockPage();
        }
        if (page === "inventaires") {
          renderInventoryPage();
        }
        if (page === "transporteurs") {
          renderTransporteursPage();
        }
        if (page === "sav") {
          renderSavPage();
        }
      }

      function updateTopbarMode() {
        document.body.classList.toggle("dashboard-minimal", currentPage === "dashboard");
      }

      function toggleSidebar() {
        sidebarCollapsed = !sidebarCollapsed;
        applySidebarState();
        try {
          window.localStorage.setItem(SIDEBAR_STORAGE_KEY, sidebarCollapsed ? "1" : "0");
        } catch (error) {
          console.warn("Impossible de persister l'état du menu.", error);
        }
      }

      function openOverlay(type, payload) {
        overlayState = { type: type, payload: payload || {} };
        document.body.classList.add("overlay-open");
        document.getElementById("overlay-root").classList.add("visible");
        renderOverlay();
      }

      function closeOverlay() {
        overlayState = null;
        document.body.classList.remove("overlay-open");
        const root = document.getElementById("overlay-root");
        root.classList.remove("visible");
        root.innerHTML = "";
      }

      function sortTable(tableId, columnIndex, type) {
        const table = document.getElementById(tableId);
        if (!table || !table.tBodies.length) {
          return;
        }
        const rows = Array.from(table.tBodies[0].rows);
        const dir = table.dataset.sortDir === "asc" ? "desc" : "asc";
        table.dataset.sortDir = dir;
        rows.sort((a, b) => {
          const left = a.cells[columnIndex].innerText.trim();
          const right = b.cells[columnIndex].innerText.trim();
          let comparison = 0;
          if (type === "number") {
            comparison = Number(left.replace(/[^\d.-]/g, "")) - Number(right.replace(/[^\d.-]/g, ""));
          } else {
            comparison = left.localeCompare(right, "fr");
          }
          return dir === "asc" ? comparison : comparison * -1;
        });
        rows.forEach((row) => table.tBodies[0].appendChild(row));
      }

      function switchTab(scopeId, tabId) {
        const scope = document.getElementById(scopeId);
        if (!scope) {
          return;
        }
        scope.querySelectorAll("[data-tab]").forEach((node) => {
          node.classList.toggle("active", node.dataset.tab === tabId);
        });
        scope.querySelectorAll("[data-panel]").forEach((node) => {
          node.hidden = node.dataset.panel !== tabId;
        });
      }

      function setStatus(targetId, newStatus) {
        const node = document.querySelector('[data-status-target="' + targetId + '"]');
        if (!node) {
          return;
        }
        node.textContent = newStatus;
        node.className = "badge " + statusBadge(newStatus);
      }

      function toggleDropdown(id) {
        const wrap = document.getElementById(id);
        if (!wrap) {
          return;
        }
        const shouldOpen = !wrap.classList.contains("open");
        closeAllDropdowns();
        wrap.classList.toggle("open", shouldOpen);
      }

      function closeAllDropdowns() {
        document.querySelectorAll(".dropdown-wrap").forEach((node) => node.classList.remove("open"));
      }

      function showTip(id, text, evt) {
        const tip = document.getElementById(id);
        if (!tip) {
          return;
        }
        tip.innerHTML = "<span>" + esc(text) + "</span>";
        tip.style.left = evt.clientX + 16 + "px";
        tip.style.top = evt.clientY + 16 + "px";
        tip.classList.add("visible");
      }

      function hideTip(id) {
        const tip = document.getElementById(id);
        if (tip) {
          tip.classList.remove("visible");
        }
      }

      function toggleDay(day, force) {
        const days = clientsDB[currentClientId].cutoff.days;
        const exists = days.includes(day);
        const nextState = typeof force === "boolean" ? force : !exists;
        if (nextState && !exists) {
          days.push(day);
        }
        if (!nextState && exists) {
          clientsDB[currentClientId].cutoff.days = days.filter((item) => item !== day);
        }
        clientsDB[currentClientId].cutoff.days.sort((a, b) => a - b);
        persistClientsStore();
        renderOverlay();
      }

      function renderCutoffGrid() {
        const dashboardReference = getDashboardReferenceDate();
        const weekBase = new Date(semaineOffset === 0 ? dashboardReference.focusDate : dashboardReference.today);
        weekBase.setDate(weekBase.getDate() + semaineOffset * 7);
        const monday = getMondayOf(weekBase);
        const mondayKey = isoDay(monday);
        if (!mockData._weekKey || mockData._weekKey !== mondayKey) {
          mockData = genMockCommandes(monday);
          mockData._weekKey = mondayKey;
        }

        const allDays = Array.from({ length: 7 }, (_, index) => {
          const day = new Date(monday);
          day.setDate(monday.getDate() + index);
          return day;
        });
        const days = allDays.filter((day) => isSiteOpenOnDate(day));

        document.getElementById("week-label").textContent = days.length
          ? formatCutoffDay(isoDay(days[0])) + " → " + formatCutoffDay(isoDay(days[days.length - 1]))
          : "Aucun jour d’ouverture";
        const siteStatus = getSiteOperationalStatus(dashboardReference.today);

        let totalOrders = 0;
        let urgentOrders = 0;
        const totalClients = new Set();
        const prepActive = PREP_STORE.filter((item) => item.statut === "En cours" || item.statut === "En attente").length;
        const focusKey = dashboardReference.focusKey;
        const focusLabel = dashboardReference.mode === "preview" ? "Prochain jour" : "Aujourd’hui";
        const focusDateLabel = formatCutoffDay(focusKey);
        const focusOrders = CUTOFFS.reduce((acc, cutoff) => acc + getActiveCutoffRows(focusKey, cutoff.id).length, 0);
        const unresolvedTickets = SAV_TICKETS.filter((ticket) => ticket.status !== "Résolu");
        const openTickets = unresolvedTickets.length;
        const focusReceptions = getActiveReceptionEntries().filter((entry) => entry.receptionDate === focusKey).length;
        const focusRuptures = CUTOFFS.reduce((acc, cutoff) => acc + getCutoffRuptureCount(getActiveCutoffRows(focusKey, cutoff.id)), 0);
        const paletteTraffic = getPaletteTrafficForDate(focusKey);
        const savNewCount = unresolvedTickets.filter((ticket) => ticket.status === "Ouvert").length;
        const savNeedsActionCount = unresolvedTickets.filter((ticket) => getSavWaitingAction(ticket) === "Action Cargonautes").length;
        const savCriticalCount = unresolvedTickets.filter((ticket) => ticket.priority === "Critique").length;
        const savRiskCount = unresolvedTickets.filter((ticket) => getSlaTone(ticket) === "sla-risk").length;
        const savAttentionCount = unresolvedTickets.filter((ticket) => {
          return (
            ticket.status === "Ouvert" ||
            ticket.priority === "Critique" ||
            getSavWaitingAction(ticket) === "Action Cargonautes" ||
            getSlaTone(ticket) === "sla-risk"
          );
        }).length;
        const monthlyPrepStats = getMonthlyPrepStats();

        const head = days
          .map((dt) => {
            const key = isoDay(dt);
            const parts = formatCutoffDayHead(key);
            const isFocusDay = key === focusKey;
            const headStateClass = isFocusDay ? (dashboardReference.mode === "preview" ? " is-preview" : " is-today") : "";
            const daySummary = getDayCommandSummary(key);
            return (
              '<th class="cutoff-day-head' +
              headStateClass +
              '"><div class="cutoff-day-head-inner"><span>' +
              esc(parts.weekday) +
              "</span><strong>" +
              esc(parts.shortDate) +
              "</strong><div class='cutoff-day-summary'><span><strong>" +
              esc(String(daySummary.done)) +
              "</strong> faites</span><span><strong>" +
              esc(String(daySummary.cancelled)) +
              "</strong> annulées</span><span><strong>" +
              esc(String(daySummary.errors)) +
              "</strong> erreurs</span></div></div></th>"
            );
          })
          .join("");

        let rows = "";
        CUTOFFS.forEach((co) => {
          const rowOpen = openCutoffKey === co.id;
          rows += '<tr class="cutoff-row' + (rowOpen ? " is-open" : "") + '"><th class="cutoff-row-label"><span class="cutoff-row-badge ' + cutoffToneClass(co.id) + '">' + co.label + "</span></th>";
          days.forEach((dt) => {
            const key = isoDay(dt);
            const commands = getActiveCutoffRows(key, co.id);
            const cellOpen = openCutoffKey === co.id && openDateKey === key;
            const progress = getCutoffProgress(commands);
            totalOrders += commands.length;
            if (co.id === "urg") {
              urgentOrders += commands.length;
            }
            commands.forEach((item) => totalClients.add(item.client));
            rows +=
              '<td><div class="cutoff-cell ' +
              cutoffToneClass(co.id) +
              (commands.length === 0 ? " is-empty" : "") +
              (cellOpen ? " is-open" : "") +
              '" onclick="openCutoffDetail(\'' +
              key +
              "','" +
              co.id +
              "','" +
              co.label +
              '\')" onmouseenter="showCutoffTooltip(event,\'' +
              key +
              "','" +
              co.id +
              "','" +
              co.label +
              '\')" onmouseleave="hideCutoffTooltip()">' +
              '<span class="cutoff-metric' +
              (commands.length === 0 ? " is-empty" : progress.ready ? " is-ready" : " is-partial") +
              '">' +
              (commands.length === 0 ? "0" : progress.readyCount + "/" + progress.total) +
              "</span>" +
              '<div class="cutoff-status-subcopy">' +
              (commands.length === 0
                ? "Aucune"
                : progress.ruptureCount
                  ? progress.ruptureCount + " rupture" + (progress.ruptureCount > 1 ? "s" : "")
                  : progress.total + " prépa" + (progress.total > 1 ? "s" : "")) +
              "</div>" +
              "</div></td>";
          });
          rows += "</tr>";
          if (rowOpen) {
            rows += '<tr class="cutoff-detail-row"><td colspan="' + (days.length + 1) + '">' + populateDetailTable() + "</td></tr>";
          }
        });

        DASHBOARD_KPI_CONFIG.receptions.subtitle = "Cliquer pour ouvrir les arrivées et ASN.";
        DASHBOARD_KPI_CONFIG.receptions.lines = [
          { label: focusLabel, value: String(focusReceptions) },
          { label: "Zone prioritaire", value: "Z-BIO" },
        ];
        DASHBOARD_KPI_CONFIG.preparation.subtitle = "Cliquer pour ouvrir la prépa.";
        DASHBOARD_KPI_CONFIG.preparation.lines = [
          { label: "En cours", value: String(PREP_STORE.filter((item) => item.statut === "En cours").length) },
          { label: "En attente", value: String(PREP_STORE.filter((item) => item.statut === "En attente").length) },
        ];
        DASHBOARD_KPI_CONFIG.expeditions.subtitle = "Cliquer pour ouvrir les départs.";
        DASHBOARD_KPI_CONFIG.expeditions.lines = [
          { label: focusLabel, value: String(focusOrders) },
          { label: "Urgences", value: String(urgentOrders) },
          { label: "Ruptures", value: String(focusRuptures) },
        ];
        DASHBOARD_KPI_CONFIG.sav.subtitle = "Cliquer pour ouvrir le SAV intégré.";
        DASHBOARD_KPI_CONFIG.sav.lines = [
          { label: "Nouveaux", value: String(savNewCount) },
          { label: "Action Cargonautes", value: String(savNeedsActionCount) },
          { label: "Critiques", value: String(savCriticalCount) },
          { label: "SLA à risque", value: String(savRiskCount) },
        ];
        DASHBOARD_KPI_CONFIG.prepMonth.subtitle = "Cliquer pour ouvrir les préparations du mois.";
        DASHBOARD_KPI_CONFIG.prepMonth.lines = [
          { label: "Total", value: String(monthlyPrepStats.total) },
          { label: "Avec incident", value: String(monthlyPrepStats.issueCount) },
        ];
        DASHBOARD_KPI_CONFIG.prepError.subtitle = "Cliquer pour ouvrir les tickets liés aux prépas.";
        DASHBOARD_KPI_CONFIG.prepError.lines = [
          { label: "Taux", value: String(monthlyPrepStats.errorRate) + "%" },
          { label: "Base", value: String(monthlyPrepStats.total) + " prépas" },
        ];
        DASHBOARD_KPI_CONFIG.semaine.subtitle = "Cliquer pour revenir à la grille.";
        DASHBOARD_KPI_CONFIG.semaine.lines = [
          { label: "Total semaine", value: String(totalOrders) },
          { label: "Items", value: String(CUTOFFS.reduce((acc, cutoff) => acc + days.reduce((sum, dt) => sum + totalCutoffItems(getActiveCutoffRows(isoDay(dt), cutoff.id)), 0), 0)) },
        ];
        DASHBOARD_KPI_CONFIG.clients.subtitle = "Cliquer pour ouvrir les fiches clients.";
        DASHBOARD_KPI_CONFIG.clients.lines = [
          { label: "Actifs", value: String(totalClients.size) },
          { label: "Principal", value: "Yumi / Paf" },
        ];
        DASHBOARD_KPI_CONFIG.palettes.subtitle = "Cliquer pour ouvrir les réceptions.";
        DASHBOARD_KPI_CONFIG.palettes.lines = [
          { label: "Entrées", value: String(paletteTraffic.in) },
          { label: "Sorties", value: String(paletteTraffic.out) },
          { label: focusLabel, value: focusDateLabel },
        ];
        DASHBOARD_KPI_CONFIG.shift.subtitle = "Cliquer pour ouvrir les préparations du shift.";
        DASHBOARD_KPI_CONFIG.shift.lines = [
          { label: "Statut", value: siteStatus.label },
          { label: dashboardReference.mode === "preview" ? "Preview" : "Horaires", value: dashboardReference.mode === "preview" ? focusDateLabel : siteStatus.windowLabel },
        ];
        DASHBOARD_KPI_CONFIG.critique.subtitle = "Cliquer pour ouvrir la fenêtre la plus sensible.";
        DASHBOARD_KPI_CONFIG.critique.lines = [
          { label: "Priorité", value: urgentOrders ? "Urgence" : "Normal 13h" },
          { label: "Volume", value: String(urgentOrders || focusOrders) },
          { label: "Rupture", value: String(focusRuptures) },
        ];

        const statsHost = document.getElementById("dashboard-stats");
        if (statsHost) {
          statsHost.innerHTML =
            renderDashboardKpi("prepMonth", String(monthlyPrepStats.total), "Prépas sur le mois") +
            renderDashboardKpi("prepError", String(monthlyPrepStats.errorRate) + "%", "Incidents / annulations") +
            renderDashboardKpi("sav", String(savAttentionCount), savNewCount ? savNewCount + " nouveau(x)" : "Aucune nouveauté") +
            renderDashboardKpi("palettes", paletteTraffic.in + " / " + paletteTraffic.out, "Entrées / sorties") +
            renderDashboardKpi("shift", siteStatus.label, dashboardReference.mode === "preview" ? "Preview " + focusDateLabel : siteStatus.windowLabel);
        }

        document.getElementById("cutoff-grid").innerHTML =
          '<table class="cutoff-table"><thead><tr><th>Cutoff</th>' + head + "</tr></thead><tbody>" + rows + "</tbody></table>";

        populateDetailTable();
      }

      function shiftSemaine(delta) {
        semaineOffset += delta;
        closeCutoffDetail();
        renderCutoffGrid();
      }

      function getMondayOf(date) {
        const copy = new Date(date);
        const day = copy.getDay() || 7;
        if (day !== 1) {
          copy.setDate(copy.getDate() - (day - 1));
        }
        copy.setHours(0, 0, 0, 0);
        return copy;
      }

      function genMockCommandes(monday) {
        const customers = ["Yumi / Paf", "Re-Belle", "Xoco", "Wil's Déli"];
        const etats = ["En attente", "En cours", "Terminée", "Rupture"];
        const prepPar = ["Sophie B.", "Hugo M.", "Nora T."];
        const data = {};
        Array.from({ length: 7 }, (_, dayIndex) => {
          const dt = new Date(monday);
          dt.setDate(monday.getDate() + dayIndex);
          const key = isoDay(dt);
          data[key] = {};
          if (!isSiteOpenOnDate(dt)) {
            CUTOFFS.forEach((co) => {
              data[key][co.id] = [];
            });
            return;
          }
          CUTOFFS.forEach((co, cutoffIndex) => {
            const isWeekend = dayIndex >= 5;
            const count = isWeekend ? (co.id === "urg" && dayIndex === 5 ? 1 : 0) : co.id === "urg" ? (dayIndex === 1 || dayIndex === 3 ? 1 : 0) : (dayIndex * 2 + cutoffIndex) % 4;
            data[key][co.id] = Array.from({ length: count }, (_, idx) => {
              const customer = customers[(dayIndex + cutoffIndex + idx) % customers.length];
              return {
                id: "CMD-" + key + "-" + co.id + "-" + idx,
                client: customer,
                etat: (!dayIndex && co.id === "t13" && idx === 0) || (dayIndex === 3 && co.id === "urg" && idx === 0)
                  ? "Rupture"
                  : etats[(cutoffIndex + idx) % (etats.length - 1)],
                dateExp: formatCutoffDay(key),
                prepPar: prepPar[(dayIndex + idx) % prepPar.length],
                items: 3 + idx + cutoffIndex,
                cyke: "CYK-" + key.slice(5).replace("-", "") + "-" + idx,
              };
            });
          });
        });
        return data;
      }

      function getCurrentShift() {
        return new Date().getHours() < 12 ? "matin" : "soir";
      }

      function openCutoffDetail(dateKey, cutoffId) {
        if (openCutoffKey === cutoffId && openDateKey === dateKey) {
          closeCutoffDetail();
          renderCutoffGrid();
          return;
        }
        openCutoffKey = cutoffId;
        openDateKey = dateKey;
        renderCutoffGrid();
      }

      function closeCutoffDetail() {
        openCutoffKey = null;
        openDateKey = null;
        populateDetailTable();
      }

      function showCutoffTooltip(evt, dateKey, cutoffId, label) {
        const tip = document.getElementById("global-tooltip");
        const rows = getActiveCutoffRows(dateKey, cutoffId);
        const clients = summarizeCutoffClients(rows);
        tip.innerHTML =
          "<strong>" +
          esc(label) +
          " · " +
          esc(formatCutoffDay(dateKey)) +
          "</strong><span>" +
          (rows.length
            ? getCutoffReadyCount(rows) + "/" + rows.length + " prépa(s) prêtes"
            : "Aucune préparation") +
          "</span>" +
          (getCutoffRuptureCount(rows)
            ? "<span>" + getCutoffRuptureCount(rows) + " commande(s) en rupture</span>"
            : "") +
          (clients.length
            ? '<div class="tooltip-list">' +
              clients
                .slice(0, 3)
                .map(
                  (client) =>
                    '<div class="tooltip-row"><span>' +
                    esc(client.client) +
                    "</span><strong>" +
                    client.count +
                    " cmd</strong></div>"
                )
                .join("") +
              "</div><span>Clic pour ouvrir le détail</span>"
            : "<span>Aucune commande sur cette fenêtre.</span>");
        tip.style.left = evt.clientX + 18 + "px";
        tip.style.top = evt.clientY + 18 + "px";
        tip.classList.add("visible");
      }

      function hideCutoffTooltip() {
        document.getElementById("global-tooltip").classList.remove("visible");
      }

      function getCommandByRef(dateKey, cutoffId, commandId) {
        const rows = getActiveCutoffRows(dateKey, cutoffId);
        return rows.find((row) => row.id === commandId) || null;
      }

      function showCommandTooltip(evt, dateKey, cutoffId, commandId) {
        if (evt && evt.stopPropagation) {
          evt.stopPropagation();
        }
        const row = getCommandByRef(dateKey, cutoffId, commandId);
        if (!row) {
          return;
        }
        const tip = document.getElementById("global-tooltip");
        tip.innerHTML =
          "<strong>" +
          esc(row.id) +
          "</strong><span>" +
          esc(row.client) +
          "</span><div class='tooltip-list'>" +
          "<div class='tooltip-row'><span>État</span><strong>" +
          esc(row.etat) +
          "</strong></div>" +
          (isCommandInRupture(row)
            ? "<div class='tooltip-row'><span>Stock</span><strong>Rupture à arbitrer</strong></div>"
            : "") +
          "<div class='tooltip-row'><span>Prépa</span><strong>" +
          esc(row.prepPar) +
          "</strong></div>" +
          "<div class='tooltip-row'><span>Items</span><strong>" +
          esc(String(row.items)) +
          "</strong></div>" +
          "<div class='tooltip-row'><span>Cyke</span><strong>" +
          esc(row.cyke) +
          "</strong></div>" +
          "</div><span>Clic sur la ligne pour modifier</span>";
        tip.style.left = evt.clientX + 18 + "px";
        tip.style.top = evt.clientY + 18 + "px";
        tip.classList.add("visible");
      }

      function openCommandEditor(dateKey, cutoffId, commandId) {
        openOverlay("editCommand", { dateKey: dateKey, cutoffId: cutoffId, commandId: commandId });
      }

      function signalCommandIncident(dateKey, cutoffId, commandId) {
        const row = getCommandByRef(dateKey, cutoffId, commandId);
        if (!row) {
          return;
        }
        const sourceId = dateKey + "|" + cutoffId + "|" + commandId;
        const existing = getActiveSavTicketBySource("commande", sourceId);
        if (existing) {
          openSavTicket(existing.id);
          return;
        }
        const cutoff = CUTOFFS.find((item) => item.id === cutoffId);
        openQuickTicket({
          clientId: getClientKeyByName(row.client),
          sourceType: "commande",
          sourceId: sourceId,
          sourceLabel: "Commande · " + row.id,
          title: "Incident commande · " + row.id,
          summary:
            row.client +
            " · " +
            (cutoff ? cutoff.label : cutoffId) +
            " · " +
            row.dateExp +
            " · " +
            row.cyke +
            ". Décrire l’incident client et l’impact opérationnel.",
          priority: row.etat === "Rupture" ? "Haute" : "Normale",
          owner: "ADV Cargonautes",
          tags: ["commande", "incident-client"],
        });
      }

      function saveCommandEdit() {
        if (!overlayState || overlayState.type !== "editCommand") {
          return;
        }
        const payload = overlayState.payload || {};
        const row = getCommandByRef(payload.dateKey, payload.cutoffId, payload.commandId);
        if (!row) {
          closeOverlay();
          return;
        }
        row.client = document.getElementById("edit-command-client").value.trim() || row.client;
        row.etat = document.getElementById("edit-command-status").value;
        row.dateExp = document.getElementById("edit-command-date").value.trim() || row.dateExp;
        row.prepPar = document.getElementById("edit-command-prep").value.trim() || "—";
        row.items = Number(document.getElementById("edit-command-items").value || row.items);
        row.cyke = document.getElementById("edit-command-cyke").value.trim() || row.cyke;
        closeOverlay();
        renderCutoffGrid();
      }

      function removeCommand(dateKey, cutoffId, commandId) {
        if (!mockData[dateKey] || !mockData[dateKey][cutoffId]) {
          return;
        }
        const row = mockData[dateKey][cutoffId].find((item) => item.id === commandId);
        if (!row || row.archivedAt) {
          return;
        }
        row.archivedAt = new Date().toISOString();
        row.archivedBy = "usr-local";
        row.archiveReason = "Commande retirée de la fenêtre active";
        archiveEntity("commande", row, {
          reason: "Commande retirée de la fenêtre active",
          context: {
            dateKey: dateKey,
            cutoffId: cutoffId,
          },
        });
        const nextRows = getActiveCutoffRows(dateKey, cutoffId);
        if (!nextRows.length) {
          closeCutoffDetail();
        }
        renderCutoffGrid();
      }

      function populateDetailTable() {
        const host = document.getElementById("cutoff-detail");
        if (!openCutoffKey || !openDateKey) {
          if (host) {
            host.innerHTML = "<div class='empty-state'>Ouvre une case pour voir le détail.</div>";
          }
          return "";
        }
        const rows = getActiveCutoffRows(openDateKey, openCutoffKey);
        const cutoff = CUTOFFS.find((item) => item.id === openCutoffKey);
        const clients = summarizeCutoffClients(rows);
        const markup =
          "<div class='cutoff-inline-detail'><div class='cutoff-inline-head'><div><p class='eyebrow'>Fenêtre active</p><h3>" +
          esc(cutoff.label) +
          " · " +
          esc(formatCutoffDay(openDateKey)) +
          " · " +
          rows.length +
          " commande(s)</h3><div class='cutoff-client-breakdown'>" +
          clients
            .map(
              (client) =>
                "<span class='cutoff-client-pill'><strong>" +
                client.count +
                "</strong>" +
                esc(client.client) +
                "</span>"
            )
            .join("") +
          "</div></div><button class='btn soft sm' onclick='closeCutoffDetail();renderCutoffGrid();'>Fermer</button></div>" +
          (rows.length
            ? '<table class="data-table cutoff-detail-table" id="cutoff-detail-table"><thead><tr><th onclick="sortTable(\'cutoff-detail-table\',0,\'text\')">Commande</th><th onclick="sortTable(\'cutoff-detail-table\',1,\'text\')">Client</th><th>État</th><th>Pilotage</th><th>Actions</th></tr></thead><tbody>' +
              rows
                .map(
                  (row) =>
                    "<tr data-command-id='" +
                    esc(row.id) +
                    "' onclick=\"openCommandEditor('" +
                    esc(openDateKey) +
                    "','" +
                    esc(openCutoffKey) +
                    "','" +
                    esc(row.id) +
                    "')\"><td><div class='cutoff-row-main'><span class='cutoff-row-id mono'>" +
                    esc(row.id) +
                    "</span></div></td><td>" +
                    esc(row.client) +
                    "</td><td><span class='badge " +
                    statusBadge(row.etat) +
                    "'>" +
                    esc(row.etat) +
                    "</span></td><td><strong>" +
                    esc(row.dateExp) +
                    "</strong><div class='mini'>" +
                    esc(row.prepPar + " · " + row.cyke) +
                    "</div></td><td><span class='cutoff-row-actions'><button class='icon-btn' type='button' onclick=\"event.stopPropagation();openCommandEditor('" +
                    esc(openDateKey) +
                    "','" +
                    esc(openCutoffKey) +
                    "','" +
                    esc(row.id) +
                    "')\" aria-label='Modifier la commande'>" +
                    iconSvg("edit") +
                    "</button><button class='icon-btn' type='button' onclick=\"event.stopPropagation();signalCommandIncident('" +
                    esc(openDateKey) +
                    "','" +
                    esc(openCutoffKey) +
                    "','" +
                    esc(row.id) +
                    "')\" aria-label='Signaler un incident client'>" +
                    iconSvg("ticket") +
                    "</button><button class='icon-btn danger' type='button' onclick=\"event.stopPropagation();removeCommand('" +
                    esc(openDateKey) +
                    "','" +
                    esc(openCutoffKey) +
                    "','" +
                    esc(row.id) +
                    "')\" aria-label='Supprimer la commande'>" +
                    iconSvg("trash") +
                    "</button></span></td></tr>"
                )
                .join("") +
              "</tbody></table>"
            : "<div class='empty-state'>Aucune commande pour cette case.</div>") +
          "</div>";
        if (host) {
          host.innerHTML = markup;
        }
        return markup;
      }

      function renderClientCards() {
        const term = document.getElementById("client-search").value.trim().toLowerCase();
        const clients = Object.values(clientsDB).filter((client) => {
          const haystack = [
            client.nom,
            client.secteur,
            client.certifications.join(" "),
            ((client.features || {}).chaine || ""),
            ((client.contact || {}).nom || ""),
            client.features.stockCible ? "stock cible" : "",
          ]
            .join(" ")
            .toLowerCase();
          return haystack.includes(term);
        });

        document.getElementById("clients-grid").innerHTML =
          clients.length === 0
            ? "<div class='empty-state'>Aucun client ne correspond au filtre.</div>"
            : clients
                .map(
                  (client) => {
                    const openTickets = SAV_TICKETS.filter((ticket) => ticket.clientId === client.id && ticket.status !== "Résolu").length;
                    const contract = client.contract || {};
                    const stock = getClientStockSummary(client.id);
                    const contactsClient = buildClientContacts(client);
                    const contactsCg = buildCargonautesContacts(client);
                    const rules = buildOperationalRules(client);
                    const prepFacts = buildPreparationFacts(client);
                    const recap = buildServiceRecap(client);
                    const contractConsumables = ensureClientConsumables(client);
                    const activeReceptions = getClientReceptionSignal(client.id);
                    const isExpanded = expandedClientCards.has(client.id);
                    return `
                      <article class="client-card client-card-rich ${isExpanded ? "is-expanded" : "is-collapsed"}">
                        <div class="client-sheet">
                          <section class="client-sheet-header" role="button" tabindex="0" aria-expanded="${isExpanded ? "true" : "false"}" onclick="toggleClientCardExpanded('${client.id}')" onkeydown="handleClientCardHeaderKey(event,'${client.id}')">
                            <div class="client-sheet-header-top">
                              <div class="client-sheet-title">
                                <p class="eyebrow">${esc(client.secteur)}</p>
                                <div class="client-sheet-title-row"><span class="client-sheet-toggle" aria-hidden="true">${isExpanded ? "−" : "+"}</span><h2>${esc(client.nom)}</h2></div>
                                <div class="client-sheet-tag-row">
                                  <span class="badge ${accentBadge(client.accentVar)}">${esc(client.statut)}</span>
                                  ${(client.certifications || []).map((cert) => `<span class="chip">${esc(cert)}</span>`).join("")}
                                </div>
                                <div class="client-sheet-inline">
                                  <span class="client-sheet-inline-item"><span>Cutoff</span><strong>${esc(client.cutoff.h + "h")}</strong></span>
                                  <span class="client-sheet-inline-item"><span>Flux</span><strong>${esc(getClientFlowLabel(client))}</strong></span>
                                  <span class="client-sheet-inline-item"><span>Tickets</span><strong>${esc(String(openTickets))}</strong></span>
                                  <span class="client-sheet-inline-item"><span>Stock</span><strong>${esc(String(stock.units))} u · ${esc(String(stock.pallets))} pal</strong></span>
                                </div>
                              </div>
                              <div class="client-sheet-actions" onclick="event.stopPropagation()">
                                <button class="client-action-btn" onclick="openClientConfigurationFor('${client.id}')" aria-label="Configurer" title="Configurer"><img src="./icons/client-configurer.svg" alt="" /></button>
                                <button class="client-action-btn" onclick="visualiserClientById('${client.id}')" aria-label="Voir le portail" title="Voir le portail"><img src="./icons/client-portail.svg" alt="" /></button>
                                <button class="client-action-btn" onclick="openQuickTicket({ clientId: '${client.id}', sourceType: 'client', sourceId: '${client.id}', title: 'Sujet client à qualifier', summary: 'Ticket créé depuis la fiche client.' })" aria-label="Créer ticket" title="Créer ticket"><img src="./icons/client-ticket.svg" alt="" /></button>
                              </div>
                            </div>
                          </section>
                          <div class="client-sheet-grid">
                            <div class="client-sheet-main">
                              <section class="client-sheet-card">
                                <div class="client-sheet-card-head">
                                  <div><p class="eyebrow">Pilotage</p></div>
                                </div>
                                <div class="client-sheet-metrics">
                                  <div class="client-sheet-metric"><span class="eyebrow">Cutoff</span><strong>${esc(client.cutoff.h + "h")}</strong></div>
                                  <div class="client-sheet-metric"><span class="eyebrow">Flux</span><strong>${esc(getClientFlowLabel(client))}</strong></div>
                                  <div class="client-sheet-metric"><span class="eyebrow">Tickets ouverts</span><strong>${esc(String(openTickets))}</strong></div>
                                  <div class="client-sheet-metric"><span class="eyebrow">Réceptions actives</span><strong>${esc(String(activeReceptions))}</strong></div>
                                </div>
                              </section>
                              <section class="client-sheet-card">
                                <div class="client-sheet-card-head">
                                  <div><p class="eyebrow">Stock</p></div>
                                </div>
                                <div class="client-sheet-metrics">
                                  <div class="client-sheet-metric"><span class="eyebrow">Unités</span><strong>${esc(String(stock.units))}</strong></div>
                                  <div class="client-sheet-metric"><span class="eyebrow">Palettes</span><strong>${esc(String(stock.pallets))}</strong></div>
                                  <div class="client-sheet-metric"><span class="eyebrow">Surface</span><strong>${esc(String(stock.m2Total).replace(".", ","))} m²</strong></div>
                                  <div class="client-sheet-metric"><span class="eyebrow">Répartition</span><strong>${esc("Froid " + stock.coldShare + "% · Sec " + stock.dryShare + "%")}</strong></div>
                                </div>
                                <div class="client-sheet-stock-line mini">
                                  <span>Froid ${esc(String(stock.m2Cold).replace(".", ","))} m²</span>
                                  <span>Sec ${esc(String(stock.m2Dry).replace(".", ","))} m²</span>
                                </div>
                              </section>
                              <section class="client-sheet-card">
                                <div class="client-sheet-card-head">
                                  <div><p class="eyebrow">Règles opérationnelles</p></div>
                                </div>
                                <div class="client-sheet-checklist">
                                  ${rules.map((rule) => `<span class="client-sheet-rule">${esc(rule)}</span>`).join("")}
                                </div>
                              </section>
                              <section class="client-sheet-card">
                                <div class="client-sheet-card-head">
                                  <div><p class="eyebrow">Préparation</p></div>
                                </div>
                                <dl class="client-sheet-definition">
                                  ${prepFacts.map((item) => `<dt>${esc(item.label)}</dt><dd>${esc(item.value)}</dd>`).join("")}
                                </dl>
                              </section>
                              <section class="client-sheet-card">
                                <div class="client-sheet-card-head">
                                  <div><p class="eyebrow">Consommables</p></div>
                                  <span class="badge ${contract.materialsAllowed ? "bm" : "bg"}">${esc(contract.materialsAllowed ? "Autorisé" : "Sur accord")}</span>
                                </div>
                                <div class="client-sheet-tag-row">
                                  ${renderConsumableTags(contractConsumables)}
                                </div>
                              </section>
                              <section class="client-sheet-card">
                                <div class="client-sheet-card-head">
                                  <div><p class="eyebrow">Récap prestation</p></div>
                                </div>
                                <div class="client-sheet-service-grid">
                                  <div class="client-sheet-service-block">
                                    <strong>Ce que le client attend</strong>
                                    <ul>${recap.expected.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
                                  </div>
                                  <div class="client-sheet-service-block">
                                    <strong>Ce que nous faisons</strong>
                                    <ul>${recap.delivered.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
                                  </div>
                                </div>
                              </section>
                            </div>
                            <div class="client-sheet-side">
                              <section class="client-sheet-card compact-head">
                                <p class="eyebrow">Contacts client</p>
                                ${renderContactCards(contactsClient, "client")}
                              </section>
                              <section class="client-sheet-card compact-head">
                                <p class="eyebrow">Contacts Cargonautes</p>
                                ${renderContactCards(contactsCg, "cg")}
                              </section>
                            </div>
                          </div>
                        </div>
                      </article>
                    `;
                  }
                )
                .join("");
      }

      function toggleClientCardExpanded(clientId) {
        if (expandedClientCards.has(clientId)) {
          expandedClientCards.delete(clientId);
        } else {
          expandedClientCards.add(clientId);
        }
        renderClientCards();
      }

      function handleClientCardHeaderKey(event, clientId) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleClientCardExpanded(clientId);
        }
      }

      function filterClients(value) {
        if (typeof value === "string") {
          document.getElementById("client-search").value = value;
        }
        renderClientCards();
      }

      function openClientFiche(clientId) {
        currentClientId = clientId;
        currentClientViewMode = "overview";
        currentFicheTab = "infos";
        openOverlay("clientFiche", { clientId: clientId });
      }

      function closeClientFiche() {
        closeOverlay();
      }

      function switchFicheTab(tabId) {
        applyClientFicheTabChanges(currentFicheTab);
        currentClientViewMode = "configure";
        currentFicheTab = tabId;
        renderOverlay();
      }

      function loadFicheTab(tabId) {
        if (tabId === "infos") {
          return loadTabInfos();
        }
        if (tabId === "contrat") {
          return loadTabContract();
        }
        if (tabId === "users") {
          return loadTabUsers();
        }
        if (tabId === "cutoff") {
          return loadTabCutoff();
        }
        if (tabId === "finance") {
          return loadTabFinance();
        }
        return loadTabCatalogue();
      }

      function loadTabInfos() {
        const client = clientsDB[currentClientId];
        const contactCg = client.contactCargonautes || {};
        return (
          '<div class="client-fiche-stack">' +
          '<section class="client-fiche-section"><div class="client-fiche-section-head"><p class="eyebrow">Identité</p><strong>Référentiel client</strong><p class="mini">Les repères stables visibles par l’équipe et le portail.</p></div><div class="form-split">' +
          '<div class="field"><label for="client-name">Nom client</label><input id="client-name" type="text" value="' +
          esc(client.nom) +
          '" /></div>' +
          '<div class="field"><label for="client-sector">Secteur</label><input id="client-sector" type="text" value="' +
          esc(client.secteur) +
          '" /></div>' +
          "</div>" +
          '<div class="form-split">' +
          '<div class="field"><label for="client-ca">CA</label><input id="client-ca" type="text" value="' +
          esc(client.ca) +
          '" /></div>' +
          '<div class="field"><label for="client-emoji">Repère visuel</label><input id="client-emoji" type="text" value="' +
          esc(client.emoji) +
          '" /></div>' +
          "</div></section>" +
          '<section class="client-fiche-section"><div class="client-fiche-section-head"><p class="eyebrow">Opérations</p><strong>Contact client par défaut</strong><p class="mini">Le point de contact opérationnel à joindre en premier.</p></div><div class="form-split">' +
          '<div class="field"><label for="client-contact-name">Nom</label><input id="client-contact-name" type="text" value="' +
          esc(client.contact.nom) +
          '" /></div>' +
          '<div class="field"><label for="client-contact-role">Fonction</label><input id="client-contact-role" type="text" value="' +
          esc(client.contact.role) +
          '" /></div>' +
          "</div>" +
          '<div class="form-split">' +
          '<div class="field"><label for="client-contact-email">Email</label><input id="client-contact-email" type="email" value="' +
          esc(client.contact.email) +
          '" /></div>' +
          '<div class="field"><label for="client-contact-tel">Téléphone</label><input id="client-contact-tel" type="text" value="' +
          esc(client.contact.tel) +
          '" /></div>' +
          "</div></section>" +
          '<section class="client-fiche-section"><div class="row-between"><div class="client-fiche-section-head"><p class="eyebrow">Cargonautes</p><strong>Référent commercial</strong><p class="mini">Contact commercial / contractuel côté Cargonautes.</p></div><a class="btn soft sm" href="' +
          esc(buildSlackLink(contactCg.slackTarget)) +
          '" target="_blank" rel="noreferrer">Message Slack</a></div><div class="form-split">' +
          '<div class="field"><label for="client-cg-name">Nom</label><input id="client-cg-name" type="text" value="' +
          esc(contactCg.nom || "") +
          '" /></div><div class="field"><label for="client-cg-role">Fonction</label><input id="client-cg-role" type="text" value="' +
          esc(contactCg.role || "") +
          '" /></div></div>' +
          '<div class="form-split">' +
          '<div class="field"><label for="client-cg-email">Email</label><input id="client-cg-email" type="email" value="' +
          esc(contactCg.email || "") +
          '" /></div><div class="field"><label for="client-cg-tel">Téléphone</label><input id="client-cg-tel" type="text" value="' +
          esc(contactCg.tel || "") +
          '" /></div></div>' +
          '<div class="field"><label for="client-cg-slack">Canal / cible Slack</label><input id="client-cg-slack" type="text" value="' +
          esc(contactCg.slackTarget || "") +
          '" /></div></section>' +
          '<section class="client-fiche-section"><div class="client-fiche-section-head"><p class="eyebrow">Conformité</p><strong>Certifications visibles</strong></div><div id="certif-wrap" class="client-tag-list"></div></section>' +
          "</div>"
        );
      }

      function loadTabContract() {
        const client = clientsDB[currentClientId];
        const contract = client.contract || {};
        const selectedConsumables = inferContractConsumables(client);
        return (
          '<div class="client-fiche-stack"><section class="client-fiche-section"><div class="client-fiche-section-head"><p class="eyebrow">Contrat</p><strong>Cadre d’exploitation</strong><p class="mini">Le minimum à retenir pour exécuter sans ambiguïté.</p></div><div class="field"><label for="client-contract-notes">Contrat d’exploitation</label><textarea id="client-contract-notes" placeholder="Exigences client pour la préparation, contraintes qualité, promesse de service...">' +
          esc(contract.prepNotes || "") +
          "</textarea></div>" +
          '<div class="field"><label for="client-contract-requirements">Exigences préparation</label><input id="client-contract-requirements" type="text" value="' +
          esc((contract.prepRequirements || []).join(" | ")) +
          '" placeholder="FIFO | contrôle DLC | BL signé..." /></div><div class="client-tag-list">' +
          (contract.prepRequirements || []).map((item) => '<span class="chip">' + esc(item) + "</span>").join("") +
          "</div></section><section class='client-fiche-section'><div class='client-fiche-section-head'><p class='eyebrow'>Matériel</p><strong>Accès aux consommables</strong><p class='mini'>Ce qui peut être prélevé dans le stock Cargonautes.</p></div><div class=\"info-grid\">" +
          '<label class="toggle-switch"><span>Accès au stock de matériel de préparation</span><input id="client-materials-allowed" type="checkbox" ' +
          (contract.materialsAllowed ? "checked" : "") +
          " /></label>" +
          "</div>" +
          '<div class="form-split">' +
          '<div class="field"><label for="client-materials-pricing">Mode de prix matériel</label><input id="client-materials-pricing" type="text" value="' +
          esc(contract.materialsPricingMode || "") +
          '" placeholder="stock entrepôt, sur accord..." /></div>' +
          '<div class="field"><label for="client-materials-notes">Détail matériel</label><input id="client-materials-notes" type="text" value="' +
          esc(contract.materialsNotes || "") +
          '" placeholder="Conditions, exceptions, remarques..." /></div></div><div><label>Consommables concernés</label><div class="client-tag-list" style="margin-top:10px">' +
          renderConsumableTags(selectedConsumables) +
          "</div></div></section></div>"
        );
      }

      function loadTabUsers() {
        const client = clientsDB[currentClientId];
        return (
          '<div class="row-between"><div><strong>Utilisateurs actifs</strong><p class="mini">Maximum autorisé : ' +
          client.usersMax +
          "</p></div><button class='btn primary sm' onclick='addUserRow()'>Ajouter un utilisateur</button></div>" +
          '<table class="data-table"><thead><tr><th>Nom</th><th>Email</th><th>Rôle</th><th>Statut</th><th>Dernière connexion</th><th>Actions</th></tr></thead><tbody>' +
          client.users
            .map(
              (user, index) =>
                "<tr><td>" +
                esc(user.nom) +
                "</td><td>" +
                esc(user.email) +
                "</td><td>" +
                esc(user.role) +
                "</td><td><span class='badge " +
                (user.actif ? "bm'>Actif" : "bg'>Inactif") +
                "</span></td><td>" +
                esc(user.lastLogin) +
                "</td><td><div class='button-row'><button class='btn sm' onclick='startEditUser(" +
                index +
                ")'>Éditer</button><button class='btn soft sm' onclick='toggleUser(\"" +
                currentClientId +
                "\"," +
                index +
                ")'>Activer</button><button class='btn danger sm' onclick='removeUser(\"" +
                currentClientId +
                "\"," +
                index +
                ")'>Supprimer</button></div></td></tr>"
            )
            .join("") +
          "</tbody></table>"
        );
      }

      function loadTabCutoff() {
        const cutoff = clientsDB[currentClientId].cutoff;
        return (
          '<div class="form-split">' +
          '<div class="field"><label for="cutoff-hour">Heure standard</label><input id="cutoff-hour" type="number" min="0" max="23" value="' +
          cutoff.h +
          '" /></div>' +
          '<div class="field"><label>Jours actifs</label><div class="toggle-days">' +
          [1, 2, 3, 4, 5, 6, 7]
            .map((day) => '<button class="day-toggle' + (cutoff.days.includes(day) ? " active" : "") + '" onclick="toggleDay(' + day + ')" type="button">' + daysLabel[day - 1] + "</button>")
            .join("") +
          "</div></div></div>" +
          '<div class="form-split">' +
          '<div class="field"><label for="tarif-normal">Tarif normal</label><input id="tarif-normal" type="number" step="0.01" value="' +
          cutoff.tarifs.normal +
          '" oninput="updPct(\'normal\')" /></div>' +
          '<div class="field"><label for="tarif-t11">Avant 11h</label><input id="tarif-t11" type="number" step="0.01" value="' +
          cutoff.tarifs.t11 +
          '" oninput="updPct(\'t11\')" /></div>' +
          "</div>" +
          '<div class="form-split">' +
          '<div class="field"><label for="tarif-t15">Avant 15h</label><input id="tarif-t15" type="number" step="0.01" value="' +
          cutoff.tarifs.t15 +
          '" oninput="updPct(\'t15\')" /></div>' +
          '<div class="field"><label for="tarif-t17">Avant 17h</label><input id="tarif-t17" type="number" step="0.01" value="' +
          cutoff.tarifs.t17 +
          '" oninput="updPct(\'t17\')" /></div>' +
          "</div>" +
          '<div class="form-split">' +
          '<div class="field"><label for="tarif-urg">Urgence</label><input id="tarif-urg" type="number" step="0.01" value="' +
          cutoff.tarifs.urgence +
          '" oninput="updPct(\'urgence\')" /></div>' +
          '<div class="field"><label>Exceptions</label><div class="button-row"><button class="btn soft sm" onclick="addException()">Ajouter une exception</button></div></div>' +
          "</div>" +
          '<div id="cutoff-preview" class="card" style="box-shadow:none"></div>' +
          '<div class="chip-cloud">' +
          cutoff.exceptions.map((item) => '<span class="badge ba">' + esc(item.label + " · " + item.date) + "</span>").join("") +
          "</div>"
        );
      }

      function loadTabFeatures() {
        return loadTabContract();
      }

      function loadTabFinance() {
        const client = clientsDB[currentClientId];
        const billing = client.billing || {};
        if (!canViewFinance()) {
          return "<div class='empty-state'>La finance n’est visible que pour un administrateur.</div>";
        }
        const storage = billing.storage || {};
        const preparation = billing.preparation || {};
        const receptions = billing.receptions || {};
        const consumables = billing.consumables || {};
        const cutoffPricing = billing.cutoffPricing || {};
        const inventory = billing.inventory || {};
        const latestSnapshot = storageSnapshots.find((item) => item.clientId === client.id) || null;
        const snapshotMonth = latestSnapshot ? getStorageSnapshotMonthKey(latestSnapshot.eventDate) : new Date().toISOString().slice(0, 7);
        const snapshot = getStorageSnapshotForClient(client.id, snapshotMonth) || { m2Dry: 0, m2Cold: 0 };
        const consumableItems = consumables.items || {};
        return (
          '<div class="pricing-block-stack">' +
          '<div class="row-between"><div><p class="eyebrow">Tarification</p><strong>Contrat tarifaire administrateur</strong><p class="mini">Les prix vivent ici. Les faits opérationnels restent dans les modules métier.</p></div><button class="btn soft sm" type="button" onclick="openBillingReviewForClient(\'' +
          esc(client.id) +
          "')\">Ouvrir la revue mensuelle</button></div>" +
          "<p class='mini'>Les remises et ajustements commerciaux mensuels se pilotent dans la revue de facturation, séparément du contrat client.</p>" +
          '<div class="pricing-block"><div class="table-toolbar"><div><p class="eyebrow">Stockage</p><h3>Snapshot mensuel sec / froid</h3></div><span class="badge bg">Mensuel</span></div>' +
          '<div class="form-split"><div class="field"><label for="billing-storage-mode">Mode</label><input id="billing-storage-mode" type="text" value="' +
          esc(storage.mode || "m2_snapshot") +
          '" placeholder="m2_snapshot, m3_snapshot..." /></div><div class="field"><label for="billing-storage-month">Mois saisi</label><input id="billing-storage-month" type="month" value="' +
          esc(snapshotMonth) +
          '" /></div></div>' +
          '<div class="form-split"><div class="field"><label for="billing-storage-rate-dry">Prix sec (€ / m²)</label><input id="billing-storage-rate-dry" type="number" step="0.01" value="' +
          esc(String(storage.dryRate || 0)) +
          '" /></div><div class="field"><label for="billing-storage-rate-cold">Prix froid (€ / m²)</label><input id="billing-storage-rate-cold" type="number" step="0.01" value="' +
          esc(String(storage.coldRate || 0)) +
          '" /></div></div>' +
          '<div class="form-split"><div class="field"><label for="billing-storage-snapshot-dry">m² sec</label><input id="billing-storage-snapshot-dry" type="number" step="1" value="' +
          esc(String(snapshot.m2Dry || 0)) +
          '" /></div><div class="field"><label for="billing-storage-snapshot-cold">m² froid</label><input id="billing-storage-snapshot-cold" type="number" step="1" value="' +
          esc(String(snapshot.m2Cold || 0)) +
          '" /></div></div><p class="mini">Snapshot saisi pour la revue de facturation du mois choisi.</p></div>' +
          '<div class="pricing-block"><div class="table-toolbar"><div><p class="eyebrow">Préparation</p><h3>Prix par préparation et repère TTH</h3></div><span class="badge bg">TTH</span></div>' +
          '<div class="form-split"><div class="field"><label for="billing-prep-model">Mode</label><input id="billing-prep-model" type="text" value="' +
          esc(preparation.mode || "per_order") +
          '" placeholder="per_preparation, duration_grid..." /></div><div class="field"><label for="billing-prep-base">Prix préparation (€ / préparation)</label><input id="billing-prep-base" type="number" step="0.01" value="' +
          esc(String(preparation.baseRate || 0)) +
          '" /></div></div>' +
          '<div class="field"><label for="billing-sku-bands">Grille SKU / lignes</label><textarea id="billing-sku-bands" placeholder="1 à 5: +0 | 6 à 15: +0,50 | 16 à 30: +1,50">' +
          esc((preparation.skuBands || []).map((band) => band.range + ": " + (band.delta === null ? "devis" : "+" + String(band.delta).replace(".", ","))).join(" | ")) +
          "</textarea></div><p class='mini'>Le prix unitaire reste par préparation. Le TTH sert de lecture de pilotage et d’analyse mensuelle.</p></div>" +
          '<div class="pricing-block"><div class="table-toolbar"><div><p class="eyebrow">Réceptions</p><h3>Base, froid et palettes perdues</h3></div><span class="badge bg">Réception</span></div>' +
          '<div class="form-split"><div class="field"><label for="billing-reception-mode">Mode</label><input id="billing-reception-mode" type="text" value="' +
          esc(receptions.mode || "per_reception") +
          '" /></div><div class="field"><label for="billing-reception-base">Base réception (€)</label><input id="billing-reception-base" type="number" step="0.01" value="' +
          esc(String(receptions.baseRate || 0)) +
          '" /></div></div>' +
          '<div class="form-split"><div class="field"><label for="billing-reception-cold">Supplément froid (€)</label><input id="billing-reception-cold" type="number" step="0.01" value="' +
          esc(String(receptions.coldSurcharge || 0)) +
          '" /></div><div class="field"><label for="billing-reception-lost">Palette perdue (€ / palette)</label><input id="billing-reception-lost" type="number" step="0.01" value="' +
          esc(String(receptions.handlingLostPaletteRate || 0)) +
          '" /></div></div></div>' +
          '<div class="pricing-block"><div class="table-toolbar"><div><p class="eyebrow">Consommables</p><h3>Tarifs unitaires admin</h3></div><span class="badge bg">Unitaire</span></div>' +
          '<div><label>Consommables facturables</label><div class="consumable-picker" style="margin-top:10px">' +
          CONSUMABLE_OPTIONS.map(function (item) {
            return '<label class="consumable-check"><input type="checkbox" data-consumable-key="' + esc(item.key) + '" ' + (Number(consumableItems[item.key] || 0) > 0 ? "checked" : "") + ' /><span>' + esc(item.label) + "</span></label>";
          }).join("") +
          '</div></div><div id="billing-consumables-preview" class="client-tag-list">' +
          renderConsumableTags(Object.keys(consumableItems).filter((key) => Number(consumableItems[key] || 0) > 0)) +
          "</div><div class='consumable-rate-grid'>" +
          CONSUMABLE_OPTIONS.map(function (item) {
            return '<div class="field"><label for="billing-consumable-' + esc(item.key) + '">' + esc(item.label) + ' (€)</label><input id="billing-consumable-' + esc(item.key) + '" type="number" step="0.01" value="' + esc(String(consumableItems[item.key] || 0)) + '" /></div>';
          }).join("") +
          "</div><p class='mini'>Les consommables cochés remontent aussi comme tags dans la fiche client.</p></div>" +
          '<div class="pricing-block"><div class="table-toolbar"><div><p class="eyebrow">Cutoff</p><h3>Suppléments par créneau</h3></div><span class="badge bg">Surcharge</span></div>' +
          '<div class="form-split"><div class="field"><label for="billing-cutoff-t11">Avant 11h (€)</label><input id="billing-cutoff-t11" type="number" step="0.01" value="' +
          esc(String(((cutoffPricing.rates || {}).t11) || 0)) +
          '" /></div><div class="field"><label for="billing-cutoff-t15">Avant 15h (€)</label><input id="billing-cutoff-t15" type="number" step="0.01" value="' +
          esc(String(((cutoffPricing.rates || {}).t15) || 0)) +
          '" /></div></div>' +
          '<div class="form-split"><div class="field"><label for="billing-cutoff-t17">Avant 17h (€)</label><input id="billing-cutoff-t17" type="number" step="0.01" value="' +
          esc(String(((cutoffPricing.rates || {}).t17) || 0)) +
          '" /></div><div class="field"><label for="billing-cutoff-urg">Urgence (€)</label><input id="billing-cutoff-urg" type="number" step="0.01" value="' +
          esc(String(((cutoffPricing.rates || {}).urgence) || 0)) +
          '" /></div></div></div>' +
          '<div class="pricing-block"><div class="table-toolbar"><div><p class="eyebrow">Inventaires</p><h3>Service distinct du stockage</h3></div><span class="badge bg">Sec / froid</span></div>' +
          '<div class="form-split"><div class="field"><label for="billing-inventory-mode">Mode</label><select id="billing-inventory-mode"><option value="per_minute"' +
          ((inventory.mode || "per_minute") === "per_minute" ? " selected" : "") +
          '>€/min</option><option value="per_session"' +
          ((inventory.mode || "per_minute") === "per_session" ? " selected" : "") +
          ">€/session</option></select></div><div class=\"field\"><label for=\"billing-inventory-ondemand\">Supplément à la demande (€)</label><input id=\"billing-inventory-ondemand\" type=\"number\" step=\"0.01\" value=\"" +
          esc(String(inventory.onDemandSurcharge || 0)) +
          '" /></div></div>' +
          '<div class="form-split"><div class="field"><label for="billing-inventory-minute">Tarif sec (€/min)</label><input id="billing-inventory-minute" type="number" step="0.01" value="' +
          esc(String(inventory.ratePerMinute || 0)) +
          '" /></div><div class="field"><label for="billing-inventory-session">Tarif sec (€/session)</label><input id="billing-inventory-session" type="number" step="0.01" value="' +
          esc(String(inventory.ratePerSession || 0)) +
          '" /></div></div>' +
          '<div class="form-split"><div class="field"><label for="billing-inventory-cold-multiplier">Coefficient froid</label><input id="billing-inventory-cold-multiplier" type="number" step="0.01" value="' +
          esc(String(inventory.coldMultiplier || 1)) +
          '" /></div><div class="field"><label>Preview</label><div class="badge bg">' +
          esc((inventory.mode || "per_minute") === "per_session" ? "Session × zone" : "Minutes × zone") +
          "</div></div></div><p class='mini'>Les sessions non facturables restent visibles mais sortent du total.</p></div>" +
          "</div>"
        );
      }

      function loadTabCatalogue() {
        const catalogue = clientsDB[currentClientId].catalogue;
        return (
          '<div class="row-between"><div><strong>Catalogue actif</strong><p class="mini">Références configurées pour ce client.</p></div><button class="btn primary sm" onclick="addCatalogueRef()">Ajouter une référence</button></div>' +
          '<table class="data-table"><thead><tr><th>Nom</th><th>Format</th><th>PAV</th><th>Code</th><th>Actif</th><th>Actions</th></tr></thead><tbody>' +
          catalogue
            .map(
              (item, index) =>
                "<tr><td>" +
                esc(item.nom) +
                "</td><td>" +
                esc(item.format) +
                "</td><td>" +
                (item.pav || 0) +
                "</td><td class='mono'>" +
                esc(item.code) +
                "</td><td><span class='badge " +
                (item.actif ? "bm'>Oui" : "bg'>Non") +
                "</span></td><td><div class='button-row'><button class='btn soft sm' onclick='toggleRef(" +
                index +
                ")'>Basculer</button><button class='btn danger sm' onclick='removeRef(" +
                index +
                ")'>Supprimer</button></div></td></tr>"
            )
            .join("") +
          "</tbody></table>"
        );
      }

      function applyClientFicheTabChanges(tabId) {
        const client = clientsDB[currentClientId];
        if (!client) {
          return;
        }
        if (tabId === "infos" && document.getElementById("client-name")) {
          client.nom = document.getElementById("client-name").value.trim() || client.nom;
          client.secteur = document.getElementById("client-sector").value.trim() || client.secteur;
          client.ca = document.getElementById("client-ca").value.trim() || client.ca;
          client.emoji = document.getElementById("client-emoji").value.trim() || client.emoji;
          client.contact.nom = document.getElementById("client-contact-name").value.trim() || client.contact.nom;
          client.contact.role = document.getElementById("client-contact-role").value.trim() || client.contact.role;
          client.contact.email = document.getElementById("client-contact-email").value.trim() || client.contact.email;
          client.contact.tel = document.getElementById("client-contact-tel").value.trim() || client.contact.tel;
          client.contactCargonautes.nom = document.getElementById("client-cg-name").value.trim() || client.contactCargonautes.nom;
          client.contactCargonautes.role = document.getElementById("client-cg-role").value.trim() || client.contactCargonautes.role;
          client.contactCargonautes.email = document.getElementById("client-cg-email").value.trim() || client.contactCargonautes.email;
          client.contactCargonautes.tel = document.getElementById("client-cg-tel").value.trim() || client.contactCargonautes.tel;
          client.contactCargonautes.slackTarget = document.getElementById("client-cg-slack").value.trim() || client.contactCargonautes.slackTarget;
        }
        if ((tabId === "contrat" || tabId === "features") && document.getElementById("client-contract-notes")) {
          client.contract.prepNotes = document.getElementById("client-contract-notes").value.trim() || client.contract.prepNotes;
          client.contract.prepRequirements = document
            .getElementById("client-contract-requirements")
            .value
            .split("|")
            .map((item) => item.trim())
            .filter(Boolean);
          client.contract.materialsAllowed = document.getElementById("client-materials-allowed").checked;
          client.contract.materialsPricingMode = document.getElementById("client-materials-pricing").value.trim() || client.contract.materialsPricingMode;
          client.contract.materialsNotes = document.getElementById("client-materials-notes").value.trim() || client.contract.materialsNotes;
        }
        if (tabId === "cutoff" && document.getElementById("cutoff-hour")) {
          client.cutoff.h = Number(document.getElementById("cutoff-hour").value) || client.cutoff.h;
          client.cutoff.tarifs.normal = Number(document.getElementById("tarif-normal").value) || 1;
          client.cutoff.tarifs.t11 = Number(document.getElementById("tarif-t11").value) || 1;
          client.cutoff.tarifs.t15 = Number(document.getElementById("tarif-t15").value) || 1;
          client.cutoff.tarifs.t17 = Number(document.getElementById("tarif-t17").value) || 1;
          client.cutoff.tarifs.urgence = Number(document.getElementById("tarif-urg").value) || 1;
        }
        if (tabId === "finance" && canViewFinance() && document.getElementById("billing-storage-mode")) {
          client.billing.storage.mode = document.getElementById("billing-storage-mode").value.trim() || client.billing.storage.mode;
          client.billing.storage.dryRate = Number(document.getElementById("billing-storage-rate-dry").value || client.billing.storage.dryRate || 0);
          client.billing.storage.coldRate = Number(document.getElementById("billing-storage-rate-cold").value || client.billing.storage.coldRate || 0);
          client.billing.preparation.mode = document.getElementById("billing-prep-model").value.trim() || client.billing.preparation.mode;
          client.billing.preparation.baseRate = Number(document.getElementById("billing-prep-base").value || client.billing.preparation.baseRate || 0);
          client.billing.preparation.skuBands = document
            .getElementById("billing-sku-bands")
            .value
            .split("|")
            .map((item) => item.trim())
            .filter(Boolean)
            .map((item) => {
              const parts = item.split(":");
              return { range: (parts[0] || "").trim(), delta: (parts[1] || "").toLowerCase().includes("devis") ? null : Number(String(parts[1] || "").replace(",", ".").replace("+", "").trim()) || 0 };
            });
          client.billing.receptions.mode = document.getElementById("billing-reception-mode").value.trim() || client.billing.receptions.mode;
          client.billing.receptions.baseRate = Number(document.getElementById("billing-reception-base").value || client.billing.receptions.baseRate || 0);
          client.billing.receptions.coldSurcharge = Number(document.getElementById("billing-reception-cold").value || client.billing.receptions.coldSurcharge || 0);
          client.billing.receptions.handlingLostPaletteRate = Number(document.getElementById("billing-reception-lost").value || client.billing.receptions.handlingLostPaletteRate || 0);
          client.billing.consumables.items = CONSUMABLE_OPTIONS.reduce((acc, item) => {
            const isChecked = document.querySelector('[data-consumable-key="' + item.key + '"]');
            const rateField = document.getElementById("billing-consumable-" + item.key);
            if (isChecked && isChecked.checked) {
              acc[item.key] = Number((rateField && rateField.value) || 0) || 0;
            }
            return acc;
          }, {});
          client.contract.materialsNotes = document.getElementById("client-materials-notes")
            ? document.getElementById("client-materials-notes").value.trim() || client.contract.materialsNotes
            : client.contract.materialsNotes;
          client.billing.cutoffPricing.rates.t11 = Number(document.getElementById("billing-cutoff-t11").value || client.billing.cutoffPricing.rates.t11 || 0);
          client.billing.cutoffPricing.rates.t15 = Number(document.getElementById("billing-cutoff-t15").value || client.billing.cutoffPricing.rates.t15 || 0);
          client.billing.cutoffPricing.rates.t17 = Number(document.getElementById("billing-cutoff-t17").value || client.billing.cutoffPricing.rates.t17 || 0);
          client.billing.cutoffPricing.rates.urgence = Number(document.getElementById("billing-cutoff-urg").value || client.billing.cutoffPricing.rates.urgence || 0);
          client.billing.inventory.mode = document.getElementById("billing-inventory-mode").value;
          client.billing.inventory.ratePerMinute = Number(document.getElementById("billing-inventory-minute").value || client.billing.inventory.ratePerMinute || 0);
          client.billing.inventory.ratePerSession = Number(document.getElementById("billing-inventory-session").value || client.billing.inventory.ratePerSession || 0);
          client.billing.inventory.onDemandSurcharge = Number(document.getElementById("billing-inventory-ondemand").value || client.billing.inventory.onDemandSurcharge || 0);
          client.billing.inventory.coldMultiplier = Number(document.getElementById("billing-inventory-cold-multiplier").value || client.billing.inventory.coldMultiplier || 1);
          upsertStorageSnapshot(
            client.id,
            document.getElementById("billing-storage-month").value || new Date().toISOString().slice(0, 7),
            Number(document.getElementById("billing-storage-snapshot-dry").value || 0),
            Number(document.getElementById("billing-storage-snapshot-cold").value || 0)
          );
          syncPricingStoresFromClients();
        }
      }

      function saveClientFiche() {
        applyClientFicheTabChanges(currentFicheTab);
        persistClientsStore();
        renderClientCards();
        closeClientFiche();
      }

      function toggleUser(clientId, index) {
        clientsDB[clientId].users[index].actif = !clientsDB[clientId].users[index].actif;
        persistClientsStore();
        renderOverlay();
      }

      function removeUser(clientId, index) {
        if (clientsDB[clientId].users.length <= 1) {
          return;
        }
        const user = clientsDB[clientId].users[index];
        archiveEntity("client_user", user, {
          reason: "Contact client retiré de la fiche active",
          context: {
            clientId: clientId,
            clientName: getTicketClientName(clientId),
          },
        });
        clientsDB[clientId].users.splice(index, 1);
        persistClientsStore();
        renderOverlay();
      }

      function addUserRow() {
        if (clientsDB[currentClientId].users.length >= clientsDB[currentClientId].usersMax) {
          return;
        }
        openOverlay("addUser", { clientId: currentClientId });
      }

      function confirmAddUser() {
        const client = clientsDB[currentClientId];
        client.users.push({
          nom: document.getElementById("user-name").value.trim() || "Nouveau contact",
          email: document.getElementById("user-email").value.trim() || "contact@client.fr",
          tel: document.getElementById("user-tel").value.trim() || "",
          role: document.getElementById("user-role").value.trim() || "Ops logistique",
          actif: true,
          lastLogin: "Jamais",
        });
        persistClientsStore();
        currentFicheTab = "users";
        openOverlay("clientFiche", { clientId: currentClientId });
      }

      function startEditUser(index) {
        openOverlay("editUser", { index: index });
      }

      function saveUserEdit() {
        const user = clientsDB[currentClientId].users[overlayState.payload.index];
        user.nom = document.getElementById("edit-user-name").value.trim() || user.nom;
        user.email = document.getElementById("edit-user-email").value.trim() || user.email;
        user.tel = document.getElementById("edit-user-tel").value.trim() || user.tel;
        user.role = document.getElementById("edit-user-role").value.trim() || user.role;
        persistClientsStore();
        currentFicheTab = "users";
        openOverlay("clientFiche", { clientId: currentClientId });
      }

      function cancelUserEdit() {
        currentFicheTab = "users";
        openOverlay("clientFiche", { clientId: currentClientId });
      }

      function updPct() {
        renderCutoffPreview();
      }

      function renderCutoffPreview() {
        const host = document.getElementById("cutoff-preview");
        if (!host) {
          return;
        }
        const cutoff = clientsDB[currentClientId].cutoff;
        host.innerHTML =
          "<h3>Aperçu cutoff</h3>" +
          "<div class='chip-cloud' style='margin-top:12px'>" +
          cutoff.days.map((day) => '<span class="badge bc">' + daysLabel[day - 1] + "</span>").join("") +
          "</div>" +
          "<div class='info-grid' style='margin-top:14px'>" +
          '<div class="info-tile"><span class="eyebrow">Normal</span><strong>' +
          (document.getElementById("tarif-normal") ? document.getElementById("tarif-normal").value : cutoff.tarifs.normal) +
          "x</strong></div>" +
          '<div class="info-tile"><span class="eyebrow">11h</span><strong>' +
          (document.getElementById("tarif-t11") ? document.getElementById("tarif-t11").value : cutoff.tarifs.t11) +
          "x</strong></div>" +
          '<div class="info-tile"><span class="eyebrow">Urgence</span><strong>' +
          (document.getElementById("tarif-urg") ? document.getElementById("tarif-urg").value : cutoff.tarifs.urgence) +
          "x</strong></div></div>";
      }

      function addException() {
        const label = window.prompt("Libellé exception", "Pont du 8 mai");
        if (!label) {
          return;
        }
        const date = window.prompt("Date ou période", "08/05/2026");
        if (!date) {
          return;
        }
        clientsDB[currentClientId].cutoff.exceptions.push({ label: label, date: date });
        persistClientsStore();
        renderOverlay();
      }

      function toggleRef(index) {
        const ref = clientsDB[currentClientId].catalogue[index];
        ref.actif = !ref.actif;
        persistClientsStore();
        renderOverlay();
      }

      function removeRef(index) {
        const ref = clientsDB[currentClientId].catalogue[index];
        archiveEntity("catalogue_ref", ref, {
          reason: "Référence catalogue retirée",
          context: {
            clientId: currentClientId,
            clientName: getTicketClientName(currentClientId),
          },
        });
        clientsDB[currentClientId].catalogue.splice(index, 1);
        persistClientsStore();
        renderOverlay();
      }

      function addCatalogueRef() {
        openOverlay("addRef", { clientId: currentClientId });
      }

      function confirmAddRef() {
        clientsDB[currentClientId].catalogue.push({
          nom: document.getElementById("ref-name").value.trim() || "Nouvelle référence",
          type: document.getElementById("ref-type").value.trim() || "Produit",
          format: document.getElementById("ref-format").value.trim() || "Unité",
          poids: document.getElementById("ref-weight").value.trim() || "0kg",
          pav: Number(document.getElementById("ref-pav").value) || 0,
          code: document.getElementById("ref-code").value.trim() || "code",
          cible: "FIFO",
          actif: true,
        });
        persistClientsStore();
        currentFicheTab = "catalogue";
        openOverlay("clientFiche", { clientId: currentClientId });
      }

      function renderCertifs() {
        const host = document.getElementById("certif-wrap");
        if (!host) {
          return;
        }
        const certifications = clientsDB[currentClientId].certifications;
        host.innerHTML =
          CERTIF_OPTIONS.map(
            (certif) =>
              '<button type="button" class="chip' +
              (certifications.includes(certif) ? " active" : "") +
              '" onclick="toggleCertif(\'' +
              certif +
              "')\">" +
              esc(certif) +
              "</button>"
          ).join("") +
          '<input id="new-certif-input" type="text" placeholder="Ajouter une certification" style="max-width:220px" />' +
          '<button type="button" class="btn soft sm" onclick="addCertif()">Ajouter</button>';
      }

      function toggleCertif(certif) {
        const certifications = clientsDB[currentClientId].certifications;
        const index = certifications.indexOf(certif);
        if (index >= 0) {
          certifications.splice(index, 1);
        } else {
          certifications.push(certif);
        }
        persistClientsStore();
        renderCertifs();
        renderClientCards();
      }

      function addCertif() {
        const input = document.getElementById("new-certif-input");
        if (!input) {
          return;
        }
        const value = input.value.trim();
        if (value && !clientsDB[currentClientId].certifications.includes(value)) {
          clientsDB[currentClientId].certifications.push(value);
        }
        input.value = "";
        persistClientsStore();
        renderCertifs();
        renderClientCards();
      }

      function visualiserClient() {
        visualiserClientById(currentClientId);
      }

      function visualiserClientById(id) {
        window.open("portail-client.html?client=" + encodeURIComponent(id) + "&mode=visualisation", "_blank");
      }

      function openBillingReviewForClient(clientId) {
        const params = new URLSearchParams();
        params.set("client", clientId || currentClientId);
        params.set("period", new Date().toISOString().slice(0, 7));
        window.open("billing-review.html?" + params.toString(), "_blank");
      }

      function openMovementForm(kind) {
        openOverlay("ledgerMovement", { kind: kind || "IN" });
      }

      function refreshLedgerMovementProducts() {
        const clientNode = document.getElementById("ledger-owner-client");
        const productNode = document.getElementById("ledger-product-id");
        if (!clientNode || !productNode) {
          return;
        }
        const products = getLedgerProductsForClient(clientNode.value);
        productNode.innerHTML = buildProductOptionsMarkup(clientNode.value, products[0] ? products[0].id : "");
        syncLedgerMovementProductSnapshot();
      }

      function syncLedgerMovementProductSnapshot() {
        const product = getLedgerProductById(document.getElementById("ledger-product-id") ? document.getElementById("ledger-product-id").value : "");
        const labelNode = document.getElementById("ledger-product-label");
        const unitNode = document.getElementById("ledger-unit");
        if (product && labelNode) {
          labelNode.value = product.productMasterName;
        }
        if (product && unitNode) {
          unitNode.value = product.unit;
        }
      }

      function openInventorySessionForm() {
        openOverlay("inventorySession", {});
      }

      function openInventoryCountForm() {
        if (!activeInventorySessionId) {
          window.alert("Crée ou ouvre d’abord une session inventaire.");
          return;
        }
        openOverlay("inventoryCount", { sessionId: activeInventorySessionId });
      }

      function getClientKeyByName(name) {
        return Object.keys(clientsDB).find((key) => clientsDB[key].nom === name) || "yumi";
      }

      function parseFrDate(value) {
        if (!value || typeof value !== "string") {
          return null;
        }
        const parts = value.split("/");
        if (parts.length !== 3) {
          return null;
        }
        const parsed = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
        return Number.isNaN(parsed.getTime()) ? null : parsed;
      }

      function formatIsoDateHuman(value) {
        if (!value) {
          return "";
        }
        const date = new Date(value + "T00:00:00");
        if (Number.isNaN(date.getTime())) {
          return value;
        }
        return date.toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" });
      }

      function getTodayIsoDate() {
        return new Date().toISOString().slice(0, 10);
      }

      function getReceptionDateLabel(value) {
        return value === getTodayIsoDate() ? "Aujourd'hui" : formatIsoDateHuman(value);
      }

      function openReceptionDatePicker() {
        const field = document.getElementById("reception-date");
        if (!field) {
          return;
        }
        if (typeof field.showPicker === "function") {
          field.showPicker();
        } else {
          field.focus();
          field.click();
        }
      }

      function refreshReceptionDateDisplay() {
        const field = document.getElementById("reception-date");
        const badge = document.getElementById("reception-date-display");
        if (!field || !badge) {
          return;
        }
        badge.textContent = getReceptionDateLabel(field.value || getTodayIsoDate());
      }

      function setReceptionDateToToday() {
        const field = document.getElementById("reception-date");
        if (!field) {
          return;
        }
        field.value = getTodayIsoDate();
        refreshReceptionDateDisplay();
      }

      function toggleReceptionTemperatureField() {
        const modeField = document.getElementById("reception-storage-mode");
        const tempField = document.getElementById("reception-temperature-field");
        if (!modeField || !tempField) {
          return;
        }
        tempField.style.display = modeField.value === "frais" ? "grid" : "none";
      }

      function updateReceptionAnomalyInline() {
        const copy = document.getElementById("reception-anomaly-copy");
        const toggle = document.getElementById("reception-anomaly-toggle");
        if (!copy || !toggle) {
          return;
        }
        toggle.checked = Boolean(receptionAnomalyDraft);
        copy.textContent = receptionAnomalyDraft ? receptionAnomalyDraft.title : "Aucune anomalie signalée.";
      }

      function buildReceptionId() {
        const next = RECEPTIONS_LOG.length + 1;
        return "REC-" + new Date().getFullYear() + "-" + String(next).padStart(3, "0");
      }

      function highlightComboMatch(label, query) {
        const raw = String(label || "");
        const term = String(query || "").trim().toLowerCase();
        if (!term) {
          return esc(raw);
        }
        const index = raw.toLowerCase().indexOf(term);
        if (index === -1) {
          return esc(raw);
        }
        return esc(raw.slice(0, index)) + "<mark>" + esc(raw.slice(index, index + term.length)) + "</mark>" + esc(raw.slice(index + term.length));
      }

      function buildQuickReceptionClient(rawName) {
        const baseId = normalizeString(rawName).replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || ("client_" + Date.now());
        let clientId = baseId;
        let suffix = 2;
        while (clientsDB[clientId]) {
          clientId = baseId + "_" + suffix;
          suffix += 1;
        }
        const client = {
          id: clientId,
          nom: rawName,
          emoji: "📦",
          secteur: "À qualifier",
          statut: "Actif",
          ca: "—",
          accentVar: "mint",
          certifications: [],
          contact: { nom: "", role: "Opérations", email: "", tel: "" },
          users: [],
          usersMax: 3,
          cutoff: {
            h: 13,
            days: [1, 2, 3, 4, 5],
            tarifs: { normal: 1, t11: 1, t15: 1.05, t17: 1.1, urgence: 1.35 },
            exceptions: [],
          },
          features: {
            pav: false,
            canaux: false,
            stockCible: false,
            multiRef: false,
            dlcMode: "long",
            dlcAlert: 30,
            chaine: "sec",
            cyke: false,
            zapier: false,
            teamdesk: false,
            bl: true,
          },
          contract: {
            prepRequirements: [],
            prepNotes: "",
            serviceExpectations: [],
            serviceDelivered: [],
            materialsAllowed: false,
            materialsNotes: "",
          },
          contactCargonautes: { nom: "", role: "Responsable exploitation", email: "", tel: "", slackTarget: "commercial" },
          catalogue: [],
          billing: buildBillingConfig({}, { h: 13, tarifs: { normal: 1, t11: 1, t15: 1.05, t17: 1.1, urgence: 1.35 } }),
        };
        clientsDB[clientId] = client;
        persistClientsStore();
        syncPricingStoresFromClients();
        return client;
      }

      function ensureReceptionAgent(name) {
        const cleanName = String(name || "").trim();
        if (!cleanName) {
          return "";
        }
        if (!receptionAgents.some((item) => normalizeString(item) === normalizeString(cleanName))) {
          receptionAgents.push(cleanName);
          receptionAgents = Array.from(new Set(receptionAgents)).sort((left, right) => left.localeCompare(right, "fr"));
          persistReceptionAgents();
        }
        return cleanName;
      }

      function getReceptionComboConfig(key) {
        const configs = {
          agent: { kind: "agent", inputId: "reception-agent-input", menuId: "reception-agent-menu", wrapperId: "reception-agent-combo", hiddenId: null, createLabel: "Créer un nouvel agent" },
          client: { kind: "client", inputId: "reception-client-input", menuId: "reception-client-menu", wrapperId: "reception-client-combo", hiddenId: "reception-client", createLabel: "Créer un nouveau client" },
          storageMode: { kind: "storageMode", inputId: "reception-storage-mode-input", menuId: "reception-storage-mode-menu", wrapperId: "reception-storage-mode-combo", hiddenId: "reception-storage-mode" },
          transporteur: { kind: "transporteur", inputId: "reception-transporteur", menuId: "reception-transporteur-menu", wrapperId: "reception-transporteur-combo", hiddenId: null },
          arrivalTime: { kind: "time", inputId: "reception-arrival-time", menuId: "reception-arrival-time-menu", wrapperId: "reception-arrival-time-combo", hiddenId: null },
          logClient: { kind: "logClient", inputId: "reception-log-client-filter-input", menuId: "reception-log-client-menu", wrapperId: "reception-log-client-combo", hiddenId: "reception-log-client-filter" },
          logAnomaly: { kind: "logAnomaly", inputId: "reception-log-anomaly-filter-input", menuId: "reception-log-anomaly-menu", wrapperId: "reception-log-anomaly-combo", hiddenId: "reception-log-anomaly-filter" },
          plannedClient: { kind: "client", inputId: "planned-reception-client-input", menuId: "planned-reception-client-menu", wrapperId: "planned-reception-client-combo", hiddenId: "planned-reception-client", createLabel: "Créer un nouveau client" },
          plannedTime: { kind: "time", inputId: "planned-reception-time", menuId: "planned-reception-time-menu", wrapperId: "planned-reception-time-combo", hiddenId: null },
          plannedTransporteur: { kind: "transporteur", inputId: "planned-reception-transporteur", menuId: "planned-reception-transporteur-menu", wrapperId: "planned-reception-transporteur-combo", hiddenId: null },
        };
        return configs[key] || null;
      }

      function getReceptionComboOptions(kind, query) {
        const term = normalizeString(query || "");
        if (kind === "client") {
          return Object.values(clientsDB)
            .map((client) => ({ value: client.id, label: client.nom, meta: client.secteur || "" }))
            .filter((item) => !term || normalizeString(item.label + " " + item.meta).includes(term))
            .sort((left, right) => left.label.localeCompare(right.label, "fr"))
            .slice(0, 10);
        }
        if (kind === "agent") {
          return receptionAgents
            .map((agent) => ({ value: agent, label: agent, meta: "Agent entrepôt" }))
            .filter((item) => !term || normalizeString(item.label).includes(term))
            .slice(0, 8);
        }
        if (kind === "transporteur") {
          return getReceptionTransporteurs()
            .map((transporteur) => ({ value: transporteur, label: transporteur, meta: "Transporteur" }))
            .filter((item) => !term || normalizeString(item.label).includes(term))
            .slice(0, 10);
        }
        if (kind === "time") {
          return RECEPTION_TIME_SUGGESTIONS
            .filter((item) => !query || item.includes(String(query).trim()))
            .map((item) => ({ value: item, label: item, meta: "Suggestion" }))
            .slice(0, 8);
        }
        if (kind === "storageMode") {
          return [
            { value: "sec", label: "Sec", meta: "Flux sec" },
            { value: "frais", label: "Frais", meta: "Flux frais" },
          ].filter((item) => !term || normalizeString(item.label + " " + item.meta).includes(term));
        }
        if (kind === "logClient") {
          return [{ value: "all", label: "Tous les clients", meta: "Vue globale" }]
            .concat(
              Object.values(clientsDB)
                .map((client) => ({ value: client.id, label: client.nom, meta: client.secteur || "" }))
                .sort((left, right) => left.label.localeCompare(right.label, "fr"))
            )
            .filter((item) => !term || normalizeString(item.label + " " + item.meta).includes(term))
            .slice(0, 12);
        }
        if (kind === "logAnomaly") {
          return [
            { value: "all", label: "Toutes", meta: "Toutes les réceptions" },
            { value: "with", label: "Avec anomalie", meta: "Réceptions avec incident" },
            { value: "without", label: "Sans anomalie", meta: "Réceptions sans incident" },
          ].filter((item) => !term || normalizeString(item.label + " " + item.meta).includes(term));
        }
        return [];
      }

      function getReceptionComboLabel(kind, value) {
        if (kind === "storageMode") {
          return value === "frais" ? "Frais" : "Sec";
        }
        if (kind === "logClient") {
          if (!value || value === "all") {
            return "Tous les clients";
          }
          return getClientNameById(value);
        }
        if (kind === "logAnomaly") {
          return value === "with" ? "Avec anomalie" : value === "without" ? "Sans anomalie" : "Toutes";
        }
        return value || "";
      }

      function syncReceptionComboSelection(key, value) {
        const config = getReceptionComboConfig(key);
        if (!config) {
          return;
        }
        const inputNode = document.getElementById(config.inputId);
        const hiddenNode = config.hiddenId ? document.getElementById(config.hiddenId) : null;
        if (hiddenNode && value !== undefined && value !== null) {
          hiddenNode.value = value;
        }
        if (inputNode) {
          inputNode.value = getReceptionComboLabel(config.kind, value);
        }
      }

      function closeReceptionCombos() {
        receptionComboOpenKey = null;
        ["agent", "client", "storageMode", "transporteur", "arrivalTime", "logClient", "logAnomaly", "plannedClient", "plannedTime", "plannedTransporteur"].forEach((key) => {
          const config = getReceptionComboConfig(key);
          const wrapper = config ? document.getElementById(config.wrapperId) : null;
          if (wrapper) {
            wrapper.classList.remove("is-open");
          }
        });
      }

      function openReceptionCombo(key) {
        const config = getReceptionComboConfig(key);
        if (!config) {
          return;
        }
        closeReceptionCombos();
        receptionComboOpenKey = key;
        const wrapper = document.getElementById(config.wrapperId);
        if (wrapper) {
          wrapper.classList.add("is-open");
        }
        renderReceptionComboMenu(key);
      }

      function toggleReceptionCombo(key, event) {
        if (event) {
          event.stopPropagation();
        }
        if (receptionComboOpenKey === key) {
          closeReceptionCombos();
          return;
        }
        openReceptionCombo(key);
      }

      function renderReceptionComboMenu(key) {
        const config = getReceptionComboConfig(key);
        if (!config) {
          return;
        }
        const inputNode = document.getElementById(config.inputId);
        const menuNode = document.getElementById(config.menuId);
        if (!inputNode || !menuNode) {
          return;
        }
        const query = inputNode.value || "";
        const options = getReceptionComboOptions(config.kind, query);
        const hasExact = options.some((option) => normalizeString(option.label) === normalizeString(query));
        let markup = options.length
          ? options
              .map(
                (option) =>
                  '<button class="combo-option" type="button" onclick="selectReceptionComboOption(\'' +
                  key +
                  "', '" +
                  esc(option.value) +
                  "', '" +
                  esc(option.label) +
                  "')\"><span>" +
                  highlightComboMatch(option.label, query) +
                  "</span>" +
                  (option.meta ? "<small>" + esc(option.meta) + "</small>" : "") +
                  "</button>"
              )
              .join("")
          : '<div class="combo-empty">Aucun résultat.</div>';
        if ((config.kind === "client" || config.kind === "agent") && query.trim() && !hasExact) {
          markup +=
            '<button class="combo-option is-create" type="button" onclick="createReceptionComboOption(\'' +
            key +
            "')\">" +
            esc(config.createLabel || "Créer") +
            "<small>" +
            esc('Créer "' + query.trim() + '"') +
            "</small></button>";
        }
        menuNode.innerHTML = markup;
      }

      function updateReceptionCombo(key) {
        const config = getReceptionComboConfig(key);
        if (!config) {
          return;
        }
        if (config.hiddenId) {
          const hidden = document.getElementById(config.hiddenId);
          if (hidden) {
            hidden.value = "";
          }
        }
        if (key === "client") {
          updateReceptionBioControls();
        }
        openReceptionCombo(key);
      }

      function selectReceptionComboOption(key, value, label) {
        const config = getReceptionComboConfig(key);
        if (!config) {
          return;
        }
        const inputNode = document.getElementById(config.inputId);
        if (inputNode) {
          inputNode.value = label;
        }
        if (config.hiddenId) {
          const hidden = document.getElementById(config.hiddenId);
          if (hidden) {
            hidden.value = value;
          }
        }
        if (config.kind === "client") {
          updateReceptionBioControls();
        }
        if (config.kind === "storageMode") {
          toggleReceptionTemperatureField();
        }
        if (config.kind === "logClient" || config.kind === "logAnomaly") {
          renderReceptionPage();
        }
        closeReceptionCombos();
      }

      function createReceptionComboOption(key) {
        const config = getReceptionComboConfig(key);
        if (!config) {
          return;
        }
        const inputNode = document.getElementById(config.inputId);
        const raw = inputNode ? inputNode.value.trim() : "";
        if (!raw) {
          return;
        }
        if (config.kind === "agent") {
          const created = ensureReceptionAgent(raw);
          selectReceptionComboOption(key, created, created);
          return;
        }
        if (config.kind === "client") {
          const createdClient = buildQuickReceptionClient(raw);
          selectReceptionComboOption(key, createdClient.id, createdClient.nom);
        }
      }

      function handleReceptionComboKeydown(key, event) {
        if (event.key === "Escape") {
          closeReceptionCombos();
          return;
        }
        if (event.key !== "Enter") {
          return;
        }
        event.preventDefault();
        const config = getReceptionComboConfig(key);
        if (!config) {
          return;
        }
        const inputNode = document.getElementById(config.inputId);
        const query = inputNode ? inputNode.value.trim() : "";
        const options = getReceptionComboOptions(config.kind, query);
        if (options.length) {
          selectReceptionComboOption(key, options[0].value, options[0].label);
          return;
        }
        if ((config.kind === "client" || config.kind === "agent") && query) {
          createReceptionComboOption(key);
          return;
        }
        closeReceptionCombos();
      }

      function getStockFilterComboConfig(key) {
        const configs = {
          client: {
            wrapperId: "stock-client-combo",
            inputId: "stock-client-input",
            selectId: "stock-client-filter",
            menuId: "stock-client-menu",
          },
          format: {
            wrapperId: "stock-format-combo",
            inputId: "stock-format-input",
            selectId: "stock-format-filter",
            menuId: "stock-format-menu",
          },
          trace: {
            wrapperId: "stock-trace-combo",
            inputId: "stock-trace-input",
            selectId: "stock-trace-filter",
            menuId: "stock-trace-menu",
          },
          week: {
            wrapperId: "stock-week-combo",
            inputId: "stock-week-input",
            selectId: "stock-week-filter",
            menuId: "stock-week-menu",
          },
          coordinate: {
            wrapperId: "stock-coordinate-combo",
            inputId: "stock-coordinate-input",
            selectId: "stock-coordinate-filter",
            menuId: "stock-coordinate-menu",
          },
        };
        return configs[key] || null;
      }

      function getStockFilterComboOptions(key, query) {
        const config = getStockFilterComboConfig(key);
        const selectNode = config ? document.getElementById(config.selectId) : null;
        if (!selectNode) {
          return [];
        }
        const term = normalizeString(query || "");
        return Array.from(selectNode.options)
          .map((option) => ({
            value: option.value,
            label: option.textContent || option.label || option.value,
          }))
          .filter((option) => !term || normalizeString(option.label).includes(term))
          .slice(0, 12);
      }

      function syncStockFilterComboSelection(key) {
        const config = getStockFilterComboConfig(key);
        if (!config) {
          return;
        }
        const inputNode = document.getElementById(config.inputId);
        const selectNode = document.getElementById(config.selectId);
        if (!inputNode || !selectNode) {
          return;
        }
        const selected = selectNode.options[selectNode.selectedIndex];
        inputNode.value = selected ? selected.textContent || "" : "";
      }

      function syncStockFilterCombos() {
        ["client", "format", "trace", "week", "coordinate"].forEach(syncStockFilterComboSelection);
        if (stockFilterComboOpenKey) {
          renderStockFilterComboMenu(stockFilterComboOpenKey);
        }
      }

      function closeStockFilterCombos() {
        stockFilterComboOpenKey = null;
        ["client", "format", "trace", "week", "coordinate"].forEach((key) => {
          const config = getStockFilterComboConfig(key);
          const wrapper = config ? document.getElementById(config.wrapperId) : null;
          if (wrapper) {
            wrapper.classList.remove("is-open");
          }
        });
      }

      function openStockFilterCombo(key) {
        const config = getStockFilterComboConfig(key);
        if (!config) {
          return;
        }
        closeStockFilterCombos();
        stockFilterComboOpenKey = key;
        const wrapper = document.getElementById(config.wrapperId);
        if (wrapper) {
          wrapper.classList.add("is-open");
        }
        renderStockFilterComboMenu(key);
      }

      function toggleStockFilterCombo(key, event) {
        if (event) {
          event.stopPropagation();
        }
        if (stockFilterComboOpenKey === key) {
          closeStockFilterCombos();
          return;
        }
        openStockFilterCombo(key);
      }

      function renderStockFilterComboMenu(key) {
        const config = getStockFilterComboConfig(key);
        if (!config) {
          return;
        }
        const inputNode = document.getElementById(config.inputId);
        const menuNode = document.getElementById(config.menuId);
        if (!inputNode || !menuNode) {
          return;
        }
        const query = inputNode.value || "";
        const options = getStockFilterComboOptions(key, query);
        menuNode.innerHTML = options.length
          ? options
              .map(
                (option) =>
                  '<button class="combo-option" type="button" onclick="selectStockFilterComboOption(\'' +
                  key +
                  "', '" +
                  esc(option.value) +
                  "', '" +
                  esc(option.label) +
                  "')\"><span>" +
                  highlightComboMatch(option.label, query) +
                  "</span></button>"
              )
              .join("")
          : '<div class="combo-empty">Aucun résultat.</div>';
      }

      function updateStockFilterCombo(key) {
        openStockFilterCombo(key);
      }

      function selectStockFilterComboOption(key, value, label) {
        const config = getStockFilterComboConfig(key);
        if (!config) {
          return;
        }
        const inputNode = document.getElementById(config.inputId);
        const selectNode = document.getElementById(config.selectId);
        if (inputNode) {
          inputNode.value = label;
        }
        if (selectNode) {
          selectNode.value = value;
        }
        closeStockFilterCombos();
        renderStockPage();
      }

      function handleStockFilterComboKeydown(key, event) {
        if (event.key === "Escape") {
          closeStockFilterCombos();
          return;
        }
        if (event.key !== "Enter") {
          return;
        }
        event.preventDefault();
        const config = getStockFilterComboConfig(key);
        const inputNode = config ? document.getElementById(config.inputId) : null;
        const options = getStockFilterComboOptions(key, inputNode ? inputNode.value : "");
        if (options.length) {
          selectStockFilterComboOption(key, options[0].value, options[0].label);
          return;
        }
        closeStockFilterCombos();
      }

      function getPrepFilterComboConfig(key) {
        const configs = {
          status: {
            wrapperId: "prep-status-combo",
            inputId: "prep-status-input",
            selectId: "prep-status-filter",
            menuId: "prep-status-menu",
          },
          canal: {
            wrapperId: "prep-canal-combo",
            inputId: "prep-canal-input",
            selectId: "prep-canal-filter",
            menuId: "prep-canal-menu",
          },
        };
        return configs[key] || null;
      }

      function getPrepFilterComboOptions(key, query) {
        const config = getPrepFilterComboConfig(key);
        const selectNode = config ? document.getElementById(config.selectId) : null;
        if (!selectNode) {
          return [];
        }
        const term = normalizeString(query || "");
        return Array.from(selectNode.options)
          .map((option) => ({
            value: option.value || option.textContent || "",
            label: option.textContent || option.label || option.value || "",
          }))
          .filter((option) => !term || normalizeString(option.label).includes(term))
          .slice(0, 12);
      }

      function syncPrepFilterComboSelection(key) {
        const config = getPrepFilterComboConfig(key);
        if (!config) {
          return;
        }
        const inputNode = document.getElementById(config.inputId);
        const selectNode = document.getElementById(config.selectId);
        if (!inputNode || !selectNode) {
          return;
        }
        const selected = selectNode.options[selectNode.selectedIndex];
        inputNode.value = selected ? selected.textContent || "" : "";
      }

      function syncPrepFilterCombos() {
        ["status", "canal"].forEach(syncPrepFilterComboSelection);
        if (prepFilterComboOpenKey) {
          renderPrepFilterComboMenu(prepFilterComboOpenKey);
        }
      }

      function closePrepFilterCombos() {
        prepFilterComboOpenKey = null;
        ["status", "canal"].forEach((key) => {
          const config = getPrepFilterComboConfig(key);
          const wrapper = config ? document.getElementById(config.wrapperId) : null;
          if (wrapper) {
            wrapper.classList.remove("is-open");
          }
        });
      }

      function openPrepFilterCombo(key) {
        const config = getPrepFilterComboConfig(key);
        if (!config) {
          return;
        }
        closePrepFilterCombos();
        prepFilterComboOpenKey = key;
        const wrapper = document.getElementById(config.wrapperId);
        if (wrapper) {
          wrapper.classList.add("is-open");
        }
        renderPrepFilterComboMenu(key);
      }

      function togglePrepFilterCombo(key, event) {
        if (event) {
          event.stopPropagation();
        }
        if (prepFilterComboOpenKey === key) {
          closePrepFilterCombos();
          return;
        }
        openPrepFilterCombo(key);
      }

      function renderPrepFilterComboMenu(key) {
        const config = getPrepFilterComboConfig(key);
        if (!config) {
          return;
        }
        const inputNode = document.getElementById(config.inputId);
        const menuNode = document.getElementById(config.menuId);
        if (!inputNode || !menuNode) {
          return;
        }
        const query = inputNode.value || "";
        const options = getPrepFilterComboOptions(key, query);
        menuNode.innerHTML = options.length
          ? options
              .map(
                (option) =>
                  '<button class="combo-option" type="button" onclick="selectPrepFilterComboOption(\'' +
                  key +
                  "', '" +
                  esc(option.value) +
                  "', '" +
                  esc(option.label) +
                  "')\"><span>" +
                  highlightComboMatch(option.label, query) +
                  "</span></button>"
              )
              .join("")
          : '<div class="combo-empty">Aucun résultat.</div>';
      }

      function updatePrepFilterCombo(key) {
        openPrepFilterCombo(key);
      }

      function selectPrepFilterComboOption(key, value, label) {
        const config = getPrepFilterComboConfig(key);
        if (!config) {
          return;
        }
        const inputNode = document.getElementById(config.inputId);
        const selectNode = document.getElementById(config.selectId);
        if (inputNode) {
          inputNode.value = label;
        }
        if (selectNode) {
          selectNode.value = value;
        }
        closePrepFilterCombos();
        renderPrepListFiltered();
      }

      function handlePrepFilterComboKeydown(key, event) {
        if (event.key === "Escape") {
          closePrepFilterCombos();
          return;
        }
        if (event.key !== "Enter") {
          return;
        }
        event.preventDefault();
        const config = getPrepFilterComboConfig(key);
        const inputNode = config ? document.getElementById(config.inputId) : null;
        const options = getPrepFilterComboOptions(key, inputNode ? inputNode.value : "");
        if (options.length) {
          selectPrepFilterComboOption(key, options[0].value, options[0].label);
          return;
        }
        closePrepFilterCombos();
      }

      function setReceptionPrimarySelection(agentValue, clientId) {
        const client = clientsDB[clientId] || Object.values(clientsDB)[0];
        const hidden = document.getElementById("reception-client");
        const clientInput = document.getElementById("reception-client-input");
        const agentInput = document.getElementById("reception-agent-input");
        if (hidden && client) {
          hidden.value = client.id;
        }
        if (clientInput && client) {
          clientInput.value = client.nom;
        }
        if (agentInput) {
          agentInput.value = agentValue || receptionAgents[0] || "";
        }
        updateReceptionBioControls();
      }

      function togglePlannedReceptionInline() {
        receptionPlannedInlineVisible = !receptionPlannedInlineVisible;
        renderReceptionPage();
      }

      function cancelPlannedReceptionInline() {
        receptionPlannedInlineVisible = false;
        const hidden = document.getElementById("planned-reception-client");
        const clientInput = document.getElementById("planned-reception-client-input");
        const timeInput = document.getElementById("planned-reception-time");
        const transporteurInput = document.getElementById("planned-reception-transporteur");
        if (hidden) {
          hidden.value = "";
        }
        if (clientInput) {
          clientInput.value = "";
        }
        if (timeInput) {
          timeInput.value = "";
        }
        if (transporteurInput) {
          transporteurInput.value = "";
        }
        closeReceptionCombos();
        renderReceptionPage();
      }

      function resolveReceptionClientId(inputId, hiddenId) {
        const hidden = document.getElementById(hiddenId);
        const input = document.getElementById(inputId);
        if (hidden && hidden.value) {
          return hidden.value;
        }
        const raw = input ? input.value.trim() : "";
        if (!raw) {
          return "";
        }
        const existing = Object.values(clientsDB).find((client) => normalizeString(client.nom) === normalizeString(raw));
        if (existing) {
          if (hidden) {
            hidden.value = existing.id;
          }
          return existing.id;
        }
        const created = buildQuickReceptionClient(raw);
        if (hidden) {
          hidden.value = created.id;
        }
        return created.id;
      }

      function renderReceptionStateMarkup(entry) {
        const stateLabel = entry && entry.status === "planned" ? "Prévue" : "Reçue";
        return (
          "<span class='reception-status-inline'>" +
          esc(stateLabel) +
          (entry && entry.anomaly ? " <span class='reception-alert-dot'></span>" : "") +
          "</span>"
        );
      }

      function getTodayReceptionCount() {
        return getActiveReceptionEntries().filter((entry) => entry.receptionDate === getTodayIsoDate()).length;
      }

      function isBioClient(clientId) {
        const client = clientsDB[clientId];
        return Boolean(client && Array.isArray(client.certifications) && client.certifications.includes("BIO"));
      }

      function buildReceptionBioControlTemplate(defaultState) {
        const state = defaultState || null;
        const result = {
          groups: {},
          missing: [],
          nonConformities: 0,
        };
        RECEPTION_BIO_CHECK_GROUPS.forEach((group) => {
          result.groups[group.key] = {};
          group.items.forEach((item) => {
            result.groups[group.key][item.key] = state;
            if (!state) {
              result.missing.push(item.label);
            }
            if (state === "non_conforme") {
              result.nonConformities += 1;
            }
          });
        });
        return result;
      }

      function normalizeReceptionBioControl(bioControl) {
        if (!bioControl || typeof bioControl !== "object") {
          return buildReceptionBioControlTemplate(null);
        }
        const result = {
          groups: {},
          missing: [],
          nonConformities: 0,
        };
        RECEPTION_BIO_CHECK_GROUPS.forEach((group) => {
          result.groups[group.key] = {};
          group.items.forEach((item) => {
            const state = ((bioControl.groups || {})[group.key] || {})[item.key] || null;
            result.groups[group.key][item.key] = state;
            if (!state) {
              result.missing.push(item.label);
            }
            if (state === "non_conforme") {
              result.nonConformities += 1;
            }
          });
        });
        return result;
      }

      function renderReceptionBioChecklist() {
        const node = document.getElementById("reception-bio-checklist");
        if (!node || node.dataset.ready === "1") {
          return;
        }
        node.innerHTML =
          '<div class="reception-bio-head"><p class="eyebrow">Contrôle BIO</p><strong>Checklist de réception obligatoire</strong><p class="mini">Visible automatiquement pour les clients certifiés BIO.</p></div>' +
          RECEPTION_BIO_CHECK_GROUPS.map((group) => {
            return (
              '<div class="reception-bio-group"><strong>' +
              esc(group.title) +
              "</strong>" +
              group.items
                .map((item) => {
                  return (
                    '<div class="reception-bio-row"><div><strong>' +
                    esc(item.label) +
                    "</strong>" +
                    (item.hint ? '<span class="mini">' + esc(item.hint) + "</span>" : "") +
                    '</div><div class="reception-bio-choices"><div class="reception-bio-switch" data-key="' +
                    esc(item.key) +
                    '"><input id="reception-bio-' +
                    esc(item.key) +
                    '" type="hidden" value="" /><button class="reception-bio-toggle" data-value="conforme" type="button" onclick="setReceptionBioValue(\'' +
                    esc(item.key) +
                    "', 'conforme')\">Conforme</button><button class=\"reception-bio-toggle\" data-value=\"non_conforme\" type=\"button\" onclick=\"setReceptionBioValue('" +
                    esc(item.key) +
                    "', 'non_conforme')\">Non conforme</button></div></div></div>"
                  );
                })
                .join("") +
              "</div>"
            );
          }).join("");
        node.dataset.ready = "1";
      }

      function setReceptionBioValue(itemKey, value) {
        const hidden = document.getElementById("reception-bio-" + itemKey);
        if (!hidden) {
          return;
        }
        hidden.value = value || "";
        const wrapper = hidden.closest(".reception-bio-switch");
        if (!wrapper) {
          return;
        }
        Array.from(wrapper.querySelectorAll(".reception-bio-toggle")).forEach((button) => {
          button.classList.toggle("is-active", button.dataset.value === hidden.value);
        });
      }

      function resetReceptionBioChecklist() {
        RECEPTION_BIO_CHECK_GROUPS.forEach((group) => {
          group.items.forEach((item) => {
            setReceptionBioValue(item.key, "");
          });
        });
      }

      function updateReceptionBioControls() {
        renderReceptionBioChecklist();
        const clientId = document.getElementById("reception-client") ? document.getElementById("reception-client").value : "";
        const node = document.getElementById("reception-bio-checklist");
        if (!node) {
          return;
        }
        const visible = isBioClient(clientId);
        node.style.display = visible ? "grid" : "none";
        if (!visible) {
          resetReceptionBioChecklist();
        }
      }

      function readReceptionBioControl() {
        const result = buildReceptionBioControlTemplate(null);
        result.missing = [];
        result.nonConformities = 0;
        RECEPTION_BIO_CHECK_GROUPS.forEach((group) => {
          group.items.forEach((item) => {
            const hidden = document.getElementById("reception-bio-" + item.key);
            const value = hidden ? hidden.value : "";
            result.groups[group.key][item.key] = value || null;
            if (!value) {
              result.missing.push(item.label);
            }
            if (value === "non_conforme") {
              result.nonConformities += 1;
            }
          });
        });
        return result;
      }

      function buildReceptionBioSummaryMarkup(bioControl) {
        if (!bioControl || !bioControl.groups) {
          return "";
        }
        const rows = [];
        RECEPTION_BIO_CHECK_GROUPS.forEach((group) => {
          group.items.forEach((item) => {
            const state = ((bioControl.groups[group.key] || {})[item.key]) || null;
            rows.push(
              '<div class="reception-bio-summary-row"><span>' +
              esc(item.label) +
              "</span><span class='badge " +
              (state === "conforme" ? "bm" : state === "non_conforme" ? "br" : "bg") +
              "'>" +
              esc(state === "conforme" ? "Conforme" : state === "non_conforme" ? "Non conforme" : "Non renseigné") +
              "</span></div>"
            );
          });
        });
        return '<div class="stock-detail-block"><strong>Contrôle BIO</strong><div class="reception-bio-summary">' + rows.join("") + "</div></div>";
      }

      function getPaletteTrafficForDate(dateKey) {
        return getActiveReceptionEntries()
          .filter((entry) => entry.receptionDate === dateKey)
          .reduce(
            (acc, entry) => {
              acc.in += Number(entry.palettesSolEurope || 0) + Number(entry.palettesSolPerdues || 0);
              acc.out += Number(entry.palettesRenduesEurope || 0) + Number(entry.palettesRenduesPerdues || 0);
              return acc;
            },
            { in: 0, out: 0 }
          );
      }

      function getReceptionStockDecision(entry) {
        if (!entry) {
          return { label: "À vérifier", badge: "ba", detail: "Réception à qualifier" };
        }
        if (entry.status === "planned") {
          return { label: "Prévue", badge: "bg", detail: "Réception non encore arrivée" };
        }
        const anomaly = entry.anomaly || null;
        const bioControl = entry.bioControl || null;
        const nonConformities = Number((bioControl && bioControl.nonConformities) || 0);
        const missingBioChecks = Number((bioControl && bioControl.missing && bioControl.missing.length) || 0);
        const anomalySeverity = String((anomaly && anomaly.severity) || "");
        const hasCriticalAnomaly = anomalySeverity === "Critique";
        const needsTemperatureCheck = entry.storageMode === "frais" && (entry.temperature === null || entry.temperature === undefined || entry.temperature === "");
        if (hasCriticalAnomaly || nonConformities >= 2) {
          return {
            label: "En quarantaine",
            badge: "br",
            detail: hasCriticalAnomaly ? "Anomalie critique" : "Non-conformités BIO multiples",
          };
        }
        if (anomaly || nonConformities > 0 || missingBioChecks > 0 || needsTemperatureCheck) {
          return {
            label: "À vérifier",
            badge: "ba",
            detail: anomaly ? "Anomalie ou réserve active" : "Contrôle BIO / température à confirmer",
          };
        }
        return { label: "Disponible", badge: "bm", detail: "Réception libérée pour exploitation" };
      }

      function findNextOperationalDate(fromDate) {
        const probe = new Date(fromDate);
        probe.setHours(12, 0, 0, 0);
        for (let offset = 0; offset < 21; offset += 1) {
          const candidate = new Date(probe);
          candidate.setDate(probe.getDate() + offset);
          if (isSiteOpenOnDate(candidate)) {
            return candidate;
          }
        }
        return new Date(fromDate);
      }

      function getSiteDayConfig(dayNumber) {
        const config = (siteOperations.days || []).find((item) => item.day === dayNumber);
        return config || { day: dayNumber, open: false, start: "08:00", end: "17:00" };
      }

      function getSiteDayNumberFromDate(date) {
        const jsDay = date.getDay();
        return jsDay === 0 ? 7 : jsDay;
      }

      function isSiteOpenOnDate(date) {
        return Boolean(getSiteDayConfig(getSiteDayNumberFromDate(date)).open);
      }

      function isTimeWithinWindow(timeValue, start, end) {
        if (!timeValue || !start || !end) {
          return false;
        }
        return timeValue >= start && timeValue <= end;
      }

      function getSiteOperationalStatus(date) {
        const dayConfig = getSiteDayConfig(getSiteDayNumberFromDate(date));
        if (!dayConfig.open) {
          return {
            state: "closed",
            label: "Fermé",
            windowLabel: "Site fermé",
          };
        }
        const timeValue = String(date.getHours()).padStart(2, "0") + ":" + String(date.getMinutes()).padStart(2, "0");
        const openNow = isTimeWithinWindow(timeValue, dayConfig.start, dayConfig.end);
        return {
          state: openNow ? "open" : "outside",
          label: openNow ? "Ouvert" : "Hors horaires",
          windowLabel: dayConfig.start + " → " + dayConfig.end,
        };
      }

      function getDashboardReferenceDate() {
        const today = new Date();
        const todayOpen = isSiteOpenOnDate(today);
        const focusDate = todayOpen ? new Date(today) : findNextOperationalDate(today);
        return {
          today,
          todayOpen,
          focusDate,
          focusKey: isoDay(focusDate),
          mode: todayOpen ? "today" : "preview",
        };
      }

      function persistSiteOperations() {
        try {
          window.localStorage.setItem(SITE_OPERATIONS_STORAGE_KEY, JSON.stringify(siteOperations));
        } catch (error) {
          console.warn("Impossible de persister les horaires du site.", error);
        }
      }

      function persistSiteTheme() {
        try {
          window.localStorage.setItem(SITE_THEME_STORAGE_KEY, JSON.stringify(siteThemeId));
        } catch (error) {
          console.warn("Impossible de persister le style du site.", error);
        }
      }

      function applySiteTheme(themeId) {
        const nextThemeId = SITE_THEME_OPTIONS[themeId] ? themeId : SITE_THEME_DEFAULT;
        const theme = SITE_THEME_OPTIONS[nextThemeId];
        Object.keys(theme.vars).forEach((cssVar) => {
          document.documentElement.style.setProperty(cssVar, theme.vars[cssVar]);
        });
        document.documentElement.dataset.siteTheme = nextThemeId;
        siteThemeId = nextThemeId;
      }

      function setSiteTheme(themeId) {
        applySiteTheme(themeId);
        persistSiteTheme();
        renderSiteThemeConfig();
      }

      function resetSiteTheme() {
        setSiteTheme(SITE_THEME_DEFAULT);
      }

      function renderSiteThemeConfig() {
        const summaryNode = document.getElementById("site-theme-summary");
        const gridNode = document.getElementById("site-theme-grid");
        const previewNode = document.getElementById("site-theme-preview");
        if (!summaryNode || !gridNode || !previewNode) {
          return;
        }
        const activeTheme = SITE_THEME_OPTIONS[siteThemeId] || SITE_THEME_OPTIONS[SITE_THEME_DEFAULT];
        summaryNode.textContent = activeTheme.shortLabel;
        summaryNode.className = "badge " + (siteThemeId === "bio" ? "bm" : siteThemeId === "graphite" ? "bg" : "ba");
        gridNode.innerHTML = Object.entries(SITE_THEME_OPTIONS)
          .map(([themeId, theme]) => {
            const swatches = (theme.swatches || [])
              .map((color) => '<span class="theme-swatch" style="background:' + esc(color) + '"></span>')
              .join("");
            return (
              '<button class="theme-card' +
              (themeId === siteThemeId ? " is-active" : "") +
              '" type="button" onclick="setSiteTheme(\'' +
              esc(themeId) +
              "')\"><div class='theme-card-head'><div><strong>" +
              esc(theme.label) +
              "</strong><span class='mini'>" +
              esc(theme.shortLabel) +
              "</span></div>" +
              (themeId === siteThemeId ? "<span class='badge ba'>Actif</span>" : "") +
              "</div><div class='theme-swatches'>" +
              swatches +
              "</div><div class='theme-card-note'>" +
              esc(theme.note) +
              "</div></button>"
            );
          })
          .join("");
        previewNode.innerHTML =
          '<span class="theme-preview-chip">Fond ' +
          esc(activeTheme.shortLabel) +
          "</span>" +
          '<span class="theme-preview-chip">Accent principal ' +
          esc(activeTheme.vars["--brand-orange"]) +
          "</span>" +
          '<span class="theme-preview-chip">Signal BIO ' +
          esc(activeTheme.vars["--brand-green"]) +
          "</span>";
      }

      function persistSiteBanner() {
        try {
          window.localStorage.setItem(SITE_BANNER_STORAGE_KEY, JSON.stringify(siteBanner));
        } catch (error) {
          console.warn("Impossible de persister la bannière du site.", error);
        }
      }

      function renderSiteBannerPreview() {
        const root = document.getElementById("team-site-banner");
        const title = document.getElementById("team-site-banner-title");
        const body = document.getElementById("team-site-banner-body");
        const audience = document.getElementById("team-site-banner-audience");
        if (!root || !title || !body || !audience) {
          return;
        }
        const visible = Boolean(siteBanner && siteBanner.active && siteBanner.body && (siteBanner.audience === "team" || siteBanner.audience === "both"));
        root.className = "site-banner" + (visible ? " visible " + (siteBanner.audience || "team") : "");
        if (!visible) {
          return;
        }
        title.textContent = siteBanner.title || "Information équipe";
        body.textContent = siteBanner.body || "";
        audience.textContent = siteBanner.audience === "both" ? "Équipe + clients" : "Équipe";
        audience.className = "badge " + (siteBanner.audience === "both" ? "ba" : "bm");
      }

      function renderSiteBannerConfig() {
        const titleNode = document.getElementById("site-banner-title");
        const audienceNode = document.getElementById("site-banner-audience");
        const bodyNode = document.getElementById("site-banner-body-input");
        if (!titleNode || !audienceNode || !bodyNode) {
          return;
        }
        titleNode.value = siteBanner.title || "";
        audienceNode.value = siteBanner.audience || "team";
        bodyNode.value = siteBanner.body || "";
      }

      function saveSiteBanner() {
        const titleNode = document.getElementById("site-banner-title");
        const audienceNode = document.getElementById("site-banner-audience");
        const bodyNode = document.getElementById("site-banner-body-input");
        if (!titleNode || !audienceNode || !bodyNode) {
          return;
        }
        const body = bodyNode.value.trim();
        if (!body) {
          window.alert("Renseigne au moins un message de bannière.");
          return;
        }
        siteBanner = {
          title: titleNode.value.trim(),
          audience: audienceNode.value,
          body: body,
          active: true,
        };
        persistSiteBanner();
        renderSiteBannerPreview();
        renderSiteBannerConfig();
      }

      function clearSiteBanner() {
        siteBanner = { title: "", body: "", audience: "team", active: false };
        persistSiteBanner();
        renderSiteBannerPreview();
        renderSiteBannerConfig();
      }

      function renderSiteOperationsConfig() {
        const host = document.getElementById("site-ops-grid");
        const summary = document.getElementById("site-ops-summary");
        if (!host || !summary) {
          return;
        }
        const openDays = (siteOperations.days || []).filter((item) => item.open);
        summary.textContent = openDays.length
          ? "Ouvert " + openDays.map((item) => SITE_DAY_LABELS[item.day - 1] + " " + item.start + "–" + item.end).join(" · ")
          : "Aucun jour d’ouverture défini.";
        host.innerHTML = (siteOperations.days || [])
          .map((item) =>
            '<div class="ops-day-card' +
            (item.open ? "" : " is-closed") +
            '"><div class="row-between"><strong>' +
            esc(SITE_DAY_LABELS[item.day - 1]) +
            '</strong><label class="toggle-switch"><span class="mini">' +
            (item.open ? "Ouvert" : "Fermé") +
            '</span><input type="checkbox" ' +
            (item.open ? "checked " : "") +
            'onchange="toggleSiteOperationDay(' +
            item.day +
            ', this.checked)" /></label></div><div class="ops-time-grid"><div class="field"><label for="site-open-' +
            item.day +
            '">Ouverture</label><input id="site-open-' +
            item.day +
            '" type="time" value="' +
            esc(item.start) +
            '" ' +
            (item.open ? "" : "disabled") +
            ' /></div><div class="field"><label for="site-close-' +
            item.day +
            '">Fermeture</label><input id="site-close-' +
            item.day +
            '" type="time" value="' +
            esc(item.end) +
            '" ' +
            (item.open ? "" : "disabled") +
            ' /></div></div></div>'
          )
          .join("");
      }

      function toggleSiteOperationDay(day, checked) {
        siteOperations.days = (siteOperations.days || []).map((item) => (item.day === day ? Object.assign({}, item, { open: checked }) : item));
        renderSiteOperationsConfig();
      }

      function saveSiteOperations() {
        const before = cloneData(siteOperations);
        siteOperations.days = (siteOperations.days || []).map((item) => {
          const startNode = document.getElementById("site-open-" + item.day);
          const endNode = document.getElementById("site-close-" + item.day);
          return Object.assign({}, item, {
            start: startNode && startNode.value ? startNode.value : item.start,
            end: endNode && endNode.value ? endNode.value : item.end,
          });
        });
        persistSiteOperations();
        logHistorique("Horaires du site modifiés", before, cloneData(siteOperations));
        renderSiteOperationsConfig();
        renderCutoffGrid();
      }

      function getReceptionTransporteurs() {
        const values = new Set(DEFAULT_TRANSPORTEURS_SEED);
        getActiveReceptionEntries().forEach((entry) => {
          if (entry.transporteur) {
            values.add(entry.transporteur);
          }
        });
        return Array.from(values).sort((left, right) => left.localeCompare(right, "fr"));
      }

      function updateReceptionTransporteurs() {
        if (receptionComboOpenKey === "transporteur") {
          renderReceptionComboMenu("transporteur");
        }
        if (receptionComboOpenKey === "plannedTransporteur") {
          renderReceptionComboMenu("plannedTransporteur");
        }
      }

      function adjustReceptionPalette(fieldId, delta) {
        const field = document.getElementById(fieldId);
        if (!field) {
          return;
        }
        const current = Number(field.value || 0);
        field.value = String(Math.max(0, current + delta));
      }

      function handleReceptionPaletteManual(fieldId) {
        const field = document.getElementById(fieldId);
        if (!field) {
          return;
        }
        field.value = String(field.value || "").replace(/[^\d]/g, "");
      }

      function normalizeReceptionPaletteValue(fieldId) {
        const field = document.getElementById(fieldId);
        if (!field) {
          return;
        }
        const current = Number(String(field.value || "").replace(/[^\d]/g, "") || 0);
        field.value = String(Math.max(0, current));
      }

      function getDaysUntilFrDate(value) {
        const parsed = parseFrDate(value);
        if (!parsed) {
          return null;
        }
        return Math.ceil((parsed.getTime() - Date.now()) / 86400000);
      }

      function getActiveSavTicketBySource(sourceType, sourceId) {
        return SAV_TICKETS.find((ticket) => ticket.sourceType === sourceType && ticket.sourceId === sourceId && ticket.status !== "Résolu") || null;
      }

      function getStockTraceBadge(row) {
        const map = { partial: "bc", "needs-production": "ba", risk: "br" };
        return map[row.traceLevel] || "bg";
      }

      function getStockAuditBadge(row) {
        const map = { stable: "bm", watch: "ba", risk: "br" };
        return map[row.auditState] || "bg";
      }

      function getMovementBadge(type) {
        const map = { inventaire: "bc", sortie: "ba", ajustement: "bp", réception: "bm" };
        return map[type] || "bg";
      }

      function getWeeklyReadingsFiltered() {
        const clientNode = document.getElementById("stock-client-filter");
        const weekNode = document.getElementById("stock-week-filter");
        const coordinateNode = document.getElementById("stock-coordinate-filter");
        const searchNode = document.getElementById("stock-search");
        const formatNode = document.getElementById("stock-format-filter");
        const client = clientNode ? clientNode.value : "all";
        const term = (searchNode ? searchNode.value : "").trim().toLowerCase();
        const week = weekNode ? weekNode.value : "all";
        const coordinate = coordinateNode ? coordinateNode.value : "all";
        const format = formatNode ? formatNode.value : "all";
        return getAllStockWeeklyReadings().filter((row) => {
          const stockRow = YUMI_STOCK_SNAPSHOT.find((item) => item.id === row.refId);
          const matchesClient = client === "all" || (stockRow && stockRow.clientId === client);
          const matchesWeek = week === "all" || row.week === week;
          const matchesCoordinate = coordinate === "all" || row.coordinate === coordinate;
          const matchesFormat = format === "all" || (stockRow && stockRow.format === format);
          const matchesTerm =
            !term ||
            [row.ref, row.lot, row.coordinate, row.proof]
              .join(" ")
              .toLowerCase()
              .includes(term);
          return matchesClient && matchesWeek && matchesCoordinate && matchesFormat && matchesTerm;
        });
      }

      function getStockRowsFiltered() {
        const clientNode = document.getElementById("stock-client-filter");
        const searchNode = document.getElementById("stock-search");
        const formatNode = document.getElementById("stock-format-filter");
        const traceNode = document.getElementById("stock-trace-filter");
        const client = clientNode ? clientNode.value : "all";
        const term = (searchNode ? searchNode.value : "").trim().toLowerCase();
        const format = formatNode ? formatNode.value : "all";
        const trace = traceNode ? traceNode.value : "all";
        return YUMI_STOCK_SNAPSHOT.filter((row) => {
          const days = getDaysUntilFrDate(row.dlc);
          const matchesTerm =
            !term ||
            [row.ref, row.refKey, row.lotHint, row.zone, row.emplacement, row.note]
              .join(" ")
              .toLowerCase()
              .includes(term);
          const matchesClient = client === "all" || row.clientId === client;
          const matchesFormat = format === "all" || row.format === format;
          const matchesTrace =
            trace === "all" ||
            row.traceLevel === trace ||
            (trace === "risk" && (row.dlc === "DDM à compléter" || (days !== null && days <= 45)));
          return matchesClient && matchesTerm && matchesFormat && matchesTrace;
        });
      }

      function syncStockFilterOptions() {
        const clientNode = document.getElementById("stock-client-filter");
        const formatNode = document.getElementById("stock-format-filter");
        const weekNode = document.getElementById("stock-week-filter");
        const coordinateNode = document.getElementById("stock-coordinate-filter");
        if (!formatNode || !weekNode || !coordinateNode) {
          return;
        }
        const client = clientNode ? clientNode.value : "all";
        const stockRows = YUMI_STOCK_SNAPSHOT.filter((row) => client === "all" || row.clientId === client);
        const readings = getAllStockWeeklyReadings().filter((row) => {
          const linked = YUMI_STOCK_SNAPSHOT.find((item) => item.id === row.refId);
          return client === "all" || (linked && linked.clientId === client);
        });

        const currentFormat = formatNode.value || "all";
        const currentWeek = weekNode.value || "all";
        const currentCoordinate = coordinateNode.value || "all";

        const formats = [...new Set(stockRows.map((row) => row.format))].sort();
        const weeks = [...new Map(readings.map((row) => [row.week, row.weekLabel])).entries()].sort((a, b) => a[0].localeCompare(b[0]));
        const coordinates = [...new Set(readings.map((row) => row.coordinate))].sort();

        formatNode.innerHTML = '<option value="all">Tous</option>' + formats.map((value) => '<option value="' + esc(value) + '">' + esc(value) + "</option>").join("");
        weekNode.innerHTML = '<option value="all">Toutes</option>' + weeks.map(([value, label]) => '<option value="' + esc(value) + '">' + esc(label) + "</option>").join("");
        coordinateNode.innerHTML = '<option value="all">Toutes</option>' + coordinates.map((value) => '<option value="' + esc(value) + '">' + esc(value) + "</option>").join("");

        formatNode.value = formats.includes(currentFormat) ? currentFormat : "all";
        weekNode.value = weeks.some(([value]) => value === currentWeek) ? currentWeek : "all";
        coordinateNode.value = coordinates.includes(currentCoordinate) ? currentCoordinate : "all";
        syncStockFilterCombos();
      }

      function getStockClientMeta() {
        const clientNode = document.getElementById("stock-client-filter");
        const key = clientNode ? clientNode.value : "all";
        return STOCK_CLIENT_META[key] || STOCK_CLIENT_META.all;
      }

      function getStockOpenRow() {
        const filtered = getStockRowsFiltered();
        if (!filtered.length) {
          return null;
        }
        const current = filtered.find((row) => row.id === stockOpenRowId);
        if (current) {
          return current;
        }
        stockOpenRowId = filtered[0].id;
        return filtered[0];
      }

      function openStockRow(rowId) {
        stockOpenRowId = rowId;
        renderStockPage();
      }

      function focusStockRisk() {
        const traceNode = document.getElementById("stock-trace-filter");
        if (traceNode) {
          traceNode.value = "risk";
        }
        renderStockPage();
      }

      function openStockByLot(lotId) {
        if (!lotId) {
          return;
        }
        const row = YUMI_STOCK_SNAPSHOT.find((item) => item.lotHint === lotId || item.lotSamples.includes(lotId));
        navigate("stock");
        if (row) {
          stockOpenRowId = row.id;
          const clientNode = document.getElementById("stock-client-filter");
          if (clientNode) {
            clientNode.value = row.clientId || "all";
          }
          const searchNode = document.getElementById("stock-search");
          if (searchNode) {
            searchNode.value = lotId;
          }
          renderStockPage();
          setTimeout(() => {
            const node = document.getElementById(row.id);
            if (node) {
              node.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }, 80);
        }
      }

      function openStockTicket() {
        const row = getStockOpenRow();
        if (!row) {
          return;
        }
        const existingTicket = row.lotHint ? getActiveSavTicketBySource("lot", row.lotHint) : null;
        if (existingTicket) {
          openSavTicket(existingTicket.id);
          return;
        }
        const ticket = row.lotHint
          ? {
              clientId: row.clientId,
              sourceType: "lot",
              sourceId: row.lotHint,
              title: "Traçabilité lot à confirmer",
              summary: row.ref + " · inventaire " + row.snapshotAt + " · " + row.note,
              priority: row.auditState === "risk" ? "Haute" : "Normale",
              owner: "ADV Cargonautes",
            }
          : {
              clientId: row.clientId,
              sourceType: "client",
              sourceId: row.clientId + "-stock",
              title: "Export production requis",
              summary: row.ref + " · aucun lot d'entrée recoupé à ce stade.",
              priority: "Haute",
              owner: "ADV Cargonautes",
            };
        openQuickTicket(ticket);
      }

      function toggleStockRowSelection(rowId, checked) {
        if (checked) {
          selectedStockRowIds.add(rowId);
        } else {
          selectedStockRowIds.delete(rowId);
        }
        renderStockPage();
      }

      function toggleAllStockRows(checked) {
        const filtered = getStockRowsFiltered();
        if (checked) {
          filtered.forEach((row) => selectedStockRowIds.add(row.id));
        } else {
          filtered.forEach((row) => selectedStockRowIds.delete(row.id));
        }
        renderStockPage();
      }

      function clearSelectedStockRows() {
        selectedStockRowIds.clear();
        renderStockPage();
      }

      function openSelectedStockTicket() {
        const filtered = getStockRowsFiltered().filter((row) => selectedStockRowIds.has(row.id));
        if (!filtered.length) {
          return;
        }
        openQuickTicket({
          clientId: filtered[0].clientId,
          sourceType: "client",
          sourceId: filtered[0].clientId + "-stock-bulk",
          title: "Contrôle stock groupé à qualifier",
          priority: filtered.some((row) => row.auditState === "risk") ? "Haute" : "Normale",
          owner: "ADV Cargonautes",
          summary: filtered.map((row) => row.ref + " · " + (row.lotHint || "sans lot")).slice(0, 6).join(" | "),
        });
      }

      function renderStockBulkBar(filtered) {
        const selected = filtered.filter((row) => selectedStockRowIds.has(row.id));
        const host = document.getElementById("stock-bulkbar");
        if (!host) {
          return;
        }
        host.innerHTML = !selected.length
          ? "<span class='mini'>Sélectionne plusieurs lignes pour lancer une action groupée.</span>"
          : "<strong>" +
            selected.length +
            " ligne(s) sélectionnée(s)</strong><div class='bulk-toolbar'><button class='btn soft sm' onclick='openSelectedStockTicket()'>" +
            iconSvg("ticket") +
            "<span>Ticket groupé</span></button><button class='btn sm' onclick='clearSelectedStockRows()'>" +
            iconSvg("close") +
            "<span>Effacer</span></button></div>";
      }

      function renderStockStats(filtered) {
        const meta = getStockClientMeta();
        const totalQty = filtered.reduce((sum, row) => sum + row.qty, 0);
        const partialCount = filtered.filter((row) => row.traceLevel === "partial").length;
        const missingProduction = filtered.filter((row) => row.traceLevel === "needs-production").length;
        const shortDlc = filtered.filter((row) => {
          const days = getDaysUntilFrDate(row.dlc);
          return row.dlc === "DDM à compléter" || (days !== null && days <= 45);
        }).length;
        document.getElementById("stock-stats").innerHTML =
          '<article class="kpi"><span>' + esc(meta.stockLead) + "</span><strong>" + esc(meta.stockLeadValue) + "</strong><p class=\"mini\">" + esc(meta.stockLeadSub) + "</p></article>" +
          '<article class="kpi"><span>Stock suivi</span><strong>' +
          totalQty +
          '</strong><p class="mini">' +
          filtered.length +
          ' références</p></article>' +
          '<article class="kpi"><span>Preuve de sortie</span><strong>' +
          partialCount +
          '</strong><p class="mini">' +
          missingProduction +
          ' à compléter</p></article>' +
          '<article class="kpi"><span>DLC sous surveillance</span><strong>' +
          shortDlc +
          '</strong><p class="mini">Priorité FIFO</p></article>';
        const snapshotBadge = document.getElementById("stock-snapshot-badge");
        if (snapshotBadge) {
          snapshotBadge.textContent = meta.snapshotLabel + " · " + filtered.length + " lots";
        }
      }

      function renderStockAuditPanel(filtered) {
        const meta = getStockClientMeta();
        const partialCount = filtered.filter((row) => row.traceLevel === "partial").length;
        const missingProduction = filtered.filter((row) => row.traceLevel === "needs-production").length;
        const shortDlc = filtered.filter((row) => {
          const days = getDaysUntilFrDate(row.dlc);
          return row.dlc === "DDM à compléter" || (days !== null && days <= 45);
        }).length;
        document.getElementById("stock-audit-panel").innerHTML =
          "<div class='row-between'><div><p class='eyebrow'>Prêt audit</p><h3>" + esc(meta.title) + "</h3></div><span class='badge ba'>" + esc(meta.auditBadge) + "</span></div>" +
          "<div class='stock-audit-list'>" +
          "<article class='stock-audit-item'><strong>Ce que l'on peut prouver aujourd'hui</strong><span class='mini'>" +
          filtered.length +
          " lots visibles dans la base active, " +
          partialCount +
          " avec sorties recoupées dans les données disponibles.</span></article>" +
          "<article class='stock-audit-item'><strong>Ce qui manque encore</strong><span class='mini'>" +
          missingProduction +
          " lots demandent encore des preuves complémentaires pour fermer la boucle entrée → stock → sortie.</span></article>" +
          "<article class='stock-audit-item'><strong>Point d'attention immédiat</strong><span class='mini'>" +
          shortDlc +
          " références sont à DLC courte ou DDM non qualifiée et doivent rester visibles dans le suivi.</span></article>" +
          "</div>";
      }

      function renderStockMovementPanel(filtered) {
        const meta = getStockClientMeta();
        const refNames = new Set(filtered.map((row) => row.ref));
        const moves = STOCK_MOVEMENTS.filter((item) => refNames.has(item.ref)).slice(0, 8);
        document.getElementById("stock-movement-panel").innerHTML =
          "<div class='row-between'><div><p class='eyebrow'>Journal</p><h3>Mouvements probants</h3></div><span class='badge bg'>" + esc(meta.movementBadge) + "</span></div>" +
          "<div class='stock-movement-list'>" +
          moves
            .map(
              (item) =>
                "<article class='stock-movement-item'><div class='row-between'><strong>" +
                esc(item.ref) +
                "</strong><span class='badge " +
                getMovementBadge(item.type) +
                "'>" +
                esc(item.type) +
                "</span></div><span class='mini'>" +
                esc(item.at + " · " + item.detail) +
                "</span><span class='mini'>Qté " +
                esc(String(item.qty)) +
                " · Lot " +
                esc(item.lot) +
                " · DLC " +
                esc(item.dlc) +
                "</span></article>"
            )
            .join("") +
          "</div>";
      }

      function renderStockWeeklyReadings(filteredReadings) {
        const totalQty = filteredReadings.reduce((sum, row) => sum + row.qty, 0);
        document.getElementById("stock-weekly-summary").innerHTML =
          '<span class="badge bc">' +
          filteredReadings.length +
          ' lectures</span><span class="badge bg">' +
          totalQty +
          ' unités</span>';
        document.getElementById("stock-weekly-wrap").innerHTML =
          '<table class="data-table stock-table" id="stock-weekly-table"><thead><tr><th>Semaine</th><th>Référence</th><th>Lot</th><th onclick="sortTable(\'stock-weekly-table\',3,\'number\')">Qté lue</th><th>Coordonnée</th><th>Observé le</th></tr></thead><tbody>' +
          (filteredReadings.length
            ? filteredReadings
                .map((row) => {
                  const linked = YUMI_STOCK_SNAPSHOT.find((item) => item.id === row.refId);
                  return (
                    '<tr onclick="openStockRow(\'' +
                    esc(row.refId) +
                    "')\"><td>" +
                    esc(row.weekLabel) +
                    "</td><td><strong>" +
                    esc(row.ref) +
                    "</strong></td><td class='mono'>" +
                    esc(row.lot) +
                    "</td><td>" +
                    row.qty +
                    "</td><td>" +
                    esc(row.coordinate) +
                    "</td><td>" +
                    esc(row.observedAt) +
                    (linked && linked.auditState === "risk" ? "<div class='mini'>DLC à surveiller</div>" : "") +
                    "</td></tr>"
                  );
                })
                .join("")
            : "<tr><td colspan='6'><div class='empty-state'>Aucune lecture hebdo importée pour ce filtre.</div></td></tr>") +
          "</tbody></table>";
      }

      function renderStockTable(filtered) {
        document.getElementById("stock-table-wrap").innerHTML =
          '<table class="data-table stock-table" id="stock-table"><thead><tr><th class="select-col"><input class="table-check" type="checkbox" onchange="toggleAllStockRows(this.checked)" ' +
          (filtered.length && filtered.every((row) => selectedStockRowIds.has(row.id)) ? "checked" : "") +
          " /></th><th onclick=\"sortTable('stock-table',1,'text')\">Référence</th><th onclick=\"sortTable('stock-table',2,'number')\">Qté</th><th>Lot</th><th>DLC / DDM</th><th onclick=\"sortTable('stock-table',5,'text')\">Emplacement</th><th>Preuve</th><th>Actions</th></tr></thead><tbody>" +
          (filtered.length
            ? filtered
                .map((row) => {
                  const linkedTicket = row.lotHint
                    ? getActiveSavTicketBySource("lot", row.lotHint)
                    : getActiveSavTicketBySource("client", row.clientId + "-stock");
                  return (
                    '<tr id="' +
                    esc(row.id) +
                    '" class="' +
                    (row.id === stockOpenRowId ? "active" : "") +
                    '" onclick="openStockRow(\'' +
                    esc(row.id) +
                    "')\"><td class='select-col'><input class='table-check' type='checkbox' " +
                    (selectedStockRowIds.has(row.id) ? "checked " : "") +
                    'onclick="event.stopPropagation()" onchange="toggleStockRowSelection(\'' +
                    esc(row.id) +
                    "', this.checked)\" /></td><td><div class='stock-ref-cell'><strong>" +
                    esc(row.ref) +
                    "</strong><span class='mini'>" +
                    esc(row.format) +
                    "</span></div></td><td>" +
                    row.qty +
                    "</td><td class='mono'>" +
                    esc(row.lotHint || "À confirmer") +
                    "</td><td>" +
                    esc(row.dlc) +
                    "</td><td>" +
                    esc(row.zone + " · " + row.emplacement) +
                    "</td><td><span class='badge " +
                    getStockTraceBadge(row) +
                    "'>" +
                    esc(row.trace) +
                    "</td><td><div class='stock-row-actions'><button class='icon-btn' type='button' onclick=\"event.stopPropagation();stockOpenRowId='" +
                    esc(row.id) +
                    "';openStockTicket();\" aria-label='" +
                    esc(linkedTicket ? "Ouvrir le ticket lié" : "Créer un ticket de traçabilité") +
                    "' title='" +
                    esc(linkedTicket ? "Ouvrir le ticket lié" : "Créer un ticket de traçabilité") +
                    "'>" +
                    (linkedTicket ? iconSvg("ticket") : iconSvg("anomaly")) +
                    "</button></div></td></tr>"
                  );
                })
                .join("")
            : "<tr><td colspan='8'><div class='empty-state'>Aucune référence ne correspond au filtre.</div></td></tr>") +
          "</tbody></table>";
      }

      function renderStockDetailPanel(row) {
        const days = row ? getDaysUntilFrDate(row.dlc) : null;
        const ticket = row && row.lotHint ? getActiveSavTicketBySource("lot", row.lotHint) : null;
        const weeklyHistory = row ? getAllStockWeeklyReadings().filter((item) => item.refId === row.id) : [];
        document.getElementById("stock-detail-panel").innerHTML = !row
          ? "<div class='empty-state'>Sélectionne une référence pour lire son niveau de preuve.</div>"
          : "<div class='row-between'><div><p class='eyebrow'>Référence active</p><h3>" +
            esc(row.ref) +
            "</h3><p class='mini'>" +
            esc(getClientNameById(row.clientId)) +
            " · " +
            esc(row.zone + " · " + row.emplacement) +
            "</p></div><div class='button-row'><button class='btn soft sm' onclick='openStockTicket()'>" +
            (ticket ? "Ouvrir ticket lié" : "Créer ticket") +
            "</button></div></div>" +
            "<div class='stock-detail-grid'><div class='stock-detail-block'><div class='stock-keyvals'><div><span>Quantité</span><strong>" +
            row.qty +
            " unités</strong></div><div><span>DLC</span><strong>" +
            esc(row.dlc) +
            "</strong></div><div><span>Jours restants</span><strong>" +
            (days === null ? "—" : days + " j") +
            "</strong></div><div><span>Emplacement</span><strong>" +
            esc(row.zone + " · " + row.emplacement) +
            "</strong></div><div><span>Lot</span><strong class='mono'>" +
            esc(row.lotHint || "À confirmer") +
            "</strong></div></div></div><div class='stock-detail-block'><strong>Statut</strong><div class='stock-proof-chips'><span class='badge " +
            getStockAuditBadge(row) +
            "'>" +
            (row.auditState === "risk" ? "DLC courte" : row.auditState === "watch" ? "Production attendue" : "Couverture stable") +
            "</span><span class='badge bc'>" +
            esc(row.certif) +
            "</span></div></div><div class='stock-detail-block'><strong>Lectures hebdo</strong>" +
            (weeklyHistory.length
              ? "<div class='stock-evidence-list'>" +
                weeklyHistory
                  .map(
                    (item) =>
                      "<article class='stock-evidence-item'><strong>" +
                      esc(item.weekLabel + " · " + item.coordinate) +
                      "</strong><span class='mini'>Lot " +
                      esc(item.lot) +
                      " · " +
                      (item.cartons ? esc(String(item.cartons)) + " cartons · " : "") +
                      item.qty +
                      " unités · " +
                      esc(item.proof) +
                      " · " +
                      esc(item.observedAt) +
                      "</span></article>"
                  )
                  .join("") +
                "</div>"
              : "<div class='empty-state'>Aucune lecture hebdo enregistrée pour cette référence.</div>") +
            "</div></div>";
      }

      function renderStockEvidencePanel(row) {
        document.getElementById("stock-evidence-panel").innerHTML = !row
          ? "<div class='empty-state'>Aucune preuve à afficher.</div>"
          : "<div class='row-between'><div><p class='eyebrow'>Contexte traçabilité</p><h3>Ce qu'on peut montrer</h3><p class='mini'>Base visible aujourd'hui pour le lot, la DLC et la continuité stock → sortie.</p></div><span class='badge " +
            getStockTraceBadge(row) +
            "'>" +
            esc(row.trace) +
            "</span></div><div class='stock-evidence-list'><article class='stock-evidence-item'><strong>Base visible</strong><span class='mini'>Lecture du " +
            esc(row.snapshotAt) +
            " · quantité visible " +
            row.qty +
            " · " +
            esc(row.dlc) +
            "</span></article><article class='stock-evidence-item'><strong>Sorties recoupées</strong><span class='mini'>" +
            (row.lotSamples.length ? esc(row.lotSamples.join(" · ")) : "Aucun lot recoupé dans le CSV expéditions.") +
            "</span></article><article class='stock-evidence-item'><strong>Action suivante</strong><span class='mini'>" +
            esc(
              row.traceLevel === "needs-production"
                ? "Demander l'export production pour rattacher les lots d'entrée."
                : "Ajouter l'export production pour fermer la boucle entrée → stock → sortie."
            ) +
            "</span></article></div>";
      }

      function getLedgerSignedQuantity(movement) {
        return ["IN", "MOVE_IN", "ADJUST_IN"].includes(movement.movementType) ? movement.quantity : -movement.quantity;
      }

      function getLedgerProductsForClient(clientId) {
        return ledgerProducts.filter((item) => clientId === "all" || item.ownerClientId === clientId);
      }

      function getLedgerMovementsFiltered() {
        const client = getLedgerClientFilterValue();
        const term = getLedgerSearchValue();
        return ledgerMovements
          .filter((movement) => {
            const product = getLedgerProductById(movement.productId);
            const location = getLedgerLocationById(movement.locationId);
            const matchesClient = client === "all" || movement.ownerClientId === client;
            const haystack = [
              getClientNameById(movement.ownerClientId),
              product ? product.productMasterName : movement.productLabelSnapshot,
              movement.productLabelSnapshot,
              movement.sourceDocumentReference,
              movement.lot || "",
              location ? location.locationCode : "",
              MOVEMENT_TYPE_LABELS[movement.movementType] || movement.movementType,
              getLedgerReasonLabel(movement),
            ]
              .join(" ")
              .toLowerCase();
            return matchesClient && (!term || haystack.includes(term));
          })
          .sort((left, right) => right.eventTimestamp.localeCompare(left.eventTimestamp));
      }

      function computeLedgerCurrentStock(useUiFilters) {
        const grouped = new Map();
        ledgerMovements.forEach((movement) => {
          const key = [
            movement.ownerClientId,
            movement.productId,
            movement.bioStatus,
            movement.locationId || "none",
            movement.lot || "none",
            movement.lotStatus,
            movement.dlc || "none",
          ].join("|");
          if (!grouped.has(key)) {
            const product = getLedgerProductById(movement.productId);
            const location = getLedgerLocationById(movement.locationId);
            grouped.set(key, {
              ownerClientId: movement.ownerClientId,
              productId: movement.productId,
              productName: product ? product.productMasterName : movement.productLabelSnapshot,
              bioStatus: movement.bioStatus,
              locationId: movement.locationId,
              locationLabel: location ? location.locationCode : "Sans emplacement",
              lot: movement.lot,
              lotStatus: movement.lotStatus,
              dlc: movement.dlc,
              theoreticalStock: 0,
              confidenceSummary: movement.confidenceLevel,
              traceabilitySummary: movement.traceabilityStatus,
            });
          }
          const row = grouped.get(key);
          row.theoreticalStock += getLedgerSignedQuantity(movement);
          if (movement.traceabilityStatus === "UNKNOWN") {
            row.traceabilitySummary = "UNKNOWN";
          } else if (movement.traceabilityStatus === "INFERRED" && row.traceabilitySummary !== "UNKNOWN") {
            row.traceabilitySummary = "INFERRED";
          }
          if (movement.confidenceLevel === "ADJUSTED") {
            row.confidenceSummary = "ADJUSTED";
          } else if (movement.confidenceLevel === "INFERRED" && row.confidenceSummary !== "ADJUSTED") {
            row.confidenceSummary = "INFERRED";
          }
        });
        const client = useUiFilters === false ? "all" : getLedgerClientFilterValue();
        const term = useUiFilters === false ? "" : getLedgerSearchValue();
        return Array.from(grouped.values())
          .filter((row) => row.theoreticalStock !== 0)
          .filter((row) => {
            const matchesClient = client === "all" || row.ownerClientId === client;
            const haystack = [
              getClientNameById(row.ownerClientId),
              row.productName,
              row.lot || "",
              row.locationLabel,
              row.bioStatus,
            ]
              .join(" ")
              .toLowerCase();
            return matchesClient && (!term || haystack.includes(term));
          })
          .sort((left, right) => left.productName.localeCompare(right.productName, "fr"));
      }

      function computeLedgerExceptions(currentStockRows) {
        const rows = [];
        currentStockRows
          .filter((row) => row.theoreticalStock < 0)
          .forEach((row) => {
            rows.push({
              type: "Stock négatif",
              ownerClientId: row.ownerClientId,
              productName: row.productName,
              lot: row.lot || "Lot non confirmé",
              location: row.locationLabel,
              sourceRef: "Projection ledger",
              detail: "Le stock calculé est inférieur à zéro (" + row.theoreticalStock + ").",
            });
          });

        getLedgerMovementsFiltered().forEach((movement) => {
          const location = getLedgerLocationById(movement.locationId);
          const product = getLedgerProductById(movement.productId);
          if (movement.movementType === "OUT" && movement.lotStatus === "NOT_CONFIRMED") {
            rows.push({
              type: "Sortie sans lot confirmé",
              ownerClientId: movement.ownerClientId,
              productName: product ? product.productMasterName : movement.productLabelSnapshot,
              lot: "Lot non confirmé",
              location: location ? location.locationCode : "—",
              sourceRef: movement.sourceDocumentReference,
              detail: "La sortie reste " + (movement.traceabilityStatus === "INFERRED" ? "inférée" : "inconnue") + ".",
            });
          }
          if (["ADJUST_IN", "ADJUST_OUT"].includes(movement.movementType)) {
            rows.push({
              type: "Ajustement manuel",
              ownerClientId: movement.ownerClientId,
              productName: product ? product.productMasterName : movement.productLabelSnapshot,
              lot: movement.lot || "Lot non confirmé",
              location: location ? location.locationCode : "—",
              sourceRef: movement.sourceDocumentReference,
              detail: ADJUST_REASON_LABELS[movement.adjustReasonCode] || "Ajustement manuel",
            });
          }
          if (movement.bioStatus === "BIO" && location && location.bioZone !== true) {
            rows.push({
              type: "BIO en zone non BIO",
              ownerClientId: movement.ownerClientId,
              productName: product ? product.productMasterName : movement.productLabelSnapshot,
              lot: movement.lot || "Lot non confirmé",
              location: location.locationCode,
              sourceRef: movement.sourceDocumentReference,
              detail: "Mouvement BIO enregistré dans une zone non compatible.",
            });
          }
          if (movement.bioStatus === "BIO" && !movement.dlc && movement.movementType === "IN") {
            rows.push({
              type: "DLC / DDM manquante",
              ownerClientId: movement.ownerClientId,
              productName: product ? product.productMasterName : movement.productLabelSnapshot,
              lot: movement.lot || "Lot non confirmé",
              location: location ? location.locationCode : "—",
              sourceRef: movement.sourceDocumentReference,
              detail: "Entrée BIO sans DLC / DDM renseignée.",
            });
          }
        });

        return rows;
      }

      function getLedgerTraceabilityStatusLabel(status) {
        const map = { CONFIRMED: "Confirmée", INFERRED: "Inférée", UNKNOWN: "Inconnue" };
        return map[status] || status;
      }

      function getLedgerConfidenceLabel(level) {
        const map = { CONFIRMED: "Confirmé", INFERRED: "Inféré", ADJUSTED: "Ajusté" };
        return map[level] || level;
      }

      function getLedgerStatusBadge(status) {
        const map = {
          CONFIRMED: "bm",
          INFERRED: "ba",
          UNKNOWN: "br",
          ADJUSTED: "bp",
          BIO: "bm",
          "NON-BIO": "bg",
          CONFIRMED_LOT: "bm",
          NOT_CONFIRMED: "ba",
        };
        return map[status] || "bg";
      }

      function renderLedgerCurrentStockTable(rows) {
        const host = document.getElementById("ledger-current-stock-wrap");
        const summary = document.getElementById("ledger-stock-summary");
        const showClient = getLedgerClientFilterValue() === "all";
        if (summary) {
          summary.textContent = rows.length + " ligne(s)";
        }
        if (!host) {
          return;
        }
        host.innerHTML =
          '<table class="data-table" id="ledger-current-stock-table"><thead><tr><th>Produit</th><th>Lot</th><th>DLC / DDM</th><th>Emplacement</th><th>Qté</th><th>Statut</th></tr></thead><tbody>' +
          (rows.length
            ? rows
                .map(
                  (row) =>
                    "<tr><td><strong>" +
                    esc(row.productName) +
                    "</strong>" +
                    (showClient ? "<div class='mini'>" + esc(getClientNameById(row.ownerClientId)) + "</div>" : "") +
                    "<div class='stock-proof-chips'><span class='badge " +
                    getLedgerStatusBadge(row.bioStatus) +
                    "'>" +
                    esc(row.bioStatus) +
                    "</span><span class='badge " +
                    getLedgerStatusBadge(row.lotStatus === "CONFIRMED" ? "CONFIRMED_LOT" : row.lotStatus) +
                    "'>" +
                    esc(row.lotStatus === "CONFIRMED" ? "Lot confirmé" : "Lot non confirmé") +
                    "</span></div></td><td class='mono'>" +
                    esc(row.lot || "—") +
                    "</td><td>" +
                    esc(row.dlc || "—") +
                    "</td><td>" +
                    esc(row.locationLabel) +
                    "</td><td>" +
                    esc(String(row.theoreticalStock)) +
                    "</td><td><span class='badge " +
                    getLedgerStatusBadge(row.confidenceSummary) +
                    "'>" +
                    esc(getLedgerConfidenceLabel(row.confidenceSummary)) +
                    "</span></td></tr>"
                )
                .join("")
            : "<tr><td colspan='6'><div class='empty-state'>Aucune ligne de stock calculé pour ce filtre.</div></td></tr>") +
          "</tbody></table>";
      }

      function renderLedgerMovementTable(rows) {
        const host = document.getElementById("ledger-movement-wrap");
        const summary = document.getElementById("ledger-movement-summary");
        const showClient = getLedgerClientFilterValue() === "all";
        if (summary) {
          summary.textContent = rows.length + " mouvement(s)";
        }
        if (!host) {
          return;
        }
        host.innerHTML =
          '<table class="data-table" id="ledger-movement-table"><thead><tr><th>Date</th><th>Type</th><th>Produit</th><th>Qté</th><th>Emplacement</th><th>Lot</th><th>Statut</th><th>Réf. source</th></tr></thead><tbody>' +
          (rows.length
            ? rows
                .map((movement) => {
                  const product = getLedgerProductById(movement.productId);
                  const location = getLedgerLocationById(movement.locationId);
                  return (
                    "<tr><td>" +
                    esc(new Date(movement.eventTimestamp).toLocaleString("fr-FR")) +
                    "</td><td><span class='badge bg'>" +
                    esc(getLedgerMovementLabel(movement.movementType)) +
                    "</span>" +
                    (getLedgerReasonLabel(movement) !== "—" ? "<div class='mini'>" + esc(getLedgerReasonLabel(movement)) + "</div>" : "") +
                    "</td><td><strong>" +
                    esc(product ? product.productMasterName : movement.productLabelSnapshot) +
                    "</strong>" +
                    (showClient ? "<div class='mini'>" + esc(getClientNameById(movement.ownerClientId)) + "</div>" : "") +
                    "</td><td>" +
                    esc(String(movement.quantity)) +
                    " " +
                    esc(movement.unit) +
                    "</td><td><span class='badge " +
                    getLedgerStatusBadge(movement.bioStatus) +
                    "'>" +
                    esc(movement.bioStatus) +
                    "</span></td><td>" +
                    esc(location ? location.locationCode : "—") +
                    "</td><td class='mono'>" +
                    esc(movement.lot || "—") +
                    (movement.dlc ? "<div class='mini'>" + esc(movement.dlc) + "</div>" : "") +
                    "</td><td><span class='badge " +
                    getLedgerStatusBadge(movement.traceabilityStatus) +
                    "'>" +
                    esc(getLedgerTraceabilityStatusLabel(movement.traceabilityStatus)) +
                    "</span><div class='mini'>" +
                    esc(movement.lotStatus === "CONFIRMED" ? "Lot confirmé" : "Lot non confirmé") +
                    "</div></td><td class='mono'>" +
                    esc(movement.sourceDocumentReference) +
                    "</td></tr>"
                  );
                })
                .join("")
            : "<tr><td colspan='8'><div class='empty-state'>Aucun mouvement enregistré pour ce filtre.</div></td></tr>") +
          "</tbody></table>";
      }

      function renderLedgerExceptionTable(exceptions) {
        const host = document.getElementById("ledger-exception-wrap");
        const summary = document.getElementById("ledger-exception-summary");
        if (summary) {
          summary.textContent = exceptions.length + " exception(s)";
        }
        if (!host) {
          return;
        }
        host.innerHTML =
          '<table class="data-table" id="ledger-exception-table"><thead><tr><th>Type</th><th>Produit</th><th>Lot</th><th>Emplacement</th><th>Détail</th></tr></thead><tbody>' +
          (exceptions.length
            ? exceptions
                .map(
                  (row) =>
                    "<tr><td><span class='badge br'>" +
                    esc(row.type) +
                    "</span></td><td><strong>" +
                    esc(row.productName) +
                    "</strong>" +
                    (getLedgerClientFilterValue() === "all" ? "<div class='mini'>" + esc(getClientNameById(row.ownerClientId)) + "</div>" : "") +
                    "</td><td class='mono'>" +
                    esc(row.lot || "—") +
                    "</td><td>" +
                    esc(row.location || "—") +
                    "</td><td>" +
                    esc(row.detail) +
                    (row.sourceRef ? "<div class='mini mono'>" + esc(row.sourceRef) + "</div>" : "") +
                    "</td></tr>"
                )
                .join("")
            : "<tr><td colspan='5'><div class='empty-state'>Aucune exception visible pour ce filtre.</div></td></tr>") +
          "</tbody></table>";
      }

      function renderOperationalStockWorkspace() {
        const currentStockRows = computeLedgerCurrentStock(true);
        const filteredMovements = getLedgerMovementsFiltered();
        const exceptions = computeLedgerExceptions(currentStockRows);
        renderLedgerCurrentStockTable(currentStockRows);
        renderLedgerMovementTable(filteredMovements);
        renderLedgerExceptionTable(exceptions);
      }

      function computeInventoryReconciliation(sessionId) {
        const session = ledgerInventorySessions.find((item) => item.id === sessionId);
        if (!session) {
          return [];
        }
        const theoreticalRows = computeLedgerCurrentStock(false).filter((row) => row.ownerClientId === session.ownerClientId);
        return ledgerInventoryCounts
          .filter((count) => count.inventorySessionId === sessionId)
          .map((count) => {
            const theoretical = theoreticalRows.find(
              (row) =>
                row.productId === count.productId &&
                row.locationId === count.locationId &&
                (row.lot || null) === (count.lot || null)
            );
            return {
              countId: count.id,
              productName: (getLedgerProductById(count.productId) || {}).productMasterName || count.productId,
              locationLabel: (getLedgerLocationById(count.locationId) || {}).locationCode || count.locationId,
              lot: count.lot,
              lotStatus: count.lotStatus,
              theoreticalQuantity: theoretical ? theoretical.theoreticalStock : 0,
              countedQuantity: count.countedQuantity,
              discrepancy: count.countedQuantity - (theoretical ? theoretical.theoreticalStock : 0),
              bioStatus: count.bioStatus,
              unit: count.unit,
            };
          });
      }

      function getInventoryWeekRange(offset) {
        const now = new Date();
        const day = now.getDay();
        const diff = day === 0 ? -6 : 1 - day;
        const monday = new Date(now);
        monday.setHours(0, 0, 0, 0);
        monday.setDate(now.getDate() + diff + offset * 7);
        const sunday = new Date(monday);
        sunday.setDate(monday.getDate() + 6);
        sunday.setHours(23, 59, 59, 999);
        return { start: monday, end: sunday };
      }

      function formatInventoryWeekLabel(offset) {
        const range = getInventoryWeekRange(offset);
        const startLabel = range.start.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
        const endLabel = range.end.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
        return offset === 0 ? "Cette semaine · " + startLabel + " → " + endLabel : "Semaine · " + startLabel + " → " + endLabel;
      }

      function getInventorySessionsForWeek(offset) {
        const range = getInventoryWeekRange(offset);
        return ledgerInventorySessions
          .filter((session) => {
            const sessionDate = new Date(session.sessionDate + "T12:00:00");
            return sessionDate >= range.start && sessionDate <= range.end;
          })
          .sort((left, right) => left.sessionDate.localeCompare(right.sessionDate));
      }

      function estimateInventorySessionDuration(session) {
        if (typeof session.durationMinutes === "number" && !Number.isNaN(session.durationMinutes)) {
          return session.durationMinutes;
        }
        const countLines = ledgerInventoryCounts.filter((count) => count.inventorySessionId === session.id).length;
        return countLines ? 12 + countLines * 7 : 20;
      }

      function getInventoryProductMinimum(product) {
        return typeof product.minimumInventoryUnits === "number" ? product.minimumInventoryUnits : 0;
      }

      function computeInventoryWatchRows() {
        const stockRows = computeLedgerCurrentStock(false);
        const grouped = new Map();
        ledgerProducts
          .filter((product) => product.actif)
          .forEach((product) => {
            grouped.set([product.ownerClientId, product.id].join("|"), {
              ownerClientId: product.ownerClientId,
              productId: product.id,
              productName: product.productMasterName,
              stock: 0,
              lotConfirmed: false,
              nextCheckWeeks: product.inventoryFrequencyWeeks || 1,
            });
          });
        stockRows.forEach((row) => {
          const key = [row.ownerClientId, row.productId].join("|");
          if (!grouped.has(key)) {
            grouped.set(key, {
              ownerClientId: row.ownerClientId,
              productId: row.productId,
              productName: row.productName,
              stock: 0,
              lotConfirmed: false,
              nextCheckWeeks: 1,
            });
          }
          const entry = grouped.get(key);
          entry.stock += row.theoreticalStock;
          entry.lotConfirmed = entry.lotConfirmed || row.lotStatus === "CONFIRMED";
        });

        return Array.from(grouped.values())
          .map((entry) => {
            const product = getLedgerProductById(entry.productId);
            const minimum = product ? getInventoryProductMinimum(product) : 0;
            const ratio = minimum > 0 ? entry.stock / minimum : 999;
            const level = entry.stock <= minimum ? "critical" : ratio <= 1.35 ? "watch" : "ok";
            return {
              ...entry,
              minimum,
              ratio,
              level,
              nextCheckWeeks: product && product.inventoryFrequencyWeeks ? product.inventoryFrequencyWeeks : 1,
            };
          })
          .filter((entry) => entry.minimum > 0 && entry.level !== "ok")
          .sort((left, right) => {
            if (left.level !== right.level) {
              return left.level === "critical" ? -1 : 1;
            }
            return left.ratio - right.ratio;
          });
      }

      function computeInventoryTimeByClient(offset) {
        const sessions = getInventorySessionsForWeek(offset);
        const grouped = new Map();
        sessions.forEach((session) => {
          const key = session.ownerClientId;
          if (!grouped.has(key)) {
            grouped.set(key, {
              ownerClientId: key,
              sessionCount: 0,
              durationMinutes: 0,
            });
          }
          const row = grouped.get(key);
          row.sessionCount += 1;
          row.durationMinutes += estimateInventorySessionDuration(session);
        });
        return Array.from(grouped.values()).sort((left, right) => right.durationMinutes - left.durationMinutes);
      }

      function renderInventoryWeekPlanning() {
        const sessions = getInventorySessionsForWeek(inventoryWeekOffset);
        const label = document.getElementById("inventory-week-label");
        const summary = document.getElementById("inventory-week-summary");
        const wrap = document.getElementById("inventory-week-plan-wrap");
        if (label) {
          label.textContent = formatInventoryWeekLabel(inventoryWeekOffset);
        }
        if (summary) {
          const openCount = sessions.filter((session) => session.status === "OPEN").length;
          const totalMinutes = sessions.reduce((sum, session) => sum + estimateInventorySessionDuration(session), 0);
          summary.innerHTML =
            "<div class='stat-soft'><span>Sessions</span><strong>" +
            sessions.length +
            "</strong></div><div class='stat-soft'><span>Ouvertes</span><strong>" +
            openCount +
            "</strong></div><div class='stat-soft'><span>Temps prévu</span><strong>" +
            Math.round(totalMinutes / 6) / 10 +
            " h</strong></div><div class='stat-soft'><span>Clients</span><strong>" +
            new Set(sessions.map((session) => session.ownerClientId)).size +
            "</strong></div>";
        }
        if (!wrap) {
          return;
        }
        wrap.innerHTML = sessions.length
          ? "<div class='inventory-planned-list'>" +
            sessions
              .map((session) => {
                const countLines = ledgerInventoryCounts.filter((count) => count.inventorySessionId === session.id).length;
                return (
                  "<div class='inventory-planned-item'><div class='row-between'><div><strong>" +
                  esc(getClientNameById(session.ownerClientId)) +
                  "</strong><div class='mini'>" +
                  esc(session.sessionDate) +
                  " · " +
                  esc(session.scope === "LOCATION" ? "Emplacement" : session.scope === "PARTIAL" ? "Partiel" : "Complet") +
                  "</div></div><span class='badge " +
                  (session.status === "VALIDATED" ? "bm" : session.status === "OPEN" ? "ba" : "bg") +
                  "'>" +
                  esc(session.status === "VALIDATED" ? "Validée" : session.status === "OPEN" ? "Ouverte" : session.status) +
                  "</span></div><div class='inventory-planned-meta'><span class='badge bg'>" +
                  esc(session.scopeReference || "Périmètre global") +
                  "</span><span class='mini'>" +
                  countLines +
                  " ligne(s) · " +
                  estimateInventorySessionDuration(session) +
                  " min</span></div></div>"
                );
              })
              .join("") +
            "</div>"
          : "<div class='empty-state'>Aucune session programmée sur cette semaine.</div>";
      }

      function renderInventoryWatchPanel() {
        const rows = computeInventoryWatchRows();
        const summary = document.getElementById("inventory-watch-summary");
        const wrap = document.getElementById("inventory-watch-wrap");
        if (summary) {
          summary.textContent = rows.length + " alerte(s)";
          summary.className = "badge " + (rows.some((row) => row.level === "critical") ? "br" : rows.length ? "ba" : "bg");
        }
        if (!wrap) {
          return;
        }
        wrap.innerHTML = rows.length
          ? "<div class='inventory-watch-list'>" +
            rows
              .map((row) => {
                const nextReview = row.level === "critical" ? "À vérifier cette semaine" : "À revoir sous " + row.nextCheckWeeks + " sem.";
                return (
                  "<div class='inventory-watch-item is-" +
                  esc(row.level) +
                  "'><div class='row-between'><div><strong>" +
                  esc(row.productName) +
                  "</strong><div class='mini'>" +
                  esc(getClientNameById(row.ownerClientId)) +
                  "</div></div><span class='badge " +
                  (row.level === "critical" ? "br" : "ba") +
                  "'>" +
                  esc(row.level === "critical" ? "Rupture bientôt" : "Sous surveillance") +
                  "</span></div><div class='inventory-watch-meta'><span class='mini'>Stock théorique " +
                  esc(String(row.stock)) +
                  "</span><span class='mini'>Mini client " +
                  esc(String(row.minimum)) +
                  "</span><span class='mini'>" +
                  esc(nextReview) +
                  "</span></div></div>"
                );
              })
              .join("") +
            "</div>"
          : "<div class='empty-state'>Aucune référence sous minimum visible pour l’instant.</div>";
      }

      function renderInventoryTimePanel() {
        const rows = computeInventoryTimeByClient(inventoryWeekOffset);
        const totalMinutes = rows.reduce((sum, row) => sum + row.durationMinutes, 0);
        const summary = document.getElementById("inventory-time-summary");
        const wrap = document.getElementById("inventory-time-wrap");
        if (summary) {
          summary.textContent = (Math.round(totalMinutes / 6) / 10) + " h";
        }
        if (!wrap) {
          return;
        }
        wrap.innerHTML = rows.length
          ? "<div class='inventory-time-list'>" +
            rows
              .map(
                (row) =>
                  "<div class='inventory-time-item'><div><strong>" +
                  esc(getClientNameById(row.ownerClientId)) +
                  "</strong><div class='mini'>" +
                  row.sessionCount +
                  " session(s) sur la semaine</div></div><div class='inventory-time-value'><strong>" +
                  esc(String(Math.round(row.durationMinutes / 6) / 10)) +
                  " h</strong><span>" +
                  row.durationMinutes +
                  " min</span></div></div>"
              )
              .join("") +
            "</div>"
          : "<div class='empty-state'>Aucun temps inventaire saisi sur cette semaine.</div>";
      }

      function shiftInventoryWeek(delta) {
        inventoryWeekOffset += delta;
        renderInventoryPage();
      }

      function resetInventoryWeek() {
        inventoryWeekOffset = 0;
        renderInventoryPage();
      }

      function renderInventoryPage() {
        const sessionWrap = document.getElementById("inventory-session-wrap");
        if (!sessionWrap) {
          return;
        }
        renderInventoryWeekPlanning();
        renderInventoryWatchPanel();
        renderInventoryTimePanel();
        const sessions = getInventorySessionsForWeek(inventoryWeekOffset)
          .sort((left, right) => right.sessionDate.localeCompare(left.sessionDate));
        if (!activeInventorySessionId && sessions.length) {
          activeInventorySessionId = sessions[0].id;
        }
        const activeSession = sessions.find((item) => item.id === activeInventorySessionId) || sessions[0] || null;
        const summary = document.getElementById("inventory-session-summary");
        if (summary) {
          summary.textContent = sessions.length + " session(s)";
        }
        sessionWrap.innerHTML =
          '<table class="data-table" id="inventory-session-table"><thead><tr><th>Session</th><th>Date</th><th>Client</th><th>Type</th><th>Zone</th><th>Périmètre</th><th>Statut</th><th>Créée par</th></tr></thead><tbody>' +
          (sessions.length
            ? sessions
                .map(
                  (session) =>
                    "<tr" +
                    (activeSession && activeSession.id === session.id ? " class='active'" : "") +
                    ' onclick="openInventorySession(\'' +
                    esc(session.id) +
                    "')\"><td class='mono'>" +
                    esc(session.id) +
                    "</td><td>" +
                    esc(session.sessionDate) +
                    "</td><td>" +
                    esc(getClientNameById(session.ownerClientId)) +
                    "</td><td>" +
                    esc(session.inventoryType === "on_demand" ? "À la demande" : "Programmé") +
                    "</td><td>" +
                    esc(session.temperatureZone === "cold" ? "Froid" : "Sec") +
                    "</td><td>" +
                    esc(session.scope) +
                    "<div class='mini'>" +
                    esc(session.scopeReference || "—") +
                    "</div></td><td><span class='badge " +
                    (session.status === "VALIDATED" ? "bm" : session.status === "OPEN" ? "ba" : "bg") +
                    "'>" +
                    esc(session.status) +
                    "</span></td><td>" +
                    esc(session.createdBy) +
                    "<div class='mini'>" +
                    estimateInventorySessionDuration(session) +
                    " min · " +
                    (session.nonBillable ? "non facturable" : "facturable") +
                    "</div>" +
                    "</td></tr>"
                )
                .join("")
            : "<tr><td colspan='8'><div class='empty-state'>Aucune session inventaire créée.</div></td></tr>") +
          "</tbody></table>";

        const titleNode = document.getElementById("inventory-active-title");
        const summaryNode = document.getElementById("inventory-reconciliation-summary");
        const countWrap = document.getElementById("inventory-count-wrap");
        if (!titleNode || !summaryNode || !countWrap) {
          return;
        }
        if (!activeSession) {
          titleNode.textContent = "Aucune session sur cette semaine";
          summaryNode.innerHTML = "";
          countWrap.innerHTML = "<div class='empty-state'>Aucune session inventaire planifiée sur la semaine sélectionnée.</div>";
          return;
        }
        activeInventorySessionId = activeSession.id;
        const lines = computeInventoryReconciliation(activeSession.id);
        const totalDiscrepancy = lines.reduce((sum, row) => sum + Math.abs(row.discrepancy), 0);
        const nonZero = lines.filter((row) => row.discrepancy !== 0).length;
        titleNode.textContent = activeSession.id + " · " + getClientNameById(activeSession.ownerClientId);
        summaryNode.innerHTML =
          '<div class="stat-soft"><span>Lignes comptées</span><strong>' +
          lines.length +
          "</strong></div><div class='stat-soft'><span>Écarts</span><strong>" +
          nonZero +
          "</strong></div><div class='stat-soft'><span>Volume écart</span><strong>" +
          totalDiscrepancy +
          "</strong></div><div class='stat-soft'><span>Statut</span><strong>" +
          esc(activeSession.status) +
          "</strong></div><div class='stat-soft'><span>Temps passé</span><strong>" +
          estimateInventorySessionDuration(activeSession) +
          " min</strong></div><div class='stat-soft'><span>Facturation</span><strong>" +
          (activeSession.nonBillable ? "Non facturable" : activeSession.inventoryType === "on_demand" ? "À la demande" : "Programmée") +
          " · " +
          (activeSession.temperatureZone === "cold" ? "Froid" : "Sec") +
          "</strong></div>";
        countWrap.innerHTML =
          '<table class="data-table" id="inventory-count-table"><thead><tr><th>Produit</th><th>Emplacement</th><th>Lot</th><th>Statut lot</th><th>Qté théorique</th><th>Qté comptée</th><th>Écart</th><th>Action proposée</th></tr></thead><tbody>' +
          (lines.length
            ? lines
                .map((line) => {
                  const actionLabel = line.discrepancy > 0 ? "Ajustement +" : line.discrepancy < 0 ? "Ajustement -" : "Aucune";
                  return (
                    "<tr><td><strong>" +
                    esc(line.productName) +
                    "</strong></td><td>" +
                    esc(line.locationLabel) +
                    "</td><td class='mono'>" +
                    esc(line.lot || "—") +
                    "</td><td>" +
                    esc(line.lotStatus === "CONFIRMED" ? "Lot confirmé" : "Lot non confirmé") +
                    "</td><td>" +
                    esc(String(line.theoreticalQuantity)) +
                    "</td><td>" +
                    esc(String(line.countedQuantity)) +
                    "</td><td>" +
                    esc(String(line.discrepancy)) +
                    "</td><td><span class='badge " +
                    (line.discrepancy > 0 ? "bm" : line.discrepancy < 0 ? "br" : "bg") +
                    "'>" +
                    actionLabel +
                    "</span></td></tr>"
                  );
                })
                .join("")
            : "<tr><td colspan='8'><div class='empty-state'>Aucune ligne de comptage dans cette session.</div></td></tr>") +
          "</tbody></table>";
      }

      function openInventorySession(sessionId) {
        activeInventorySessionId = sessionId;
        renderInventoryPage();
      }

      function validateLedgerMovementInput(base) {
        if (!base.ownerClientId || !base.productId || !base.quantity || base.quantity <= 0 || !base.eventTimestamp) {
          return "Client, produit, quantité et date/heure sont obligatoires.";
        }
        const product = getLedgerProductById(base.productId);
        if (!product || product.ownerClientId !== base.ownerClientId) {
          return "Le produit sélectionné ne correspond pas au client propriétaire.";
        }
        if (base.locationId && !isBioLocationCompatible(base.locationId, base.bioStatus)) {
          return "Un mouvement BIO ne peut pas aller dans une zone non BIO.";
        }
        if (base.movementType === "OUT" && !base.outReasonCode) {
          return "Le motif de sortie est obligatoire.";
        }
        if (["ADJUST_IN", "ADJUST_OUT"].includes(base.movementType)) {
          if (!base.adjustReasonCode) {
            return "Le motif d'ajustement est obligatoire.";
          }
          if (!base.comment) {
            return "Un commentaire est obligatoire pour un ajustement.";
          }
        }
        return null;
      }

      function saveLedgerMovement() {
        if (!overlayState || overlayState.type !== "ledgerMovement") {
          return;
        }
        const kind = overlayState.payload.kind || "IN";
        const ownerClientId = document.getElementById("ledger-owner-client").value;
        const productId = document.getElementById("ledger-product-id").value;
        const product = getLedgerProductById(productId);
        const lotRaw = document.getElementById("ledger-lot").value.trim();
        const lot = lotRaw || null;
        const lotStatus = lot ? "CONFIRMED" : "NOT_CONFIRMED";
        const base = {
          ownerClientId,
          productId,
          productLabelSnapshot: document.getElementById("ledger-product-label").value.trim() || (product ? product.productMasterName : "Produit"),
          quantity: Number(document.getElementById("ledger-quantity").value || 0),
          unit: document.getElementById("ledger-unit").value.trim() || (product ? product.unit : "unité"),
          bioStatus: document.getElementById("ledger-bio-status").value,
          eventTimestamp: new Date(document.getElementById("ledger-event-timestamp").value).toISOString(),
          userId: "usr-local",
          sourceDocumentId: null,
          sourceDocumentReference: document.getElementById("ledger-source-reference").value.trim() || "MANUAL-" + new Date().toLocaleDateString("fr-FR"),
          lot,
          lotStatus,
          dlc: document.getElementById("ledger-dlc").value || null,
          comment: document.getElementById("ledger-comment").value.trim() || null,
          inventorySessionId: null,
          reversalOfMovementId: null,
          createdAt: ledgerNowIso(),
        };

        if (kind === "MOVE") {
          const fromLocationId = document.getElementById("ledger-from-location").value;
          const toLocationId = document.getElementById("ledger-to-location").value;
          if (!fromLocationId || !toLocationId || fromLocationId === toLocationId) {
            window.alert("Le déplacement doit avoir une source et une destination différentes.");
            return;
          }
          const moveGroupId = buildLedgerId("mgrp");
          const moveOut = {
            ...base,
            id: buildLedgerId("mov"),
            movementGroupId: moveGroupId,
            movementType: "MOVE_OUT",
            locationId: fromLocationId,
            outReasonCode: null,
            adjustReasonCode: null,
            confidenceLevel: "CONFIRMED",
            traceabilityStatus: lotStatus === "CONFIRMED" ? "CONFIRMED" : "UNKNOWN",
          };
          const moveIn = {
            ...base,
            id: buildLedgerId("mov"),
            movementGroupId: moveGroupId,
            movementType: "MOVE_IN",
            locationId: toLocationId,
            outReasonCode: null,
            adjustReasonCode: null,
            confidenceLevel: "CONFIRMED",
            traceabilityStatus: lotStatus === "CONFIRMED" ? "CONFIRMED" : "UNKNOWN",
          };
          const errorOut = validateLedgerMovementInput(moveOut);
          const errorIn = validateLedgerMovementInput(moveIn);
          if (errorOut || errorIn) {
            window.alert(errorOut || errorIn);
            return;
          }
          ledgerMovements.push(moveOut, moveIn);
        } else {
          const movementType =
            kind === "ADJUST"
              ? document.getElementById("ledger-adjust-type").value
              : kind === "OUT"
                ? "OUT"
                : "IN";
          const movement = {
            ...base,
            id: buildLedgerId("mov"),
            movementGroupId: null,
            movementType,
            locationId: document.getElementById("ledger-location-id").value,
            outReasonCode: kind === "OUT" ? document.getElementById("ledger-out-reason").value : null,
            adjustReasonCode: kind === "ADJUST" ? document.getElementById("ledger-adjust-reason").value : null,
            confidenceLevel: kind === "ADJUST" ? "ADJUSTED" : lotStatus === "CONFIRMED" ? "CONFIRMED" : kind === "OUT" ? "INFERRED" : "CONFIRMED",
            traceabilityStatus: kind === "OUT" ? (lotStatus === "CONFIRMED" ? "CONFIRMED" : "UNKNOWN") : lotStatus === "CONFIRMED" ? "CONFIRMED" : "UNKNOWN",
          };
          const error = validateLedgerMovementInput(movement);
          if (error) {
            window.alert(error);
            return;
          }
          ledgerMovements.push(movement);
          if (movement.movementType === "OUT") {
            buildTraceabilityLinksForOutbound(movement);
          }
        }
        persistLedgerStores();
        closeOverlay();
        renderStockPage();
      }

      function saveInventorySession() {
        const ownerClientId = document.getElementById("inventory-session-client").value;
        const durationMinutes = Number(document.getElementById("inventory-session-duration").value || 0);
        const nonBillable = document.getElementById("inventory-session-nonbillable").checked;
        const session = {
          id: buildLedgerId("invsess"),
          ownerClientId,
          sessionDate: document.getElementById("inventory-session-date").value,
          inventoryType: document.getElementById("inventory-session-type").value,
          temperatureZone: document.getElementById("inventory-session-zone").value,
          nonBillable: nonBillable,
          reason: document.getElementById("inventory-session-reason").value.trim() || null,
          nonBillableReason: nonBillable ? document.getElementById("inventory-session-nonbillable-reason").value.trim() || "Non facturable" : null,
          scope: document.getElementById("inventory-session-scope").value,
          scopeReference: document.getElementById("inventory-session-scope-ref").value.trim() || null,
          createdBy: document.getElementById("inventory-session-created-by").value.trim() || "usr-local",
          validatedBy: null,
          status: "OPEN",
          durationMinutes: durationMinutes > 0 ? durationMinutes : null,
          comment: document.getElementById("inventory-session-comment").value.trim() || null,
          createdAt: ledgerNowIso(),
        };
        if (!session.ownerClientId || !session.sessionDate) {
          window.alert("Client et date de session sont obligatoires.");
          return;
        }
        ledgerInventorySessions.unshift(session);
        activeInventorySessionId = session.id;
        persistLedgerStores();
        closeOverlay();
        renderInventoryPage();
      }

      function saveInventoryCount() {
        if (!overlayState || overlayState.type !== "inventoryCount") {
          return;
        }
        const session = ledgerInventorySessions.find((item) => item.id === overlayState.payload.sessionId);
        if (!session) {
          window.alert("Session inventaire introuvable.");
          return;
        }
        const lotRaw = document.getElementById("inventory-count-lot").value.trim();
        const count = {
          id: buildLedgerId("invcount"),
          inventorySessionId: session.id,
          ownerClientId: session.ownerClientId,
          productId: document.getElementById("inventory-count-product").value,
          locationId: document.getElementById("inventory-count-location").value,
          lot: lotRaw || null,
          lotStatus: lotRaw ? "CONFIRMED" : "NOT_CONFIRMED",
          dlc: document.getElementById("inventory-count-dlc").value || null,
          countedQuantity: Number(document.getElementById("inventory-count-quantity").value || 0),
          unit: (getLedgerProductById(document.getElementById("inventory-count-product").value) || {}).unit || "unité",
          bioStatus: document.getElementById("inventory-count-bio").value,
          countedBy: "usr-local",
          countedAt: ledgerNowIso(),
          comment: document.getElementById("inventory-count-comment").value.trim() || null,
        };
        if (!count.productId || !count.locationId || count.countedQuantity < 0) {
          window.alert("Produit, emplacement et quantité comptée sont obligatoires.");
          return;
        }
        ledgerInventoryCounts.push(count);
        persistLedgerStores();
        closeOverlay();
        renderInventoryPage();
      }

      function validateInventoryAdjustments() {
        if (!activeInventorySessionId) {
          window.alert("Aucune session active.");
          return;
        }
        const session = ledgerInventorySessions.find((item) => item.id === activeInventorySessionId);
        if (!session) {
          return;
        }
        const reconciliations = computeInventoryReconciliation(activeInventorySessionId).filter((row) => row.discrepancy !== 0);
        if (!reconciliations.length) {
          window.alert("Aucun écart à ajuster sur cette session.");
          return;
        }
        reconciliations.forEach((row) => {
          ledgerMovements.push({
            id: buildLedgerId("mov"),
            movementGroupId: null,
            movementType: row.discrepancy > 0 ? "ADJUST_IN" : "ADJUST_OUT",
            ownerClientId: session.ownerClientId,
            productId: ledgerInventoryCounts.find((item) => item.id === row.countId).productId,
            productLabelSnapshot: row.productName,
            quantity: Math.abs(row.discrepancy),
            unit: row.unit,
            bioStatus: row.bioStatus,
            locationId: ledgerInventoryCounts.find((item) => item.id === row.countId).locationId,
            eventTimestamp: ledgerNowIso(),
            userId: "usr-local",
            sourceDocumentId: null,
            sourceDocumentReference: session.id,
            outReasonCode: null,
            adjustReasonCode: "INVENTORY_RECONCILIATION",
            lot: row.lot || null,
            lotStatus: row.lot ? "CONFIRMED" : "NOT_CONFIRMED",
            dlc: null,
            confidenceLevel: "ADJUSTED",
            traceabilityStatus: row.lot ? "CONFIRMED" : "UNKNOWN",
            inventorySessionId: session.id,
            comment: "Réconciliation inventaire · écart de " + row.discrepancy,
            reversalOfMovementId: null,
            createdAt: ledgerNowIso(),
          });
        });
        session.status = "VALIDATED";
        session.validatedBy = "usr-local";
        persistLedgerStores();
        renderInventoryPage();
        renderStockPage();
      }

      function buildTraceabilityLinksForOutbound(movement) {
        if (movement.movementType !== "OUT") {
          return;
        }
        const candidates = ledgerMovements
          .filter((item) => item.ownerClientId === movement.ownerClientId && item.productId === movement.productId && item.bioStatus === movement.bioStatus && item.movementType === "IN")
          .filter((item) => {
            if (movement.lotStatus === "CONFIRMED") {
              return item.lot === movement.lot;
            }
            return true;
          })
          .sort((left, right) => left.eventTimestamp.localeCompare(right.eventTimestamp));
        if (!candidates.length) {
          movement.traceabilityStatus = "UNKNOWN";
          return;
        }
        let remaining = movement.quantity;
        candidates.forEach((inbound) => {
          if (remaining <= 0) {
            return;
          }
          const alreadyLinked = ledgerTraceabilityLinks
            .filter((link) => link.inboundMovementId === inbound.id)
            .reduce((sum, link) => sum + link.linkedQuantity, 0);
          const available = Math.max(0, inbound.quantity - alreadyLinked);
          if (!available) {
            return;
          }
          const linkedQuantity = Math.min(available, remaining);
          ledgerTraceabilityLinks.push({
            id: buildLedgerId("trl"),
            ownerClientId: movement.ownerClientId,
            outboundMovementId: movement.id,
            inboundMovementId: inbound.id,
            linkedQuantity: linkedQuantity,
            linkStatus: movement.lotStatus === "CONFIRMED" ? "CONFIRMED" : "INFERRED",
            linkMethod: movement.lotStatus === "CONFIRMED" ? "AUTO_CONFIRMED" : "FIFO",
            createdBy: "system",
            createdAt: ledgerNowIso(),
            comment: movement.lotStatus === "CONFIRMED" ? null : "Reconstruction FIFO automatique",
          });
          remaining -= linkedQuantity;
        });
        movement.traceabilityStatus = movement.lotStatus === "CONFIRMED" ? "CONFIRMED" : remaining > 0 ? "UNKNOWN" : "INFERRED";
      }

      function renderStockPage() {
        renderOperationalStockWorkspace();
        const page = document.getElementById("page-stock");
        if (!page) {
          return;
        }
        syncStockFilterOptions();
        const filtered = getStockRowsFiltered();
        const filteredReadings = getWeeklyReadingsFiltered();
        const openRow = getStockOpenRow();
        const statsHost = document.getElementById("stock-stats");
        const auditHost = document.getElementById("stock-audit-panel");
        const movementHost = document.getElementById("stock-movement-panel");
        const evidenceHost = document.getElementById("stock-evidence-panel");
        if (statsHost) {
          statsHost.innerHTML = "";
          statsHost.style.display = "none";
        }
        if (auditHost) {
          auditHost.innerHTML = "";
          auditHost.style.display = "none";
        }
        if (movementHost) {
          movementHost.innerHTML = "";
          movementHost.style.display = "none";
        }
        renderStockWeeklyReadings(filteredReadings);
        renderStockBulkBar(filtered);
        renderStockTable(filtered);
        renderStockDetailPanel(openRow);
        renderStockEvidencePanel(openRow);
        if (evidenceHost) {
          evidenceHost.style.display = "";
        }
        updateStockSearchSuggestions();
      }

      function filterStockView() {
        renderStockPage();
      }

      function renderReceptionPage() {
        const clientNode = document.getElementById("reception-client");
        const clientInputNode = document.getElementById("reception-client-input");
        const agentInputNode = document.getElementById("reception-agent-input");
        const logNode = document.getElementById("reception-log-wrap");
        const logSummaryNode = document.getElementById("reception-log-summary");
        const plannedWrap = document.getElementById("reception-planned-wrap");
        const plannedSummaryNode = document.getElementById("reception-planned-summary");
        const arrivedWrap = document.getElementById("reception-arrived-wrap");
        const arrivedSummaryNode = document.getElementById("reception-arrived-summary");
        const dateField = document.getElementById("reception-date");
        const plannedInline = document.getElementById("reception-planned-inline");
        if (!clientNode || !clientInputNode || !agentInputNode || !logNode || !logSummaryNode || !plannedWrap || !plannedSummaryNode || !arrivedWrap || !arrivedSummaryNode || !dateField || !plannedInline) {
          return;
        }

        if (!clientNode.value && clientInputNode && !clientInputNode.value) {
          clientInputNode.value = "";
        }
        if (clientNode.value && clientInputNode && !clientInputNode.value) {
          clientInputNode.value = getClientNameById(clientNode.value);
        }
        if (!agentInputNode.value) {
          agentInputNode.value = "";
        }
        const logClientFilter = document.getElementById("reception-log-client-filter");
        const logAnomalyFilterNode = document.getElementById("reception-log-anomaly-filter");

        if (!dateField.value) {
          dateField.value = getTodayIsoDate();
        }
        const storageModeNode = document.getElementById("reception-storage-mode");
        if (storageModeNode && !storageModeNode.value) {
          storageModeNode.value = "sec";
        }
        if (logClientFilter && !logClientFilter.value) {
          logClientFilter.value = "all";
        }
        if (logAnomalyFilterNode && !logAnomalyFilterNode.value) {
          logAnomalyFilterNode.value = "all";
        }
        syncReceptionComboSelection("storageMode", storageModeNode ? storageModeNode.value || "sec" : "sec");
        syncReceptionComboSelection("logClient", logClientFilter ? logClientFilter.value || "all" : "all");
        syncReceptionComboSelection("logAnomaly", logAnomalyFilterNode ? logAnomalyFilterNode.value || "all" : "all");
        plannedInline.hidden = !receptionPlannedInlineVisible;
        refreshReceptionDateDisplay();
        toggleReceptionTemperatureField();
        updateReceptionBioControls();
        updateReceptionAnomalyInline();
        updateReceptionTransporteurs();
        ["agent", "client", "storageMode", "transporteur", "arrivalTime", "logClient", "logAnomaly", "plannedClient", "plannedTime", "plannedTransporteur"].forEach((key) => {
          const config = getReceptionComboConfig(key);
          if (config && document.getElementById(config.menuId)) {
            renderReceptionComboMenu(key);
          }
        });

        RECEPTIONS_LOG = RECEPTIONS_LOG.map((entry) => ({
          ...entry,
          status: entry.status || "received",
        }));

        const sortedEntries = getActiveReceptionEntries()
          .slice()
          .sort((left, right) => {
            const leftKey = (left.receptionDate || "") + " " + (left.arrivalTime || "00:00");
            const rightKey = (right.receptionDate || "") + " " + (right.arrivalTime || "00:00");
            return rightKey.localeCompare(leftKey);
          });
        const today = getTodayIsoDate();
        const plannedToday = sortedEntries.filter((entry) => entry.status === "planned" && entry.receptionDate === today);
        const recentArrived = sortedEntries.filter((entry) => entry.status !== "planned").slice(0, 6);

        plannedSummaryNode.textContent = plannedToday.length + " prévue(s)";
        plannedSummaryNode.className = "badge " + (plannedToday.length ? "ba" : "bg");
        plannedWrap.innerHTML = plannedToday.length
          ? "<div class='reception-mini-list'>" +
            plannedToday
              .map((entry) => {
                  const stockDecision = getReceptionStockDecision(entry);
                  return (
                  "<div class='reception-mini-item'><div class='reception-mini-head'><div><strong>" +
                  esc(getClientNameById(entry.clientId)) +
                  "</strong><div class='mini'>" +
                  esc(entry.arrivalTime || "Heure à confirmer") +
                  "</div><div class='mini'>" +
                  renderReceptionStateMarkup(entry) +
                  "</div></div><span class='badge ba'>Prévue</span></div><div class='mini'>" +
                  esc(entry.transporteur || "Transporteur à confirmer") +
                  (entry.vehiclePlate ? " · " + esc(entry.vehiclePlate) : "") +
                  "</div><div class='mini'>" +
                  esc(stockDecision.detail) +
                  "</div></div>"
                  );
                })
              .join("") +
            "</div>"
          : "<div class='empty-state'>Aucune réception prévue aujourd’hui.</div>";

        arrivedSummaryNode.textContent = recentArrived.length + " arrivée(s)";
        arrivedSummaryNode.className = "badge " + (recentArrived.some((entry) => entry.anomaly) ? "ba" : "bg");
        arrivedWrap.innerHTML = recentArrived.length
          ? "<div class='reception-mini-list'>" +
            recentArrived
              .map((entry) => {
                  const stockDecision = getReceptionStockDecision(entry);
                  return (
                  "<div class='reception-mini-item'><div class='reception-mini-head'><div><strong>" +
                  esc(getClientNameById(entry.clientId)) +
                  "</strong><div class='mini'>" +
                  esc(getReceptionDateLabel(entry.receptionDate)) +
                  " · " +
                  esc(entry.arrivalTime || "—") +
                  "</div><div class='mini'>" +
                  renderReceptionStateMarkup(entry) +
                  "</div></div><span class='badge " +
                  stockDecision.badge +
                  "'>" +
                  esc(stockDecision.label) +
                  "</span></div><div class='mini'>" +
                  esc(entry.transporteur || "—") +
                  "</div><div class='mini'>" +
                  esc(stockDecision.detail) +
                  "</div></div>"
                  );
                })
              .join("") +
            "</div>"
          : "<div class='empty-state'>Aucune réception récente enregistrée.</div>";

        const logDateFilter = document.getElementById("reception-log-date-filter");
        const logClientFilterValue = document.getElementById("reception-log-client-filter") ? document.getElementById("reception-log-client-filter").value : "all";
        const logTransporteurFilter = document.getElementById("reception-log-transporteur-filter");
        const logAnomalyFilter = document.getElementById("reception-log-anomaly-filter");
        const filteredEntries = sortedEntries.filter((entry) => {
          const matchesDate = !logDateFilter || !logDateFilter.value || entry.receptionDate === logDateFilter.value;
          const matchesClient = logClientFilterValue === "all" || entry.clientId === logClientFilterValue;
          const matchesTransporteur =
            !logTransporteurFilter ||
            !logTransporteurFilter.value.trim() ||
            (entry.transporteur || "").toLowerCase().includes(logTransporteurFilter.value.trim().toLowerCase());
          const anomalyMode = logAnomalyFilter ? logAnomalyFilter.value : "all";
          const matchesAnomaly =
            anomalyMode === "all" ||
            (anomalyMode === "with" && !!entry.anomaly) ||
            (anomalyMode === "without" && !entry.anomaly);
          return matchesDate && matchesClient && matchesTransporteur && matchesAnomaly;
        });

        logSummaryNode.textContent = filteredEntries.length + " réception(s)";
        logNode.innerHTML =
          '<table class="data-table reception-log-table" id="reception-log-table"><thead><tr><th>Date</th><th>Client</th><th>Réception</th><th>Transport</th><th>Actions</th></tr></thead><tbody>' +
          (filteredEntries.length
            ? filteredEntries
                .map((entry) => {
                  const stockDecision = getReceptionStockDecision(entry);
                  const paletteTotal =
                    Number(entry.palettesSolEurope || 0) +
                    Number(entry.palettesSolPerdues || 0) +
                    Number(entry.palettesRenduesEurope || 0) +
                    Number(entry.palettesRenduesPerdues || 0);
                  const paletteSummary =
                    "Total " +
                    String(paletteTotal) +
                    " · Sol " +
                    String(Number(entry.palettesSolEurope || 0) + Number(entry.palettesSolPerdues || 0)) +
                    " · Rendues " +
                    String(Number(entry.palettesRenduesEurope || 0) + Number(entry.palettesRenduesPerdues || 0));
                  const actionButtons =
                    "<div class='stock-row-actions'><button class='icon-btn' type='button' onclick=\"openReceptionDetail('" +
                    esc(entry.id) +
                    "')\" aria-label='Voir le détail'>" +
                    iconSvg("eye") +
                    "</button><button class='icon-btn' type='button' onclick=\"openReceptionConfig('" +
                    esc(entry.id) +
                    "')\" aria-label='Configurer'>" +
                    iconSvg("edit") +
                    "</button>" +
                    (entry.ticketId
                      ? "<button class='icon-btn' type='button' onclick=\"openSavTicket('" + esc(entry.ticketId) + "')\" aria-label='Ouvrir le ticket lié'>" + iconSvg("ticket") + "</button>"
                      : entry.anomaly
                        ? "<button class='icon-btn' type='button' onclick=\"openReceptionIncident('" + esc(entry.id) + "')\" aria-label='Créer un ticket anomalie'>" + iconSvg("anomaly") + "</button>"
                        : "") +
                    "</div>";
                  return (
                    "<tr><td><strong>" +
                    esc(getReceptionDateLabel(entry.receptionDate)) +
                    "</strong><div class='mini'>" +
                    esc(entry.arrivalTime || "—") +
                    "</div><div class='mini'>" +
                    renderReceptionStateMarkup(entry) +
                    "</div></td><td>" +
                    esc(getClientNameById(entry.clientId)) +
                    "</td><td><div class='reception-summary-line'><span class='badge " +
                    (entry.storageMode === "frais" ? "bc" : "bg") +
                    "'>" +
                    esc(entry.storageMode === "frais" ? "Frais" : "Sec") +
                    "</span><span class='mini'>" +
                    esc(paletteSummary) +
                    "</span>" +
                    (entry.temperature !== null && entry.temperature !== undefined ? "<span class='mini'>" + esc(String(entry.temperature)) + " °C</span>" : "") +
                    "<span class='badge " +
                    stockDecision.badge +
                    "'>" +
                    esc(stockDecision.label) +
                    "</span><span class='mini'>" +
                    esc(stockDecision.detail) +
                    "</span></div></td><td><strong>" +
                    esc(entry.transporteur || "—") +
                    "</strong><div class='mini'>" +
                    esc(entry.vehiclePlate || "—") +
                    "</div></td><td>" +
                    actionButtons +
                    "</td></tr>"
                  );
                })
                .join("")
            : "<tr><td colspan='5'><div class='empty-state'>Aucune réception enregistrée.</div></td></tr>") +
          "</tbody></table>";
      }

      function resetReceptionForm() {
        const clientNode = document.getElementById("reception-client");
        const clientInputNode = document.getElementById("reception-client-input");
        const agentInputNode = document.getElementById("reception-agent-input");
        const fields = {
          "reception-pallets-sol-europe": 0,
          "reception-pallets-sol-perdues": 0,
          "reception-pallets-rendues-europe": 0,
          "reception-pallets-rendues-perdues": 0,
          "reception-temperature": "",
          "reception-transporteur": "",
          "reception-arrival-time": "",
          "reception-vehicle-plate": "",
        };
        Object.keys(fields).forEach((id) => {
          const node = document.getElementById(id);
          if (node) {
            node.value = fields[id];
          }
        });
        const modeNode = document.getElementById("reception-storage-mode");
        if (modeNode) {
          modeNode.value = "sec";
        }
        const toggleNode = document.getElementById("reception-anomaly-toggle");
        if (toggleNode) {
          toggleNode.checked = false;
        }
        receptionAnomalyDraft = null;
        setReceptionDateToToday();
        toggleReceptionTemperatureField();
        if (clientNode) {
          clientNode.value = "";
        }
        if (clientInputNode) {
          clientInputNode.value = "";
        }
        if (agentInputNode) {
          agentInputNode.value = "";
        }
        syncReceptionComboSelection("storageMode", "sec");
        updateReceptionAnomalyInline();
        closeReceptionCombos();
        updateReceptionBioControls();
      }

      function toggleReceptionAnomaly(checked) {
        if (!checked) {
          receptionAnomalyDraft = null;
          updateReceptionAnomalyInline();
          return;
        }
        openOverlay("receptionAnomaly", receptionAnomalyDraft || {});
      }

      function saveReceptionAnomaly() {
        const titleNode = document.getElementById("reception-anomaly-title");
        const detailNode = document.getElementById("reception-anomaly-detail");
        const severityNode = document.getElementById("reception-anomaly-severity");
        if (!titleNode || !detailNode || !severityNode) {
          return;
        }
        const title = titleNode.value.trim();
        const detail = detailNode.value.trim();
        if (!title || !detail) {
          window.alert("Renseigne au moins un titre et une description d’anomalie.");
          return;
        }
        receptionAnomalyDraft = {
          title: title,
          detail: detail,
          severity: severityNode.value,
        };
        closeOverlay();
        updateReceptionAnomalyInline();
      }

      function openReceptionIncident(receptionId) {
        const entry = RECEPTIONS_LOG.find((item) => item.id === receptionId);
        if (!entry) {
          return;
        }
        if (entry.ticketId) {
          openSavTicket(entry.ticketId);
          return;
        }
        const payload = buildReceptionTicketPayload(entry);
        openQuickTicket(payload);
      }

      function openReceptionDetail(receptionId) {
        openOverlay("receptionDetail", { receptionId: receptionId });
      }

      function openReceptionConfig(receptionId) {
        openOverlay("receptionConfig", { receptionId: receptionId });
      }

      function saveReceptionConfig(receptionId) {
        const entry = RECEPTIONS_LOG.find((item) => item.id === receptionId);
        if (!entry) {
          closeOverlay();
          return;
        }
        const agent = document.getElementById("config-reception-agent").value;
        const clientId = document.getElementById("config-reception-client").value;
        const receptionDate = document.getElementById("config-reception-date").value || entry.receptionDate;
        const arrivalTime = document.getElementById("config-reception-time").value;
        const transporteur = document.getElementById("config-reception-transporteur").value.trim();
        if (!agent || !clientId || !transporteur || !arrivalTime) {
          window.alert("Agent, client, transporteur et heure d’arrivée sont obligatoires.");
          return;
        }
        entry.agent = agent;
        entry.clientId = clientId;
        entry.receptionDate = receptionDate;
        entry.arrivalTime = arrivalTime;
        entry.transporteur = transporteur;
        entry.supplier = null;
        entry.vehiclePlate = document.getElementById("config-reception-plate").value.trim().toUpperCase() || null;
        entry.storageMode = document.getElementById("config-reception-mode").value;
        entry.temperature = entry.storageMode === "frais"
          ? Number(document.getElementById("config-reception-temperature").value || 0) || null
          : null;
        entry.palettesSolEurope = Number(document.getElementById("config-reception-sol-eur").value || 0);
        entry.palettesSolPerdues = Number(document.getElementById("config-reception-sol-perdues").value || 0);
        entry.palettesRenduesEurope = Number(document.getElementById("config-reception-rendues-eur").value || 0);
        entry.palettesRenduesPerdues = Number(document.getElementById("config-reception-rendues-perdues").value || 0);
        entry.bioControl = isBioClient(clientId)
          ? normalizeReceptionBioControl(entry.bioControl || buildReceptionBioControlTemplate("conforme"))
          : null;
        entry.billingStatus = entry.palettesSolPerdues || entry.palettesRenduesPerdues ? "Réception + manutention" : "Réception à facturer";
        const decision = getReceptionStockDecision(entry);
        entry.stockStatus = decision.label;
        persistReceptions();
        closeOverlay();
        renderReceptionPage();
      }

      function deleteReceptionEntry(receptionId) {
        const entry = RECEPTIONS_LOG.find((item) => item.id === receptionId);
        if (!entry || entry.archivedAt) {
          return;
        }
        entry.archivedAt = new Date().toISOString();
        entry.archivedBy = "usr-local";
        entry.archiveReason = "Réception retirée de la vue active";
        archiveEntity("reception", entry, {
          reason: "Réception retirée de la vue active",
          context: {
            clientId: entry.clientId,
            ticketId: entry.ticketId || null,
          },
        });
        persistReceptions();
        closeOverlay();
        renderReceptionPage();
      }

      function saveReceptionEntry() {
        const agentRaw = (document.getElementById("reception-agent-input").value || "").trim();
        const agent = agentRaw ? ensureReceptionAgent(agentRaw) : "";
        const clientId = resolveReceptionClientId("reception-client-input", "reception-client");
        const receptionDate = document.getElementById("reception-date").value || getTodayIsoDate();
        const storageMode = document.getElementById("reception-storage-mode").value;
        const temperatureValue = document.getElementById("reception-temperature").value;
        const transporteur = document.getElementById("reception-transporteur").value.trim();
        const arrivalTime = (document.getElementById("reception-arrival-time").value || "").trim();
        const vehiclePlate = document.getElementById("reception-vehicle-plate").value.trim().toUpperCase();
        if (!agent || !clientId || !transporteur || !arrivalTime) {
          window.alert("Agent, client, transporteur et heure d’arrivée sont obligatoires.");
          return;
        }
        if (storageMode === "frais" && !temperatureValue) {
          window.alert("Renseigne la température à réception pour un flux frais.");
          return;
        }
        const bioControl = isBioClient(clientId) ? readReceptionBioControl() : null;
        if (bioControl && bioControl.missing.length) {
          window.alert("Complète toute la checklist BIO avant d’enregistrer cette réception.");
          return;
        }
        const entry = {
          id: buildReceptionId(),
          agent: agent,
          clientId: clientId,
          receptionDate: receptionDate,
          palettesSolEurope: Number(document.getElementById("reception-pallets-sol-europe").value || 0),
          palettesSolPerdues: Number(document.getElementById("reception-pallets-sol-perdues").value || 0),
          palettesRenduesEurope: Number(document.getElementById("reception-pallets-rendues-europe").value || 0),
          palettesRenduesPerdues: Number(document.getElementById("reception-pallets-rendues-perdues").value || 0),
          storageMode: storageMode,
          temperature: storageMode === "frais" ? Number(temperatureValue) : null,
          transporteur: transporteur,
          supplier: null,
          arrivalTime: arrivalTime,
          vehiclePlate: vehiclePlate || null,
          bioControl: bioControl ? normalizeReceptionBioControl(bioControl) : null,
          anomaly: receptionAnomalyDraft ? { ...receptionAnomalyDraft } : null,
          ticketId: null,
          createdAt: new Date().toLocaleString("fr-FR"),
          stockStatus: "À qualifier",
          status: "received",
          billingStatus:
            Number(document.getElementById("reception-pallets-sol-perdues").value || 0) ||
            Number(document.getElementById("reception-pallets-rendues-perdues").value || 0)
              ? "Réception + manutention"
              : "Réception à facturer",
        };
        entry.stockStatus = getReceptionStockDecision(entry).label;
        if (entry.anomaly) {
          const ticket = createSavTicketEntry(buildReceptionTicketPayload(entry));
          entry.ticketId = ticket.id;
        }
        RECEPTIONS_LOG.unshift(entry);
        persistReceptions();
        renderReceptionPage();
        renderCutoffGrid();
        if (entry.ticketId) {
          renderSavPage();
        }
        resetReceptionForm();
      }

      function savePlannedReceptionEntry() {
        const clientId = resolveReceptionClientId("planned-reception-client-input", "planned-reception-client");
        const arrivalTime = (document.getElementById("planned-reception-time").value || "").trim();
        const transporteur = (document.getElementById("planned-reception-transporteur").value || "").trim();
        const currentAgent = (document.getElementById("reception-agent-input").value || "").trim();
        const agent = currentAgent ? ensureReceptionAgent(currentAgent) : receptionAgents[0] || "Sophie B.";
        if (!clientId || !arrivalTime) {
          window.alert("Client et heure prévue sont obligatoires.");
          return;
        }
        const entry = {
          id: buildReceptionId(),
          agent: agent,
          clientId: clientId,
          receptionDate: getTodayIsoDate(),
          palettesSolEurope: 0,
          palettesSolPerdues: 0,
          palettesRenduesEurope: 0,
          palettesRenduesPerdues: 0,
          storageMode: "sec",
          temperature: null,
          transporteur: transporteur || null,
          supplier: null,
          arrivalTime: arrivalTime,
          vehiclePlate: null,
          bioControl: null,
          anomaly: null,
          ticketId: null,
          createdAt: new Date().toLocaleString("fr-FR"),
          stockStatus: "Prévue",
          status: "planned",
          billingStatus: "Réception planifiée",
        };
        entry.stockStatus = getReceptionStockDecision(entry).label;
        RECEPTIONS_LOG.unshift(entry);
        persistReceptions();
        cancelPlannedReceptionInline();
      }

      function getTransporteursMonthValue() {
        const node = document.getElementById("transporteurs-month-filter");
        if (!node) {
          return new Date().toISOString().slice(0, 7);
        }
        if (!node.value) {
          node.value = new Date().toISOString().slice(0, 7);
        }
        return node.value;
      }

      function buildTransporteurStats(monthValue) {
        const rows = getActiveReceptionEntries().filter((entry) => (entry.receptionDate || "").slice(0, 7) === monthValue);
        const grouped = new Map();
        rows.forEach((entry) => {
          const key = entry.transporteur || "Transporteur non renseigné";
          if (!grouped.has(key)) {
            grouped.set(key, {
              transporteur: key,
              deliveries: 0,
              paletteIn: 0,
              paletteOut: 0,
              anomalyCount: 0,
              clients: new Set(),
            });
          }
          const row = grouped.get(key);
          row.deliveries += 1;
          row.paletteIn += Number(entry.palettesSolEurope || 0) + Number(entry.palettesSolPerdues || 0);
          row.paletteOut += Number(entry.palettesRenduesEurope || 0) + Number(entry.palettesRenduesPerdues || 0);
          row.anomalyCount += entry.anomaly ? 1 : 0;
          row.clients.add(getClientNameById(entry.clientId));
        });
        return Array.from(grouped.values())
          .map((row) => ({
            ...row,
            paletteBalance: row.paletteIn - row.paletteOut,
            clientsLabel: Array.from(row.clients).sort((a, b) => a.localeCompare(b, "fr")).join(" · "),
            activeTickets: SAV_TICKETS.filter(
              (ticket) =>
                ticket.status !== "Résolu" &&
                ticket.sourceType === "reception" &&
                rows.some((entry) => entry.id === ticket.sourceId && (entry.transporteur || "Transporteur non renseigné") === row.transporteur)
            ),
          }))
          .sort((left, right) => right.deliveries - left.deliveries);
      }

      function renderTransporteursPage() {
        const monthValue = getTransporteursMonthValue();
        const statsHost = document.getElementById("transporteurs-stats");
        const tableWrap = document.getElementById("transporteurs-table-wrap");
        const paletteWrap = document.getElementById("transporteurs-palette-wrap");
        const ticketWrap = document.getElementById("transporteurs-ticket-wrap");
        const summaryNode = document.getElementById("transporteurs-summary");
        const paletteSummaryNode = document.getElementById("transporteurs-palette-summary");
        const ticketSummaryNode = document.getElementById("transporteurs-ticket-summary");
        if (!statsHost || !tableWrap || !paletteWrap || !ticketWrap || !summaryNode || !paletteSummaryNode || !ticketSummaryNode) {
          return;
        }

        const rows = buildTransporteurStats(monthValue);
        const totalDeliveries = rows.reduce((sum, row) => sum + row.deliveries, 0);
        const totalBalance = rows.reduce((sum, row) => sum + row.paletteBalance, 0);
        const activeTickets = rows.reduce((sum, row) => sum + row.activeTickets.length, 0);
        const activeClients = new Set(rows.flatMap((row) => Array.from(row.clients))).size;

        statsHost.innerHTML = `
          <div class="kpi"><span>Transporteurs actifs</span><strong>${rows.length}</strong><p class="mini">${monthValue}</p></div>
          <div class="kpi"><span>Livraisons</span><strong>${totalDeliveries}</strong><p class="mini">Sur le mois</p></div>
          <div class="kpi"><span>Clients servis</span><strong>${activeClients}</strong><p class="mini">Croisés avec réceptions</p></div>
          <div class="kpi"><span>Tickets actifs</span><strong>${activeTickets}</strong><p class="mini">Incidents ouverts</p></div>
        `;

        summaryNode.textContent = rows.length + " transporteur(s)";
        tableWrap.innerHTML =
          '<table class="data-table"><thead><tr><th>Transporteur</th><th>Livraisons</th><th>Clients</th><th>Anomalies</th><th>Tickets actifs</th></tr></thead><tbody>' +
          (rows.length
            ? rows
                .map(
                  (row) =>
                    "<tr><td><strong>" +
                    esc(row.transporteur) +
                    "</strong></td><td>" +
                    row.deliveries +
                    "</td><td>" +
                    esc(row.clientsLabel || "—") +
                    "</td><td><span class='badge " +
                    (row.anomalyCount ? "ba" : "bg") +
                    "'>" +
                    row.anomalyCount +
                    "</span></td><td><span class='badge " +
                    (row.activeTickets.length ? "br" : "bg") +
                    "'>" +
                    row.activeTickets.length +
                    "</span></td></tr>"
                )
                .join("")
            : "<tr><td colspan='5'><div class='empty-state'>Aucune activité transporteur sur ce mois.</div></td></tr>") +
          "</tbody></table>";

        paletteSummaryNode.textContent = totalBalance + " palette(s)";
        paletteWrap.innerHTML =
          '<table class="data-table"><thead><tr><th>Transporteur</th><th>Entrées palettes</th><th>Sorties palettes</th><th>Solde</th></tr></thead><tbody>' +
          (rows.length
            ? rows
                .map(
                  (row) =>
                    "<tr><td><strong>" +
                    esc(row.transporteur) +
                    "</strong></td><td>" +
                    row.paletteIn +
                    "</td><td>" +
                    row.paletteOut +
                    "</td><td><span class='badge " +
                    (row.paletteBalance === 0 ? "bg" : row.paletteBalance > 0 ? "ba" : "bm") +
                    "'>" +
                    row.paletteBalance +
                    "</span></td></tr>"
                )
                .join("")
            : "<tr><td colspan='4'><div class='empty-state'>Aucun flux palettes à afficher sur ce mois.</div></td></tr>") +
          "</tbody></table>";

        ticketSummaryNode.textContent = activeTickets + " ticket(s)";
        ticketWrap.innerHTML = activeTickets
          ? "<div class='inventory-watch-list'>" +
            rows
              .filter((row) => row.activeTickets.length)
              .map(
                (row) =>
                  row.activeTickets
                    .map(
                      (ticket) =>
                        "<div class='inventory-watch-item is-critical'><div class='row-between'><div><strong>" +
                        esc(row.transporteur) +
                        "</strong><div class='mini'>" +
                        esc(ticket.id + " · " + getClientNameById(ticket.clientId)) +
                        "</div></div><span class='badge " +
                        priorityBadge(ticket.priority) +
                        "'>" +
                        esc(ticket.priority) +
                        "</span></div><div class='inventory-watch-meta'><span class='mini'>" +
                        esc(ticket.title) +
                        "</span><button class='btn soft sm' type='button' onclick=\"openSavTicket('" +
                        esc(ticket.id) +
                        "')\">Voir ticket</button></div></div>"
                    )
                    .join("")
              )
              .join("") +
            "</div>"
          : "<div class='empty-state'>Aucun ticket actif lié à un transporteur sur ce mois.</div>";
      }

      function getLinkedPrepTicket(item) {
        return (
          getActiveSavTicketBySource("prep", item.id) ||
          getActiveSavTicketBySource("shipment", item.expe) ||
          null
        );
      }

      function getPrepTicketSuggestion(item) {
        const note = String(item.note || "").toLowerCase();
        const clientKey = getClientKeyByName(item.client);
        const clientCfg = clientsDB[clientKey] || {};
        const dlcAlert = Number(clientCfg.features && clientCfg.features.dlcAlert) || 7;
        const reasons = [];
        let priority = "Normale";
        let title = "Incident prépa à qualifier";

        if (note.includes("signer")) {
          reasons.push("BL à signer à sécuriser avant départ");
          priority = "Haute";
          title = "BL à signer à sécuriser";
        }
        if (String(item.cutoff || "").toLowerCase().includes("urgence")) {
          reasons.push("Cutoff urgence à superviser");
          priority = "Critique";
          title = "Expédition urgente à sécuriser";
        } else if (String(item.cutoff || "").includes("11h")) {
          reasons.push("Cutoff avant 11h à surveiller");
          if (priority === "Normale") {
            priority = "Haute";
            title = "Prépa sensible au cutoff";
          }
        }
        const sensitiveLots = item.produits
          .map((prod) => ({ ref: prod.ref, lot: prod.lot, days: getDaysUntilFrDate(prod.dlc) }))
          .filter((prod) => prod.days !== null && prod.days <= dlcAlert);
        if (sensitiveLots.length) {
          reasons.push("DLC courte sur " + sensitiveLots[0].ref + " (" + sensitiveLots[0].days + "j)");
          if (priority !== "Critique") {
            priority = sensitiveLots[0].days <= 3 ? "Critique" : "Haute";
            title = "DLC courte à arbitrer";
          }
        }
        if (!reasons.length) {
          return null;
        }
        const owner = priority === "Critique" || note.includes("signer") ? "ADV Cargonautes" : item.agent;
        return {
          clientId: clientKey,
          sourceType: "prep",
          sourceId: item.id,
          priority: priority,
          owner: owner,
          title: title,
          summary:
            "Suggestion créée depuis la préparation " +
            item.expe +
            " · " +
            reasons.join(" · ") +
            ". Destination: " +
            item.dest +
            ".",
        };
      }

      function openPrepManualTicket(id) {
        const item = PREP_STORE.find((entry) => entry.id === id);
        if (!item) {
          return;
        }
        openQuickTicket({
          clientId: getClientKeyByName(item.client),
          sourceType: "prep",
          sourceId: item.id,
          title: "Incident prépa à qualifier",
          summary: "Ticket créé depuis la ligne de préparation " + item.expe + ".",
        });
      }

      function openPrepTicketSuggestion(id) {
        const item = PREP_STORE.find((entry) => entry.id === id);
        if (!item) {
          return;
        }
        const existing = getLinkedPrepTicket(item);
        if (existing) {
          openSavTicket(existing.id);
          return;
        }
        const suggestion = getPrepTicketSuggestion(item);
        if (!suggestion) {
          openPrepManualTicket(id);
          return;
        }
        openQuickTicket(suggestion);
      }

      function renderPrepList() {
        updateShiftTabs();
        syncPrepFilterCombos();
        renderPrepListFiltered();
      }

      function renderPrepListFiltered() {
        const search = document.getElementById("prep-search").value.trim().toLowerCase();
        const status = document.getElementById("prep-status-filter").value;
        const canal = document.getElementById("prep-canal-filter").value;
        const filtered = PREP_STORE.filter((item) => {
          const matchesSearch = [item.expe, item.client, item.dest, item.canal, item.expeditionMethod, item.cutoff].join(" ").toLowerCase().includes(search);
          const matchesStatus = status === "all" || item.statut === status;
          const matchesCanal = canal === "all" || item.canal === canal;
          const matchesShift = currentShiftTab === "all" || item.shift === currentShiftTab;
          return matchesSearch && matchesStatus && matchesCanal && matchesShift;
        });
        visiblePrepIds = filtered.map((item) => item.id);
        document.getElementById("prep-count").textContent = filtered.length + " préparation(s)";
        document.getElementById("toggle-all-expe").checked =
          filtered.length > 0 && filtered.every((item) => selectedExpes.has(item.id));
        document.getElementById("prep-list").innerHTML =
          filtered.length === 0
            ? "<div class='empty-state'>Aucune préparation ne correspond aux filtres.</div>"
            : filtered.map((item, index) => renderPrepRow(item, index)).join("");
        updateSelectionCopy();
      }

      function renderPrepRow(item) {
        const linkedTicket = getLinkedPrepTicket(item);
        const suggestion = linkedTicket ? null : getPrepTicketSuggestion(item);
        const statusTone = statusBadge(item.statut);
        const ticketState = linkedTicket
          ? '<span class="prep-ticket-text is-linked">Ticket lié</span>'
          : suggestion
            ? '<span class="prep-ticket-text is-warning">À signaler</span>'
            : '<span class="prep-ticket-text">Sans ticket</span>';
        const actionButtons =
          '<div class="button-row prep-actions-inline">' +
          (linkedTicket
            ? '<button class="icon-btn" type="button" title="Ouvrir le ticket lié" aria-label="Ouvrir le ticket lié" onclick="event.stopPropagation();openSavTicket(\'' +
              linkedTicket.id +
              '\')">' +
              iconSvg("ticket") +
              "</button>"
            : '<button class="icon-btn" type="button" title="Signaler un incident" aria-label="Signaler un incident" onclick="event.stopPropagation();' +
              (suggestion ? "openPrepTicketSuggestion" : "openPrepManualTicket") +
              "('" +
              item.id +
              '\')">' +
              iconSvg("anomaly") +
              "</button>") +
          "</div>";
        return (
          '<div class="prep-row-shell ' +
          (prepExpanded.has(item.id) ? "is-open" : "") +
          '" id="' +
          item.id +
          '">' +
          '<div class="prep-row" role="button" tabindex="0" aria-expanded="' +
          (prepExpanded.has(item.id) ? "true" : "false") +
          '" onclick="togglePrepDetail(\'' +
          item.id +
          '\')" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();togglePrepDetail(\'' +
          item.id +
          '\');}">' +
          '<input type="checkbox" ' +
          (selectedExpes.has(item.id) ? "checked" : "") +
          ' onclick="event.stopPropagation()" onchange="toggleSelectedExpe(\'' +
          item.id +
          '\', this.checked)" />' +
          '<div class="prep-ref"><strong class="mono">' +
          esc(item.expe) +
          "</strong><p class='mini'>" +
          esc(item.id + " · " + item.shift) +
          "</p></div>" +
          '<div class="prep-dest"><strong>' +
          esc(item.dest) +
          "</strong><p class='mini'>" +
          esc(item.client + " · " + item.canal) +
          "</p></div>" +
          '<div class="prep-summary-meta"><p class="eyebrow">Expédition</p><strong>' +
          esc(item.expeditionMethod || "À confirmer") +
          "</strong><p class='mini'>" +
          esc(item.cutoff || "Cutoff à confirmer") +
          "</p></div>" +
          '<div class="prep-summary-meta"><p class="eyebrow">Suivi</p><strong><span class="badge ' +
          statusTone +
          '">' +
          esc(item.statut) +
          "</span></strong><p class='mini'>" +
          ticketState +
          "</p></div>" +
          actionButtons +
          "</div>" +
          (prepExpanded.has(item.id)
            ? '<div class="prep-detail"><div class="prep-detail-grid"><div class="prep-detail-card"><h3>Produits</h3><table class="data-table"><thead><tr><th>Ref</th><th>Qté</th><th>Lot</th><th>DLC</th></tr></thead><tbody>' +
              item.produits
                .map(
                  (prod) =>
                    "<tr><td>" +
                    esc(prod.ref) +
                    "</td><td>" +
                    prod.qte +
                    "</td><td class='mono'>" +
                    esc(prod.lot) +
                    "</td><td>" +
                    esc(prod.dlc) +
                    "</td></tr>"
                )
                .join("") +
              "</tbody></table></div><div class='prep-detail-card'><h3>Exécution</h3><div class='chip-cloud'><span class='badge " +
              statusTone +
              "'>" +
              esc(item.statut) +
              "</span><span class='badge " +
              shiftBadgeClass(item.shift) +
              "'>" +
              esc(item.shift) +
              "</span></div><div class='prep-detail-note'><p class='mini'><strong>Méthode d’expédition :</strong> " +
              esc(item.expeditionMethod || "À confirmer") +
              "</p><p class='mini'><strong>Ticket :</strong> " +
              (linkedTicket ? "lié" : suggestion ? "à signaler" : "aucun") +
              "</p><p class='mini'><strong>Canal :</strong> " +
              esc(item.canal || "—") +
              "</p><p class='mini'>" +
              esc(item.note) +
              "</p></div><div class='button-row' style='margin-top:14px'><button class='btn soft sm' onclick='cycleStatut(\"" +
              item.id +
              "\")'>Changer le statut</button><button class='btn soft sm' onclick='imprimerExpe(\"" +
              item.id +
              "\")'>Dossier</button><button class='btn soft sm' onclick='imprimerBL(\"" +
              item.id +
              "\")'>BL</button><button class='btn soft sm' onclick='imprimerEtiquettes(\"" +
              item.id +
              "\")'>Étiquettes</button><button class='btn soft sm' onclick='imprimerFiche(\"" +
              item.id +
              "\")'>Fiche</button></div></div></div></div>"
            : "") +
          "</div>"
        );
      }

      function togglePrepDetail(id) {
        if (prepExpanded.has(id)) {
          prepExpanded.delete(id);
        } else {
          prepExpanded.add(id);
        }
        renderPrepListFiltered();
      }

      function cycleStatut(id) {
        const states = ["En attente", "En cours", "Terminée", "Annulée"];
        const item = PREP_STORE.find((entry) => entry.id === id);
        const currentIndex = states.indexOf(item.statut);
        item.statut = states[(currentIndex + 1) % states.length];
        persistPrepStore();
        renderPrepListFiltered();
      }

      function filterPrep() {
        renderPrepListFiltered();
      }

      function resetPrepFilters() {
        document.getElementById("prep-search").value = "";
        document.getElementById("prep-status-filter").value = "all";
        document.getElementById("prep-canal-filter").value = "all";
        syncPrepFilterCombos();
        currentShiftTab = "all";
        updateShiftTabs();
      }

      function detectFormat(ref) {
        const match = ref.match(/(60|240|300|500|1000)\s?mL/i);
        return match ? match[1] + "ml" : "other";
      }

      function getCapKey(format, pav) {
        const map = { "60ml": "60", "240ml": "240", "300ml": "300", "500ml": "500", "1000ml": "1000" };
        const key = map[format];
        if (!key) {
          return pav ? "p60" : "60v";
        }
        return pav ? "p" + key : key + "v";
      }

      function packExpedition(items) {
        const remaining = {};
        items.forEach((item) => {
          const format = detectFormat(item.ref);
          const capKey = getCapKey(format, item.pav);
          const count = item.pav ? Math.max(item.colis || 0, 1) : item.qte;
          remaining[capKey] = (remaining[capKey] || 0) + count;
        });

        const sizesDesc = ["XL", "LC", "MC", "S", "XS"];
        const sizesAsc = ["XS", "S", "MC", "LC", "XL"];
        const keysByVolume = Object.keys(UNIT_VOLS).sort((left, right) => UNIT_VOLS[right] - UNIT_VOLS[left]);
        const packs = [];

        const hasRemaining = () => Object.values(remaining).some((value) => value > 0);

        while (hasRemaining()) {
          const provisional = { taille: "XL", counts: {}, vol_used: 0, remplissage: 0 };
          let volumeRemaining = CARTON_VOLS.XL;
          const beforeLoop = JSON.stringify(remaining);

          keysByVolume.forEach((key) => {
            const qty = remaining[key] || 0;
            if (!qty) {
              return;
            }
            const maxByCap = CAPS.XL[key] || 0;
            if (!maxByCap) {
              return;
            }
            const maxByVolume = Math.floor(volumeRemaining / UNIT_VOLS[key]);
            const take = Math.min(qty, maxByCap, maxByVolume);
            if (take > 0) {
              provisional.counts[key] = take;
              volumeRemaining -= take * UNIT_VOLS[key];
            }
          });

          if (!Object.keys(provisional.counts).length) {
            const fallbackKey = keysByVolume.find((key) => (remaining[key] || 0) > 0);
            if (!fallbackKey) {
              console.warn("Conditionnement ignoré pour une référence non mappée.", remaining);
              break;
            }
            provisional.counts[fallbackKey] = 1;
          }

          provisional.vol_used = Object.entries(provisional.counts).reduce((acc, [key, count]) => acc + UNIT_VOLS[key] * count, 0);
          provisional.remplissage = Math.round((provisional.vol_used / CARTON_VOLS.XL) * 100);

          const bestSize =
            sizesAsc.find(
              (size) =>
                provisional.vol_used <= CARTON_VOLS[size] &&
                Object.entries(provisional.counts).every(([key, count]) => count <= (CAPS[size][key] || 0))
            ) || "XL";

          provisional.taille = bestSize;
          provisional.remplissage = Math.round((provisional.vol_used / CARTON_VOLS[bestSize]) * 100);
          packs.push(provisional);

          Object.entries(provisional.counts).forEach(([key, count]) => {
            remaining[key] -= count;
          });
          if (beforeLoop === JSON.stringify(remaining)) {
            console.warn("Conditionnement bloqué, arrêt de sécurité.", remaining);
            break;
          }
        }

        return packs;
      }

      function lancerCartons() {
        const host = document.getElementById("cartons-summary");
        const panel = document.getElementById("cartons-panel");
        if (!host || !panel) {
          return;
        }
        if (cartonsCollapsed) {
          panel.hidden = true;
          return;
        }
        panel.hidden = false;
        const relevant = PREP_STORE.filter((item) => visiblePrepIds.length === 0 || visiblePrepIds.includes(item.id));
        host.innerHTML = relevant
          .map((item) => {
            const packs = packExpedition(item.produits);
            return (
              '<article class="carton-card"><div class="row-between"><div><span class="eyebrow">' +
              esc(item.expe) +
              "</span><h3>" +
              esc(item.dest) +
              "</h3></div><span class='badge " +
              shiftBadgeClass(item.shift) +
              "'>" +
              esc(item.shift) +
              "</span></div><div class='prep-tags'>" +
              buildPackChips(packs) +
              "</div><p class='mini'>" +
              packs
                .map((pack) => pack.taille + " · " + pack.remplissage + "%")
                .join(" · ") +
              "</p></article>"
            );
          })
          .join("");
      }

      function toggleCartons() {
        cartonsCollapsed = !cartonsCollapsed;
        const toggle = document.getElementById("cartons-toggle-button");
        if (toggle) {
          toggle.textContent = cartonsCollapsed ? "Afficher les cartons" : "Masquer les cartons";
        }
        lancerCartons();
      }

      function setShiftTab(shift, el) {
        currentShiftTab = shift;
        document.querySelectorAll("[data-shift-tab]").forEach((button) => button.classList.toggle("active", button === el));
        updateShiftTabs();
        renderPrepListFiltered();
      }

      function updateShiftTabs() {
        const counts = {
          all: PREP_STORE.length,
          matin: PREP_STORE.filter((item) => item.shift === "matin").length,
          soir: PREP_STORE.filter((item) => item.shift === "soir").length,
        };
        document.querySelectorAll("[data-shift-tab]").forEach((button) => {
          const shift = button.dataset.shiftTab;
          const labels = { all: "Tous", matin: "Matin", soir: "Soir" };
          button.textContent = labels[shift] + " (" + counts[shift] + ")";
          button.classList.toggle("active", currentShiftTab === shift);
        });
      }

      function toggleAllExpe(source) {
        visiblePrepIds.forEach((id) => {
          if (source.checked) {
            selectedExpes.add(id);
          } else {
            selectedExpes.delete(id);
          }
        });
        renderPrepListFiltered();
      }

      function getSelectedExpes() {
        return PREP_STORE.filter((item) => selectedExpes.has(item.id));
      }

      function imprimerExpe(id) {
        const item = PREP_STORE.find((entry) => entry.id === id);
        if (!item) {
          return;
        }
        openOverlay("print", {
          title: "Dossier expédition " + item.expe,
          body:
            "<h3>" +
            esc(item.dest) +
            "</h3><p class='mini'>" +
            esc(item.adresse) +
            "</p><div class='chip-cloud' style='margin-top:12px'><span class='badge " +
            statusBadge(item.statut) +
            "'>" +
            esc(item.statut) +
            "</span><span class='badge " +
            shiftBadgeClass(item.shift) +
            "'>" +
            esc(item.shift) +
            "</span></div><p class='mini' style='margin-top:14px'>" +
            esc(item.note) +
            "</p>",
        });
      }

      function imprimerSelection() {
        const items = getSelectedExpes();
        if (!items.length) {
          return;
        }
        openOverlay("print", {
          title: "Sélection de " + items.length + " expédition(s)",
          body:
            "<ul>" +
            items
              .map((item) => "<li><strong>" + esc(item.expe) + "</strong> · " + esc(item.dest) + " · " + esc(item.statut) + "</li>")
              .join("") +
            "</ul>",
        });
      }

      function imprimerBL(id) {
        const item = PREP_STORE.find((entry) => entry.id === id);
        openOverlay("print", {
          title: "BL " + item.expe,
          body:
            "<h3>BL Cyke</h3><p class='mini'>" +
            esc(item.expe + " · " + item.dest) +
            "</p><table class='data-table'><thead><tr><th>Ref</th><th>Lot</th><th>DLC</th><th>Qté</th></tr></thead><tbody>" +
            item.produits
              .map((prod) => "<tr><td>" + esc(prod.ref) + "</td><td class='mono'>" + esc(prod.lot) + "</td><td>" + esc(prod.dlc) + "</td><td>" + prod.qte + "</td></tr>")
              .join("") +
            "</tbody></table>",
        });
      }

      function imprimerEtiquettes(id) {
        const item = PREP_STORE.find((entry) => entry.id === id);
        openOverlay("print", {
          title: "Étiquettes " + item.expe,
          body:
            "<div class='chip-cloud'>" +
            packExpedition(item.produits)
              .map((pack) => '<span class="badge bc">' + esc(item.expe + " · " + pack.taille) + "</span>")
              .join("") +
            "</div>",
        });
      }

      function imprimerFiche(id) {
        const item = PREP_STORE.find((entry) => entry.id === id);
        openOverlay("print", {
          title: "Fiche de préparation " + item.expe,
          body:
            "<h3>" +
            esc(item.dest) +
            "</h3><p class='mini'>" +
            esc(item.contact + " · " + item.tel) +
            "</p><p class='mini'>" +
            esc(item.note) +
            "</p>",
        });
      }

      function getSavSourceTypeLabel(sourceType) {
        const map = {
          prep: "Préparation",
          shipment: "BL / expédition",
          reception: "Réception",
          lot: "Lot / traçabilité",
          client: "Client",
          commande: "Commande",
          internal: "Interne",
        };
        return map[sourceType] || "Opération";
      }

      function getSavSourceActionLabel(ticket) {
        const labels = {
          prep: "Voir la préparation",
          shipment: "Ouvrir le BL",
          reception: "Voir la réception",
          lot: "Voir le contexte source",
          client: "Voir le client",
          commande: "Voir la commande",
        };
        return labels[ticket.sourceType] || "Voir le contexte source";
      }

      function parseSavDateLabel(value) {
        const raw = String(value || "").trim();
        if (!raw) {
          return 0;
        }
        if (/\d{4}-\d{2}-\d{2}T/.test(raw)) {
          return new Date(raw).getTime() || 0;
        }
        const fullMatch = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2}):(\d{2}))?$/);
        if (fullMatch) {
          const [, day, month, year, hour = "12", minute = "00"] = fullMatch;
          return new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute)).getTime();
        }
        const shortMatch = raw.match(/^(\d{1,2})\/(\d{1,2})(?:\s+(\d{1,2}):(\d{2}))?$/);
        if (shortMatch) {
          const now = new Date();
          const [, day, month, hour = "12", minute = "00"] = shortMatch;
          return new Date(now.getFullYear(), Number(month) - 1, Number(day), Number(hour), Number(minute)).getTime();
        }
        const timeMatch = raw.match(/^(\d{1,2}):(\d{2})$/);
        if (timeMatch) {
          const now = new Date();
          return new Date(now.getFullYear(), now.getMonth(), now.getDate(), Number(timeMatch[1]), Number(timeMatch[2])).getTime();
        }
        if (/^hier$/i.test(raw)) {
          const now = new Date();
          now.setDate(now.getDate() - 1);
          now.setHours(12, 0, 0, 0);
          return now.getTime();
        }
        return new Date(raw).getTime() || 0;
      }

      function getSavActivityTimestamp(ticket) {
        const stamps = [parseSavDateLabel(ticket.createdAt)];
        (ticket.events || []).forEach((event) => stamps.push(parseSavDateLabel(event.at)));
        (ticket.messages || []).forEach((message) => stamps.push(parseSavDateLabel(message.at)));
        return Math.max.apply(null, stamps.filter(Boolean).length ? stamps.filter(Boolean) : [0]);
      }

      function getSavLastActivity(ticket) {
        const lastMessage = Array.isArray(ticket.messages) && ticket.messages.length ? ticket.messages[ticket.messages.length - 1].at : "";
        const lastEvent = Array.isArray(ticket.events) && ticket.events.length ? ticket.events[0].at : "";
        return lastMessage || lastEvent || ticket.createdAt || "—";
      }

      function ticketHasAttachment(ticket) {
        return (ticket.messages || []).some((message) => Array.isArray(message.attachments) && message.attachments.length);
      }

      function ticketHasInternalNote(ticket) {
        return (ticket.messages || []).some((message) => message.kind === "internal");
      }

      function getSavWaitingAction(ticket) {
        if (ticket.status === "Résolu") {
          return "Aucune";
        }
        if (ticket.waitingOn === "client") {
          return "Action client";
        }
        if (ticket.waitingOn === "cargonautes") {
          return "Action Cargonautes";
        }
        if (ticket.status === "En attente") {
          const lastMessage = Array.isArray(ticket.messages) && ticket.messages.length ? ticket.messages[ticket.messages.length - 1] : null;
          if (lastMessage && /cargonautes|notification/i.test(lastMessage.author || "")) {
            return "Action client";
          }
          return "Action Cargonautes";
        }
        return "Action Cargonautes";
      }

      function getSavFilterConfig() {
        return {
          status: {
            singular: "statut",
            plural: "statuts",
            allLabel: "Tous",
            options: SAV_STATUS_OPTIONS.map((value) => ({ value: value, label: value })),
          },
          priority: {
            singular: "priorité",
            plural: "priorités",
            allLabel: "Toutes",
            options: SAV_PRIORITY_OPTIONS.map((value) => ({ value: value, label: value })),
          },
          client: {
            singular: "client",
            plural: "clients",
            allLabel: "Tous",
            options: Array.from(new Set(SAV_TICKETS.map((ticket) => ticket.clientId).filter(Boolean)))
              .map((clientId) => ({ value: clientId, label: getTicketClientName(clientId) }))
              .sort((left, right) => left.label.localeCompare(right.label, "fr")),
          },
          owner: {
            singular: "responsable",
            plural: "responsables",
            allLabel: "Tous",
            options: Array.from(new Set(SAV_TICKETS.map((ticket) => ticket.owner).filter(Boolean)))
              .sort((left, right) => left.localeCompare(right, "fr"))
              .map((owner) => ({ value: owner, label: owner })),
          },
          source: {
            singular: "type",
            plural: "types",
            allLabel: "Tous",
            options: Array.from(new Set(SAV_TICKETS.map((ticket) => ticket.sourceType).filter(Boolean)))
              .sort((left, right) => getSavSourceTypeLabel(left).localeCompare(getSavSourceTypeLabel(right), "fr"))
              .map((source) => ({ value: source, label: getSavSourceTypeLabel(source) })),
          },
        };
      }

      function closeSavFilterMenus() {
        savOpenFilterKey = null;
        ["status", "priority", "client", "owner", "source"].forEach((key) => {
          const node = document.getElementById("sav-" + key + "-filter");
          if (node) {
            node.classList.remove("open");
          }
        });
      }

      function toggleSavFilterMenu(key, event) {
        if (event) {
          event.stopPropagation();
        }
        const node = document.getElementById("sav-" + key + "-filter");
        if (!node) {
          return;
        }
        const willOpen = savOpenFilterKey !== key;
        closeSavFilterMenus();
        if (willOpen) {
          savOpenFilterKey = key;
          node.classList.add("open");
        }
      }

      function summarizeSavFilterSelection(key, config, selectedValues) {
        if (!selectedValues.length) {
          return config.allLabel;
        }
        const labels = config.options.filter((option) => selectedValues.includes(option.value)).map((option) => option.label);
        if (labels.length <= 2) {
          return labels.join(", ");
        }
        return labels.length + " " + config.plural;
      }

      function renderSavFilterMenu(key, config) {
        const menuNode = document.getElementById("sav-" + key + "-filter-menu");
        const labelNode = document.getElementById("sav-" + key + "-filter-label");
        if (!menuNode || !labelNode) {
          return;
        }
        const selected = savFilterState[key] || new Set();
        const selectedValues = config.options.filter((option) => selected.has(option.value)).map((option) => option.value);
        labelNode.textContent = summarizeSavFilterSelection(key, config, selectedValues);
        menuNode.innerHTML =
          '<div class="sav-multi-actions">' +
          '<button class="sav-multi-action" type="button" onclick="selectAllSavFilterOptions(\'' + key + '\')">Tout sélectionner</button>' +
          '<button class="sav-multi-action" type="button" onclick="clearSavFilterOptions(\'' + key + '\')">Tout effacer</button>' +
          "</div>" +
          '<div class="sav-multi-options">' +
          config.options
            .map(
              (option) =>
                '<label class="sav-multi-option"><input type="checkbox" ' +
                (selected.has(option.value) ? "checked " : "") +
                'onchange="setSavFilterSelection(\'' +
                key +
                "', '" +
                esc(option.value) +
                "', this.checked)\" /><span><strong>" +
                esc(option.label) +
                "</strong></span></label>"
            )
            .join("") +
          "</div>";
      }

      function hydrateSavFilterOptions() {
        const configMap = getSavFilterConfig();
        Object.keys(configMap).forEach((key) => {
          const validValues = new Set(configMap[key].options.map((option) => option.value));
          savFilterState[key] = new Set(Array.from(savFilterState[key] || []).filter((value) => validValues.has(value)));
          renderSavFilterMenu(key, configMap[key]);
        });
      }

      function setSavFilterSelection(key, value, checked) {
        if (!savFilterState[key]) {
          savFilterState[key] = new Set();
        }
        if (checked) {
          savFilterState[key].add(value);
        } else {
          savFilterState[key].delete(value);
        }
        hydrateSavFilterOptions();
        renderSavPage();
      }

      function selectAllSavFilterOptions(key) {
        const config = getSavFilterConfig()[key];
        if (!config) {
          return;
        }
        savFilterState[key] = new Set(config.options.map((option) => option.value));
        hydrateSavFilterOptions();
        renderSavPage();
      }

      function clearSavFilterOptions(key) {
        savFilterState[key] = new Set();
        hydrateSavFilterOptions();
        renderSavPage();
      }

      function getFilteredSavTickets() {
        hydrateSavFilterOptions();
        const searchNode = document.getElementById("sav-search");
        const attachmentNode = document.getElementById("sav-filter-has-attachment");
        const internalNode = document.getElementById("sav-filter-has-internal");
        const term = searchNode ? normalizeString(searchNode.value.trim()) : "";
        const requireAttachment = Boolean(attachmentNode && attachmentNode.checked);
        const requireInternal = Boolean(internalNode && internalNode.checked);
        return SAV_TICKETS.filter((ticket) => {
          const contact = getSavTicketContact(ticket);
          const haystack = [
            ticket.id,
            ticket.title,
            ticket.summary,
            ticket.sourceId,
            ticket.sourceLabel,
            getSavSourceTypeLabel(ticket.sourceType),
            ticket.cykeId || "",
            getTicketClientName(ticket.clientId),
            contact.name,
            contact.role,
            contact.email,
            ticket.tags.join(" "),
          ]
            .join(" ");
          const matchesSearch = !term || normalizeString(haystack).includes(term);
          const matchesStatus = !savFilterState.status.size || savFilterState.status.has(ticket.status);
          const matchesPriority = !savFilterState.priority.size || savFilterState.priority.has(ticket.priority);
          const matchesClient = !savFilterState.client.size || savFilterState.client.has(ticket.clientId);
          const matchesOwner = !savFilterState.owner.size || savFilterState.owner.has(ticket.owner);
          const matchesSource = !savFilterState.source.size || savFilterState.source.has(ticket.sourceType);
          return (
            matchesSearch &&
            matchesStatus &&
            matchesPriority &&
            matchesClient &&
            matchesOwner &&
            matchesSource &&
            (!requireAttachment || ticketHasAttachment(ticket)) &&
            (!requireInternal || ticketHasInternalNote(ticket))
          );
        });
      }

      function renderSavPage() {
        refreshSavAutomation();
        const tickets = getFilteredSavTickets().sort((left, right) => {
          const leftResolved = left.status === "Résolu" ? 1 : 0;
          const rightResolved = right.status === "Résolu" ? 1 : 0;
          if (leftResolved !== rightResolved) {
            return leftResolved - rightResolved;
          }
          return getSavActivityTimestamp(right) - getSavActivityTimestamp(left);
        });
        if (!tickets.length) {
          savOpenTicketId = null;
        } else if (!tickets.find((ticket) => ticket.id === savOpenTicketId)) {
          savOpenTicketId = tickets[0].id;
        }

        const openTicket = tickets.find((ticket) => ticket.id === savOpenTicketId) || null;
        const openCount = SAV_TICKETS.filter((ticket) => ticket.status !== "Résolu").length;
        const criticalCount = SAV_TICKETS.filter((ticket) => ticket.priority === "Critique" && ticket.status !== "Résolu").length;
        const riskCount = SAV_TICKETS.filter((ticket) => getSlaTone(ticket) === "sla-risk" && ticket.status !== "Résolu").length;
        const linkedOpsCount = SAV_TICKETS.filter((ticket) => ["prep", "shipment", "reception", "lot"].includes(ticket.sourceType) && ticket.status !== "Résolu").length;

        document.getElementById("sav-stats").innerHTML = `
          <div class="sav-stat is-open"><span>Ouverts</span><strong>${openCount}</strong><p class="mini">Tickets actifs</p></div>
          <div class="sav-stat is-critical"><span>Critiques</span><strong>${criticalCount}</strong><p class="mini">Attention immédiate</p></div>
          <div class="sav-stat is-risk"><span>SLA à risque</span><strong>${riskCount}</strong><p class="mini">À traiter vite</p></div>
          <div class="sav-stat is-linked"><span>Liés à l’opération</span><strong>${linkedOpsCount}</strong><p class="mini">Réception · prépa · BL</p></div>
        `;

        const unresolvedTickets = tickets.filter((ticket) => ticket.status !== "Résolu");
        const resolvedTickets = tickets.filter((ticket) => ticket.status === "Résolu");
        const renderSavTicketList = (groupLabel, rows) =>
          rows.length
            ? `
              <section class="sav-ticket-group">
                <p class="sav-group-label">${esc(groupLabel)}</p>
                ${rows
                  .map((ticket) => {
                    const contact = getSavTicketContact(ticket);
                    const lastActivity = getSavLastActivity(ticket);
                    const flags = [];
                    if (ticketHasAttachment(ticket)) {
                      flags.push({ label: "Pièce jointe", tone: "attachment" });
                    }
                    if (ticketHasInternalNote(ticket)) {
                      flags.push({ label: "Note interne", tone: "internal" });
                    }
                    flags.push({ label: getSavWaitingAction(ticket), tone: "action" });
                    const priorityClass =
                      ticket.priority === "Critique"
                        ? "sav-priority-critical"
                        : ticket.priority === "Haute"
                          ? "sav-priority-high"
                          : "";
                    return `
                      <article class="sav-ticket${ticket.id === savOpenTicketId ? " active" : ""}" onclick="openSavTicket('${ticket.id}')">
                        <div class="sav-ticket-top">
                          <div class="sav-ticket-line">
                            <span class="sav-ticket-code">${esc(ticket.id)}</span>
                            <span class="sav-ticket-contact" title="${esc([contact.role, contact.availability].filter(Boolean).join(" · "))}">${esc(contact.name)}</span>
                            <span class="sav-ticket-organization">${esc(contact.organization)}</span>
                          </div>
                          <div class="chip-cloud">
                            <span class="badge ${priorityBadge(ticket.priority)} ${priorityClass}">${esc(ticket.priority)}</span>
                            <span class="badge ${statusBadge(ticket.status)}">${esc(ticket.status)}</span>
                          </div>
                        </div>
                        <h3 class="sav-ticket-title">${esc(ticket.title)}</h3>
                        <div class="sav-ticket-meta">
                          <span class="mini">${esc(getSavSourceTypeLabel(ticket.sourceType))}</span>
                          <span class="mini">${esc(ticket.sourceLabel)}</span>
                          <span class="mini">Responsable · ${esc(ticket.owner)}</span>
                          <span class="mini">Dernière activité · ${esc(lastActivity)}</span>
                        </div>
                        <div class="sav-ticket-meta">
                          ${flags.map((item) => `<span class="sav-inline-flag is-${esc(item.tone)}">${esc(item.label)}</span>`).join("")}
                        </div>
                        <p class="mini sav-ticket-summary">${esc(ticket.summary)}</p>
                      </article>
                    `;
                  })
                  .join("")}
              </section>
            `
            : "";
        document.getElementById("sav-list").innerHTML =
          tickets.length === 0
            ? "<div class='empty-state'>Aucun ticket ne correspond aux filtres.</div>"
            : renderSavTicketList("À traiter", unresolvedTickets) + renderSavTicketList("Résolus récents", resolvedTickets);

        document.getElementById("sav-detail").innerHTML = openTicket ? renderSavDetail(openTicket) : "<div class='empty-state'>Sélectionne un ticket pour comprendre le contexte et traiter l’action suivante.</div>";
        updateSavComposerState();
        renderSavPendingAttachments();
      }

      function renderSavAttachmentsMarkup(attachments) {
        if (!attachments || !attachments.length) {
          return "";
        }
        return `
          <div class="sav-attachment-list">
            ${attachments
              .map((attachment) => {
                const isImage = String(attachment.mimeType || "").startsWith("image/");
                const href = attachment.dataUrl || "#";
                return `
                  <div class="sav-attachment-entry">
                    <a class="sav-link" href="${esc(href)}" ${attachment.dataUrl ? 'target="_blank" rel="noopener noreferrer"' : ""}>${esc(attachment.name)}</a>
                    <span class="mini">${esc(formatBytes(attachment.size || 0))}</span>
                    ${isImage && attachment.dataUrl ? `<img class="sav-attachment-thumb" src="${esc(attachment.dataUrl)}" alt="${esc(attachment.name)}" />` : ""}
                  </div>
                `;
              })
              .join("")}
          </div>
        `;
      }

      function renderSavDetail(ticket) {
        const sourceMeta = buildTicketSourceMeta(ticket);
        const contact = getSavTicketContact(ticket);
        const tagsMarkup = ticket.tags.map((tag) => `<span class="chip">${esc(tag)}</span>`).join("");
        const waitingAction = getSavWaitingAction(ticket);
        const priorityClass =
          ticket.priority === "Critique"
            ? "sav-priority-critical"
            : ticket.priority === "Haute"
              ? "sav-priority-high"
              : "";
        const eventMarkup = (ticket.events || [])
          .map(
            (event) => `
              <article class="sav-stream-item system">
                <div class="sav-stream-meta">
                  <strong>${esc(event.label)}</strong>
                  <span class="mini">${esc(event.at)}</span>
                </div>
                <p class="mini">${esc(event.detail)}</p>
              </article>
            `
          )
          .join("");
        const messageMarkup = ticket.messages
          .map(
            (message) => `
              <article class="sav-stream-item ${message.kind === "internal" ? "internal" : "public"}">
                <div class="sav-stream-meta">
                  <strong>${esc(message.author)}</strong>
                  <span class="mini">${esc(message.at + (message.kind === "internal" ? " · note interne" : " · réponse / message"))}</span>
                </div>
                <p class="mini sav-stream-copy">${esc(message.text)}</p>
                ${renderSavAttachmentsMarkup(message.attachments || [])}
              </article>
            `
          )
          .join("");
        return `
          <div class="sav-detail-shell">
            <section class="sav-section">
              <div class="sav-detail-head">
                <div class="sav-page-copy">
                  <span class="eyebrow">${esc(ticket.id + " · " + contact.organization)}</span>
                  <h3 class="sav-detail-title">${esc(ticket.title)}</h3>
                  <div class="sav-contact-line">
                    <strong title="${esc([contact.role, contact.availability].filter(Boolean).join(" · "))}">${esc(contact.name)}</strong>
                    <span class="sav-contact-hint">${esc(contact.organization)}</span>
                  </div>
                  <p class="mini">${esc(getSavSourceTypeLabel(ticket.sourceType) + " · " + ticket.sourceLabel)}</p>
                </div>
                <div class="chip-cloud">
                  <span class="badge ${priorityBadge(ticket.priority)} ${priorityClass}">${esc(ticket.priority)}</span>
                  <span class="badge ${statusBadge(ticket.status)}">${esc(ticket.status)}</span>
                  <span class="chip">${esc(waitingAction)}</span>
                </div>
              </div>
              <div class="sav-kv-grid">
                <div class="sav-kv-item"><span>Contact client</span><strong title="${esc([contact.role, contact.availability].filter(Boolean).join(" · "))}">${esc(contact.name)}</strong></div>
                <div class="sav-kv-item"><span>Organisation</span><strong>${esc(contact.organization)}</strong></div>
                <div class="sav-kv-item"><span>Source</span><strong>${esc(getSavSourceTypeLabel(ticket.sourceType))}</strong></div>
                <div class="sav-kv-item"><span>Référence</span><strong class="sav-linkish">${esc(ticket.sourceId)}</strong></div>
                <div class="sav-kv-item"><span>Priorité</span><strong>${esc(ticket.priority)}</strong></div>
                <div class="sav-kv-item"><span>Statut</span><strong>${esc(ticket.status)}</strong></div>
                <div class="sav-kv-item"><span>Responsable</span><strong>${esc(ticket.owner)}</strong></div>
                <div class="sav-kv-item"><span>Action attendue</span><strong>${esc(waitingAction)}</strong></div>
                <div class="sav-kv-item"><span>Créé le</span><strong>${esc(ticket.createdAt)}</strong></div>
                <div class="sav-kv-item"><span>Dernière mise à jour</span><strong>${esc(getSavLastActivity(ticket))}</strong></div>
                <div class="sav-kv-item"><span>SLA</span><strong>${esc(new Date(ticket.slaDueAt).toLocaleString("fr-FR"))}</strong></div>
                ${contact.role ? `<div class="sav-kv-item"><span>Fonction</span><strong>${esc(contact.role)}</strong></div>` : ""}
                ${contact.availability ? `<div class="sav-kv-item"><span>Disponibilité</span><strong>${esc(contact.availability)}</strong></div>` : ""}
                ${contact.email ? `<div class="sav-kv-item"><span>Email</span><strong><a class="sav-link" href="mailto:${esc(contact.email)}">${esc(contact.email)}</a></strong></div>` : ""}
                ${contact.phone ? `<div class="sav-kv-item"><span>Téléphone</span><strong>${esc(contact.phone)}</strong></div>` : ""}
                ${ticket.cykeId ? `<div class="sav-kv-item"><span>ID Cyke</span><strong class="sav-linkish">${esc(ticket.cykeId)}</strong></div>` : ""}
                ${ticket.clientNotificationStatus ? `<div class="sav-kv-item"><span>Notification client</span><strong>${esc(ticket.clientNotificationStatus)}</strong></div>` : ""}
                ${ticket.clientAutoCloseAt ? `<div class="sav-kv-item"><span>Clôture automatique</span><strong>${esc(new Date(ticket.clientAutoCloseAt).toLocaleString("fr-FR"))}</strong></div>` : ""}
              </div>
              ${tagsMarkup ? `<div class="chip-cloud">${tagsMarkup}</div>` : ""}
            </section>
            ${
              sourceMeta
                ? `
                  <section class="sav-section">
                    <div class="sav-section-head">
                      <div>
                        <p class="eyebrow">Contexte opérationnel</p>
                        <h3>${esc(sourceMeta.title)}</h3>
                      </div>
                      <button class="btn soft sm sav-source-action" onclick="openTicketSourceContext()">${esc(sourceMeta.actionLabel || getSavSourceActionLabel(ticket))}</button>
                    </div>
                    <div class="sav-context-card">
                      <p class="mini">${esc(sourceMeta.line1)}</p>
                      <p class="mini">${esc(sourceMeta.line2)}</p>
                      <p class="mini">${esc(ticket.summary)}</p>
                    </div>
                  </section>
                `
                : ""
            }
            <section class="sav-section">
              <div class="sav-section-head">
                <div>
                  <p class="eyebrow">Journal du ticket</p>
                  <h3>Historique système</h3>
                </div>
              </div>
              <div class="sav-stream">
                ${eventMarkup || "<div class='empty-state'>Aucun événement système pour ce ticket.</div>"}
              </div>
            </section>
            <section class="sav-section">
              <div class="sav-section-head">
                <div>
                  <p class="eyebrow">Échanges</p>
                  <h3>Notes et réponses</h3>
                </div>
              </div>
              <div class="sav-stream">
                ${messageMarkup || "<div class='empty-state'>Aucun échange encore enregistré.</div>"}
              </div>
            </section>
            <section class="sav-section">
              <div class="sav-section-head">
                <div>
                  <p class="eyebrow">Prochaine action</p>
                  <h3>Répondre ou mettre à jour le ticket</h3>
                </div>
              </div>
              <div class="sav-compose-grid">
                <div class="field field-wide">
                  <label for="sav-message-text">Message</label>
                  <textarea id="sav-message-text" placeholder="Résolution, prochaine action, note interne ou réponse client."></textarea>
                </div>
                <div class="sav-compose-row">
                  <div class="field">
                    <label for="sav-compose-kind">Type de message</label>
                    <select id="sav-compose-kind" onchange="updateSavComposerState()">
                      <option value="public">Réponse client</option>
                      <option value="internal">Note interne</option>
                    </select>
                  </div>
                  <div class="field">
                    <label for="sav-detail-status">Statut après action</label>
                    <select id="sav-detail-status">
                      ${SAV_STATUS_OPTIONS.map((status) => `<option${ticket.status === status ? " selected" : ""}>${esc(status)}</option>`).join("")}
                    </select>
                  </div>
                  <div class="field">
                    <label for="sav-detail-owner">Responsable</label>
                    <select id="sav-detail-owner">
                      ${SAV_OWNER_OPTIONS.map((owner) => `<option${ticket.owner === owner ? " selected" : ""}>${esc(owner)}</option>`).join("")}
                    </select>
                  </div>
                </div>
                <div class="field field-wide">
                  <label for="sav-attachment-input">Pièces jointes</label>
                  <input id="sav-attachment-input" type="file" accept="image/*,.csv,text/csv" multiple onchange="handleSavAttachmentInput(this.files)" />
                  <p class="mini">Images ou CSV uniquement · 10 MB maximum par fichier.</p>
                  <div id="sav-attachment-preview" class="sav-attachment-preview"></div>
                </div>
                <div class="sav-compose-options">
                  <label class="sav-check" id="sav-notify-row"><input id="sav-notify-client" type="checkbox" checked />Notifier le client</label>
                </div>
                <div class="overlay-actions">
                  <button id="sav-compose-submit" class="btn primary" onclick="submitSavAction()">Envoyer la réponse</button>
                  <button class="btn soft" onclick="renderSavPage()">Annuler</button>
                  <button class="btn" onclick="openSavInAdvanced()">Ouvrir en vue avancée</button>
                </div>
              </div>
            </section>
          </div>
        `;
      }

      function openSavTicket(ticketId) {
        if (!ticketId) {
          return;
        }
        savOpenTicketId = ticketId;
        savPendingAttachments = [];
        if (currentPage !== "sav") {
          navigate("sav");
        }
        renderSavPage();
      }

      function applySavTicketMetaChanges(ticket, nextStatus, nextOwner) {
        let changed = false;
        if (ticket.status !== nextStatus) {
          pushTicketEvent(ticket, "Statut mis à jour", ticket.status + " -> " + nextStatus);
          ticket.status = nextStatus;
          changed = true;
        }
        if (ticket.owner !== nextOwner) {
          pushTicketEvent(ticket, "Responsable mis à jour", ticket.owner + " -> " + nextOwner);
          ticket.owner = nextOwner;
          changed = true;
        }
        return changed;
      }

      function updateSavTicketMeta() {
        const ticket = SAV_TICKETS.find((entry) => entry.id === savOpenTicketId);
        if (!ticket) {
          return;
        }
        const nextStatus = document.getElementById("sav-detail-status").value;
        const nextOwner = document.getElementById("sav-detail-owner").value;
        if (applySavTicketMetaChanges(ticket, nextStatus, nextOwner)) {
          persistSavTickets();
          renderSavPage();
        }
      }

      function updateSavComposerState() {
        const kindNode = document.getElementById("sav-compose-kind");
        const submitNode = document.getElementById("sav-compose-submit");
        const notifyRow = document.getElementById("sav-notify-row");
        if (!kindNode || !submitNode || !notifyRow) {
          return;
        }
        const isInternal = kindNode.value === "internal";
        submitNode.textContent = isInternal ? "Ajouter la note" : "Envoyer la réponse";
        notifyRow.style.display = isInternal ? "none" : "inline-flex";
      }

      function formatBytes(size) {
        const value = Number(size || 0);
        if (!value) {
          return "0 o";
        }
        if (value >= 1024 * 1024) {
          return (value / (1024 * 1024)).toFixed(1).replace(".", ",") + " MB";
        }
        if (value >= 1024) {
          return Math.round(value / 1024) + " KB";
        }
        return value + " o";
      }

      function renderSavPendingAttachments() {
        const node = document.getElementById("sav-attachment-preview");
        if (!node) {
          return;
        }
        node.innerHTML = savPendingAttachments.length
          ? savPendingAttachments
              .map(
                (attachment, index) => `
                  <div class="sav-attachment-pill">
                    <div>
                      <strong>${esc(attachment.name)}</strong>
                      <span>${esc(formatBytes(attachment.size))}</span>
                    </div>
                    <button class="sav-attachment-remove" type="button" onclick="removeSavPendingAttachment(${index})">Retirer</button>
                  </div>
                `
              )
              .join("")
          : "";
      }

      function removeSavPendingAttachment(index) {
        savPendingAttachments.splice(index, 1);
        renderSavPendingAttachments();
      }

      function readSavAttachment(file) {
        return new Promise((resolve, reject) => {
          const type = String(file.type || "");
          const reader = new FileReader();
          reader.onload = () =>
            resolve({
              id: "att-" + Date.now() + "-" + Math.random().toString(16).slice(2, 7),
              name: file.name,
              mimeType: type || (file.name.toLowerCase().endsWith(".csv") ? "text/csv" : "application/octet-stream"),
              size: file.size,
              dataUrl: typeof reader.result === "string" ? reader.result : null,
            });
          reader.onerror = () => reject(new Error("Lecture impossible pour " + file.name));
          reader.readAsDataURL(file);
        });
      }

      async function handleSavAttachmentInput(fileList) {
        const files = Array.from(fileList || []);
        if (!files.length) {
          return;
        }
        for (const file of files) {
          const lowerName = String(file.name || "").toLowerCase();
          const isImage = String(file.type || "").startsWith("image/");
          const isCsv = lowerName.endsWith(".csv") || file.type === "text/csv";
          if (!isImage && !isCsv) {
            alert("Seules les images et les fichiers CSV sont autorisés.");
            continue;
          }
          if (file.size > 10 * 1024 * 1024) {
            alert("Le fichier " + file.name + " dépasse 10 MB.");
            continue;
          }
          try {
            savPendingAttachments.push(await readSavAttachment(file));
          } catch (error) {
            console.warn(error);
          }
        }
        const input = document.getElementById("sav-attachment-input");
        if (input) {
          input.value = "";
        }
        renderSavPendingAttachments();
      }

      function submitSavAction() {
        const ticket = SAV_TICKETS.find((entry) => entry.id === savOpenTicketId);
        const field = document.getElementById("sav-message-text");
        const kindNode = document.getElementById("sav-compose-kind");
        const statusNode = document.getElementById("sav-detail-status");
        const ownerNode = document.getElementById("sav-detail-owner");
        const notifyNode = document.getElementById("sav-notify-client");
        if (!ticket || !field || !kindNode || !statusNode || !ownerNode) {
          return;
        }
        const value = field.value.trim();
        const internal = kindNode.value === "internal";
        const nextStatus = statusNode.value;
        const nextOwner = ownerNode.value;
        const notifyClient = Boolean(notifyNode && notifyNode.checked && !internal);
        const previousStatus = ticket.status;
        let changed = applySavTicketMetaChanges(ticket, nextStatus, nextOwner);

        if (value || savPendingAttachments.length) {
          ticket.messages.push({
            kind: internal ? "internal" : "public",
            author: internal ? "Ops Cargonautes" : "Réponse Cargonautes",
            text: value,
            at: new Date().toLocaleString("fr-FR"),
            attachments: savPendingAttachments.slice(),
          });
          pushTicketEvent(
            ticket,
            internal ? "Note interne ajoutée" : "Réponse client ajoutée",
            value ? value.slice(0, 96) : "Pièce jointe ajoutée"
          );
          field.value = "";
          savPendingAttachments = [];
          changed = true;
        }

        if (internal && previousStatus === "Ouvert" && nextStatus === "Ouvert") {
          pushTicketEvent(ticket, "Statut mis à jour", "Ouvert -> En cours");
          ticket.status = "En cours";
          changed = true;
        }

        if (notifyClient) {
          ticket.clientNotificationStatus = "Notification client préparée";
          pushTicketEvent(ticket, "Notification client", "Une réponse client est prête à être envoyée depuis Entrepox.");
          ticket.waitingOn = "client";
          changed = true;
        } else if (internal) {
          ticket.waitingOn = "cargonautes";
        } else if (nextStatus === "Résolu") {
          ticket.waitingOn = null;
        }

        if (!changed) {
          return;
        }

        persistSavTickets();
        renderSavPage();
      }

      function refreshSavAutomation() {
        let changed = false;
        SAV_TICKETS.forEach((ticket) => {
          if (!ticket.clientAutoCloseAt || ticket.status === "Résolu" || ticket.clientRepliedAt) {
            return;
          }
          const deadline = new Date(ticket.clientAutoCloseAt);
          if (Number.isNaN(deadline.getTime()) || deadline > new Date()) {
            return;
          }
          ticket.status = "Résolu";
          ticket.clientNotificationStatus = "Clôture automatique exécutée";
          pushTicketEvent(ticket, "Clôture automatique", "Sans réponse client sous 48h, le ticket a été clôturé automatiquement.");
          changed = true;
        });
        if (changed) {
          persistSavTickets();
        }
      }

      function createSavTicketEntry(payload) {
        const nextNumber = 80 + SAV_TICKETS.length + 1;
        const id = "TKT-" + String(nextNumber).padStart(3, "0");
        const sourceLabels = {
          prep: "Prépa",
          shipment: "BL / expe",
          client: "Client",
          lot: "Lot",
          reception: "Réception",
          commande: "Commande",
        };
        const createdAt = new Date().toLocaleString("fr-FR");
        const autoCloseHours = typeof payload.clientAutoCloseHours === "number" ? payload.clientAutoCloseHours : null;
        const defaultContact = getPrimaryClientContact(payload.clientId);
        const ticket = {
          id: id,
          clientId: payload.clientId,
          cykeId: payload.cykeId || "",
          sourceType: payload.sourceType,
          sourceId: payload.sourceId || "À qualifier",
          sourceLabel: payload.sourceLabel || (sourceLabels[payload.sourceType] || "Source") + " · " + (payload.sourceId || "À qualifier"),
          status: payload.status || "Ouvert",
          priority: payload.priority || "Normale",
          owner: payload.owner || "ADV Cargonautes",
          slaDueAt:
            payload.slaDueAt ||
            new Date(Date.now() + ((payload.priority === "Critique" ? 2 : payload.priority === "Haute" ? 6 : 12) * 3600000)).toISOString(),
          title: payload.title || "Ticket opérationnel à qualifier",
          summary: payload.summary || "Créé depuis l’administration Entrepox.",
          createdAt: createdAt,
          tags: Array.isArray(payload.tags) ? payload.tags : ["wms"],
          events: Array.isArray(payload.events) && payload.events.length ? payload.events : [{ label: "Ticket créé", detail: "Créé depuis l’administration Entrepox.", at: createdAt }],
          messages: Array.isArray(payload.messages) && payload.messages.length ? payload.messages : [{ kind: "internal", author: "Entrepox", text: payload.summary || "Créé depuis l’administration Entrepox.", at: createdAt }],
          clientAutoCloseHours: autoCloseHours,
          clientAutoCloseAt: autoCloseHours ? new Date(Date.now() + autoCloseHours * 3600000).toISOString() : null,
          clientNotificationStatus: payload.clientNotificationStatus || null,
          publicReplyLink: payload.publicReplyLink || ("tickets-sav.html?ticket=" + id.toLowerCase()),
          clientRepliedAt: payload.clientRepliedAt || null,
          waitingOn: payload.waitingOn || "cargonautes",
          contactName: payload.contactName || (defaultContact ? defaultContact.nom : ""),
          contactRole: payload.contactRole || (defaultContact ? defaultContact.role : ""),
          contactAvailability: payload.contactAvailability || (defaultContact ? defaultContact.availability : ""),
          contactEmail: payload.contactEmail || (defaultContact ? defaultContact.email : ""),
          contactPhone: payload.contactPhone || (defaultContact ? defaultContact.tel : ""),
        };
        SAV_TICKETS.unshift(ticket);
        savOpenTicketId = id;
        persistSavTickets();
        return ticket;
      }

      function buildReceptionTicketPayload(entry) {
        const clientName = getClientNameById(entry.clientId);
        const anomaly = entry.anomaly || { title: "Anomalie de réception", detail: "À qualifier", severity: "Normale" };
        return {
          clientId: entry.clientId,
          sourceType: "reception",
          sourceId: entry.id,
          sourceLabel: "Réception · " + entry.id,
          title: anomaly.title,
          priority: anomaly.severity || "Normale",
          owner: "ADV Cargonautes",
          tags: ["réception", "anomalie", "client"],
          summary:
            clientName +
            " · " +
            getReceptionDateLabel(entry.receptionDate) +
            " · arrivée " +
            (entry.arrivalTime || "à confirmer") +
            " · saisi par " +
            (entry.agent || "à confirmer") +
            " · transporteur " +
            (entry.transporteur || "à confirmer") +
            ". " +
            anomaly.detail,
          clientAutoCloseHours: 48,
          clientNotificationStatus: "Notification client à envoyer",
          events: [
            { label: "Ticket créé", detail: "Anomalie enregistrée à la réception " + entry.id + ".", at: new Date().toLocaleString("fr-FR") },
            { label: "Notification client prévue", detail: "Informer le client et rappeler la clôture automatique après 48h sans réponse.", at: new Date().toLocaleString("fr-FR") },
          ],
          messages: [
            {
              kind: "public",
              author: "Notification Cargonautes",
              text:
                "Bonjour, une anomalie a été constatée à la réception " +
                entry.id +
                " : " +
                anomaly.detail +
                " Sans réponse de votre part sous 48h, ce ticket sera clôturé automatiquement. Si un traitement est nécessaire, merci de répondre via le lien du ticket.",
              at: new Date().toLocaleString("fr-FR"),
            },
            {
              kind: "internal",
              author: "Entrepox",
              text: "Préparer l’envoi de la notification client avec le lien du ticket.",
              at: new Date().toLocaleString("fr-FR"),
            },
          ],
        };
      }

      function openQuickTicket(payload) {
        openOverlay("quickTicket", payload || {});
      }

      function saveQuickTicket() {
        createSavTicketEntry({
          clientId: document.getElementById("quick-ticket-client").value,
          cykeId: document.getElementById("quick-ticket-cyke-id").value.trim(),
          sourceType: document.getElementById("quick-ticket-source-type").value,
          sourceId: document.getElementById("quick-ticket-source-id").value.trim() || "À qualifier",
          sourceLabel: overlayState && overlayState.payload ? overlayState.payload.sourceLabel : null,
          title: document.getElementById("quick-ticket-title").value.trim() || "Ticket opérationnel à qualifier",
          priority: document.getElementById("quick-ticket-priority").value,
          owner: document.getElementById("quick-ticket-owner").value,
          summary: document.getElementById("quick-ticket-summary").value.trim() || "Créé depuis l’administration Entrepox.",
          tags: overlayState && overlayState.payload && Array.isArray(overlayState.payload.tags) ? overlayState.payload.tags : [document.getElementById("quick-ticket-source-type").value, "wms"],
        });
        closeOverlay();
        navigate("sav");
        renderSavPage();
      }

      function openSavInAdvanced() {
        if (!savOpenTicketId) {
          return;
        }
        window.location.href = "tickets-sav.html?ticket=" + savOpenTicketId.toLowerCase();
      }

      function openTicketSourceContext() {
        const ticket = SAV_TICKETS.find((entry) => entry.id === savOpenTicketId);
        if (!ticket) {
          return;
        }
        const sourceMeta = buildTicketSourceMeta(ticket);
        if (!sourceMeta) {
          return;
        }
        const params = new URLSearchParams();
        params.set("page", sourceMeta.page);
        if (sourceMeta.prepId) {
          params.set("prep", sourceMeta.prepId);
        }
        if (sourceMeta.clientId) {
          params.set("client", sourceMeta.clientId);
        }
        if (sourceMeta.receptionId) {
          params.set("reception", sourceMeta.receptionId);
        }
        if (sourceMeta.dateKey && sourceMeta.cutoffId && sourceMeta.commandId) {
          params.set("date", sourceMeta.dateKey);
          params.set("cutoff", sourceMeta.cutoffId);
          params.set("commande", sourceMeta.commandId);
        }
        window.history.replaceState({}, "", "index.html?" + params.toString());
        navigate(sourceMeta.page);
        if (sourceMeta.page === "preparation" && sourceMeta.prepId) {
          resetPrepFilters();
          prepExpanded.add(sourceMeta.prepId);
          renderPrepListFiltered();
          lancerCartons();
        }
        if (sourceMeta.page === "clients" && sourceMeta.clientId && clientsDB[sourceMeta.clientId]) {
          openClientFiche(sourceMeta.clientId);
        }
        if (sourceMeta.page === "reception") {
          renderReceptionPage();
        }
        if (sourceMeta.page === "dashboard" && sourceMeta.dateKey && sourceMeta.cutoffId) {
          openCutoffKey = sourceMeta.cutoffId;
          openDateKey = sourceMeta.dateKey;
          renderCutoffGrid();
        }
      }

      function applyUrlContext() {
        const params = new URLSearchParams(window.location.search);
        const page = params.get("page");
        const prepId = params.get("prep");
        const clientId = params.get("client");
        const lotId = params.get("lot");
        const receptionId = params.get("reception");
        const dateKey = params.get("date");
        const cutoffId = params.get("cutoff");
        const commandId = params.get("commande");
        if (page && titles[page]) {
          navigate(page);
        }
        if (prepId) {
          navigate("preparation");
          resetPrepFilters();
          prepExpanded.add(prepId);
          renderPrepListFiltered();
          lancerCartons();
          setTimeout(() => {
            const node = document.getElementById(prepId);
            if (node) {
              node.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }, 80);
        }
        if (clientId && clientsDB[clientId]) {
          navigate("clients");
          openClientFiche(clientId);
        }
        if (receptionId) {
          navigate("reception");
          renderReceptionPage();
        }
        if (dateKey && cutoffId) {
          navigate("dashboard");
          openCutoffKey = cutoffId;
          openDateKey = dateKey;
          renderCutoffGrid();
          if (commandId) {
            setTimeout(() => {
              const node = document.querySelector('[data-command-id="' + commandId + '"]');
              if (node) {
                node.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }, 80);
          }
        }
        if (lotId) {
          openStockByLot(lotId);
        }
      }

      function renderPalettes() {
        renderSiteThemeConfig();
        renderSiteBannerConfig();
        renderSiteBannerPreview();
        renderSiteOperationsConfig();
        document.getElementById("palette-count").textContent = palettesDB.length + " palettes";
        document.getElementById("palettes-list").innerHTML = palettesDB
          .map(
            (palette) =>
              '<article class="carton-card"><div class="row-between"><div><span class="eyebrow">' +
              esc(palette.dims) +
              "</span><h3>" +
              esc(palette.label) +
              "</h3></div><span class='badge " +
              (palette.defaut ? "bc'>Défaut" : palette.actif ? "bm'>Actif" : "bg'>Inactif") +
              "</span></div><p class='mini'>Poids max " +
              esc(String(palette.poidsMax)) +
              " kg</p><div class='button-row'><button class='btn soft sm' onclick='setDefautPalette(\"" +
              palette.id +
              "\")' " +
              (palette.defaut ? "disabled" : "") +
              ">Mettre par défaut</button><button class='btn sm' onclick='togglePalette(\"" +
              palette.id +
              "\")' " +
              (palette.defaut ? "disabled" : "") +
              ">" +
              (palette.actif ? "Désactiver" : "Activer") +
              "</button><button class='btn danger sm' onclick='removePalette(\"" +
              palette.id +
              "\")' " +
              (palette.defaut ? "disabled" : "") +
              ">Supprimer</button></div></article>"
          )
          .join("");
        renderHistorique();
      }

      function setDefautPalette(id) {
        const before = cloneData(palettesDB);
        palettesDB.forEach((palette) => {
          palette.defaut = palette.id === id;
          if (palette.id === id) {
            palette.actif = true;
          }
        });
        logHistorique("Palette par défaut modifiée", before, cloneData(palettesDB));
        renderPalettes();
      }

      function togglePalette(id) {
        const palette = palettesDB.find((item) => item.id === id);
        if (!palette || palette.defaut) {
          return;
        }
        const before = cloneData(palette);
        palette.actif = !palette.actif;
        logHistorique("Palette activée/désactivée", before, cloneData(palette));
        renderPalettes();
      }

      function removePalette(id) {
        const palette = palettesDB.find((item) => item.id === id);
        if (!palette || palette.defaut) {
          return;
        }
        const before = cloneData(palette);
        archiveEntity("palette", palette, {
          reason: "Palette retirée de la configuration active",
        });
        palettesDB = palettesDB.filter((item) => item.id !== id);
        logHistorique("Palette supprimée", before, null);
        renderPalettes();
      }

      function addPaletteType() {
        const label = document.getElementById("palette-label").value.trim();
        const dims = document.getElementById("palette-dims").value.trim();
        const poidsMax = Number(document.getElementById("palette-weight").value);
        if (!label || !dims || !poidsMax) {
          return;
        }
        const entry = {
          id: "plt-" + Date.now(),
          label: label,
          dims: dims,
          poidsMax: poidsMax,
          defaut: false,
          actif: true,
        };
        palettesDB.push(entry);
        logHistorique("Palette créée", null, cloneData(entry));
        document.getElementById("palette-label").value = "";
        document.getElementById("palette-dims").value = "";
        document.getElementById("palette-weight").value = "";
        renderPalettes();
      }

      function toggleHistorique() {
        historyVisible = !historyVisible;
        document.getElementById("historique-panel").classList.toggle("visible", historyVisible);
        renderHistorique();
      }

      function renderHistorique() {
        document.getElementById("historique-panel").innerHTML =
          '<div class="overlay-head"><div><p class="eyebrow">Historique</p><h3>Journal palettes</h3></div><button class="btn" onclick="toggleHistorique()">Fermer</button></div>' +
          historiqueLog
            .map(
              (entry) =>
                '<article class="history-entry"><strong>' +
                esc(entry.action) +
                "</strong><span class='mini'>" +
                esc(entry.date + " · " + entry.user) +
                "</span><span class='mini'>Avant : " +
                esc(typeof entry.avant === "string" ? entry.avant : JSON.stringify(entry.avant || {})) +
                "</span><span class='mini'>Après : " +
                esc(typeof entry.apres === "string" ? entry.apres : JSON.stringify(entry.apres || {})) +
                "</span></article>"
            )
            .join("");
      }

      function logHistorique(action, avant, apres) {
        historiqueLog.unshift({
          date: new Date().toLocaleString("fr-FR"),
          user: "Admin Cargonautes",
          action: action,
          avant: avant,
          apres: apres,
        });
      }

      function initApp() {
        if (appBooted) {
          return;
        }
        appBooted = true;
        applySiteTheme(siteThemeId);
        loadSidebarState();
        updateTopbarMode();
        loadSavTickets();
        refreshSavAutomation();
        const shiftPill = document.getElementById("shift-pill");
        if (shiftPill) {
          shiftPill.textContent = "Shift " + getCurrentShift();
          shiftPill.className = "badge " + shiftBadgeClass(getCurrentShift());
        }
        renderCutoffGrid();
        renderReceptionPage();
        renderPalettes();
        renderClientCards();
        renderStockPage();
        renderInventoryPage();
        renderPrepList();
        lancerCartons();
        renderSavPage();
        populateDetailTable();
        applyUrlContext();
        document.addEventListener("click", (event) => {
          if (!event.target.closest(".dropdown-wrap")) {
            closeAllDropdowns();
          }
          if (!event.target.closest(".sav-multi")) {
            closeSavFilterMenus();
          }
          if (!event.target.closest(".combo-field")) {
            closeReceptionCombos();
            closeStockFilterCombos();
            closePrepFilterCombos();
          }
        });
        document.addEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            closeSavFilterMenus();
            closeReceptionCombos();
            closeStockFilterCombos();
            closePrepFilterCombos();
          }
          if (event.key === "Escape" && overlayState) {
            if (overlayState.type === "clientConsumablePicker") {
              returnToClientOverview();
              return;
            }
            closeOverlay();
          }
        });
        window.addEventListener("storage", (event) => {
          if (event.key === SAV_STORAGE_KEY || LEGACY_SAV_STORAGE_KEYS.includes(event.key)) {
            loadSavTickets();
            if (currentPage === "sav") {
              renderSavPage();
            }
          }
        });
      }

      document.addEventListener("DOMContentLoaded", initApp);
      if (document.readyState !== "loading") {
        setTimeout(initApp, 0);
      }
    
