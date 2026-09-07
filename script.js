const layoutUI = {
    
    
    
    navbar: `
        <nav class="fixed w-full z-50 top-0 bg-white border-b border-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    
                    <!-- Logo -->
                    <div class="flex-shrink-0 flex items-center">
                        <a href="index.html" class="flex items-center gap-2">
                            <img src="logo.jpg" alt="Logo" class="h-8 w-8 rounded-full">
                            <span class="font-semibold text-xl text-gray-900" data-i18n="logo">🌿 Oreada</span>
                        </a>
                    </div>
                    
                    <!-- Desktop Menu -->
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="about.html" class="text-gray-600 font-medium hover:text-green-600 hover:-translate-y-0.5 transition-all duration-300" data-i18n="nav_about">Rreth Nesh</a>
                        <a href="activities.html" class="text-gray-600 font-medium hover:text-green-600 hover:-translate-y-0.5 transition-all duration-300" data-i18n="nav_activities">Aktivitetet</a>
                        <a href="topic.html" class="text-gray-600 font-medium hover:text-green-600 hover:-translate-y-0.5 transition-all duration-300" data-i18n="nav_topic">Tema</a>
                        <a href="services.html" class="text-gray-600 font-medium hover:text-green-600 hover:-translate-y-0.5 transition-all duration-300" data-i18n="nav_services">Shërbimet</a>
                    </div>
                    
                    <!-- Desktop Actions -->
                    <div class="hidden md:flex items-center space-x-4">
                        <button class="text-gray-600 font-bold text-lg hover:text-green-600 hover:scale-110 hover:-rotate-6 transition-all duration-300" id="langToggle">EN</button>
                        <button class="bg-green-600 text-white px-5 py-2.5 rounded-full font-bold hover:bg-green-500 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(22,163,74,0.4)] transition-all duration-300" id="donateBtn" data-i18n="btn_donate">Dhuro Tani</button>
                    </div>
                    
                    <!-- Mobile Menu Button -->
                    <div class="md:hidden flex items-center">
                        <button id="mobile-menu-btn" class="text-gray-600 hover:text-gray-900 focus:outline-none p-2">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Mobile Menu Dropdown -->
            <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 w-full left-0">
                <div class="px-4 py-4 space-y-2 flex flex-col">
                    <a href="about.html" class="block px-2 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 hover:pl-4 transition-all duration-300" data-i18n="nav_about">Rreth Nesh</a>
                    <a href="activities.html" class="block px-2 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 hover:pl-4 transition-all duration-300" data-i18n="nav_activities">Aktivitetet</a>
                    <a href="topic.html" class="block px-2 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 hover:pl-4 transition-all duration-300" data-i18n="nav_topic">Tema</a>
                    <a href="services.html" class="block px-2 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 hover:pl-4 transition-all duration-300" data-i18n="nav_services">Shërbimet</a>
                    <div class="pt-4 flex items-center gap-4 border-t border-gray-100 mt-2 px-2 pb-2">
                        <button class="text-gray-600 font-bold text-lg hover:text-green-600 hover:scale-110 hover:-rotate-6 transition-all duration-300" id="langToggleMobile">EN</button>
                        <button class="bg-green-600 text-white px-4 py-2.5 rounded-xl font-bold hover:bg-green-500 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(22,163,74,0.4)] transition-all duration-300 w-full" id="donateBtnMobile" data-i18n="btn_donate">Dhuro Tani</button>
                    </div>
                </div>
            </div>
        </nav>
    `,

        donateModal: `
        <div id="donateModalContainer" class="fixed inset-0 z-[100] flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
            <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" id="donateModalBackdrop"></div>
            
            <div class="relative bg-white w-[90%] max-w-md rounded-[2rem] shadow-2xl p-6 md:p-8 m-4 transform scale-95 transition-transform duration-300 max-h-[90vh] overflow-y-auto" id="donateModalCard">
                <button id="donateModalClose" class="absolute top-5 right-5 text-gray-400 hover:text-gray-900 transition-colors bg-gray-50 hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
                    <i class="fa-solid fa-xmark text-xl"></i>
                </button>
                
                <div class="text-center mb-6 mt-2">
                    <div class="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 text-2xl mx-auto mb-4 shadow-sm">
                        <i class="fa-solid fa-hand-holding-heart"></i>
                    </div>
                    <h2 class="text-2xl font-extrabold text-gray-900 mb-2" data-i18n="donate_modal_title">Bëj një Dhurim</h2>
                    <p class="text-gray-500 font-light text-sm" data-i18n="donate_modal_desc">Kontributi juaj na ndihmon të mbrojmë natyrën dhe të organizojmë fushata.</p>
                </div>
                
                <div class="grid grid-cols-3 gap-2 mb-4">
                    <button class="donate-amt-btn py-2 border-2 border-gray-100 rounded-xl font-extrabold text-gray-700 hover:border-green-500 hover:bg-green-50 hover:text-green-700 transition-all focus:border-green-600 focus:bg-green-100 focus:text-green-800">$10</button>
                    <button class="donate-amt-btn py-2 border-2 border-gray-100 rounded-xl font-extrabold text-gray-700 hover:border-green-500 hover:bg-green-50 hover:text-green-700 transition-all focus:border-green-600 focus:bg-green-100 focus:text-green-800">$25</button>
                    <button class="donate-amt-btn py-2 border-2 border-gray-100 rounded-xl font-extrabold text-gray-700 hover:border-green-500 hover:bg-green-50 hover:text-green-700 transition-all focus:border-green-600 focus:bg-green-100 focus:text-green-800">$50</button>
                </div>
                
                <div class="relative mb-6">
                    <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-bold">$</span>
                    <input type="number" placeholder="Shuma tjetër" class="w-full bg-gray-50 border-2 border-gray-100 rounded-xl py-3 pl-8 pr-4 font-bold text-gray-900 focus:outline-none focus:border-green-500 focus:bg-white transition-all" data-i18n-placeholder="donate_modal_other">
                </div>

                <div class="border-t border-gray-100 pt-5 mb-6">
                    <h3 class="text-xs font-extrabold text-gray-400 mb-4 uppercase tracking-widest text-center" data-i18n="donate_modal_payment_info">Detajet e Pagesës</h3>
                    
                    <div class="space-y-3">
                        <!-- Card Name -->
                        <div class="relative">
                            <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <i class="fa-regular fa-user"></i>
                            </span>
                            <input type="text" placeholder="Emri në Kartë" class="w-full bg-gray-50 border-2 border-gray-100 rounded-xl py-3 pl-10 pr-4 text-sm font-medium text-gray-900 focus:outline-none focus:border-green-500 focus:bg-white transition-all" data-i18n-placeholder="donate_modal_card_name">
                        </div>

                        <!-- Card Number -->
                        <div class="relative">
                            <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <i class="fa-regular fa-credit-card"></i>
                            </span>
                            <input type="text" placeholder="Numri i Kartës" class="w-full bg-gray-50 border-2 border-gray-100 rounded-xl py-3 pl-10 pr-16 text-sm font-medium text-gray-900 focus:outline-none focus:border-green-500 focus:bg-white transition-all" data-i18n-placeholder="donate_modal_card_number">
                            <div class="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-1">
                                <i class="fa-brands fa-cc-visa text-gray-400 text-lg"></i>
                                <i class="fa-brands fa-cc-mastercard text-gray-400 text-lg"></i>
                            </div>
                        </div>

                        <!-- Expiry and CVC -->
                        <div class="grid grid-cols-2 gap-3">
                            <div class="relative">
                                <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <i class="fa-regular fa-calendar"></i>
                                </span>
                                <input type="text" placeholder="MM/YY" class="w-full bg-gray-50 border-2 border-gray-100 rounded-xl py-3 pl-10 pr-4 text-sm font-medium text-gray-900 focus:outline-none focus:border-green-500 focus:bg-white transition-all" data-i18n-placeholder="donate_modal_expiry">
                            </div>
                            <div class="relative">
                                <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <i class="fa-solid fa-lock"></i>
                                </span>
                                <input type="text" placeholder="CVC" class="w-full bg-gray-50 border-2 border-gray-100 rounded-xl py-3 pl-10 pr-4 text-sm font-medium text-gray-900 focus:outline-none focus:border-green-500 focus:bg-white transition-all" data-i18n-placeholder="donate_modal_cvc">
                            </div>
                        </div>
                    </div>
                </div>
                
                <button class="w-full bg-gray-900 text-white font-extrabold text-lg py-4 rounded-xl hover:bg-green-600 hover:shadow-[0_10px_25px_rgba(34,197,94,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2" data-i18n="donate_modal_submit">
                    Kryej Pagesën
                </button>
                
                <p class="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1 font-medium">
                    <i class="fa-solid fa-shield-halved"></i> <span data-i18n="donate_modal_secure">Pagesë 100% e Sigurt</span>
                </p>
            </div>
        </div>
    `,

    footer: `
        <footer class="site-footer">
            <div class="footer-container">
                <div class="footer-contact">
                    <h3 data-i18n="footer_contact_title">Na Kontaktoni</h3>
                    <p><i class="fa-solid fa-envelope"></i> Email: <a data-content-href="contact_email_href" href="mailto:oreadaenvironmentalasocciation@gmail.com" data-content-text="contact_email">oreadaenvironmentalasocciation@gmail.com</a></p>
                    <p><i class="fa-solid fa-phone"></i> Tel: <a data-content-href="contact_phone_href" href="tel:+355696066290" data-content-text="contact_phone">+355 69 606 6290</a></p>
                    <p><i class="fa-brands fa-instagram"></i> Instagram: <a data-content-href="instagram_href" href="https://instagram.com/oreada_shoqatemjedisore" target="_blank" data-content-text="instagram_handle">@oreada_shoqatemjedisore</a></p>
                    <p><i class="fa-solid fa-location-dot"></i> <span data-i18n="footer_address">Adresa: Vlorë, Lagja "Isa Boletini", Rruga "Nermin Vlora Falanski", Kati 1</span></p>
                </div>
            </div>
            <div class="footer-bottom">
                <p data-i18n="footer_text">&copy; 2026 Oreada. Të gjitha të drejtat e rezervuara.</p>
            </div>
        </footer>
    `
};

