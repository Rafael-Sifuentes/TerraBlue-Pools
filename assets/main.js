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
      scale: 1.4,
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


    const nav = document.getElementById('nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navToggleIcon = document.querySelector('.icon-container i')
    const navIcon = document.querySelector('.icon-container div');
    const wordtoggle = document.querySelector('.word-toggle div');
    const navScreen = document.querySelector('.nav-screen');
    const navLogo = document.querySelector('.nav-logo a');

    // Function to highlight the active section link
    function highlightActiveSection() {
        const sections = ['services', 'gallery', 'about', 'review', 'contact'];
        const navLinks = document.querySelectorAll('.nav-list a');

        sections.forEach((sectionId, index) => {
            const section = document.getElementById(sectionId);
            if (section) {
                const rect = section.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;

                if (rect.top <= windowHeight && rect.bottom >= 0) {
                    navLinks.forEach((link) => link.classList.remove('active')); // Remove all active classes
                    navLinks[index].classList.add('active'); // Add active class to current link
                }
            }
        });
    }

    // Function to change logo and toggle colors
    function changeNavColors() {
        const whiteSections = ['services', 'about', 'review', 'footer'];
        const darkSections = ['gallery'];
        let onWhiteSection = false;
        let onDarkSection = false;

        const navRect = nav.getBoundingClientRect(); // Get the nav bar's position

        whiteSections.forEach((sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionRect = section.getBoundingClientRect();

                // Check if the nav bar is completely within the white section
                if (navRect.top >= sectionRect.top && navRect.bottom <= sectionRect.bottom) {
                    onWhiteSection = true;
                }
            }
        });

        darkSections.forEach((sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionRect = section.getBoundingClientRect();
                if (navRect.top >= sectionRect.top && navRect.bottom <= sectionRect.bottom) {
                    onDarkSection = true;
                }
            }
        });

        if (onWhiteSection) {
            navLogo.style.color = 'var(--text-color-b)';
            navToggle.style.color = 'var(--text-color-b)';
            navToggleIcon.style.color = 'var(--text-color-b)';
        } else if (onDarkSection) {
            navLogo.style.color = 'var(--text-color-w)';
            navToggle.style.color = 'var(--text-color-w)';
            navToggleIcon.style.color = 'var(--text-color-w)';
        } else {
        //If it is not on a dark or white section, then set it to the default.
            navLogo.style.color = 'var(--text-color-w)'; // or whatever your default color is.
            navToggle.style.color = 'var(--text-color-w)';
            navToggleIcon.style.color = 'var(--text-color-w)';
        }
    }

    // Function to collapse the navigation menu
function collapseNav() {
    navToggle.classList.remove('nav-clicked');
    navScreen.classList.remove('nav-open');
    navIcon.style.transform = 'translateX(0)';
    wordtoggle.style.transform = 'translateY(0)';
    changeNavColors(); // Revert to section-specific colors
}

// Event listener for nav toggle
navToggle.addEventListener('click', () => {
    if (navToggle.classList.contains('nav-clicked')) {
        collapseNav();
    } else {
        navToggle.classList.add('nav-clicked');
        navScreen.classList.add('nav-open');
        navIcon.style.transform = 'translateX(-50%)';
        wordtoggle.style.transform = 'translateY(-50%)';
        // Always set nav header elements to light when toggled
        navLogo.style.color = 'var(--text-color-w)';
        navToggle.style.color = 'var(--text-color-w)';
        navToggleIcon.style.color = 'var(--text-color-w)';
    }
});

// Event listeners for section highlighting and color changes
window.addEventListener('scroll', () => {
    highlightActiveSection();
    changeNavColors();
});

window.addEventListener('load', () => {
    highlightActiveSection();
    changeNavColors();
});

// Event listener for nav link clicks
document.querySelectorAll('.nav-list a').forEach((link) => {
    link.addEventListener('click', () => {
        collapseNav();
    });
});


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



  const galleryCards = document.querySelectorAll('.gallery-card-component');
    const galleryShowcase = document.querySelector('.gallery-showcase');
    const showcaseCloseBtn = galleryShowcase.querySelector('.showcase-close-btn');
    const showcaseList = galleryShowcase.querySelector('.showcase-list');

    galleryCards.forEach((card, index) => {
        const viewProjectButton = card.querySelector('.gallery-card-button');

        viewProjectButton.addEventListener('click', () => {
            // Clear previous content
            showcaseList.innerHTML = '';

            // Create the corresponding showcase item
            const showcaseItem = document.createElement('li');
            showcaseItem.classList.add('showcase-list-item', 'flex-column');

            // Determine the image source based on the clicked card's index
            const imgSrc = card.querySelector('.gallery-card-img img').src;

            // Create the image container (you can customize this structure)
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('list-item-grid', 'grid');
            imgContainer.innerHTML = `
                <div class="img-container"><img src="${imgSrc}" alt="Project ${index + 1} image"></div>
                <div class="img-container"><img src="assets/img/gallery-img-${index + 2}.png" alt="Project ${index + 2} image"></div>
                <div class="img-container"><img src="assets/img/gallery-img-${index + 3}.png" alt="Project ${index + 3} image"></div>
                `;

            const showcaseButtonContainer = document.createElement('div');
            showcaseButtonContainer.classList.add('showcase-button-container');
            showcaseButtonContainer.innerHTML = `
                <button onClick="openCalendly()" class="showcase-button"><p class="p-text">Schedule appointment</p></button>
                <button class="showcase-close-btn"><i class="ri-close-line"></i><p>Close</p></button>
            `;

            showcaseItem.appendChild(imgContainer);
            showcaseItem.appendChild(showcaseButtonContainer);
            showcaseList.appendChild(showcaseItem);

            // Add event listener to the newly created close button
            const newCloseButton = showcaseItem.querySelector('.showcase-close-btn');
            newCloseButton.addEventListener('click', () => {
                galleryShowcase.classList.remove('showcase-active');
                document.body.style.overflow = ''; // Re-enable scrolling
            });

            galleryShowcase.classList.add('showcase-active');
            document.body.style.overflow = 'hidden'; // Disable scrolling on the body
        });
    });

    // Close the showcase if the initial close button (if it exists) is clicked
    if (showcaseCloseBtn) {
        showcaseCloseBtn.addEventListener('click', () => {
            galleryShowcase.classList.remove('showcase-active');
            document.body.style.overflow = ''; // Re-enable scrolling
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Mobile animation (steps appear from the left)
  if (window.innerWidth < 768) {
      gsap.utils.toArray(".timeline-item").forEach((item, index) => {
          gsap.from(item, {
              opacity: 0,
              x: -100 * index,
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