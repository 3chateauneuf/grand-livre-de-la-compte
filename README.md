# Mordologie

Prototype web local pour suivre le temps d'une equipe avec deux lectures:

- un espace cadre pour saisir vite, mettre en pause, reprendre un projet connu et corriger facilement
- une vue manager pour lire la repartition des efforts, les pourcentages et l'evolution par semaines

## Ouverture

Lancez un petit serveur local depuis le dossier du projet:

```bash
python3 -m http.server 8000
```

Puis ouvrez [http://localhost:8000](http://localhost:8000).

Evitez `file://` pour cette version, sinon le manifest, le service worker et certains comportements navigateur seront partiellement bloques.
En local, le service worker est desactive automatiquement pour eviter les versions cachees pendant les iterations UI.

## Mise en ligne

La version la plus simple de Mordologie en ligne est:

- front sur Vercel
- donnees sur Supabase
- sous-domaine dedie, par exemple `mordologie.eduardodo.com`

### Vercel

1. Importer ce repo GitHub dans Vercel
2. Laisser les reglages de build vides:
   - Framework preset: `Other`
   - Build command: vide
   - Output directory: vide
3. Deployer

Le fichier [vercel.json](/Users/ed/Documents/grand-livre-de-la-compte/vercel.json) suffit pour cette app statique.

### Domaine

Une fois le projet cree dans Vercel:

1. Ajouter le domaine `mordologie.eduardodo.com` dans les settings du projet
2. Copier la cible DNS demandee par Vercel
3. Dans GoDaddy, creer le CNAME correspondant

En general:

- type: `CNAME`
- nom: `mordologie`
- valeur: la cible fournie par Vercel

### Supabase

Le front pointe deja vers le projet Supabase configure dans [index.html](/Users/ed/Documents/grand-livre-de-la-compte/index.html).

Avant usage en production, verifier que la base contient bien:

- `users`
- `projects`
- `categories`
- `time_entries`
- `active_sessions`
- `reprise_actions`

Et que [db/server_shared_storage.sql](/Users/ed/Documents/grand-livre-de-la-compte/db/server_shared_storage.sql) a bien ete execute si tu veux le stockage partage serveur complet.

## Ce que contient cette version

- saisie chronometree avec pause et reprise
- saisie manuelle pour ajouter ou corriger une entree
- memoire projet avec categories, tags et lien d'interet
- agenda hebdomadaire des temps saisis
- vue manager avec filtre cargonaute, repartition par categorie ou objectifs, evolution hebdomadaire et tableaux de pilotage

## Base V1

- schema SQL: [db/schema.sql](/Users/ed/Documents/grand-livre-de-la-compte/db/schema.sql)
- seed SQL: [db/seed.sql](/Users/ed/Documents/grand-livre-de-la-compte/db/seed.sql)
- checks SQL: [db/checks.sql](/Users/ed/Documents/grand-livre-de-la-compte/db/checks.sql)
- regles d'ecriture: [db/WRITE_RULES.md](/Users/ed/Documents/grand-livre-de-la-compte/db/WRITE_RULES.md)
- auth + roles + RLS: [db/auth_rls.sql](/Users/ed/Documents/grand-livre-de-la-compte/db/auth_rls.sql)
- sync auth profiles: [db/auth_profile_sync.sql](/Users/ed/Documents/grand-livre-de-la-compte/db/auth_profile_sync.sql)
- stockage partage serveur: [db/server_shared_storage.sql](/Users/ed/Documents/grand-livre-de-la-compte/db/server_shared_storage.sql)
- staging import agenda: [db/agenda_import_staging.sql](/Users/ed/Documents/grand-livre-de-la-compte/db/agenda_import_staging.sql)
- exemple import Paulo: [db/import_paulo_week_2026_04_06.sql](/Users/ed/Documents/grand-livre-de-la-compte/db/import_paulo_week_2026_04_06.sql)

## Stockage

La version actuelle garde un cache local dans `localStorage`, mais peut maintenant utiliser Supabase comme source partagee pour:

- `time_entries` comme historique commun
- `active_sessions` comme verite serveur pour les chronos en cours ou en pause
- `session_audit_log` pour tracer les modifications quand la table existe

Pour activer ce mode partage, execute [db/server_shared_storage.sql](/Users/ed/Documents/grand-livre-de-la-compte/db/server_shared_storage.sql) dans Supabase.
Ce script ajoute aussi `session_audit_log` pour tracer les editions.

## Acces actuel

La version front actuelle utilise une identification legere par nom via un menu deroulant:

- on choisit un nom connu dans la barre haute
- l'app charge alors le bon profil `cadre / manager / admin`
- si `public.users` n'est pas lisible par `anon`, l'app garde un annuaire local de secours pour les profils reels

## Acces multi-utilisateur

La base reste preparee pour un mode plus strict `cadre / manager / admin` avec auth Supabase :

- `cadre` : ses propres temps
- `manager` : son equipe
- `admin` : tout

Les scripts [db/auth_rls.sql](/Users/ed/Documents/grand-livre-de-la-compte/db/auth_rls.sql) et [db/auth_profile_sync.sql](/Users/ed/Documents/grand-livre-de-la-compte/db/auth_profile_sync.sql) servent a cette future version plus verrouillee.
