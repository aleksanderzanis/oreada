document.addEventListener('DOMContentLoaded', async () => {
    if (!window.OREADA_SUPABASE_URL || window.OREADA_SUPABASE_URL.startsWith('YOUR_')) return;
    const client = window.supabase.createClient(window.OREADA_SUPABASE_URL, window.OREADA_SUPABASE_ANON_KEY);
    const { data, error } = await client.from('activities').select('*').order('event_date', { ascending: false });
    if (error || !data?.length) return;
    const { data: photos } = await client.from('activity_photos').select('*').order('display_order');
    const photosByActivity = (photos || []).reduce((groups, photo) => {
        (groups[photo.activity_id] ||= []).push(photo.image_url); return groups;
    }, {});
    const gallery = document.getElementById('activitiesGallery');
    const empty = document.getElementById('activitiesEmpty');
    const getMediaHTML = (url, isCover) => {
        let ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
        if (ytMatch) {
            if (isCover) return `<img src="https://img.youtube.com/vi/${ytMatch[1]}/hqdefault.jpg" alt="" style="width:100%; height:100%; object-fit:cover;">`;
            return `<iframe src="https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1" style="width:100%; aspect-ratio:16/9; max-height:78vh;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        }
        let igMatch = url.match(/(?:instagram\.com|instagr\.am)\/(?:p|reel|tv)\/([^\/?#&]+)/i);
        if (igMatch) {
            if (isCover) return `<div style="width:100%; height:100%; background:linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); display:flex; align-items:center; justify-content:center; color:white;"><svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></div>`;
            return `<iframe src="https://www.instagram.com/p/${igMatch[1]}/embed" style="width:100%; max-width:400px; aspect-ratio:4/5; max-height:78vh; background:white; margin:auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>`;
        }
        if (url.match(/\.(mp4|webm|ogg|mov)(\?.*)?$/i)) {
            if (isCover) return `<video src="${url}#t=0.1" style="width:100%; height:100%; object-fit:cover;" muted playsinline></video>`;
            return `<video src="${url}" controls autoplay style="width:100%; max-height:78vh; background:black;"></video>`;
        }
        if (isCover) return `<img src="${url}" alt="" style="width:100%; height:100%; object-fit:cover;">`;
        return `<img src="${url}" alt="" style="width:100%; max-height:78vh; object-fit:contain; display:block;">`;
    };

    const renderGallery = (lang) => {
        gallery.innerHTML = data.map(item => {
            const activityPhotos = photosByActivity[item.id] || [item.image_url];
            const title = item[`title_${lang}`] || item.title_sq;
            const description = item[`description_${lang}`] || item.description_sq || '';
            const btnText = lang === 'sq' ? 'Lexo historinë' : 'Read story';
            
            const descHtml = description ? `<button class="btn-read-story" type="button" data-title="${encodeURIComponent(title)}" data-desc="${encodeURIComponent(description)}"><i class="fa-regular fa-file-lines"></i> ${btnText}</button>` : '';

            return `<article class="activity-card"><button class="activity-cover" type="button" data-title="${encodeURIComponent(title)}" data-photos="${encodeURIComponent(JSON.stringify(activityPhotos))}">${getMediaHTML(activityPhotos[0], true)}<span class="activity-cover-overlay"><strong>${lang === 'sq' ? 'Hap albumin' : 'Open album'}</strong><small>${activityPhotos.length} ${lang === 'sq' ? 'media' : 'media'}</small></span></button><div class="activity-info"><p class="activity-date">${item.event_date ? new Date(item.event_date).toLocaleDateString(lang === 'sq' ? 'sq-AL' : 'en-GB') : ''}</p><h3>${title}</h3>${descHtml}</div></article>`;
        }).join('');
        
        gallery.querySelectorAll('.activity-cover').forEach(cover => cover.onclick = () => { currentTitle = decodeURIComponent(cover.dataset.title); currentPhotos = JSON.parse(decodeURIComponent(cover.dataset.photos)); currentPhoto = 0; slideDir = 'right'; renderPhoto(); modal.hidden = false; document.body.classList.add('album-open'); });

        gallery.querySelectorAll('.btn-read-story').forEach(btn => {
            btn.onclick = () => {
                storyTitleEl.textContent = decodeURIComponent(btn.dataset.title);
                storyDescEl.textContent = decodeURIComponent(btn.dataset.desc);
                storyModal.hidden = false;
                document.body.classList.add('album-open');
            };
        });
    };

    let initialLang = localStorage.getItem('websiteLanguage') || 'sq';
    renderGallery(initialLang);
    window.addEventListener('languageChanged', (e) => { renderGallery(e.detail.lang); });

    document.body.insertAdjacentHTML('beforeend', `<div class="album-modal" id="albumModal" hidden><button class="album-close" aria-label="Close">×</button><button class="album-previous" aria-label="Previous media">‹</button><figure><div id="albumMedia"></div><figcaption id="albumCaption"></figcaption></figure><button class="album-next" aria-label="Next media">›</button></div>`);
    document.body.insertAdjacentHTML('beforeend', `<div class="story-modal" id="storyModal" hidden><div class="story-modal-content"><button class="story-close" aria-label="Close">×</button><h2 id="storyTitle"></h2><p id="storyDesc"></p></div></div>`);
    
    const modal = document.getElementById('albumModal');
    const mediaContainer = document.getElementById('albumMedia');
    const caption = document.getElementById('albumCaption');
    let currentPhotos = []; let currentPhoto = 0; let currentTitle = ''; let slideDir = 'right';
    
    const renderPhoto = () => { 
        mediaContainer.innerHTML = getMediaHTML(currentPhotos[currentPhoto], false); 
        caption.textContent = `${currentTitle} · ${currentPhoto + 1}/${currentPhotos.length}`; 
        mediaContainer.classList.remove('slide-in-right', 'slide-in-left');
        void mediaContainer.offsetWidth; // trigger DOM reflow for animation restart
        mediaContainer.classList.add(`slide-in-${slideDir}`);
    };
    
    modal.querySelector('.album-close').onclick = () => { modal.hidden = true; document.body.classList.remove('album-open'); };
    modal.querySelector('.album-previous').onclick = () => { slideDir = 'left'; currentPhoto = (currentPhoto - 1 + currentPhotos.length) % currentPhotos.length; renderPhoto(); };
    modal.querySelector('.album-next').onclick = () => { slideDir = 'right'; currentPhoto = (currentPhoto + 1) % currentPhotos.length; renderPhoto(); };
    modal.onclick = event => { if (event.target === modal) modal.querySelector('.album-close').click(); };
    
    let touchStartX = 0;
    let touchStartY = 0;
    modal.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, {passive: true});
    
    modal.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].screenX;
        const touchEndY = e.changedTouches[0].screenY;
        const diffX = touchStartX - touchEndX;
        const diffY = touchStartY - touchEndY;
        
        if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0) modal.querySelector('.album-next').click(); // Swiped left -> next
            else modal.querySelector('.album-previous').click(); // Swiped right -> previous
        }
    }, {passive: true});
    
    const storyModal = document.getElementById('storyModal');
    const storyTitleEl = document.getElementById('storyTitle');
    const storyDescEl = document.getElementById('storyDesc');
    storyModal.querySelector('.story-close').onclick = () => { storyModal.hidden = true; document.body.classList.remove('album-open'); };
    storyModal.onclick = event => { if (event.target === storyModal) storyModal.querySelector('.story-close').click(); };
    
    empty.hidden = true;
});
