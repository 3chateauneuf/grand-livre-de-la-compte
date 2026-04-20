# Entrepox · Spec V1 · Préparateur Mobile Scan-First

## But
Créer une future interface mobile pour préparateurs qui fonctionne d'abord par scan, puis par validation rapide.

Objectifs métier:
- réduire les erreurs de préparation
- renforcer la traçabilité
- lier chaque action à un objet réel
- permettre le signalement immédiat d'un incident
- rester compatible avec mobile caméra, puis terminal scanner

## Principes produit
- une action principale par écran
- peu de texte
- gros feedback immédiat
- historique de tous les scans
- aucun effacement réel: toute action reste archivée
- compatibilité native avec codes-barres sur:
  - préparation / BL
  - zone
  - emplacement
  - produit / SKU
  - lot
  - palette
  - carton

## Architecture d'écrans

### 1. Accueil préparateur
Fonction:
- point d'entrée du préparateur

Blocs:
- `Scanner une préparation`
- `Préparations en cours`
- `Incidents ouverts`
- `Synchronisation`

Informations visibles:
- nom opérateur
- shift
- nombre de prépas ouvertes
- nombre d'incidents non clos

Actions:
- `Scanner`
- `Reprendre`
- `Voir incidents`

## 2. Scan préparation
Fonction:
- ouvrir une mission à partir d'un BL ou d'une préparation

Objets acceptés:
- code préparation
- code BL / expédition

Résultats possibles:
- `Préparation reconnue`
- `BL reconnu`
- `Code inconnu`
- `Préparation déjà clôturée`

Sortie:
- ouvre `Préparation active`

## 3. Préparation active
Fonction:
- écran principal de travail

Header:
- `préparationCode`
- `blCode`
- `clientName`
- `cutoffLabel`
- `progressLabel` ex. `3 / 12 lignes`

Bloc mission:
- `destinationName`
- `shippingMethod`
- `currentLineStatus`

Bloc ligne courante:
- `expectedLocationCode`
- `expectedProductLabel`
- `expectedQuantity`
- `expectedLot` si applicable
- `instructionShort`

Actions:
- `Scanner emplacement`
- `Scanner produit`
- `Valider la ligne`
- `Incident`
- `Pause`

## 4. Scan emplacement
Fonction:
- vérifier que l'opérateur est au bon endroit

Entrée:
- scan code emplacement

Comparaison:
- `scannedLocationCode` vs `expectedLocationCode`

Résultats:
- `Emplacement correct`
- `Mauvais emplacement`
- `Zone non autorisée`
- `Emplacement inconnu`

Règle:
- si mauvais emplacement, ne pas permettre d'avancer sans override explicite futur

## 5. Scan produit
Fonction:
- vérifier produit, puis lot si applicable

Entrées possibles:
- code produit
- code carton
- code palette
- code lot

Résultats:
- `Produit reconnu`
- `Produit incorrect`
- `Lot attendu`
- `Lot non attendu`
- `Quantité insuffisante`

Règles:
- si client exige contrôle lot, le scan lot devient obligatoire
- si DLC / lot sensible, afficher alerte immédiate

## 6. Validation ligne
Fonction:
- confirmer qu'une ligne est prélevée correctement

Champs visibles:
- `productLabel`
- `preparedQuantity`
- `expectedQuantity`
- `locationCode`
- `lotCode`
- `expiryDate`

Actions:
- `Valider la ligne`
- `Corriger quantité`
- `Signaler incident`

État après validation:
- `Prélevée`
- ou `À contrôler` selon client / produit / lot

## 7. Incident rapide
Fonction:
- ouvrir un ticket lié à la ligne ou à la préparation

Motifs rapides:
- `Produit introuvable`
- `Stock insuffisant`
- `Lot incohérent`
- `DLC incohérente`
- `Mauvais emplacement`
- `Casse`
- `BL / document`
- `Autre`

Champs:
- `incidentType`
- `incidentNote`
- `notifyClient` futur
- `attachment` optionnelle