window.oreadaDefaultTranslations = {
    sq: {

        donate_modal_title: "Bëj një Dhurim",
        donate_modal_desc: "Kontributi juaj na ndihmon të mbrojmë natyrën dhe të organizojmë fushata.",
        donate_modal_other: "Shuma tjetër",
        donate_modal_submit: "Kryej Pagesën",

        donate_modal_payment_info: "Detajet e Pagesës",
        donate_modal_card_name: "Emri në Kartë",
        donate_modal_card_number: "Numri i Kartës",
        donate_modal_expiry: "Skadenca (MM/YY)",
        donate_modal_cvc: "Kodi CVC",
        donate_modal_secure: "Pagesë 100% e Sigurt",



        ig_badge: "Galeria Jonë",
        hero_badge: "Ruajmë Ekosistemin",
        about_badge_title: "Komuniteti",
        about_badge_desc: "Bashkohu Ne",
        activities_overlay_title: "Aksionet Tona",
        activities_overlay_desc: "Bëhuni pjesë e ndryshimit fizik në komunitet.",
        focus_badge: "Më Thellë",
        focus_title: "Fokusi & Zgjidhjet",
        focus_desc: "Eksploroni thellësinë e ekspertizës sonë dhe programet e larmishme që ofrojmë për edukimin dhe mbrojtjen e natyrës.",
        topic_badge: "Tematika",
        topic_btn: "Lexo më shumë",
        services_badge: "Ofertat Tona",
        services_btn: "Eksploro ofertat",
        topic_page_badge: "Objektivat Tona",
        topic_page_desc: "Zbuloni fushat tona kryesore të veprimit për një të ardhme më të gjelbër dhe një mjedis më të pastër.",
        btn_open_about: "Zbuloni Më Shumë",
        btn_open_activities: "Shiko Aktivitetet",
        hero_title: "Mbroni Natyrën,<br><span class=\"text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300\">Mbroni të Ardhmen</span>",

        page_title: "Oreada | Shoqatë Ambjentaliste",
        logo: "🌿 Oreada",
        nav_about: "Rreth Nesh",
        nav_activities: "Aktivitetet",
        nav_topic: "Tema",
        nav_services: "Shërbimet",
        btn_donate: "Dhuro Tani",
        donate_message: "Sistemi i donacioneve po ndërtohet.",
                hero_desc: "Bashkohu me nismën tonë për të promovuar një zhvillim të qëndrueshëm dhe ndërgjegjësuar publikun mbi çështjet mjedisore dhe klimatike.",
        hero_btn: "Shfleto Seksionet",
        home_about_title: "Rreth Nesh",
        home_about_desc: "Zbuloni misionin tonë, vlerat thelbësore dhe skuadrën e përkushtuar të vullnetarëve pas kësaj nisme. Ne jemi thellësisht të angazhuar për një të nesërme më të gjelbër, duke edukuar, përfshirë dhe frymëzuar komunitetin tonë lokal për të mbrojtur mjedisin dhe për të përqafuar praktika të qëndrueshme.",
        home_activities_title: "Aktivitetet",
        ig_title: "Aktivitetet Tona",
        ig_desc: "Shikoni nismat, projektet dhe momentet tona më të fundit.",
        home_activities_desc: "Shikoni galeritë e fushatave tona të pastrimit, mbjelljes së pemëve dhe riciklimit.",
        home_topic_title: "Tema",
        home_topic_desc: "Mbrojtja e Planetit Tonë: Një nismë gjithëpërfshirëse për të ruajtur ekosistemet delikate, për të mbrojtur biodiversitetin dhe për të përballuar sfidat globale të klimës. Fokusi ynë aktual është marrja e masave proaktive për të mbrojtur pyjet tona nga zjarret gjatë sezonit të verës dhe për të ndërtuar një rezistencë afatgjatë klimatike në mbarë rajonin.",
        home_services_title: "Shërbimet",
        home_services_desc: "Mësoni më shumë rreth programeve tona të larmishme edukative dhe shërbimeve profesionale mjedisore. Ne ofrojmë seminare të specializuara, trajnime praktike për riciklimin dhe konsulencë eksperte mbi praktikat e gjelbra për të ndihmuar individët dhe bizneset të reduktojnë në mënyrë efektive gjurmën e tyre ekologjike.",
        btn_open: "Hap Faqen",
        about_title: "Kush Jemi Ne",
        activity_objective: "Objekti i Veprimtarisë",
        about_desc: "Qëllimi kryesor i Shoqatës është mbrojtja, ruajtja, rikuperimi dhe përmirësimi i mjedisit, biodiversitetit, ekosistemeve dhe burimeve natyrore në të gjitha dimensionet e tyre. Ne punojmë me pasion për të promovuar qëndrueshmërinë ekologjike dhe ndërgjegjësimin publik, duke organizuar fushata pastrimi, mbjellje pemësh dhe projekte edukative për të rinjtë.",
        activities_title: "Aktivitetet Tona",
        activities_desc: "Nga mbjellja e pemëve tek pastrimi i plazheve, ja çfarë bëjmë ne.",
        activities_empty: "Aktivitete të reja do të shtohen së shpejti.",
        topic_title: "Tema",
        obj_a_title: "Mbrojtja e ujërave:",
        obj_a_desc: "Ruajtja e cilësisë së ujit, parandalimi i ndotjes nga mbetjet plastike dhe rehabilitimi i plotë i burimeve ujore sipërfaqësore dhe nëntokësore përmes monitorimeve të vazhdueshme.",
        obj_b_title: "Menaxhimi i ajrit dhe klimës:",
        obj_b_desc: "Mbrojtja e ajrit nga ndotja industriale dhe urbane, si dhe reduktimi i emetimeve të gazrave serrë përmes promovimit të energjive të rinovueshme dhe transportit të gjelbër.",
        obj_c_title: "Ruajtja e tokës dhe biodiversitetit:",
        obj_c_desc: "Mbrojtja, zgjerimi dhe mirëmbajtja e pyjeve, pyllëzimi i zonave të degraduara dhe ruajtja e larmisë biologjike të faunës e florës për të siguruar ekuilibrin ekologjik.",
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
        services_desc1: "Ne ofrojmë programe të specializuara trajnimi për riciklimin, menaxhimin e mbetjeve dhe konsulencë të detajuar për praktika të gjelbra në institucione. Qëllimi ynë është të pajisim individët dhe bizneset me njohuritë e nevojshme për të zvogëluar ndikimin e tyre mjedisor dhe për të përqafuar zgjidhje të qëndrueshme e inovative.",
        services_desc2: "Ne bashkëpunojmë ngushtë me klientë dhe partnerë nga organizata të vogla jo-fitimprurëse dhe organizata të mëdha ndërkombëtare, nga qeveritë dhe akademia, si dhe nga shoqëria civile. Ky rrjet i gjerë bashkëpunimi na lejon të bëjmë informacionin mjedisor sa më të aksesueshëm dhe të nxisim politika miqësore me natyrën në çdo nivel të shoqërisë.",
        footer_contact_title: "Na Kontaktoni",
        footer_address: 'Adresa: Vlorë, Lagja "Isa Boletini", Rruga "Nermin Vlora Falanski", Kati 1',
        footer_text: "© 2026 Oreada. Të gjitha të drejtat e rezervuara."
    },
    en: {

        donate_modal_title: "Make a Donation",
        donate_modal_desc: "Your contribution helps us protect nature and organize campaigns.",
        donate_modal_other: "Other amount",
        donate_modal_submit: "Complete Payment",

        donate_modal_payment_info: "Payment Details",
        donate_modal_card_name: "Name on Card",
        donate_modal_card_number: "Card Number",
        donate_modal_expiry: "Expiry (MM/YY)",
        donate_modal_cvc: "CVC Code",
        donate_modal_secure: "100% Secure Payment",



        ig_badge: "Our Gallery",
        hero_badge: "Protecting Ecosystems",
        about_badge_title: "Community",
        about_badge_desc: "Join Us",
        activities_overlay_title: "Our Actions",
        activities_overlay_desc: "Become part of the physical change in the community.",
        focus_badge: "Deeper Look",
        focus_title: "Focus & Solutions",
        focus_desc: "Explore the depth of our expertise and the diverse programs we offer for education and nature protection.",
        topic_badge: "Topics",
        topic_btn: "Read more",
        services_badge: "Our Offers",
        services_btn: "Explore offers",
        topic_page_badge: "Our Objectives",
        topic_page_desc: "Discover our main areas of action for a greener future and a cleaner environment.",
        btn_open_about: "Discover More",
        btn_open_activities: "View Activities",
        hero_title: "Protect Nature,<br><span class=\"text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300\">Protect the Future</span>",

        page_title: "Oreada | Environmental NGO",
        logo: "🌿 Oreada",
        nav_about: "About Us",
        nav_activities: "Activities",
        nav_topic: "Topic",
        nav_services: "Services",
        btn_donate: "Donate Now",
        donate_message: "Donation system is under construction.",
                hero_desc: "Join our initiative to promote sustainable development and raise public awareness about environmental and climate issues.",
        hero_btn: "Browse Sections",
        home_about_title: "About Us",
        home_about_desc: "Discover our mission, values, and the dedicated volunteer team behind this initiative. We are deeply committed to fostering a greener tomorrow by actively educating, engaging, and inspiring our local community to protect the environment and embrace sustainable living practices.",
        home_activities_title: "Activities",
        home_activities_desc: "View galleries of our cleanup campaigns, tree planting, and recycling.",
        home_topic_title: "Topic",
        home_topic_desc: "Protecting Our Planet: A comprehensive initiative to preserve fragile ecosystems, safeguard biodiversity, and tackle global climate challenges. We are currently focusing on proactive measures to protect our ancient forests from summer wildfires and build long-term climate resilience across the region.",
        home_services_title: "Services",
        home_services_desc: "Learn more about our diverse educational programs and professional environmental services. We offer specialized workshops, hands-on recycling training, and expert consulting on green practices to help individuals and businesses effectively reduce their ecological footprint.",
        btn_open: "Open Page",
        about_title: "Who We Are",
        activity_objective: "Activity Objectives",
        about_desc: "The main goal of the Association is the protection, preservation, recovery, and improvement of the environment, biodiversity, ecosystems, and natural resources in all their dimensions. We work passionately to promote ecological sustainability and public awareness, organizing clean-up campaigns, tree planting, and educational projects for youth.",
        activities_title: "Our Activities",
        ig_title: "Our Activities",
        ig_desc: "Explore our latest initiatives, projects, and moments.",

        activities_desc: "From planting trees to cleaning beaches, here is what we do.",
        activities_empty: "New activities will be added soon.",
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

const translations = window.oreadaDefaultTranslations;

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
    const navbarPlaceholder = document.getElementById("navbar-placeholder");
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (!navbarPlaceholder || !footerPlaceholder) return;

    navbarPlaceholder.innerHTML = layoutUI.navbar;
    footerPlaceholder.innerHTML = layoutUI.footer;

    
    
    let currentLang = localStorage.getItem('websiteLanguage') || 'sq';
    const langToggleBtn = document.getElementById('langToggle');
    const langToggleMobile = document.getElementById('langToggleMobile');
    const donateBtn = document.getElementById('donateBtn');
    const donateBtnMobile = document.getElementById('donateBtnMobile');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    const applyTranslations = (lang) => {
        document.documentElement.lang = lang;
        if(langToggleBtn) langToggleBtn.textContent = lang === 'sq' ? 'EN' : 'AL';
        if(langToggleMobile) langToggleMobile.textContent = lang === 'sq' ? 'EN' : 'AL';
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-alt]').forEach(element => {
            const key = element.getAttribute('data-i18n-alt');
            if (translations[lang][key]) {
                element.alt = translations[lang][key];
            }
        });

    };

    applyTranslations(currentLang);

