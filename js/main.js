// ========== ATTENTE DU CHARGEMENT COMPLET DU DOM ==========
// ceci agit comme le body
document.addEventListener('DOMContentLoaded', function() {

      // ========== 1. DARK MODE TOGGLE avec localStorage ==================================================================================================
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
    
  // ========== 2. NAVBAR DYNAMIQUE (changement au scroll) =================================================================================
    const navbar = document.getElementById('mainNavbar');
    // Cela veut dire : window = fenetre "Écoute la fenêtre, et quand l'utilisateur scrolle, exécute cette fonction"
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    // ========== 3. COMPTEURS ANIMÉS avec IntersectionObserver ================================================================================
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
    // ========== 6. FILTRAGE DYNAMIQUE DES FREELANCES ==========
    const freelancesData = [
        { name: "Mahunan", speciality: "Développeur Full Stack", category: "web", rate: "57.000fr/h", rating: 4.8, bio: "Assistant junior au codage des PNJ de GTA6", img: "images/elfatou.jpg" },
        { name: "Sy", speciality: "UI/UX Designer", category: "design", rate: "64.000fr/h", rating: 4.9, bio: "Designer passionnée par les interfaces modernes", img: "images/eleve.jpg" },
        { name: "Ibrahim ", speciality: "Data Scientist", category: "data", rate: "44.000fr/h", rating: 4.7, bio: "Expert en Machine Learning et Big Data", img: "images/eleve2.jpg" },
        { name: "Joe", speciality: "Marketing Digital", category: "marketing", rate: "65.000fr/h", rating: 4.6, bio: "Spécialiste en design et vente", img: "images/elfal.jpg" },
        { name: "Fofo", speciality: "DevOps Engineer", category: "devops", rate: "80.000fr/h", rating: 4.9, bio: "Expert en tracage cybercriminel", img: "images/elfatou.jpg" },
        { name: "Bernard", speciality: "Rédactrice Tech", category: "redaction", rate: "90.000fr/h", rating: 4.7, bio: "Rédaction d'articles techniques ", img: "images/elfatou.jpg" },
        { name: "Mamadou Sarr", speciality: "Développeur Backend", category: "web", rate: "98.000fr/h", rating: 4.8, bio: "Spécialiste Python et Django", img: "images/elfatou.jpg" },
        { name: "Ndeye Ndiaye", speciality: "UI Designer", category: "design", rate: "78.000fr/h", rating: 4.8, bio: "Création d'interfaces utilisateur innovantes", img: "images/elfatou.jpg" },
        { name: "Cheikh Diagne", speciality: "Data Analyst", category: "data", rate: "88.000fr/h", rating: 4.5, bio: "Analyse de données et visualisation", img: "images/elfatou.jpg" }
    ];
 
    const freelancesGrid = document.getElementById('freelancesGrid');
    const categoryFilter = document.getElementById('categoryFilter');
    // ${} = interpolation (``) =permet d'ecrire du code HTML directement en JAVASCRIPT
    function displayFreelances(category) {
        if (!freelancesGrid) return;
        // si (condition) est vrai "?" fait (condition) sinon fait ":" (condition)
        const filtered = category === 'all' ? freelancesData : freelancesData.filter(f => f.category === category);
        // innerHTML permet d'insérer,de lire, ou de remplacer du contenu (texte ou code HTML) à l'intérieur d'un élément
        freelancesGrid.innerHTML = filtered.map(freelance => `
            <div class="col-md-6 col-lg-4">
                <div class="card freelance-card h-100">
                    <img src="${freelance.img}" class="card-img-top" alt="${freelance.name}">
                    <div class="card-body">
                        <h5 class="card-title">${freelance.name}</h5>
                        <p class="freelance-speciality">${freelance.speciality}</p>
                        <p class="freelance-bio">${freelance.bio}</p>
                        <div class="freelance-rating">${'★'.repeat(Math.floor(freelance.rating))}${freelance.rating % 1 ? '½' : ''} (${freelance.rating})</div>
                        <p class="freelance-rate"><strong>${freelance.rate}</strong></p>
                        <button class="btn btn-primary w-100">Voir le profil</button>
                    </div>
                </div>
            </div>
        `).join('');
        // .join('') sert à transformer un tableau en une seule chaîne de texte (une seule string).
        // .join('') va fusionner tous ces éléments en une seule chaîne :Sans .join('') : tu envoies un tableau → ❌ ça ne marche pas ; .join('') = colle tous les éléments du tableau bout à bout
    }
     // "e" = veut dire event
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            displayFreelances(e.target.value);
        });
        displayFreelances('all');
    }

    // ========== 7. VALIDATION DU FORMULAIRE =====================================================================================================
    
    // Value permet de recuperer la valeur que l'utilisateur a saisie
    // Value permet de recuperer la valeur que l'utilisateur a saisie

    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            //addEventListener('submit') = "Quand on essaie d'envoyer"
            //function(e) = C'est une fonction qui reçoit un paramètre appelé e (ou parfois event). Ce paramètre contient toutes les informations sur l'événement qui vient de se produire.
            //e.preventDefault() = "N'envoie pas automatiquement, laisse-moi gerer a ma maniere", sinon sans ça il rafraichis la page et tout part.
            // Tout ceci est fais a cause de l'evenement "submit"
            // "e" = veut dire event

            // Récupération des champs
            const nom = document.getElementById('nom');
            const prenom = document.getElementById('prenom');
            const email = document.getElementById('email');
            const sujet = document.getElementById('sujet');
            const message = document.getElementById('message');
            
            let isValid = true;

            //trim() supprime les espaces "autour" du texte ,pas à l'interieur(avant la première lettre et après la dernière lettre)
            //Value permet de récupérer (ou de modifier) la valeur d'un élément de formulaire
            // Validation Nom
            if (!nom.value.trim()) {
                showError(nom, 'nomError', 'Le nom est requis');
                isValid = false;
            } else {
                showSuccess(nom, 'nomError');
            }
            
            // Validation Prénom
            if (!prenom.value.trim()) {
                showError(prenom, 'prenomError', 'Le prénom est requis');
                isValid = false;
            } else {
                showSuccess(prenom, 'prenomError');
            }
            
            // Validation Email avec regex
            //  Regex = “Regular Expression”
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailRegex.test(email.value)) {
                showError(email, 'emailError', 'Email valide requis');
                isValid = false;
            } else {
                showSuccess(email, 'emailError');
            }
            
            // Validation Sujet
            if (!sujet.value) {
                showError(sujet, 'sujetError', 'Veuillez choisir un sujet');
                isValid = false;
            } else {
                showSuccess(sujet, 'sujetError');
            }
            
            // Validation Message (min 20 caractères)
            if (!message.value.trim() || message.value.trim().length < 20) {
                showError(message, 'messageError', 'Le message doit contenir au moins 20 caractères');
                isValid = false;
            } else {
                showSuccess(message, 'messageError');
            }
            
            // Affichage message de succès
            if (isValid) {
                const successDiv = document.getElementById('formSuccess');
                successDiv.style.display = 'block';
                successDiv.textContent = '✓ Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.';
                contactForm.reset();
                
                // Cacher le message après 5 secondes
                setTimeout(() => {
                    successDiv.style.display = 'none';
                }, 5000);
            }
        });
    }
    
    function showError(input, errorId, message) {
        input.classList.add('error');
        input.classList.remove('success');
        const errorDiv = document.getElementById(errorId);
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }
    
    function showSuccess(input, errorId) {
        input.classList.remove('error');
        input.classList.add('success');
        const errorDiv = document.getElementById(errorId);
        errorDiv.style.display = 'none';
    }
     // ========== 8. AJOUT DE CLASSES POUR LES ANIMATIONS ==========
    // Ajout de la classe fade-up aux sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-up');
        fadeObserver.observe(section);
    });
});

