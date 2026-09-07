-- Run this entire file in Supabase: SQL Editor > New query > Run.
-- It allows only zanisaleksander@gmail.com to edit site content after login.

drop policy if exists "Only administrators can manage content" on public.site_content;
drop policy if exists "Authenticated users can manage content" on public.site_content;

grant select on public.site_content to anon, authenticated;
grant insert, update, delete on public.site_content to authenticated;

create policy "Oreada administrator can manage content"
  on public.site_content
  for all
  to authenticated
  using ((auth.jwt() ->> 'email') = 'zanisaleksander@gmail.com')
  with check ((auth.jwt() ->> 'email') = 'zanisaleksander@gmail.com');

-- Public visitors may read published site content but may not change it.
drop policy if exists "Public visitors can read published content" on public.site_content;
create policy "Public visitors can read published content"
  on public.site_content for select using (true);