const applyDynamicContent = (content) => {
        Object.entries(content).forEach(([key, value]) => {
            if (key in translations.sq) translations.sq[key] = value.sq;
            if (key in translations.en) translations.en[key] = value.en;
        });
        document.querySelectorAll('[data-content-src]').forEach((element) => {
            const value = content[element.dataset.contentSrc]?.sq;
            if (value) element.src = value;
        });
        document.querySelectorAll('[data-content-bg]').forEach((element) => {
            const value = content[element.dataset.contentBg]?.sq;
            if (value) element.style.setProperty('--hero-image', `url("${value}")`);
        });
        document.querySelectorAll('[data-content-text]').forEach((element) => {
            const value = content[element.dataset.contentText]?.sq;
            if (value) element.textContent = value;
        });
        document.querySelectorAll('[data-content-href]').forEach((element) => {
            const value = content[element.dataset.contentHref]?.sq;
            if (value) element.href = value;
        });
    };

    if (window.cachedSiteContent) {
        applyDynamicContent(window.cachedSiteContent);
        applyTranslations(currentLang);
    }

    if (window.siteContentReady) {
        window.siteContentReady.then((content) => {
            applyDynamicContent(content);
            applyTranslations(currentLang);
        });
    }

    const toggleLang = () => {
        currentLang = currentLang === 'sq' ? 'en' : 'sq';
        localStorage.setItem('websiteLanguage', currentLang);
        applyTranslations(currentLang);
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
    };

    if(langToggleBtn) langToggleBtn.addEventListener('click', toggleLang);
    if(langToggleMobile) langToggleMobile.addEventListener('click', toggleLang);


    // Add Modal to DOM
    if (layoutUI.donateModal) {
        document.body.insertAdjacentHTML('beforeend', layoutUI.donateModal);
    }
    
    const donateModalContainer = document.getElementById('donateModalContainer');
    const donateModalCard = document.getElementById('donateModalCard');
    const donateModalBackdrop = document.getElementById('donateModalBackdrop');
    const donateModalClose = document.getElementById('donateModalClose');
    
    const openDonateModal = () => {
        donateModalContainer.classList.remove('hidden');
        setTimeout(() => {
            donateModalContainer.classList.remove('opacity-0');
            donateModalCard.classList.remove('scale-95');
            donateModalCard.classList.add('scale-100');
        }, 10);
    };
    
    const closeDonateModal = () => {
        donateModalContainer.classList.add('opacity-0');
        donateModalCard.classList.remove('scale-100');
        donateModalCard.classList.add('scale-95');
        setTimeout(() => {
            donateModalContainer.classList.add('hidden');
        }, 300);
    };
    
    if(donateModalClose) donateModalClose.addEventListener('click', closeDonateModal);
    if(donateModalBackdrop) donateModalBackdrop.addEventListener('click', closeDonateModal);

    const handleDonate = () => {
        openDonateModal();
    };

    if(donateBtn) donateBtn.addEventListener('click', handleDonate);
    if(donateBtnMobile) donateBtnMobile.addEventListener('click', handleDonate);

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
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
