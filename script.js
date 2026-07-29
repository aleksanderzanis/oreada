const layoutUI = {
    navbar: `
        <nav class="navbar">
            <a href="index.html" class="logo-link">
                <div class="logo">
                    <img src="logo.jpg" alt="Logo" style="height: 40px; margin-right: 10px; vertical-align: middle;">
                    <span data-i18n="logo">🌿 Oreada</span>
                </div>
            </a>
            <ul class="nav-links">
                <li><a href="about.html" data-i18n="nav_about">Rreth Nesh</a></li>
                <li><a href="activities.html" data-i18n="nav_activities">Aktivitetet</a></li>
                <li><a href="topic.html" data-i18n="nav_topic">Tema</a></li>
                <li><a href="services.html" data-i18n="nav_services">Shërbimet</a></li>
            </ul>
            <div class="nav-actions">
                <button class="btn-lang" id="langToggle">EN</button>
                <button class="btn-donate" id="donateBtn" data-i18n="btn_donate">Dhuro Tani</button>
            </div>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    `,
    footer: `
        <footer class="site-footer">
            <div class="footer-container">
                <div class="footer-contact">
                    <h3 data-i18n="footer_contact_title">Na Kontaktoni</h3>
                    <p><i class="fa-solid fa-envelope"></i> Email: <a href="mailto:oreadaenvironmentalasocciation@gmail.com">oreadaenvironmentalasocciation@gmail.com</a></p>
                    <p><i class="fa-solid fa-phone"></i> Tel: <a href="tel:+355696066290">+355 69 606 6290</a></p>
                    <p><i class="fa-brands fa-instagram"></i> Instagram: <a href="https://instagram.com/oreada_shoqatemjedisore" target="_blank">@oreada_shoqatemjedisore</a></p>
                    <p><i class="fa-solid fa-location-dot"></i> <span data-i18n="footer_address">Adresa: Vlorë, Lagja "Isa Boletini", Rruga "Nermin Vlora Falanski", Kati 1</span></p>
                </div>
            </div>
            <div class="footer-bottom">
                <p data-i18n="footer_text">&copy; 2026 Oreada. Të gjitha të drejtat e rezervuara.</p>
            </div>
        </footer>
    `
};

