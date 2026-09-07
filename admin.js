const client = window.supabase.createClient(window.OREADA_SUPABASE_URL, window.OREADA_SUPABASE_ANON_KEY);
const $ = selector => document.querySelector(selector);
const contentList = $('#contentList');
const contentNames = {
  hero_title:'Homepage — main title', hero_desc:'Homepage — introduction', hero_btn:'Homepage — button',
  home_about_title:'Homepage — About title', home_about_desc:'Homepage — About text', home_activities_title:'Homepage — Activities title', home_activities_desc:'Homepage — Activities text', home_topic_title:'Homepage — Topic title', home_topic_desc:'Homepage — Topic text', home_services_title:'Homepage — Services title', home_services_desc:'Homepage — Services text',
  about_title:'About — title', about_badge_title:'About — badge', about_desc:'About — text', services_title:'Services — title', services_badge:'Services — badge', services_desc1:'Services — first paragraph', services_desc2:'Services — second paragraph',
  ig_title:'Activities — title', ig_desc:'Activities — introduction', activities_empty:'Activities — empty message', topic_title:'Topic — title', contact_email:'Contact — email', contact_phone:'Contact — phone', instagram_handle:'Contact — Instagram name', footer_address:'Footer — address', footer_text:'Footer — copyright',
  home_hero_image:'Homepage — hero image address', home_about_image:'Homepage — About image address', home_activities_image:'Homepage — Activities image address', home_topic_image:'Homepage — Topic image address', home_services_image:'Homepage — Services image address', about_image:'About — image address', services_image:'Services — image address'
};
const contentGroups = {
  'Homepage': ['hero_','home_'],
  'About page': ['about_'],
  'Activities page': ['ig_'],
  'Topic page': ['topic_','obj_'],
  'Services page': ['services_'],
  'Contact & footer': ['contact_','instagram_','footer_','page_title','logo','btn_donate','donate_message']
};
const groupDescriptions = {
  'Homepage': 'Hero section, homepage text, buttons, and images.',
  'About page': 'About page title, description, and image.',
  'Activities page': 'Activities page heading and introduction.',
  'Topic page': 'Topic page title and all objectives.',
  'Services page': 'Services page title, text, and image.',
  'Contact & footer': 'Email, phone, Instagram, address, donation message, and footer.'
};
const mediaDefaults = { home_hero_image:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', home_about_image:'https://www.oecd.org/adobe/dynamicmedia/deliver/dm-aid--3a7f61da-f57e-4f53-93b5-05a2934e5cc4/ac4b8b89-en.jpg?quality=80&preferwebp=true', home_activities_image:'https://sustainablebusinessmagazine.net/wp-content/uploads/2025/08/marine-life.jpg', home_topic_image:'https://akt.gov.al/wp-content/uploads/2025/10/Lumi-Mat-scaled.jpg', home_services_image:'https://bluewaveadventures.com/wp-content/uploads/2025/07/atlantic-bottlenose-dolphin-under-water.jpg', about_image:'https://a-z-animals.com/media/2024/03/shutterstock-1660812988-huge-licensed-scaled.jpg', services_image:'https://where2walk.co.uk/wp-content/uploads/2014/03/Place-Fell.jpg' };
const settingsDefaults = { contact_email:'oreadaenvironmentalasocciation@gmail.com', contact_email_href:'mailto:oreadaenvironmentalasocciation@gmail.com', contact_phone:'+355 69 606 6290', contact_phone_href:'tel:+355696066290', instagram_handle:'@oreada_shoqatemjedisore', instagram_href:'https://instagram.com/oreada_shoqatemjedisore' };
function message(id, text, good=false) { const el=$(id); el.textContent=text; el.style.color=good?'#236b3b':'#a22'; }
function friendlyName(key) { return contentNames[key] || key.replaceAll('_',' ').replace(/\b\w/g, char => char.toUpperCase()); }
function getMediaThumb(url) {
    if (!url) return '';
    let ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
    if (ytMatch) return `<img src="https://img.youtube.com/vi/${ytMatch[1]}/hqdefault.jpg" alt="Video">`;
    let igMatch = url.match(/(?:instagram\.com|instagr\.am)\/(?:p|reel|tv)\/([^\/?#&]+)/i);
    if (igMatch) return `<div style="width:100%; height:100%; min-height:60px; background:linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); display:flex; align-items:center; justify-content:center; color:white; font-size:12px; font-weight:bold;">IG</div>`;
    if (url.match(/\.(mp4|webm|ogg|mov)(\?.*)?$/i)) return `<video src="${url}#t=0.1" style="width:100%; height:100%; object-fit:cover;" muted playsinline></video>`;
    return `<img src="${url}" alt="Photo">`;
}
function contentCard(item, parent) {
  const article=document.createElement('article'); article.className='content-item'; article.dataset.search=`${friendlyName(item.content_key)} ${item.content_key}`.toLowerCase();
  article.innerHTML=`<div class="content-item-top"><strong>${friendlyName(item.content_key)}</strong><small>${item.content_key}</small></div><div class="language-grid"><label>Albanian<textarea class="sq"></textarea></label><label>English<textarea class="en"></textarea></label></div><div class="item-actions"><button type="button">Save</button></div>`;
  article.querySelector('.sq').value=item.sq||''; article.querySelector('.en').value=item.en||'';
  article.querySelector('button').onclick=async()=>{ const {error}=await client.from('site_content').upsert({content_key:item.content_key,sq:article.querySelector('.sq').value,en:article.querySelector('.en').value}); message('#editorMessage',error?error.message:'Saved.',!error); };
  parent.append(article);
}
function groupFor(key) { return Object.entries(contentGroups).find(([, prefixes]) => prefixes.some(prefix => key.startsWith(prefix)))?.[0] || 'Other content'; }
async function loadContent(){ const {data,error}=await client.from('site_content').select('*').order('content_key'); if(error)return message('#editorMessage',error.message); contentList.innerHTML=''; const groups={}; data.forEach(item => (groups[groupFor(item.content_key)] ||= []).push(item)); Object.entries(groups).forEach(([name,items])=>{const section=document.createElement('details');section.className='content-group';section.innerHTML=`<summary><span class="group-title">${name}<small>${groupDescriptions[name] || 'Website settings and text.'}</small></span><span class="group-count">${items.length} items <b>⌄</b></span></summary><div class="content-group-items"></div>`;const target=section.querySelector('.content-group-items');items.forEach(item=>contentCard(item,target));contentList.append(section);}); }
async function loadActivities(){ const {data,error}=await client.from('activities').select('*').order('event_date',{ascending:false}); if(error)return message('#activityMessage',error.message); const {data: photos}=await client.from('activity_photos').select('*').order('display_order'); const photoGroups=(photos||[]).reduce((all,photo)=>{(all[photo.activity_id] ||= []).push(photo);return all;},{}); const list=$('#activityList'); list.innerHTML=''; data.forEach(item=>{const itemPhotos=photoGroups[item.id]||[{image_url:item.image_url}];const row=document.createElement('article');row.className='activity-row';row.innerHTML=`<div class="activity-row-thumb">${getMediaThumb(itemPhotos[0].image_url)}</div><div class="activity-row-main"><strong>${item.title_sq}</strong><p>${item.event_date||'No date'} · ${itemPhotos.length} media</p></div><button class="secondary edit">Edit</button><button class="danger delete">Delete</button>`;row.querySelector('.edit').onclick=()=>openActivity({...item, photos:itemPhotos});row.querySelector('.delete').onclick=async()=>{if(!confirm('Delete this activity and all its photos?'))return;const {error}=await client.from('activities').delete().eq('id',item.id);message('#activityMessage',error?error.message:'Activity deleted.',!error);if(!error)loadActivities();};list.append(row);}); }
function openActivity(item={}) { $('#activityForm').classList.remove('hidden'); $('#activityId').value=item.id||''; $('#activityTitleSq').value=item.title_sq||''; $('#activityTitleEn').value=item.title_en||''; $('#activityDescSq').value=item.description_sq||''; $('#activityDescEn').value=item.description_en||''; $('#activityDate').value=item.event_date||''; $('#activityImageUrl').value=(item.photos||[]).map(photo=>photo.image_url).join('\n'); $('#activityImageFile').value=''; renderPreview((item.photos||[]).map(photo=>photo.image_url)); }
async function showEditor(){ $('#loginCard').classList.add('hidden'); $('#editorCard').classList.remove('hidden'); await Promise.all([loadContent(),loadActivities()]); }
$('#loginForm').onsubmit=async e=>{e.preventDefault();
  const inputVal = $('#username').value;
  const email = inputVal.includes('@') ? inputVal : `${inputVal}@oreada.admin`;
  const {error}=await client.auth.signInWithPassword({email: email, password:$('#password').value});
  if(error)return message('#loginMessage',error.message);showEditor();
};
$('#signOut').onclick=async()=>{await client.auth.signOut();$('#editorCard').classList.add('hidden');$('#loginCard').classList.remove('hidden');};
document.querySelectorAll('.tab').forEach(button=>button.onclick=()=>{document.querySelectorAll('.tab').forEach(tab=>tab.classList.remove('active'));button.classList.add('active');$('#contentPanel').classList.toggle('hidden',button.dataset.tab!=='content');$('#activitiesPanel').classList.toggle('hidden',button.dataset.tab!=='activities');});
$('#contentSearch').oninput=e=>{const term=e.target.value.toLowerCase();document.querySelectorAll('.content-item').forEach(card=>card.classList.toggle('hidden',!card.dataset.search.includes(term)));document.querySelectorAll('.content-group').forEach(group=>group.classList.toggle('hidden',term && ![...group.querySelectorAll('.content-item')].some(card=>!card.classList.contains('hidden'))));};
$('#seedDefaults').onclick=async()=>{const entries=Object.keys(window.oreadaDefaultTranslations.sq).map(key=>({content_key:key,sq:window.oreadaDefaultTranslations.sq[key]||'',en:window.oreadaDefaultTranslations.en[key]||''})).concat(Object.entries({...mediaDefaults,...settingsDefaults}).map(([content_key,value])=>({content_key,sq:value,en:value})));const {error}=await client.from('site_content').upsert(entries,{onConflict:'content_key',ignoreDuplicates:false});message('#editorMessage',error?error.message:'Website content is ready to edit.',!error);if(!error)loadContent();};
function renderPreview(urls){$('#photoPreview').innerHTML=urls.map(url=>getMediaThumb(url)).join('');}
$('#newActivity').onclick=()=>openActivity(); $('#cancelActivity').onclick=()=>$('#activityForm').classList.add('hidden');
$('#activityImageFile').onchange=e=>renderPreview([...e.target.files].map(file=>URL.createObjectURL(file)));
$('#activityForm').onsubmit=async e=>{e.preventDefault();const id=$('#activityId').value;let photoUrls=$('#activityImageUrl').value.split('\n').map(url=>url.trim()).filter(Boolean);const files=[...$('#activityImageFile').files];for(const file of files){const extension=file.name.split('.').pop();const path=`${Date.now()}-${crypto.randomUUID()}.${extension}`;message('#activityMessage','Uploading photos...',true);const {error}=await client.storage.from('activity-images').upload(path,file,{contentType:file.type});if(error)return message('#activityMessage',error.message);photoUrls.push(client.storage.from('activity-images').getPublicUrl(path).data.publicUrl);}if(!photoUrls.length)return message('#activityMessage','Add at least one photo.');const item={title_sq:$('#activityTitleSq').value,title_en:$('#activityTitleEn').value,description_sq:$('#activityDescSq').value,description_en:$('#activityDescEn').value,event_date:$('#activityDate').value||null,image_url:photoUrls[0]};let result;if(id){result=await client.from('activities').update(item).eq('id',id);if(!result.error){await client.from('activity_photos').delete().eq('activity_id',id);result=await client.from('activity_photos').insert(photoUrls.map((image_url,display_order)=>({activity_id:id,image_url,display_order})));}}else{result=await client.from('activities').insert(item).select().single();if(!result.error)result=await client.from('activity_photos').insert(photoUrls.map((image_url,display_order)=>({activity_id:result.data.id,image_url,display_order})));}message('#activityMessage',result.error?result.error.message:'Activity saved.',!result.error);if(!result.error){$('#activityForm').classList.add('hidden');loadActivities();}};
client.auth.getSession().then(({data:{session}})=>{if(session)showEditor();});
