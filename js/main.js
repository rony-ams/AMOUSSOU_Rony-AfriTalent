// ========== ATTENTE DU CHARGEMENT COMPLET DU DOM ==========
// ceci agit comme le body
document.addEventListener('DOMContentLoaded', function() {

      // ========== 1. DARK MODE TOGGLE avec localStorage ==========
    const darkModeToggle = document.getElementById('darkModeToggle');
    const currentTheme = localStorage.getItem('theme');

   // innerHTML permet d'insérer,de lire, ou de remplacer du contenu (texte ou code HTML) à l'intérieur d'un élément
    // Appliquer le thème sauvegardé
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkModeToggle.innerHTML = '<i class="bi bi-moon-stars"></i>';
    }
    
    darkModeToggle.addEventListener('click', function() {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            darkModeToggle.innerHTML = `<i class="bi bi-moon-stars"></i>`;
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            darkModeToggle.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
        }
    });
    
  // ========== 2. NAVBAR DYNAMIQUE (changement au scroll) =========================================
    const navbar = document.getElementById('mainNavbar');
    // Cela veut dire : window = fenetre "Écoute la fenêtre, et quand l'utilisateur scrolle, exécute cette fonction"
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    // ========== 3. COMPTEURS ANIMÉS avec IntersectionObserver ==========
    const counters = document.querySelectorAll('.stat-number, .number');
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-count'));
        // parseInt:ça le fait passer en entier parseINT : Convertit cette valeur (qui est une chaîne de caractères) en nombre entier
        let current = 0;
        const increment = target / 50;
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        updateCounter();
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));

   // ========== 4. ANIMATION AU SCROLL (fade-in) ( C'est ce qui fait que les cartes bouges au scroll)================================================
    const fadeElements = document.querySelectorAll('.bento-item, .category-card, .pricing-card, .value-card, .team-card');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        fadeObserver.observe(el);
    });
   

 // ========== 5. BOUTON RETOUR EN HAUT ===========================================================
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            //  behavior: 'smooth' = façon dont va afficher les choses au scroll. Avec  cette ppte ils s'affiche lentement.
        });
    });
     // ========== 8. AJOUT DE CLASSES POUR LES ANIMATIONS ==========
    // Ajout de la classe fade-up aux sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-up');
        fadeObserver.observe(section);
    });
});

