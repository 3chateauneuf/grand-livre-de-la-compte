-- Grand Livre de la Comté
-- V1 pragmatic schema
-- PostgreSQL-oriented SQL
--
-- Principles
-- - time_entries is the central fact table
-- - denormalized labels are copied at write time for export simplicity
-- - duration_minutes is the source of truth
-- - duration_hours is optional and may be derived by the application

create table users (
  user_id text primary key
    check (user_id ~ '^USR-[0-9]{3}$'),
  user_name text not null,
  email text unique,
  auth_user_id uuid unique,
  role text not null
    check (role in ('cadre', 'manager', 'admin')),
  team_name text not null,
  managed_team_name text,
  manager_user_id text references users(user_id)
    check (manager_user_id is null or manager_user_id ~ '^USR-[0-9]{3}$'),
  weekly_capacity_hours numeric(5,2) not null default 40.00
    check (weekly_capacity_hours > 0),
  status text not null default 'active'
    check (status in ('active', 'inactive')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table categories (
  activity_category_id text primary key
    check (activity_category_id ~ '^CAT-[0-9]{3}$'),
  activity_category_label text not null,
  kpi_category_label text not null,
  team_name text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table projects (
  project_id text primary key
    check (project_id ~ '^PRJ-[0-9]{3}$'),
  project_name text not null,
  client_name text not null,
  status text not null default 'active'
    check (status in ('active', 'completed', 'archived')),
  default_activity_category_id text references categories(activity_category_id),
  default_activity_category_label text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table time_entries (
  time_entry_id text primary key
    check (time_entry_id ~ '^TE-[0-9]{6}$'),

  entry_date date not null,

  user_id text not null references users(user_id),
  user_name text not null,
  team_name text not null,

  project_id text not null references projects(project_id),
  project_name text not null,
  client_name text not null,

  activity_category_id text not null references categories(activity_category_id),
  activity_category_label text not null,
  kpi_category_label text not null,

  duration_minutes integer not null
    check (duration_minutes > 0),
  duration_hours numeric(6,2),

  task_label text,
  source text not null
    check (source in ('quick', 'manual', 'timer')),
  status text not null default 'saved'
    check (status in ('saved', 'submitted')),

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_time_entries_entry_date on time_entries(entry_date);
create index idx_time_entries_user_id on time_entries(user_id);
create index idx_time_entries_project_id on time_entries(project_id);
create index idx_time_entries_category_id on time_entries(activity_category_id);
create index idx_time_entries_team_name on time_entries(team_name);
create index idx_time_entries_created_at on time_entries(created_at);
create index idx_users_auth_user_id on users(auth_user_id);
create index idx_users_email on users(email);

-- Write-time rules enforced by the application layer
--
-- time_entries.user_name              := users.user_name
-- time_entries.team_name              := users.team_name
-- time_entries.project_name           := projects.project_name
-- time_entries.client_name            := projects.client_name
-- time_entries.activity_category_label:= categories.activity_category_label
-- time_entries.kpi_category_label     := categories.kpi_category_label
--
-- projects.default_activity_category_label := categories.activity_category_label
--
-- Notes
-- - Denormalized labels are never manually entered by users.
-- - duration_hours should be derived from duration_minutes when present.
-- - Historical time_entries should not be rewritten if source labels change later.
-- - auth_user_id is the link to Supabase Auth when multi-user access is enabled.
-- - managed_team_name can scope manager-level visibility without introducing more tables in V1.5.
