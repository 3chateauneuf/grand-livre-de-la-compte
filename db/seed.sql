-- Grand Livre de la Comté
-- V1 realistic seed data
-- Covers roughly the last 3 weeks from 2026-04-10

begin;

truncate table time_entries, projects, categories, users cascade;

insert into users (
  user_id,
  user_name,
  email,
  auth_user_id,
  role,
  team_name,
  managed_team_name,
  manager_user_id,
  weekly_capacity_hours,
  status,
  created_at,
  updated_at
) values
  ('USR-001', 'Claire Martin', 'claire.martin@grandlivre.fr', null, 'manager', 'Conseil Operations France', 'Conseil Operations France', null, 39.00, 'active', '2025-09-01T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('USR-002', 'Mehdi Laaroussi', 'mehdi.laaroussi@grandlivre.fr', null, 'cadre', 'Conseil Operations France', null, 'USR-001', 39.00, 'active', '2025-09-08T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('USR-003', 'Julie Renard', 'julie.renard@grandlivre.fr', null, 'cadre', 'Conseil Operations France', null, 'USR-001', 39.00, 'active', '2025-10-06T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('USR-004', 'Thomas Vignal', 'thomas.vignal@grandlivre.fr', null, 'cadre', 'Conseil Operations France', null, 'USR-001', 35.00, 'active', '2025-11-03T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('USR-005', 'Sofia Bernard', 'sofia.bernard@grandlivre.fr', null, 'manager', 'Conseil Operations France', 'Conseil Operations France', null, 39.00, 'active', '2025-08-25T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('USR-006', 'Eduardo Morales', 'eduardo.morales@grandlivre.fr', null, 'cadre', 'Conseil Operations France', null, 'USR-005', 39.00, 'active', '2025-12-01T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('USR-007', 'Luc Garnier', 'luc.garnier@grandlivre.fr', null, 'cadre', 'Conseil Operations France', null, 'USR-005', 39.00, 'active', '2025-10-20T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('USR-008', 'Admin Operations', 'admin@grandlivre.fr', null, 'admin', 'Conseil Operations France', null, null, 39.00, 'active', '2025-08-18T08:00:00Z', '2026-04-10T08:00:00Z');

insert into categories (
  activity_category_id,
  activity_category_label,
  kpi_category_label,
  team_name,
  active,
  created_at,
  updated_at
) values
  ('CAT-001', 'Production livrable', 'Delivery', 'Conseil Operations France', true, '2025-09-01T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('CAT-002', 'Atelier client', 'Delivery', 'Conseil Operations France', true, '2025-09-01T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('CAT-003', 'Support client', 'Support', 'Conseil Operations France', true, '2025-09-01T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('CAT-004', 'Pilotage projet', 'Management', 'Conseil Operations France', true, '2025-09-01T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('CAT-005', 'Management equipe', 'Management', 'Conseil Operations France', true, '2025-09-01T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('CAT-006', 'Avant-vente', 'Business', 'Conseil Operations France', true, '2025-09-01T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('CAT-007', 'Administration interne', 'Internal', 'Conseil Operations France', true, '2025-09-01T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('CAT-008', 'Formation', 'Learning', 'Conseil Operations France', true, '2025-09-01T08:00:00Z', '2026-04-10T08:00:00Z');

insert into projects (
  project_id,
  project_name,
  client_name,
  status,
  default_activity_category_id,
  default_activity_category_label,
  created_at,
  updated_at
) values
  ('PRJ-001', 'Monceau Retail Supply', 'Monceau Retail Group', 'active', 'CAT-001', 'Production livrable', '2025-12-01T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('PRJ-002', 'Asteria PMO Sinistres', 'Asteria Assurances', 'active', 'CAT-004', 'Pilotage projet', '2025-11-17T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('PRJ-003', 'Velinor Qualite Data', 'Velinor Pharma', 'active', 'CAT-002', 'Atelier client', '2026-01-12T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('PRJ-004', 'Dossier Elections 2026', 'Ville de Saint-Just', 'active', 'CAT-001', 'Production livrable', '2026-02-02T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('PRJ-005', 'Portail RH 2026', 'Groupe Novaris', 'active', 'CAT-001', 'Production livrable', '2026-01-05T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('PRJ-006', 'Support Finance Daily', 'Banque Helios', 'active', 'CAT-003', 'Support client', '2025-10-06T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('PRJ-007', 'Academy Managers', 'Interne', 'active', 'CAT-008', 'Formation', '2025-09-15T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('PRJ-008', 'CRM Pipeline Q2', 'Interne', 'active', 'CAT-007', 'Administration interne', '2026-01-19T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('PRJ-009', 'Offres Secteur Public', 'Interne', 'active', 'CAT-006', 'Avant-vente', '2025-12-15T08:00:00Z', '2026-04-10T08:00:00Z'),
  ('PRJ-010', 'Gouvernance Equipe France', 'Interne', 'active', 'CAT-005', 'Management equipe', '2025-09-01T08:00:00Z', '2026-04-10T08:00:00Z');

insert into time_entries (
  time_entry_id,
  entry_date,
  user_id,
  user_name,
  team_name,
  project_id,
  project_name,
  client_name,
  activity_category_id,
  activity_category_label,
  kpi_category_label,
  duration_minutes,
  duration_hours,
  task_label,
  source,
  status,
  created_at,
  updated_at
) values
  ('TE-000001', '2026-03-24', 'USR-001', 'Claire Martin', 'Conseil Operations France', 'PRJ-002', 'Asteria PMO Sinistres', 'Asteria Assurances', 'CAT-004', 'Pilotage projet', 'Management', 90, 1.50, 'Copil hebdo sinistres', 'timer', 'submitted', '2026-03-24T08:35:00Z', '2026-03-24T10:05:00Z'),
  ('TE-000002', '2026-03-24', 'USR-002', 'Mehdi Laaroussi', 'Conseil Operations France', 'PRJ-006', 'Support Finance Daily', 'Banque Helios', 'CAT-003', 'Support client', 'Support', 75, 1.25, 'Revue incidents finance', 'quick', 'submitted', '2026-03-24T09:10:00Z', '2026-03-24T10:25:00Z'),
  ('TE-000003', '2026-03-24', 'USR-003', 'Julie Renard', 'Conseil Operations France', 'PRJ-001', 'Monceau Retail Supply', 'Monceau Retail Group', 'CAT-001', 'Production livrable', 'Delivery', 120, 2.00, 'Cadrage atelier stock', 'timer', 'submitted', '2026-03-24T12:50:00Z', '2026-03-24T14:50:00Z'),
  ('TE-000004', '2026-03-24', 'USR-004', 'Thomas Vignal', 'Conseil Operations France', 'PRJ-005', 'Portail RH 2026', 'Groupe Novaris', 'CAT-001', 'Production livrable', 'Delivery', 150, 2.50, 'Maquette portail RH', 'timer', 'submitted', '2026-03-24T13:00:00Z', '2026-03-24T15:30:00Z'),
  ('TE-000005', '2026-03-24', 'USR-005', 'Sofia Bernard', 'Conseil Operations France', 'PRJ-009', 'Offres Secteur Public', 'Interne', 'CAT-006', 'Avant-vente', 'Business', 105, 1.75, 'Preparation reponse secteur public', 'manual', 'submitted', '2026-03-24T15:10:00Z', '2026-03-24T16:55:00Z'),
  ('TE-000006', '2026-03-25', 'USR-006', 'Eduardo Morales', 'Conseil Operations France', 'PRJ-004', 'Dossier Elections 2026', 'Ville de Saint-Just', 'CAT-001', 'Production livrable', 'Delivery', 135, 2.25, 'Preparation dossier bureau central', 'timer', 'submitted', '2026-03-25T07:55:00Z', '2026-03-25T10:10:00Z'),
  ('TE-000007', '2026-03-25', 'USR-007', 'Luc Garnier', 'Conseil Operations France', 'PRJ-006', 'Support Finance Daily', 'Banque Helios', 'CAT-003', 'Support client', 'Support', 60, 1.00, 'Triage demandes client', 'quick', 'submitted', '2026-03-25T09:15:00Z', '2026-03-25T10:15:00Z'),
  ('TE-000008', '2026-03-25', 'USR-001', 'Claire Martin', 'Conseil Operations France', 'PRJ-010', 'Gouvernance Equipe France', 'Interne', 'CAT-005', 'Management equipe', 'Management', 45, 0.75, 'Point staffing equipe', 'manual', 'submitted', '2026-03-25T16:05:00Z', '2026-03-25T16:50:00Z'),
  ('TE-000009', '2026-03-26', 'USR-003', 'Julie Renard', 'Conseil Operations France', 'PRJ-007', 'Academy Managers', 'Interne', 'CAT-008', 'Formation', 'Learning', 60, 1.00, 'Atelier managers', 'manual', 'submitted', '2026-03-26T08:00:00Z', '2026-03-26T09:00:00Z'),
  ('TE-000010', '2026-03-26', 'USR-002', 'Mehdi Laaroussi', 'Conseil Operations France', 'PRJ-001', 'Monceau Retail Supply', 'Monceau Retail Group', 'CAT-002', 'Atelier client', 'Delivery', 90, 1.50, 'Preparation atelier flux', 'timer', 'submitted', '2026-03-26T13:30:00Z', '2026-03-26T15:00:00Z'),
  ('TE-000011', '2026-03-26', 'USR-004', 'Thomas Vignal', 'Conseil Operations France', 'PRJ-008', 'CRM Pipeline Q2', 'Interne', 'CAT-007', 'Administration interne', 'Internal', 45, 0.75, 'Nettoyage pipeline CRM', 'quick', 'submitted', '2026-03-26T16:10:00Z', '2026-03-26T16:55:00Z'),
  ('TE-000012', '2026-03-27', 'USR-005', 'Sofia Bernard', 'Conseil Operations France', 'PRJ-002', 'Asteria PMO Sinistres', 'Asteria Assurances', 'CAT-004', 'Pilotage projet', 'Management', 60, 1.00, 'Preparation comite client', 'manual', 'submitted', '2026-03-27T08:30:00Z', '2026-03-27T09:30:00Z'),
  ('TE-000013', '2026-03-27', 'USR-006', 'Eduardo Morales', 'Conseil Operations France', 'PRJ-004', 'Dossier Elections 2026', 'Ville de Saint-Just', 'CAT-004', 'Pilotage projet', 'Management', 45, 0.75, 'Reunion coordination mairie', 'manual', 'submitted', '2026-03-27T10:40:00Z', '2026-03-27T11:25:00Z'),
  ('TE-000014', '2026-03-27', 'USR-007', 'Luc Garnier', 'Conseil Operations France', 'PRJ-001', 'Monceau Retail Supply', 'Monceau Retail Group', 'CAT-001', 'Production livrable', 'Delivery', 120, 2.00, 'Compte rendu atelier appro', 'timer', 'submitted', '2026-03-27T13:05:00Z', '2026-03-27T15:05:00Z'),

  ('TE-000015', '2026-03-30', 'USR-001', 'Claire Martin', 'Conseil Operations France', 'PRJ-002', 'Asteria PMO Sinistres', 'Asteria Assurances', 'CAT-004', 'Pilotage projet', 'Management', 120, 2.00, 'Copil mensuel asteria', 'timer', 'submitted', '2026-03-30T08:00:00Z', '2026-03-30T10:00:00Z'),
  ('TE-000016', '2026-03-30', 'USR-002', 'Mehdi Laaroussi', 'Conseil Operations France', 'PRJ-006', 'Support Finance Daily', 'Banque Helios', 'CAT-003', 'Support client', 'Support', 90, 1.50, 'Suivi run finance', 'quick', 'submitted', '2026-03-30T10:10:00Z', '2026-03-30T11:40:00Z'),
  ('TE-000017', '2026-03-31', 'USR-003', 'Julie Renard', 'Conseil Operations France', 'PRJ-001', 'Monceau Retail Supply', 'Monceau Retail Group', 'CAT-001', 'Production livrable', 'Delivery', 150, 2.50, 'Atelier previsions magasins', 'timer', 'submitted', '2026-03-31T09:00:00Z', '2026-03-31T11:30:00Z'),
  ('TE-000018', '2026-03-31', 'USR-004', 'Thomas Vignal', 'Conseil Operations France', 'PRJ-005', 'Portail RH 2026', 'Groupe Novaris', 'CAT-001', 'Production livrable', 'Delivery', 180, 3.00, 'Specifications portail RH', 'timer', 'submitted', '2026-03-31T13:00:00Z', '2026-03-31T16:00:00Z'),
  ('TE-000019', '2026-03-31', 'USR-005', 'Sofia Bernard', 'Conseil Operations France', 'PRJ-009', 'Offres Secteur Public', 'Interne', 'CAT-006', 'Avant-vente', 'Business', 120, 2.00, 'Relecture proposition secteur public', 'manual', 'submitted', '2026-03-31T16:10:00Z', '2026-03-31T18:10:00Z'),
  ('TE-000020', '2026-04-01', 'USR-006', 'Eduardo Morales', 'Conseil Operations France', 'PRJ-004', 'Dossier Elections 2026', 'Ville de Saint-Just', 'CAT-001', 'Production livrable', 'Delivery', 120, 2.00, 'Synthese elections', 'timer', 'submitted', '2026-04-01T08:20:00Z', '2026-04-01T10:20:00Z'),
  ('TE-000021', '2026-04-01', 'USR-007', 'Luc Garnier', 'Conseil Operations France', 'PRJ-006', 'Support Finance Daily', 'Banque Helios', 'CAT-003', 'Support client', 'Support', 75, 1.25, 'Mails client et arbitrage', 'quick', 'submitted', '2026-04-01T11:00:00Z', '2026-04-01T12:15:00Z'),
  ('TE-000022', '2026-04-01', 'USR-001', 'Claire Martin', 'Conseil Operations France', 'PRJ-010', 'Gouvernance Equipe France', 'Interne', 'CAT-005', 'Management equipe', 'Management', 60, 1.00, 'Revues individuelles equipe', 'manual', 'submitted', '2026-04-01T15:00:00Z', '2026-04-01T16:00:00Z'),
  ('TE-000023', '2026-04-02', 'USR-003', 'Julie Renard', 'Conseil Operations France', 'PRJ-008', 'CRM Pipeline Q2', 'Interne', 'CAT-007', 'Administration interne', 'Internal', 45, 0.75, 'Mise a jour CRM', 'quick', 'submitted', '2026-04-02T08:45:00Z', '2026-04-02T09:30:00Z'),
  ('TE-000024', '2026-04-02', 'USR-002', 'Mehdi Laaroussi', 'Conseil Operations France', 'PRJ-001', 'Monceau Retail Supply', 'Monceau Retail Group', 'CAT-002', 'Atelier client', 'Delivery', 105, 1.75, 'Atelier backlog magasins', 'timer', 'submitted', '2026-04-02T13:25:00Z', '2026-04-02T15:10:00Z'),
  ('TE-000025', '2026-04-02', 'USR-004', 'Thomas Vignal', 'Conseil Operations France', 'PRJ-007', 'Academy Managers', 'Interne', 'CAT-008', 'Formation', 'Learning', 90, 1.50, 'Formation managers', 'manual', 'submitted', '2026-04-02T15:20:00Z', '2026-04-02T16:50:00Z'),
  ('TE-000026', '2026-04-03', 'USR-005', 'Sofia Bernard', 'Conseil Operations France', 'PRJ-003', 'Velinor Qualite Data', 'Velinor Pharma', 'CAT-002', 'Atelier client', 'Delivery', 135, 2.25, 'Atelier qualite data', 'timer', 'submitted', '2026-04-03T08:10:00Z', '2026-04-03T10:25:00Z'),
  ('TE-000027', '2026-04-03', 'USR-006', 'Eduardo Morales', 'Conseil Operations France', 'PRJ-010', 'Gouvernance Equipe France', 'Interne', 'CAT-007', 'Administration interne', 'Internal', 30, 0.50, 'Compte rendu hebdo', 'manual', 'submitted', '2026-04-03T16:00:00Z', '2026-04-03T16:30:00Z'),
  ('TE-000028', '2026-04-03', 'USR-007', 'Luc Garnier', 'Conseil Operations France', 'PRJ-001', 'Monceau Retail Supply', 'Monceau Retail Group', 'CAT-001', 'Production livrable', 'Delivery', 90, 1.50, 'Reprise plan action stock', 'timer', 'submitted', '2026-04-03T13:35:00Z', '2026-04-03T15:05:00Z'),

  ('TE-000029', '2026-04-06', 'USR-001', 'Claire Martin', 'Conseil Operations France', 'PRJ-002', 'Asteria PMO Sinistres', 'Asteria Assurances', 'CAT-004', 'Pilotage projet', 'Management', 75, 1.25, 'Copil asteria', 'timer', 'submitted', '2026-04-06T08:20:00Z', '2026-04-06T09:35:00Z'),
  ('TE-000030', '2026-04-06', 'USR-002', 'Mehdi Laaroussi', 'Conseil Operations France', 'PRJ-006', 'Support Finance Daily', 'Banque Helios', 'CAT-003', 'Support client', 'Support', 105, 1.75, 'Support cloture trimestrielle', 'quick', 'submitted', '2026-04-06T09:00:00Z', '2026-04-06T10:45:00Z'),
  ('TE-000031', '2026-04-07', 'USR-003', 'Julie Renard', 'Conseil Operations France', 'PRJ-001', 'Monceau Retail Supply', 'Monceau Retail Group', 'CAT-001', 'Production livrable', 'Delivery', 120, 2.00, 'Atelier process magasin', 'timer', 'submitted', '2026-04-07T08:30:00Z', '2026-04-07T10:30:00Z'),
  ('TE-000032', '2026-04-07', 'USR-004', 'Thomas Vignal', 'Conseil Operations France', 'PRJ-005', 'Portail RH 2026', 'Groupe Novaris', 'CAT-001', 'Production livrable', 'Delivery', 135, 2.25, 'Recette portail RH', 'timer', 'submitted', '2026-04-07T10:15:00Z', '2026-04-07T12:30:00Z'),
  ('TE-000033', '2026-04-07', 'USR-005', 'Sofia Bernard', 'Conseil Operations France', 'PRJ-009', 'Offres Secteur Public', 'Interne', 'CAT-006', 'Avant-vente', 'Business', 90, 1.50, 'Ajustements offre DSI', 'manual', 'submitted', '2026-04-07T14:10:00Z', '2026-04-07T15:40:00Z'),
  ('TE-000034', '2026-04-08', 'USR-006', 'Eduardo Morales', 'Conseil Operations France', 'PRJ-004', 'Dossier Elections 2026', 'Ville de Saint-Just', 'CAT-001', 'Production livrable', 'Delivery', 150, 2.50, 'Preparation synthese commission', 'timer', 'submitted', '2026-04-08T08:05:00Z', '2026-04-08T10:35:00Z'),
  ('TE-000035', '2026-04-08', 'USR-007', 'Luc Garnier', 'Conseil Operations France', 'PRJ-006', 'Support Finance Daily', 'Banque Helios', 'CAT-003', 'Support client', 'Support', 60, 1.00, 'File demandes client', 'quick', 'submitted', '2026-04-08T10:50:00Z', '2026-04-08T11:50:00Z'),
  ('TE-000036', '2026-04-08', 'USR-001', 'Claire Martin', 'Conseil Operations France', 'PRJ-010', 'Gouvernance Equipe France', 'Interne', 'CAT-005', 'Management equipe', 'Management', 45, 0.75, 'Repartition capacite S16', 'manual', 'submitted', '2026-04-08T16:15:00Z', '2026-04-08T17:00:00Z'),
  ('TE-000037', '2026-04-09', 'USR-003', 'Julie Renard', 'Conseil Operations France', 'PRJ-007', 'Academy Managers', 'Interne', 'CAT-008', 'Formation', 'Learning', 60, 1.00, 'Formation cadrage IA', 'manual', 'submitted', '2026-04-09T08:00:00Z', '2026-04-09T09:00:00Z'),
  ('TE-000038', '2026-04-09', 'USR-002', 'Mehdi Laaroussi', 'Conseil Operations France', 'PRJ-001', 'Monceau Retail Supply', 'Monceau Retail Group', 'CAT-002', 'Atelier client', 'Delivery', 90, 1.50, 'Atelier indicateurs supply', 'timer', 'submitted', '2026-04-09T13:30:00Z', '2026-04-09T15:00:00Z'),
  ('TE-000039', '2026-04-09', 'USR-004', 'Thomas Vignal', 'Conseil Operations France', 'PRJ-008', 'CRM Pipeline Q2', 'Interne', 'CAT-007', 'Administration interne', 'Internal', 45, 0.75, 'Nettoyage doublons CRM', 'quick', 'submitted', '2026-04-09T16:00:00Z', '2026-04-09T16:45:00Z'),
  ('TE-000040', '2026-04-09', 'USR-006', 'Eduardo Morales', 'Conseil Operations France', 'PRJ-004', 'Dossier Elections 2026', 'Ville de Saint-Just', 'CAT-004', 'Pilotage projet', 'Management', 30, 0.50, 'Alignement directeur projet', 'manual', 'saved', '2026-04-09T18:20:00Z', '2026-04-09T18:50:00Z'),
  ('TE-000041', '2026-04-10', 'USR-007', 'Luc Garnier', 'Conseil Operations France', 'PRJ-009', 'Offres Secteur Public', 'Interne', 'CAT-006', 'Avant-vente', 'Business', 60, 1.00, 'Appui soutenance', 'manual', 'saved', '2026-04-10T08:15:00Z', '2026-04-10T09:15:00Z'),
  ('TE-000042', '2026-04-10', 'USR-001', 'Claire Martin', 'Conseil Operations France', 'PRJ-002', 'Asteria PMO Sinistres', 'Asteria Assurances', 'CAT-004', 'Pilotage projet', 'Management', 60, 1.00, 'Preparation suivi hebdo', 'quick', 'saved', '2026-04-10T09:10:00Z', '2026-04-10T10:10:00Z');

commit;
