-- Run once in Supabase: SQL Editor > New query.
create table if not exists public.activities (
  id uuid primary key default gen_random_uuid(),
  title_sq text not null,
  title_en text not null default '',
  description_sq text not null default '',
  description_en text not null default '',
  image_url text not null,
  event_date date,
  created_at timestamptz not null default now()
);

create table if not exists public.activity_photos (
  id uuid primary key default gen_random_uuid(),
  activity_id uuid not null references public.activities(id) on delete cascade,
  image_url text not null,
  display_order integer not null default 0,
  created_at timestamptz not null default now()
);

alter table public.activities enable row level security;
alter table public.activity_photos enable row level security;
grant select on public.activities to anon, authenticated;
grant insert, update, delete on public.activities to authenticated;
grant select on public.activity_photos to anon, authenticated;
grant insert, update, delete on public.activity_photos to authenticated;
drop policy if exists "Public visitors can read activities" on public.activities;
drop policy if exists "Oreada administrator can manage activities" on public.activities;
create policy "Public visitors can read activities" on public.activities for select using (true);
create policy "Oreada administrator can manage activities" on public.activities for all to authenticated
using ((auth.jwt() ->> 'email') = 'zanisaleksander@gmail.com')
with check ((auth.jwt() ->> 'email') = 'zanisaleksander@gmail.com');
drop policy if exists "Public visitors can read activity photos" on public.activity_photos;
drop policy if exists "Oreada administrator can manage activity photos" on public.activity_photos;
create policy "Public visitors can read activity photos" on public.activity_photos for select using (true);
create policy "Oreada administrator can manage activity photos" on public.activity_photos for all to authenticated
using ((auth.jwt() ->> 'email') = 'zanisaleksander@gmail.com')
with check ((auth.jwt() ->> 'email') = 'zanisaleksander@gmail.com');

-- Makes existing single activity photos appear in the new gallery too.
insert into public.activity_photos (activity_id, image_url, display_order)
select id, image_url, 0 from public.activities
where not exists (select 1 from public.activity_photos p where p.activity_id = activities.id);

insert into storage.buckets (id, name, public) values ('activity-images', 'activity-images', true)
on conflict (id) do update set public = true;
drop policy if exists "Oreada administrator uploads activity images" on storage.objects;
drop policy if exists "Oreada administrator deletes activity images" on storage.objects;
create policy "Oreada administrator uploads activity images" on storage.objects for insert to authenticated
with check (bucket_id = 'activity-images' and (auth.jwt() ->> 'email') = 'zanisaleksander@gmail.com');
create policy "Oreada administrator deletes activity images" on storage.objects for delete to authenticated
using (bucket_id = 'activity-images' and (auth.jwt() ->> 'email') = 'zanisaleksander@gmail.com');