Pièces jointes prévues:
- photo
- CSV léger si besoin futur

Sortie:
- création d'un ticket source `prep`, `shipment`, `lot` ou `location`

## 8. Clôture préparation
Fonction:
- fermer la mission

Résumé:
- `linesTotal`
- `linesDone`
- `linesWithIncident`
- `startedAt`
- `closedAt`
- `operatorName`

Actions:
- `Clôturer`
- `Passer au contrôle`
- `Laisser ouverte`

## États métier

### États de préparation
- `À faire`
- `En cours`
- `Prélevée`
- `À contrôler`
- `Incident`
- `Bloquée`
- `Clôturée`

### États de ligne
- `À prélever`
- `Emplacement validé`
- `Produit validé`
- `Lot validé`
- `Prélevée`
- `Incident`
- `Bloquée`

## Événements de scan
Tout scan doit créer un événement.

Structure minimale:
- `id`
- `timestamp`
- `userId`
- `deviceId`
- `prepId`
- `lineId`
- `entityType`
- `entityCode`
- `expectedEntityType`
- `expectedEntityCode`
- `result`
- `locationId`
- `comment`

Valeurs `entityType`:
- `preparation`
- `shipment`
- `zone`
- `location`
- `product`
- `lot`
- `palette`
- `carton`

Valeurs `result`:
- `ok`
- `warning`
- `error`
- `unknown`

## Liens avec le modèle futur barcode
Chaque objet important devra porter:
- `barcodeValue`
- `barcodeType`
- `entityType`
- `entityId`
- `printedAt`
- `archivedAt`

Type de code recommandé V1:
- `Code128`

Évolutions futures possibles:
- `QR`
- `GS1 / SSCC` pour palettes

## Données requises côté stockage
Le mobile scan-first suppose un vrai modèle d'emplacements.

Hiérarchie cible:
- `site`
- `zone`
- `aisle`
- `bay`
- `level`
- `location`

Champs minimum d'un emplacement:
- `id`
- `locationCode`
- `zoneCode`
- `barcodeValue`
- `temperatureZone`
- `locationType`
- `allowedClientIds`
- `active`

## Règles de validation métier
- impossible de valider une ligne si l'objet scanné ne correspond pas à l'attendu
- impossible de faire disparaître un incident: il peut être résolu, jamais effacé
- si un client impose lot / DLC, ce contrôle doit être explicite
- si une ligne est bloquée, la préparation ne peut pas être clôturée sans décision
- toute correction doit être historisée

## Messages UI recommandés

Succès:
- `Emplacement correct`
- `Produit reconnu`
- `Lot validé`
- `Ligne validée`

Alerte:
- `Lot non attendu`
- `DLC courte à vérifier`
- `Quantité différente`

Erreur:
- `Mauvais emplacement`
- `Produit incorrect`
- `Code inconnu`
- `Préparation déjà clôturée`

## Contraintes UX mobile
- boutons larges
- zone caméra dominante sur les écrans de scan
- retour haptique / visuel futur si possible
- aucun tableau dense
- texte secondaire limité
- un seul objectif clair par écran

## Compatibilité devices
V1:
- navigateur mobile + caméra

V2:
- terminal scanner
- mode scan continu

V3:
- éventuel wrapper applicatif si besoin terrain

## Priorité d'implémentation
1. modèle `barcode + scan_events`
2. modèle `zones + emplacements`
3. scan `préparation / BL`
4. scan `emplacement`
5. scan `produit / lot`
6. validation de ligne
7. incident rapide
8. clôture

## Décision produit à retenir
Le système doit guider l'opérateur.

Donc:
- le mobile ne doit pas être un formulaire libre
- il doit dire quoi scanner maintenant
- vérifier le scan
- enregistrer le résultat
- proposer l'action suivante

Cette spec doit servir de base aux futurs travaux sur:
- l'interface préparateur mobile
- le système barcode
- le stockage et les emplacements
- la traçabilité scan-first d'Entrepox
