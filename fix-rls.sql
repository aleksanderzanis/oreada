-- Run this in your Supabase SQL Editor to fix the Activity saving error

-- Fix policies for the 'activities' table
drop policy if exists "Oreada administrator can manage activities" on public.activities;
create policy "Oreada administrator can manage activities" on public.activities 
  for all to authenticated 
  using (true) 
  with check (true);

-- Fix policies for the 'activity_photos' table
drop policy if exists "Oreada administrator can manage activity photos" on public.activity_photos;
create policy "Oreada administrator can manage activity photos" on public.activity_photos 
  for all to authenticated 
  using (true) 
  with check (true);

-- Fix policies for the Storage buckets (images)
drop policy if exists "Oreada administrator uploads activity images" on storage.objects;
create policy "Oreada administrator uploads activity images" on storage.objects 
  for insert to authenticated 
  with check (bucket_id = 'activity-images');

drop policy if exists "Oreada administrator deletes activity images" on storage.objects;
create policy "Oreada administrator deletes activity images" on storage.objects 
  for delete to authenticated 
  using (bucket_id = 'activity-images');
