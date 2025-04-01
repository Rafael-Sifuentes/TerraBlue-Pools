document.addEventListener('DOMContentLoaded', () => {

  // --- ScrollReveal Animations ---
  const sr = ScrollReveal({
      distance: '75px',
      duration: 1200,
  });

  const srAlt = ScrollReveal({
      distance: '100px',
      duration: 1800,
  });

  srAlt.reveal('.cta-title, .section-title', {
      origin: 'bottom',
      interval: 450,
  });

  sr.reveal('.home-list-item, .home-title, .about-info-item, .footer-btn', {
      origin: 'bottom',
      interval: 300,
  });

  // --- GSAP Animations ---
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.home-img', {
      scale: 2,
      ease: 'none',
      scrollTrigger: {
          trigger: '.home',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
      },
  });

  gsap.to('.contact-img', {
      yPercent: 30,
      scale: 1.2,
      ease: 'none',
      scrollTrigger: {
          trigger: '.contact',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
      },
  });

  const splitTypes = document.querySelectorAll('.reveal-type');
  splitTypes.forEach((char) => {
      const text = new SplitType(char, { types: 'words' });
      gsap.fromTo(text.words, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.05, scrollTrigger: { trigger: char, start: 'bottom 80%', end: 'top 20%', scrub: true, toggleActions: 'play play reverse reverse', }});
  });

  gsap.utils.toArray('.section').forEach((section) => {
      const sectionAccents = section.querySelectorAll('.section-accent');
      sectionAccents.forEach((accent) => {
          const line = accent.querySelector('.section-line');
          gsap.fromTo(line, { width: '0%' }, { width: '100%', duration: 2.5, ease: 'power2.out', scrollTrigger: { trigger: accent, start: 'top 80%', end: 'top 20%', once: true, }});
      });
  });

  // --- MixItUp Filtering ---
  const mixer = mixitup('.grid', { selectors: { target: '.mix' }, animation: { duration: 300 }, load: { filter: '.custom-pools' }});
  document.querySelectorAll('.custom-pools').forEach((card) => { card.style.display = 'block'; });

  // --- Utility Functions ---
  window.callNumber = () => { window.location.href = `tel:8323294855`; };
  window.scrollToSection = (sectionId) => { const section = document.getElementById(sectionId); if (section) { section.scrollIntoView({ behavior: 'smooth' }); }};
  window.openFace = () => { window.open('https://www.facebook.com/profile.php?id=61574096698088', '_blank'); };
  window.openInsta = () => { window.open('https://www.instagram.com/', '_blank'); };
  window.openCalendly = () => { window.open('https://calendly.com/rafaelsifuentes-etxsoftware/30min', '_blank'); };

  // --- Service Card Toggle ---
  document.querySelectorAll('.service-card-component').forEach((card) => {
      const toggleButton = card.querySelector('.card-content');
      const toggleCard = card.querySelector('.service-card-toggle');
      const toggleIcon = card.querySelector('.service-card-toggle i');
      const cardContent = card.querySelector('.card-content');
      const cardImage = card.querySelector('.service-card-img');

      toggleButton.addEventListener('click', () => {
          cardContent.classList.toggle('expanded');
          if (cardContent.classList.contains('expanded')) {
              cardImage.style.transform = 'translateY(100%)'; cardImage.style.opacity = '0'; toggleIcon.style.transform = 'rotate(45deg)'; toggleCard.style.backgroundColor = 'var(--body-color)'; toggleIcon.style.color = 'var(--text-color-b)';
          } else {
              cardImage.style.transform = 'translateY(0)'; cardImage.style.opacity = '1'; toggleIcon.style.transform = 'rotate(0deg)'; toggleCard.style.backgroundColor = 'var(--primary-color)'; toggleIcon.style.color = 'var(--text-color-w)';
          }
      });
  });

  // --- Swiper Sliders ---
  new Swiper('.gallery-container', { slidesPerView: 1, spaceBetween: 24, speed: 600, loop: true, centeredSlide: true, autoplay: { delay: 2000, disableOnInteraction: true, }, navigation: { nextEl: '.gallery-swiper-next', prevEl: '.gallery-swiper-prev', }, breakpoints: { 744: { slidesPerView: 2, }, 1440: { centeredSlide: true, slidesPerView: 3, } } });
  new Swiper('.review-container', { slidesPerView: 1, spaceBetween: 24, speed: 600, loop: false, centeredSlide: true, navigation: { nextEl: '.review-swiper-next', prevEl: '.review-swiper-prev', }, breakpoints: { 744: { slidesPerView: 2, }, 1440: { centeredSlide: true, slidesPerView: 3, } } });

  // --- Count Up Animation ---
  document.querySelectorAll('.count-up').forEach((element) => {
      const target = parseInt(element.dataset.target);
      let current = 0;
      const span = element.querySelector('span');
      gsap.utils.toArray(element).forEach((el) => {
          gsap.to(el, { scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 20%', once: true, }, onUpdate: function () { current = Math.ceil(this.progress() * target); element.textContent = current; element.appendChild(span); }, duration: 2, ease: 'power2.out', });
      });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Mobile animation (steps appear from the left)
  if (window.innerWidth < 768) {
      gsap.utils.toArray(".timeline-item").forEach((item, index) => {
          gsap.from(item, {
              opacity: 0,
              x: -100,
              duration: 1,
              scrollTrigger: {
                  trigger: item,
                  start: "top 80%", // Adjust as needed
                  toggleActions: "play none none reverse",
              },
          });
      });
  } 
  // Tablet & Desktop animation (steps slide in from the right and move up)
  else {
      gsap.utils.toArray(".timeline-item").forEach((item, index) => {
          gsap.from(item, {
              opacity: 0,
              x: 100,
              y: 50 * index, // Creates staggered upward movement
              duration: 1,
              scrollTrigger: {
                  trigger: item,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
              },
          });
      });
  }
});