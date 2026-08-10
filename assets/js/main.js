/**
 * Portfolio — Muhammad Zulfan
 * Redesigned: Aug 2026
 * Simplified JS with modern APIs
 */
(function () {
  'use strict';

  /* ============================================================
     Utilities
     ============================================================ */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ============================================================
     Preloader
     ============================================================ */
  window.addEventListener('load', () => {
    const preloader = $('#preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      setTimeout(() => preloader.remove(), 500);
    }
  });

  /* ============================================================
     Auto-calculate Age (Birthday: 06 November 1998)
     ============================================================ */
  function calculateAge() {
    const birthday = new Date(1998, 10, 6); // Month is 0-indexed, so 10 = November
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    const el = $('#autoAge');
    if (el) el.textContent = age + ' years old';
  }
  calculateAge();

  /* ============================================================
     Footer Year
     ============================================================ */
  const footerYear = $('#footerYear');
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  /* ============================================================
     Navbar — Scroll Effects
     ============================================================ */
  const navbar = $('#navbar');
  const navLinks = $$('#navbar .nav-links a');

  function onNavScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onNavScroll, { passive: true });
  onNavScroll();

  /* ============================================================
     Navbar — Active Link on Scroll
     ============================================================ */
  const sections = $$('section[id]');

  function updateActiveNav() {
    const scrollY = window.scrollY + 200;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = $(`#navbar .nav-links a[href="#${id}"]`);
      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    });
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  window.addEventListener('load', updateActiveNav);

  /* ============================================================
     Smooth Scroll for .scrollto Links
     ============================================================ */
  $$('.scrollto').forEach((link) => {
    link.addEventListener('click', function (e) {
      const target = $(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        // Close mobile nav if open
        const navLinksEl = $('#navLinks');
        const toggleBtn = $('#mobileNavToggle');
        if (navLinksEl.classList.contains('active')) {
          navLinksEl.classList.remove('active');
          toggleBtn.querySelector('i').className = 'bi bi-list';
        }
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ============================================================
     Mobile Nav Toggle
     ============================================================ */
  const mobileToggle = $('#mobileNavToggle');
  const navLinksContainer = $('#navLinks');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navLinksContainer.classList.contains('active')) {
        icon.className = 'bi bi-x-lg';
      } else {
        icon.className = 'bi bi-list';
      }
    });
  }

  /* ============================================================
     Back to Top
     ============================================================ */
  const backToTop = $('#backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    }, { passive: true });

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ============================================================
     Scroll Reveal (Intersection Observer)
     ============================================================ */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  $$('.reveal').forEach((el) => revealObserver.observe(el));

  /* ============================================================
     Typed.js — Hero Typing Effect
     ============================================================ */
  const typedEl = $('.typed');
  if (typedEl && typeof Typed !== 'undefined') {
    const items = typedEl.getAttribute('data-typed-items');
    if (items) {
      new Typed('.typed', {
        strings: items.split(','),
        loop: true,
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 2500,
      });
    }
  }

  /* ============================================================
     GLightbox — Portfolio Lightbox
     ============================================================ */
  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.portfolio-lightbox',
    });
  }

})();