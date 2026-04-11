# Grand Livre de la Comté

Prototype web local pour suivre le temps d'une equipe avec deux lectures:

- un espace cadre pour saisir vite, mettre en pause, reprendre un projet connu et corriger facilement
- une vue manager pour lire la repartition des efforts, les pourcentages et l'evolution par semaines

## Ouverture

Ouvrez [index.html](/Users/ed/Documents/New project/index.html) dans un navigateur.

## Ce que contient cette version

- saisie chronometree avec pause et reprise
- saisie manuelle pour ajouter ou corriger une entree
- memoire projet avec categories, tags et reference Notion
- agenda hebdomadaire des temps saisis
- vue manager avec filtre cargonaute, repartition par categorie, evolution hebdomadaire et tableaux de pilotage

## Base V1

- schema SQL: [db/schema.sql](/Users/ed/Documents/New project/db/schema.sql)
- seed SQL: [db/seed.sql](/Users/ed/Documents/New project/db/seed.sql)
- checks SQL: [db/checks.sql](/Users/ed/Documents/New project/db/checks.sql)
- regles d'ecriture: [db/WRITE_RULES.md](/Users/ed/Documents/New project/db/WRITE_RULES.md)
- auth + roles + RLS: [db/auth_rls.sql](/Users/ed/Documents/New project/db/auth_rls.sql)
- sync auth profiles: [db/auth_profile_sync.sql](/Users/ed/Documents/New project/db/auth_profile_sync.sql)

## Stockage

Toutes les donnees sont conservees localement dans `localStorage` sur le navigateur utilise.

## Acces multi-utilisateur

La base est maintenant preparee pour un mode `cadre / manager / admin` :

- `cadre` : ses propres temps
- `manager` : son equipe
- `admin` : tout

Le front sait deja adapter l'affichage si un profil Supabase Auth est relie a `users.auth_user_id` ou `users.email`.
Tant que cette liaison n'est pas configuree, l'app reste utilisable en `mode local`.
