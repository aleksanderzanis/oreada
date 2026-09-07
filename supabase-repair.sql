-- Use this only if site_content was created for an earlier attempt and has no
-- content you need to keep. It removes that incompatible table, then recreates
-- the correct one with the needed columns, access grants, and policies.
drop table if exists public.site_content;

create table public.site_content (
  content_key text primary key check (content_key ~ '^[a-z0-9_]+$'),
  sq text not null default '',
  en text not null default '',
  updated_at timestamptz not null default now()
);

alter table public.site_content enable row level security;
grant select on public.site_content to anon, authenticated;
grant insert, update, delete on public.site_content to authenticated;

create policy "Public visitors can read published content"
  on public.site_content for select using (true);

create policy "Only administrators can manage content"
  on public.site_content for all to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$ begin new.updated_at = now(); return new; end; $$;

create trigger site_content_updated_at before update on public.site_content
for each row execute function public.set_updated_at();

-- Then grant your own login access (replace the email):
-- update auth.users set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb)
--   || '{"role":"admin"}'::jsonb where email = 'your-email@example.com';
