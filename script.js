// File: script.js

document.addEventListener('DOMContentLoaded', function() {

    // === FUNGSI UNTUK MENU HAMBURGER ===
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');

    hamburger.addEventListener('click', function() {
        // Toggle kelas 'active' untuk animasi X
        this.classList.toggle('active'); 
        // Toggle kelas 'nav-active' untuk menampilkan/menyembunyikan menu
        navMenu.classList.toggle('nav-active'); 
    });


    // === FUNGSI UNTUK SMOOTH SCROLL ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            // Menutup menu setelah link di-klik (opsional, tapi sangat direkomendasikan)
            if (navMenu.classList.contains('nav-active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('nav-active');
            }
        });
    });

});