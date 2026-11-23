/* ==========================================================================
   Portfolio Batiste Dubo — Interactive Logic
   Theme Toggle · FR/EN i18n · Filters · Project Modal · Scroll Reveal
   ========================================================================== */

(() => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Translations (FR / EN)
  // --------------------------------------------------------------------------
  const translations = {
    fr: {
      skip: 'Aller au contenu principal',
      nav_journey: 'Parcours',
      nav_skills: 'Compétences',
      nav_projects: 'Projets',
      nav_about: 'À propos',
      nav_contact: 'Contact',
      hero_role_tag: 'Développeur Full Stack',
      hero_title: 'Concevoir des applications web complètes, de la base de données à l\'interface.',
      hero_lead: 'Je m\'appelle <strong>Batiste Dubo</strong>. Formé en informatique fondamentale puis spécialisé en développement d\'applications à l\'IUT de Lens, je construis des solutions robustes, lisibles et centrées sur l\'usage.',
      hero_cta_journey: 'Découvrir mon parcours',
      hero_cta_projects: 'Voir mes projets',
      stat_study: 'Formation en informatique',
      stat_focus: 'PHP/Laravel, Java, SQL, JS',
      stat_marathon: 'Sprints & Marathon Web',
      card_role: 'Développeur Full Stack',
      card_status: 'Ouvert aux opportunités',

      journey_eyebrow: '01 · Mon Parcours',
      journey_title: 'Une progression de la théorie informatique au Full Stack',
      journey_subtitle: 'Chaque étape de mon parcours m\'a permis d\'associer rigueur algorithmique, pratique du génie logiciel et sens du travail en équipe.',
      badge_fullstack: 'Spécialisation Full Stack',
      tl_but_title: 'BUT Informatique — Parcours Développement d\'Application',
      tl_but_desc: 'Approfondissement du développement web et logiciel orienté production : architecture MVC avec Laravel, modélisation et requêtage avancé PostgreSQL, programmation orientée objet en Java, et réalisation de projets en équipe dont le Marathon Web (48h).',
      badge_company: 'Immersion Entreprise',
      tl_wl_title: 'Stage de découverte — Métiers du numérique',
      tl_wl_desc: 'Observation concrète du cycle de vie d\'un produit logiciel à grande échelle (WorldLine Contact) et échanges avec les équipes de développement, UI/UX design et data science.',
      badge_fundamentals: 'Fondamentaux',
      tl_lic_title: 'Licence d\'Informatique',
      tl_lic_desc: 'Acquisition des bases solides de l\'informatique : algorithmique, structures de données, programmation impérative en C, logique mathématique et premiers développements web.',
      badge_soft: 'Expérience Humaine',
      tl_alsh_title: 'Animateur en ALSH',
      tl_alsh_desc: 'Encadrement et animation d\'un groupe de 24 enfants (6-7 ans). Développement de compétences transverses essentielles en entreprise : communication claire, calme sous pression, organisation et esprit d\'équipe.',
      badge_bac: 'Socle Scientifique',
      tl_bac_title: 'Baccalauréat Général — Maths & Physique-Chimie',
      tl_bac_desc: 'Formation scientifique axée sur la rigueur analytique, la modélisation et la résolution structurée de problèmes.',

      skills_eyebrow: '02 · Stack Technique',
      skills_title: 'Des outils choisis pour construire de bout en bout',
      skills_subtitle: 'Filtrez par couche applicative pour explorer les technologies que j\'utilise dans mes projets.',
      filter_all: 'Toutes',
      filter_data: 'BDD & Outils',
      sk_html: 'Intégration sémantique, mise en page Flexbox & Grid, design responsive et accessibilité.',
      sk_js: 'Manipulation du DOM, gestion d\'événements, requêtes asynchrones et interfaces dynamiques.',
      sk_blade: 'Conception de vues modulaires, composants réutilisables et rendu côté serveur avec Laravel.',
      sk_laravel: 'Architecture MVC, routage, Eloquent ORM, authentification et validation de formulaires.',
      sk_java: 'Programmation orientée objet, patrons de conception, applications lourdes et calcul graphique.',
      sk_c: 'Gestion mémoire, pointeurs, algorithmique et compréhension bas-niveau du système.',
      sk_pg: 'Modélisation relationnelle (MCD/MLD), requêtes complexes, migrations et intégrité des données.',
      sk_git: 'Gestion de branches, revues de code, résolution de conflits et collaboration en sprint.',
      sk_team: 'Travail sous contrainte de temps (Marathon Web 48h), découpage de tâches et communication.',

      projects_eyebrow: '03 · Réalisations',
      projects_title: 'Projets phares',
      projects_subtitle: 'Une sélection d\'applications web full stack et de logiciels réalisés durant mon parcours. Cliquez sur un projet pour explorer son architecture.',
      filter_all_projects: 'Tous',
      filter_software: 'Logiciel & Graphisme',
      proj_pantheon_desc: 'Plateforme collaborative de lecture et de création d\'histoires interactives à choix multiples, conçue en équipe lors du Marathon Web de l\'IUT de Lens.',
      proj_boardgames_desc: 'Application web complète permettant de consulter, filtrer, noter et ajouter des jeux de société avec gestion des utilisateurs et base relationnelle.',
      proj_rt_title: 'Moteur de Ray-Tracing',
      proj_rt_desc: 'Logiciel de génération d\'images 3D par lancer de rayons développé en Java : calcul d\'intersections, gestion des ombres, réflexions et modèles d\'éclairage.',
      proj_jo_desc: 'Site vitrine dynamique dédié aux Jeux Olympiques de Paris 2024 développé sous Laravel, mettant en avant les épreuves, sites et actualités.',
      view_details: 'Voir les détails →',

      about_eyebrow: '04 · À Propos',
      about_title: 'Ce qui guide ma façon de développer',
      about_p1: 'Mon parcours n\'est pas linéaire, et c\'est ce qui fait ma force : après deux ans de <strong>Licence d\'Informatique à Sorbonne Paris Nord</strong> où j\'ai forgé mes bases théoriques (C, algorithmique, logique), j\'ai choisi le <strong>BUT Informatique à l\'IUT de Lens</strong> pour me confronter au terrain et au développement d\'applications complètes.',
      about_p2: 'En parallèle, mon expérience d\'<strong>animateur en ALSH</strong> et mon passage chez <strong>WorldLine</strong> m\'ont appris l\'importance de la communication, de la fiabilité et du travail collectif — des qualités indispensables lorsqu\'on code en équipe sur des sprints courts comme le Marathon Web.',
      info_title: 'Repères & Langues',
      info_loc_lbl: 'Localisation',
      info_lang_lbl: 'Langues',
      info_lang_val: 'Français (natif) · Anglais (B2+) · Espagnol (A2)',
      info_int_lbl: 'Centres d\'intérêt',
      info_int_val: 'Informatique · Basket-Ball · Jeux vidéo',
      info_focus_lbl: 'Approche',
      info_focus_val: 'Code propre · MVC · Esprit d\'équipe',

      contact_eyebrow: '05 · Contact',
      contact_title: 'Échangeons sur vos projets ou opportunités',
      contact_subtitle: 'Disponible pour discuter d\'un poste, d\'une alternance, d\'un projet web ou simplement d\'architecture logicielle.',
      copy_btn: 'Copier',
      form_name: 'Votre nom',
      form_subject: 'Sujet',
      form_message: 'Message',
      form_submit: 'Préparer l\'email →',
      footer_rights: 'Développeur Full Stack',
      footer_built: 'Conçu en HTML5, CSS3 & JavaScript · Hébergé sur GitHub Pages',
      modal_context: 'Contexte',
      modal_challenges: 'Architecture & Défis',
      toast_copied: 'Adresse email copiée dans le presse-papiers !',
      form_sent: 'Ouverture de votre client mail avec le message pré-rempli.'
    },
    en: {
      skip: 'Skip to main content',
      nav_journey: 'Journey',
      nav_skills: 'Skills',
      nav_projects: 'Projects',
      nav_about: 'About',
      nav_contact: 'Contact',
      hero_role_tag: 'Full Stack Developer',
      hero_title: 'Building end-to-end web applications, from database schema to user interface.',
      hero_lead: 'I\'m <strong>Batiste Dubo</strong>. Trained in computer science fundamentals and specialized in application development at IUT de Lens, I craft reliable, maintainable, and user-focused software.',
      hero_cta_journey: 'Explore my journey',
      hero_cta_projects: 'View my projects',
      stat_study: 'Computer science training',
      stat_focus: 'PHP/Laravel, Java, SQL, JS',
      stat_marathon: 'Sprints & Web Marathon',
      card_role: 'Full Stack Developer',
      card_status: 'Open to opportunities',

      journey_eyebrow: '01 · My Journey',
      journey_title: 'From Computer Science Theory to Full Stack Engineering',
      journey_subtitle: 'Every step of my background combined algorithmic rigor, practical software engineering, and strong teamwork.',
      badge_fullstack: 'Full Stack Specialization',
      tl_but_title: 'BUT Computer Science — Application Development Track',
      tl_but_desc: 'Production-oriented web and software engineering: MVC architecture with Laravel, relational modeling and advanced PostgreSQL queries, object-oriented Java, and team sprints including the 48-hour Web Marathon.',
      badge_company: 'Industry Immersion',
      tl_wl_title: 'Discovery Internship — Tech & Digital Roles',
      tl_wl_desc: 'First-hand observation of the software lifecycle on a large-scale product (WorldLine Contact), shadowing software engineers, UI/UX designers, and data scientists.',
      badge_fundamentals: 'CS Fundamentals',
      tl_lic_title: 'Bachelor in Computer Science (Licence)',
      tl_lic_desc: 'Built strong foundations in algorithms, data structures, imperative programming in C, mathematical logic, and core web technologies.',
      badge_soft: 'Human Experience',
      tl_alsh_title: 'Youth Activity Leader (ALSH)',
      tl_alsh_desc: 'Supervised and led a group of 24 children (ages 6–7). Developed essential workplace soft skills: clear communication, composure under pressure, planning, and teamwork.',
      badge_bac: 'Scientific Foundation',
      tl_bac_title: 'General Baccalaureate — Mathematics & Physics-Chemistry',
      tl_bac_desc: 'Scientific curriculum focused on analytical rigor, modeling, and structured problem-solving.',

      skills_eyebrow: '02 · Tech Stack',
      skills_title: 'Tools chosen to build from end to end',
      skills_subtitle: 'Filter by application layer to explore the technologies I use across my projects.',
      filter_all: 'All',
      filter_data: 'DB & Tooling',
      sk_html: 'Semantic markup, Flexbox & Grid layouts, responsive design, and web accessibility.',
      sk_js: 'DOM manipulation, event handling, asynchronous requests, and dynamic UI interactions.',
      sk_blade: 'Modular views, reusable components, and server-side rendering with Laravel.',
      sk_laravel: 'MVC architecture, routing, Eloquent ORM, authentication, and form validation.',
      sk_java: 'Object-oriented design, design patterns, desktop software, and 3D graphics computation.',
      sk_c: 'Memory management, pointers, algorithms, and low-level system understanding.',
      sk_pg: 'Relational modeling (ERD), complex SQL queries, migrations, and data integrity.',
      sk_git: 'Branching workflows, code reviews, merge conflict resolution, and sprint collaboration.',
      sk_team: 'Delivering under tight deadlines (48h Web Marathon), task breakdown, and communication.',

      projects_eyebrow: '03 · Selected Work',
      projects_title: 'Featured Projects',
      projects_subtitle: 'A curated selection of full stack web apps and software built during my journey. Click any project to inspect its architecture.',
      filter_all_projects: 'All',
      filter_software: 'Software & Graphics',
      proj_pantheon_desc: 'Collaborative platform for reading and writing branching interactive stories, built as a team during the IUT de Lens 48h Web Marathon.',
      proj_boardgames_desc: 'Full-featured web application to browse, filter, rate, and publish board games with user accounts and a relational database.',
      proj_rt_title: 'Ray-Tracing Engine',
      proj_rt_desc: '3D image synthesis software built in Java using ray tracing: ray-object intersections, shadows, reflections, and lighting models.',
      proj_jo_desc: 'Dynamic showcase website dedicated to the Paris 2024 Olympic Games built with Laravel, featuring events, venues, and news.',
      view_details: 'View details →',

      about_eyebrow: '04 · About',
      about_title: 'What shapes the way I build software',
      about_p1: 'My path is non-linear, and that is my strength: after two years in a <strong>Computer Science Bachelor at Sorbonne Paris Nord</strong> building strong theoretical roots (C, algorithms, logic), I joined the <strong>BUT Informatique at IUT de Lens</strong> to focus on hands-on, full-stack application engineering.',
      about_p2: 'Alongside my studies, working as a <strong>youth activity leader</strong> and interning at <strong>WorldLine</strong> taught me reliability, clear communication, and team coordination — crucial assets during intense collaborative sprints like the Web Marathon.',
      info_title: 'Snapshot & Languages',
      info_loc_lbl: 'Location',
      info_lang_lbl: 'Languages',
      info_lang_val: 'French (native) · English (B2+) · Spanish (A2)',
      info_int_lbl: 'Interests',
      info_int_val: 'Computer Science · Basketball · Video Games',
      info_focus_lbl: 'Approach',
      info_focus_val: 'Clean Code · MVC · Team Spirit',

      contact_eyebrow: '05 · Contact',
      contact_title: 'Let\'s discuss your projects or opportunities',
      contact_subtitle: 'Available to talk about full stack roles, apprenticeships, web projects, or software architecture.',
      copy_btn: 'Copy',
      form_name: 'Your name',
      form_subject: 'Subject',
      form_message: 'Message',
      form_submit: 'Prepare email →',
      footer_rights: 'Full Stack Developer',
      footer_built: 'Built with HTML5, CSS3 & JavaScript · Hosted on GitHub Pages',
      modal_context: 'Context',
      modal_challenges: 'Architecture & Challenges',
      toast_copied: 'Email address copied to clipboard!',
      form_sent: 'Opening your email client with the pre-filled message.'
    }
  };

  // Detailed project data for the modal
  const projectDetails = {
    pantheon: {
      type: 'Full Stack · Marathon Web 48h',
      title: { fr: 'Le Panthéon', en: 'Le Panthéon' },
      tags: ['Laravel', 'PHP', 'PostgreSQL', 'Blade', 'Git'],
      context: {
        fr: 'Réalisé en équipe dans le cadre du Marathon Web de l\'IUT de Lens (48 heures non-stop), Le Panthéon permet aux utilisateurs de lire des récits interactifs à embranchements et de créer leurs propres histoires.',
        en: 'Built as a team during the 48-hour IUT de Lens Web Marathon, Le Panthéon lets users read branching interactive stories and author their own narratives.'
      },
      challenges: {
        fr: 'Modélisation d\'un graphe de chapitres et de choix en base PostgreSQL, gestion de l\'authentification Laravel, routage dynamique des parcours narratifs et coordination Git sous forte contrainte de temps.',
        en: 'Modeled a chapter-and-choice graph in PostgreSQL, implemented Laravel authentication, dynamic story-path routing, and Git collaboration under a strict 48-hour deadline.'
      },
      github: 'https://github.com/Batiste0912/IUT-MarathonWeb'
    },
    boardgames: {
      type: 'Full Stack · CRUD & Catalogue',
      title: { fr: 'BoardGames', en: 'BoardGames' },
      tags: ['Laravel', 'PHP', 'Eloquent ORM', 'SQL', 'CSS3'],
      context: {
        fr: 'Application web dédiée aux passionnés de jeux de société : consultation d\'un catalogue détaillé, recherche par critères et ajout de nouvelles fiches de jeux.',
        en: 'Web application for board game enthusiasts featuring a searchable catalog, filtering by criteria, and user-submitted game entries.'
      },
      challenges: {
        fr: 'Structuration complète MVC avec Laravel et Eloquent ORM, relations multi-tables (catégories, éditeurs, utilisateurs), validation stricte des entrées et interface claire et responsive.',
        en: 'Structured full MVC architecture with Laravel and Eloquent ORM, multi-table relationships (categories, publishers, users), strict server-side validation, and responsive UI.'
      },
      github: null
    },
    raytracing: {
      type: { fr: 'Logiciel · Synthèse d\'images', en: 'Software · 3D Graphics' },
      title: { fr: 'Moteur de Ray-Tracing', en: 'Ray-Tracing Engine' },
      tags: ['Java', 'POO', 'Maths 3D', 'Vecteurs & Lumière'],
      context: {
        fr: 'Développement d\'un moteur de rendu 3D par lancer de rayons (ray-tracing) en Java, capable de générer des scènes réalistes à partir de fichiers de description.',
        en: 'Built a 3D ray-tracing rendering engine in Java capable of generating realistic scenes from scene description files.'
      },
      challenges: {
        fr: 'Implémentation des calculs géométriques d\'intersection (sphères, plans, triangles), gestion des sources lumineuses, ombres portées, réflexions et structuration orientée objet extensible.',
        en: 'Implemented geometric ray-intersection math (spheres, planes, triangles), light sources, cast shadows, reflections, and a clean extensible OOP architecture.'
      },
      github: null
    },
    joparis: {
      type: { fr: 'Web · Site Vitrine Dynamique', en: 'Web · Dynamic Showcase' },
      title: { fr: 'Jeux Olympiques Paris 2024', en: 'Paris 2024 Olympic Games' },
      tags: ['Laravel', 'Blade', 'HTML5', 'CSS3', 'Responsive'],
      context: {
        fr: 'Site vitrine conçu avec Laravel pour présenter les Jeux Olympiques de Paris 2024, ses disciplines, ses sites emblématiques et son calendrier.',
        en: 'Dynamic showcase website built with Laravel presenting the Paris 2024 Olympic Games, sports disciplines, iconic venues, and schedule.'
      },
      challenges: {
        fr: 'Découpage propre des templates Blade, mise en place du routage et conception d\'une interface éditoriale fluide adaptée aux écrans mobiles et desktop.',
        en: 'Modular Blade template architecture, clean routing, and responsive editorial layout tailored for both mobile and desktop viewports.'
      },
      github: null
    }
  };

  // --------------------------------------------------------------------------
  // 2. State & Elements
  // --------------------------------------------------------------------------
  const htmlEl = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const langToggle = document.getElementById('lang-toggle');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const toastEl = document.getElementById('toast');

  let currentLang = localStorage.getItem('portfolio_lang') || 'fr';
  let currentTheme = localStorage.getItem('portfolio_theme') ||
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  // --------------------------------------------------------------------------
  // 3. Theme Handling
  // --------------------------------------------------------------------------
  function applyTheme(theme) {
    currentTheme = theme;
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
    if (themeToggle) {
      themeToggle.textContent = theme === 'dark' ? '☀' : '☾';
      themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre');
    }
  }

  applyTheme(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // --------------------------------------------------------------------------
  // 4. Language Handling (FR / EN)
  // --------------------------------------------------------------------------
  function applyLanguage(lang) {
    currentLang = lang;
    htmlEl.setAttribute('lang', lang);
    localStorage.setItem('portfolio_lang', lang);

    if (langToggle) {
      langToggle.textContent = lang === 'fr' ? 'EN' : 'FR';
    }

    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (key === 'hero_lead' || key === 'about_p1' || key === 'about_p2') {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });
  }

  applyLanguage(currentLang);

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      applyLanguage(currentLang === 'fr' ? 'en' : 'fr');
    });
  }

  // --------------------------------------------------------------------------
  // 5. Mobile Menu
  // --------------------------------------------------------------------------
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.textContent = isOpen ? '✕' : '☰';
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6. Skills & Projects Filtering
  // --------------------------------------------------------------------------
  const skillTabs = document.querySelectorAll('[data-skill-filter]');
  const skillCards = document.querySelectorAll('[data-skill-cat]');

  skillTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-skill-filter');
      skillTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      skillCards.forEach((card) => {
        const cat = card.getAttribute('data-skill-cat');
        const match = filter === 'all' || cat === filter;
        card.classList.toggle('hidden', !match);
      });
    });
  });

  const projectTabs = document.querySelectorAll('[data-project-filter]');
  const projectCards = document.querySelectorAll('[data-project-cat]');

  projectTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-project-filter');
      projectTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      projectCards.forEach((card) => {
        const cat = card.getAttribute('data-project-cat');
        const match = filter === 'all' || cat === filter;
        card.classList.toggle('hidden', !match);
      });
    });
  });

  // --------------------------------------------------------------------------
  // 7. Project Detail Modal
  // --------------------------------------------------------------------------
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalType = document.getElementById('modal-type');
  const modalTags = document.getElementById('modal-tags');
  const modalContext = document.getElementById('modal-context');
  const modalChallenges = document.getElementById('modal-challenges');
  const modalActions = document.getElementById('modal-actions');

  function openProjectModal(projectId) {
    const data = projectDetails[projectId];
    if (!data || !modal) return;

    modalType.textContent = typeof data.type === 'string' ? data.type : data.type[currentLang];
    modalTitle.textContent = data.title[currentLang];
    modalContext.textContent = data.context[currentLang];
    modalChallenges.textContent = data.challenges[currentLang];

    modalTags.innerHTML = data.tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join('');

    modalActions.innerHTML = '';
    if (data.github) {
      const ghLink = document.createElement('a');
      ghLink.href = data.github;
      ghLink.target = '_blank';
      ghLink.rel = 'noopener noreferrer';
      ghLink.className = 'btn btn-primary btn-sm';
      ghLink.textContent = currentLang === 'fr' ? 'Voir le dépôt GitHub ↗' : 'View GitHub Repo ↗';
      modalActions.appendChild(ghLink);
    }

    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'btn btn-secondary btn-sm';
    closeBtn.textContent = currentLang === 'fr' ? 'Fermer' : 'Close';
    closeBtn.addEventListener('click', closeProjectModal);
    modalActions.appendChild(closeBtn);

    modal.hidden = false;
    requestAnimationFrame(() => modal.classList.add('open'));
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (!modal.classList.contains('open')) {
        modal.hidden = true;
      }
    }, 220);
  }

  document.querySelectorAll('.open-modal-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      openProjectModal(btn.getAttribute('data-project-id'));
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeProjectModal();
    }
  });

  // --------------------------------------------------------------------------
  // 8. Copy Email & Contact Form
  // --------------------------------------------------------------------------
  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');
    setTimeout(() => toastEl.classList.remove('show'), 2800);
  }

  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('batiste.dubo@outlook.fr');
        showToast(translations[currentLang].toast_copied);
      } catch {
        showToast('batiste.dubo@outlook.fr');
      }
    });
  }

  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      const body = `${message}\n\n— ${name}`;
      const mailtoUrl = `mailto:batiste.dubo@outlook.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      if (formFeedback) {
        formFeedback.textContent = translations[currentLang].form_sent;
      }
      window.location.href = mailtoUrl;
    });
  }

  // --------------------------------------------------------------------------
  // 9. Scroll Reveal & Active Nav Link
  // --------------------------------------------------------------------------
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  const sections = document.querySelectorAll('main section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navItems.forEach((link) => {
              link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sections.forEach((sec) => navObserver.observe(sec));
  }
})();
