begin;

alter table public.time_entries
  add column if not exists source_session_id text,
  add column if not exists started_at timestamptz,
  add column if not exists ended_at timestamptz,
  add column if not exists tags_text text,
  add column if not exists notion_ref text,
  add column if not exists objective_pole text,
  add column if not exists objective_okr text,
  add column if not exists objective_kr text,
  add column if not exists notes text;

alter table public.time_entries
  alter column project_id drop not null,
  alter column client_name drop not null,
  alter column activity_category_id drop not null,
  alter column activity_category_label drop not null,
  alter column kpi_category_label drop not null;

create index if not exists idx_time_entries_source_session_id
  on public.time_entries(source_session_id);

create index if not exists idx_time_entries_started_at
  on public.time_entries(started_at);

create table if not exists public.active_sessions (
  active_session_id text primary key,

  started_at timestamptz not null,
  paused_at timestamptz,
  paused_duration_ms bigint not null default 0
    check (paused_duration_ms >= 0),

  user_id text references public.users(user_id),
  user_name text not null,
  team_name text not null,

  project_id text references public.projects(project_id),
  project_name text not null,
  client_name text,

  activity_category_id text references public.categories(activity_category_id),
  activity_category_label text,
  kpi_category_label text,

  task_label text,
  tags_text text,
  notion_ref text,
  objective_pole text,
  objective_okr text,
  objective_kr text,
  notes text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_active_sessions_user_id
  on public.active_sessions(user_id);

create index if not exists idx_active_sessions_team_name
  on public.active_sessions(team_name);

create index if not exists idx_active_sessions_started_at
  on public.active_sessions(started_at);

create index if not exists idx_active_sessions_updated_at
  on public.active_sessions(updated_at desc);

create table if not exists public.session_audit_log (
  session_audit_log_id bigint generated always as identity primary key,
  session_id text not null,
  change_source text not null,
  actor_name text not null,
  field_label text not null,
  old_value text,
  new_value text,
  created_at timestamptz not null default now()
);

create index if not exists idx_session_audit_log_session_id
  on public.session_audit_log(session_id);

create index if not exists idx_session_audit_log_created_at
  on public.session_audit_log(created_at desc);

alter table public.users enable row level security;
alter table public.projects enable row level security;
alter table public.categories enable row level security;
alter table public.time_entries enable row level security;
alter table public.active_sessions enable row level security;
alter table public.session_audit_log enable row level security;

drop policy if exists users_anon_read_lightweight on public.users;
create policy users_anon_read_lightweight
on public.users
for select
to anon
using (status = 'active');

drop policy if exists projects_anon_read_lightweight on public.projects;
create policy projects_anon_read_lightweight
on public.projects
for select
to anon
using (true);

drop policy if exists categories_anon_read_lightweight on public.categories;
create policy categories_anon_read_lightweight
on public.categories
for select
to anon
using (true);

drop policy if exists time_entries_anon_read_shared on public.time_entries;
create policy time_entries_anon_read_shared
on public.time_entries
for select
to anon
using (true);

drop policy if exists time_entries_anon_insert_shared on public.time_entries;
create policy time_entries_anon_insert_shared
on public.time_entries
for insert
to anon
with check (true);

drop policy if exists time_entries_anon_update_shared on public.time_entries;
create policy time_entries_anon_update_shared
on public.time_entries
for update
to anon
using (true)
with check (true);

drop policy if exists time_entries_anon_delete_shared on public.time_entries;
create policy time_entries_anon_delete_shared
on public.time_entries
for delete
to anon
using (true);

drop policy if exists active_sessions_anon_read_shared on public.active_sessions;
create policy active_sessions_anon_read_shared
on public.active_sessions
for select
to anon
using (true);

drop policy if exists active_sessions_anon_insert_shared on public.active_sessions;
create policy active_sessions_anon_insert_shared
on public.active_sessions
for insert
to anon
with check (true);

drop policy if exists active_sessions_anon_update_shared on public.active_sessions;
create policy active_sessions_anon_update_shared
on public.active_sessions
for update
to anon
using (true)
with check (true);

drop policy if exists active_sessions_anon_delete_shared on public.active_sessions;
create policy active_sessions_anon_delete_shared
on public.active_sessions
for delete
to anon
using (true);

drop policy if exists session_audit_log_anon_insert on public.session_audit_log;
create policy session_audit_log_anon_insert
on public.session_audit_log
for insert
to anon
with check (true);

drop policy if exists session_audit_log_anon_select on public.session_audit_log;
create policy session_audit_log_anon_select
on public.session_audit_log
for select
to anon
using (true);

commit;