const translations = {
    sq: {
        page_title: "Oreada | Shoqatë Ambjentaliste",
        logo: "🌿 Oreada",
        nav_about: "Rreth Nesh",
        nav_activities: "Aktivitetet",
        nav_topic: "Tema",
        nav_services: "Shërbimet",
        btn_donate: "Dhuro Tani",
        hero_title: "Mbroni Natyrën, Mbroni të Ardhmen",
        hero_desc: "Bashkohu me nismën tonë për të promovuar një zhvillim të qëndrueshëm dhe ndërgjegjësuar publikun mbi çështjet mjedisore dhe klimatike.",
        hero_btn: "Shfleto Seksionet",
        home_about_title: "Rreth Nesh",
        home_about_desc: "Zbuloni misionin tonë, vlerat dhe skuadrën e vullnetarëve pas kësaj nisme.",
        home_activities_title: "Aktivitetet",
        ig_title: "Aktivitetet e Fundit",
        ig_desc: "Ndiqni nismat tona më të fundit drejtpërdrejt nga faqja jonë zyrtare në Instagram.",
        ig_button: "Na Ndiqni në Instagram",
        home_activities_desc: "Shikoni galeritë e fushatave tona të pastrimit, mbjelljes së pemëve dhe riciklimit.",
        home_topic_title: "Tema",
        home_topic_desc: "Mbrojtja e Planetit Tonë: Një nismë gjithëpërfshirëse për ruajtjen e ekosistemeve, mbrojtjen e biodiversitetit dhe përballjen me sfidat klimatike.",
        home_services_title: "Shërbimet",
        home_services_desc: "Mësoni më shumë rreth programeve tona edukative dhe shërbimeve mjedisore.",
        btn_open: "Hap Faqen",
        about_title: "Kush Jemi Ne",
        activity_objective: "Objekti i Veprimtarisë",
        about_desc: "Qëllimi kryesor i Shoqatës është mbrojtja, ruajtja, rikuperimi dhe përmirësimi i mjedisit, biodiversitetit, ekosistemeve dhe burimeve natyrore në të gjitha dimensionet e tyre, duke promovuar qëndrueshmërinë ekologjike dhe ndërgjegjësimin publik.",
        activities_title: "Aktivitetet Tona",
        activities_desc: "Nga mbjellja e pemëve tek pastrimi i plazheve, ja çfarë bëjmë ne.",
        topic_title: "Tema",
        
        
        obj_a_title: "Mbrojtja e ujërave:",
        obj_a_desc: "sigurimi i cilësisë së ujit të pijshëm, mbrojtja e lumenjve, liqeneve, brigjeve të detit dhe rezervave natyrore ujore, përfshirë edhe ruajtjen e florës dhe faunës ujore.",
        obj_b_title: "Menaxhimi i ajrit dhe klimës:",
        obj_b_desc: "monitorimi i ndotjes së ajrit, reduktimi i gazrave ndotës, promovimi i energjive të rinovueshme dhe ndërgjegjësimi mbi ndryshimet klimatike.",
        obj_c_title: "Ruajtja e tokës dhe biodiversitetit:",
        obj_c_desc: "mbrojtja e florës dhe faunës, restaurimi i habitateve natyrore, menaxhimi i pyjeve dhe zonave të mbrojtura, si dhe promovimi i florës dhe faunës endemike.",
        obj_d_title: "Mbrojtja dhe rikuperimi i ekosistemeve:",
        obj_d_desc: "realizimi i projekteve për rikuperim ekologjik, ruajtjen e habitateve natyrore dhe menaxhimin e qëndrueshëm të tyre.",
        obj_e_title: "Parandalimi dhe adaptimi ndaj ndryshimeve klimatike:",
        obj_e_desc: "studime dhe projekte për përgatitje ndaj rreziqeve mjedisore, si përmbytje, thatësira dhe katastrofa natyrore.",
        obj_f_title: "Menaxhimi i mbeturinave dhe riciklimi:",
        obj_f_desc: "promovimi i riciklimit, zvogëlimi i mbeturinave, trajtimi i mbetjeve toksike dhe edukimi i publikut për praktikat e qëndrueshme.",
        obj_g_title: "Energjia e qëndrueshme dhe teknologjitë e gjelbra:",
        obj_g_desc: "mbështetja e përdorimit të burimeve të rinovueshme dhe të teknologjive inovative miqësore me mjedisin.",
        obj_h_title: "Edukimi dhe ndërgjegjësimi publik:",
        obj_h_desc: "organizimi i fushatave, trajnimeve, punëtorive, seminareve dhe botimeve për të rritur njohuritë dhe përgjegjësinë mjedisore të publikut.",
        obj_i_title: "Kërkime shkencore dhe monitorime:",
        obj_i_desc: "realizimi i studimeve, inventarizimeve, analizave laboratorike dhe monitorimeve për të mbështetur vendimmarrjen e bazuar në prova shkencore.",
        obj_j_title: "Politikat publike dhe bashkëpunimi ndërkombëtar:",
        obj_j_desc: "pjesëmarrja në rrjete mjedisore, projekte ndërkombëtare dhe hartimi i politikave që mbrojnë mjedisin.",
        obj_k_title: "Promovimi i qëndrueshmërisë në sektorë të ndryshëm:",
        obj_k_desc: "duke përfshirë turizmin, bujqësinë, akuakulturën, urbanistikën dhe zhvillimin ekonomik në harmoni me mjedisin.",
        obj_l_title: "Inovacioni dhe trajnim profesional:",
        obj_l_desc: "zhvillimi i kapaciteteve të individëve dhe institucioneve për praktika mjedisore të avancuara dhe zbatimin e projekteve inovative.",

        services_title: "Shërbimet",
        services_desc1: "Ne ofrojmë trajnime për riciklimin dhe konsulencë për praktika të gjelbra.",
        services_desc2: "Ne bashkëpunojmë me klientë dhe partnerë nga organizata të vogla jo-fitimprurëse dhe organizata të mëdha ndërkombëtare, nga qeveritë dhe akademia, si dhe nga shoqëria civile për ta bërë informacionin mjedisor sa më të aksesueshëm që të jetë e mundur.",
        footer_contact_title: "Na Kontaktoni",
        footer_address: 'Adresa: Vlorë, Lagja "Isa Boletini", Rruga "Nermin Vlora Falanski", Kati 1',
        footer_text: "© 2026 Oreada. Të gjitha të drejtat e rezervuara."
    },
    en: {
        page_title: "Oreada | Environmental NGO",
        logo: "🌿 Oreada",
        nav_about: "About Us",
        nav_activities: "Activities",
        nav_topic: "Topic",
        nav_services: "Services",
        btn_donate: "Donate Now",
        hero_title: "Protect Nature, Protect the Future",
        hero_desc: "Join our initiative to promote sustainable development and raise public awareness about environmental and climate issues.",
        hero_btn: "Browse Sections",
        home_about_title: "About Us",
        home_about_desc: "Discover our mission, values, and the volunteer team behind this initiative.",
        home_activities_title: "Activities",
        home_activities_desc: "View galleries of our cleanup campaigns, tree planting, and recycling.",
        home_topic_title: "Topic",
        home_topic_desc: "Protecting Our Planet: A comprehensive initiative to preserve ecosystems, safeguard biodiversity, and tackle global climate challenges.",
        home_services_title: "Services",
        home_services_desc: "Learn more about our educational programs and environmental services.",
        btn_open: "Open Page",
        about_title: "Who We Are",
        activity_objective: "Activity Objectives",
        about_desc: "The main objective of the Association is the protection, conservation, recovery, and improvement of the environment, biodiversity, ecosystems, and natural resources in all their dimensions, promoting ecological sustainability and public awareness.",
        activities_title: "Our Activities",
        ig_title: "Latest Activities",
        ig_desc: "Follow our most recent initiatives directly from our official Instagram page.",
        ig_button: "Follow Us on Instagram",

        activities_desc: "From planting trees to cleaning beaches, here is what we do.",
        topic_title: "Topic",

        obj_a_title: "Protection of waters:",
        obj_a_desc: "ensuring the quality of drinking water, protecting rivers, lakes, sea coasts, and natural water reserves, including the conservation of aquatic flora and fauna.",
        obj_b_title: "Air and climate management:",
        obj_b_desc: "monitoring air pollution, reducing polluting gases, promoting renewable energies, and raising awareness about climate change.",
        obj_c_title: "Conservation of land and biodiversity:",
        obj_c_desc: "protection of flora and fauna, restoration of natural habitats, management of forests and protected areas, as well as the promotion of endemic flora and fauna.",
        obj_d_title: "Protection and recovery of ecosystems:",
        obj_d_desc: "implementing projects for ecological recovery, conservation of natural habitats, and their sustainable management.",
        obj_e_title: "Prevention and adaptation to climate change:",
        obj_e_desc: "studies and projects for preparation against environmental risks, such as floods, droughts, and natural disasters.",
        obj_f_title: "Waste management and recycling:",
        obj_f_desc: "promoting recycling, reducing waste, treating toxic waste, and educating the public on sustainable practices.",
        obj_g_title: "Sustainable energy and green technologies:",
        obj_g_desc: "supporting the use of renewable resources and innovative environmentally friendly technologies.",
        obj_h_title: "Education and public awareness:",
        obj_h_desc: "organizing campaigns, training, workshops, seminars, and publications to increase public environmental knowledge and responsibility.",
        obj_i_title: "Scientific research and monitoring:",
        obj_i_desc: "conducting studies, inventories, laboratory analyses, and monitoring to support evidence-based decision-making.",
        obj_j_title: "Public policies and international cooperation:",
        obj_j_desc: "participation in environmental networks, international projects, and the drafting of policies that protect the environment.",
        obj_k_title: "Promotion of sustainability in various sectors:",
        obj_k_desc: "including tourism, agriculture, aquaculture, urban planning, and economic development in harmony with the environment.",
        obj_l_title: "Innovation and professional training:",
        obj_l_desc: "developing the capacities of individuals and institutions for advanced environmental practices and the implementation of innovative projects.",

        services_title: "Services",
        services_desc1: "We offer recycling training and consulting on green practices.",
        services_desc2: "We collaborate with clients and partners from small non-profits and large international organizations, from governments and academia and from civil society to make environmental information as accessible as possible.",
        footer_contact_title: "Contact Us",
        footer_address: 'Address: Vlore, Neighborhood "Isa Boletini", "Nermin Vlora Falanski" Street, 1st Floor',
        footer_text: "© 2026 Oreada. All rights reserved."
    }
};

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }, 300);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("navbar-placeholder").innerHTML = layoutUI.navbar;
    document.getElementById("footer-placeholder").innerHTML = layoutUI.footer;

    let currentLang = localStorage.getItem('websiteLanguage') || 'sq';
    const langToggleBtn = document.getElementById('langToggle');
    const donateBtn = document.getElementById('donateBtn');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    const applyTranslations = (lang) => {
        document.documentElement.lang = lang;
        if(langToggleBtn) langToggleBtn.textContent = lang === 'sq' ? 'EN' : 'AL';
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    };

    applyTranslations(currentLang);

    if(langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'sq' ? 'en' : 'sq';
            localStorage.setItem('websiteLanguage', currentLang);
            applyTranslations(currentLang);
        });
    }

    if(donateBtn) {
        donateBtn.addEventListener('click', () => {
            alert(currentLang === 'sq' ? 'Sistemi i donacioneve po ndërtohet.' : 'Donation system is under construction.');
        });
    }

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = '#ffffff';
                navLinks.style.padding = '1rem 0';
                navLinks.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                navLinks.style.textAlign = 'center';
            }
        });
    }

    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => observer.observe(el));
});