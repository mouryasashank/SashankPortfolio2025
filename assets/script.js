
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS library
  AOS.init();

  // Initialize Typed.js
  new Typed('#typed', {
    strings: ['AI Specialist', 'Data Scientist', 'Cloud ML Engineer', 'Generative AI Enthusiast'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });

  // Smooth scroll
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Navbar background change on scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Button hover glow
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.classList.add('hover-glow');
    });
    button.addEventListener('mouseleave', () => {
      button.classList.remove('hover-glow');
    });
  });
});
