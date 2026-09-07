(function () {
    window.oreadaDefaultMedia = {
        home_hero_image: 'img/1.webp',
        home_about_image: 'img/6.webp',
        home_activities_image: 'img/3.webp',
        home_topic_image: 'img/4.webp',
        home_services_image: 'img/1.webp',
        about_image: 'img/6.webp',
        services_image: 'img/1.webp'
    };
    
    try {
        const cached = localStorage.getItem('oreada_site_content');
        if (cached) {
            window.cachedSiteContent = JSON.parse(cached);
        }
    } catch (e) {
        window.cachedSiteContent = null;
    }

    const configured = window.OREADA_SUPABASE_URL &&
        !window.OREADA_SUPABASE_URL.startsWith('YOUR_') && window.supabase;
    
    window.siteContentReady = configured
        ? window.supabase.createClient(window.OREADA_SUPABASE_URL, window.OREADA_SUPABASE_ANON_KEY)
            .from('site_content').select('content_key, sq, en').then(({ data, error }) => {
                if (error) throw error;
                const result = (data || []).reduce((content, item) => {
                    content[item.content_key] = { sq: item.sq, en: item.en };
                    return content;
                }, {});
                try {
                    localStorage.setItem('oreada_site_content', JSON.stringify(result));
                } catch(e) {}
                return result;
            }).catch(() => ({}))
        : Promise.resolve({});
})();
