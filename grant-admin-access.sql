-- Replace the email below with the SAME email you use to sign in at admin.html,
-- then run this in Supabase: SQL Editor > New query.
update auth.users
set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb)
  || '{"role":"admin"}'::jsonb
where email = 'YOUR-LOGIN-EMAIL@example.com';

-- Check that exactly one account now has the administrator role.
select email, raw_app_meta_data ->> 'role' as role
from auth.users
where email = 'zanisaleksander@gmail.com';
