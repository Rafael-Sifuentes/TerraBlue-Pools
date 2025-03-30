

gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll('.reveal-type, .section-title');

splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: 'words' });

    gsap.fromTo(text.words, {
        opacity: 0,
        y: 50,
    }, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.05,
        scrollTrigger: {
            trigger: char,
            start: 'bottom 80%',
            end: 'top 20%',
            scrub: 1,  //was set to true
            markers: false,
            toggleActions: 'play play reverse reverse',
        },
    });
});


document.addEventListener('DOMContentLoaded', function() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.section').forEach(section => {
      const sectionAccent = section.querySelector('.section-accent');
      if (sectionAccent) {
          const sectionLine = sectionAccent.querySelector('.section-line');

          gsap.fromTo(sectionLine, {
              width: '0%',
          }, {
              width: '100%',
              scrollTrigger: {
                  trigger: section,
                  start: 'top 80%', // Adjust as needed
                  end: 'bottom 20%', // Adjust as needed
                  scrub: 1, // Optional: smooth animation on scroll
                  markers: false,
              },
          });
      }
  });
});






function callNumber() {
    var phoneNumber = "9033399017";
    window.location.href = "tel:" + phoneNumber;
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); 
    }
}

function openInsta(){
  var instaUrl = "https://www.instagram.com/gabrielsmobiledetail/"
  window.open(instaUrl, '_blank')
}

document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.service-card-component');

  serviceCards.forEach(card => {
      const toggleButton = card.querySelector('.service-card-toggle');
      const toggleIcon = card.querySelector('.service-card-toggle i');
      const cardContent = card.querySelector('.card-content');
      const cardImage = card.querySelector('.service-card-img');

      toggleButton.addEventListener('click', () => {
          cardContent.classList.toggle('expanded');

          if (cardContent.classList.contains('expanded')) {
              // Move image, rotate icon, change colors, fade out image
              cardImage.style.transform = 'translateY(100%)';
              cardImage.style.opacity = '0'; // Fade out
              toggleIcon.style.transform = 'rotate(45deg)';
              toggleButton.style.backgroundColor = 'var(--text-color-w)';
              toggleIcon.style.color = 'var(--text-color-b)';
          } else {
              // Return image, reset icon, reset colors, fade in image
              cardImage.style.transform = 'translateY(0)';
              cardImage.style.opacity = '1'; // Fade in
              toggleIcon.style.transform = 'rotate(0deg)';
              toggleButton.style.backgroundColor = 'var(--primary-color)';
              toggleIcon.style.color = 'var(--text-color-w)';
          }
      });
  });
});

let gallerySwiper = new Swiper('.gallery-container', {

  slidesPerView: 1,
    spaceBetween: 24,
    speed: 600,
    loop: true,
    centeredSlide: true,
  
     autoplay: {
         delay: 2000,
         disableOnInteraction: true,
       },
  
      navigation: {
        nextEl: '.gallery-swiper-next',
        prevEl: '.gallery-swiper-prev',
    },

    breakpoints: {
      744:{
        slidesPerView: 2,
      },

      1440:{
        centeredSlide: true,
        slidesPerView: 3,
      }
    }
});

let reviewSwiper = new Swiper('.review-container', {

  slidesPerView: 1,
    spaceBetween: 24,
    speed: 600,
    loop: false,
    centeredSlide: true,
  
      navigation: {
        nextEl: '.review-swiper-next',
        prevEl: '.review-swiper-prev',
    },

    breakpoints: {
      744:{
        slidesPerView: 2,
      },

      1440:{
        centeredSlide: true,
        slidesPerView: 3,
      }
    }
});



// SCROLL REVEAL JS
const sr = ScrollReveal({
  distance: '150px',
  duration: 1800,
})

sr.reveal(`.cta-title`,{
  origin: 'bottom',
  interval: 450,
})

sr.reveal(`.home-list-item, .home-title, .about-info-item, .footer-btn`,{
  origin: 'bottom',
  interval: 450,
})