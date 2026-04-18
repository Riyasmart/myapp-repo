// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
});

// Typing Animation for Hero Section
var typed = new Typed('#typed', {
  strings: ['DevOps Engineer', 'Cloud Architect', 'Automation Expert'],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

// Theme Toggle Functionality
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  const icon = themeToggle.querySelector('i');
  if (body.classList.contains('light-theme')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Contact Form Validation and Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Basic validation
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Simulate form submission (replace with actual submission logic)
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Skill Bars Animation on Scroll
const skillBars = document.querySelectorAll('.skill-fill');

function animateSkillBars() {
  skillBars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (barTop < windowHeight - 50) {
      bar.style.width = bar.style.width || '0%';
    }
  });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// Header Background Change on Scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.style.background = 'rgba(15, 23, 42, 0.98)';
  } else {
    header.style.background = 'rgba(15, 23, 42, 0.95)';
  }
});

// Project Cards Hover Effect Enhancement
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.02)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// Floating Elements Animation Enhancement
function updateFloatingElements() {
  const elements = document.querySelectorAll('.cloud, .server, .network');
  elements.forEach((element, index) => {
    const speed = (index + 1) * 0.5;
    const yPos = Math.sin(Date.now() * 0.001 * speed) * 10;
    element.style.transform = `translateY(${yPos}px)`;
  });
  requestAnimationFrame(updateFloatingElements);
}

updateFloatingElements();

// Resume Download Placeholder
document.querySelector('.about-text .btn').addEventListener('click', (e) => {
  e.preventDefault();
  alert('Resume download functionality would be implemented here.');
});

// Social Links Hover Effect
const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = '#06b6d4';
  });

  link.addEventListener('mouseleave', () => {
    link.style.color = '#38bdf8';
  });
});

// Mobile Menu Toggle (if needed for smaller screens)
function initMobileMenu() {
  const nav = document.querySelector('nav ul');
  const toggle = document.createElement('div');
  toggle.className = 'mobile-toggle';
  toggle.innerHTML = '<i class="fas fa-bars"></i>';
  toggle.style.display = 'none';
  toggle.style.cursor = 'pointer';
  toggle.style.fontSize = '1.5rem';
  toggle.style.color = '#38bdf8';

  document.querySelector('nav').appendChild(toggle);

  toggle.addEventListener('click', () => {
    nav.classList.toggle('mobile-menu-open');
    // Toggle hamburger/close icon
    const icon = toggle.querySelector('i');
    if (nav.classList.contains('mobile-menu-open')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Close mobile menu when a link is clicked
  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && window.innerWidth <= 768) {
      nav.classList.remove('mobile-menu-open');
      const icon = toggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  function checkScreenSize() {
    if (window.innerWidth <= 768) {
      toggle.style.display = 'block';
      nav.classList.add('mobile-menu');
    } else {
      toggle.style.display = 'none';
      nav.classList.remove('mobile-menu', 'mobile-menu-open');
      // Reset icon
      const icon = toggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  }

  window.addEventListener('resize', checkScreenSize);
  checkScreenSize();
}

initMobileMenu();