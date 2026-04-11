# Grand Livre de la Comte

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

## Stockage

Toutes les donnees sont conservees localement dans `localStorage` sur le navigateur utilise.

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
