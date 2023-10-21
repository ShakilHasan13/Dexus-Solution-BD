// Toggle mobile navigation

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('nav a');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

// Smooth scrolling

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500
});