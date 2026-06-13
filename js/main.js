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

 // ========== 5. BOUTON RETOUR EN HAUT ==========
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
});