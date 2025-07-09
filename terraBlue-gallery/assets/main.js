

window.callNumber = () => { window.location.href = `tel:8323294855`; };
window.scrollToSection = (sectionId) => { const section = document.getElementById(sectionId); if (section) { section.scrollIntoView({ behavior: 'smooth' }); }};
window.openFace = () => { window.open('https://www.facebook.com/profile.php?id=61574096698088', '_blank'); };
window.openInsta = () => { window.open('https://www.instagram.com/', '_blank'); };
window.openCalendly = () => { window.open('https://calendly.com/rafaelsifuentes-etxsoftware/30min', '_blank'); };

function openInsta(){
  var instaUrl = "https://www.instagram.com/gabrielsmobiledetail/"
  window.open(instaUrl, '_blank')
}

const splitTypes = document.querySelectorAll('.reveal-type');
splitTypes.forEach((char) => {
    const text = new SplitType(char, { types: 'words' });
    gsap.fromTo(text.words, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.05, scrollTrigger: { trigger: char, start: 'bottom 80%', end: 'top 20%', scrub: true, toggleActions: 'play play reverse reverse', }});
});

gsap.utils.toArray('.section').forEach((section) => {
  const sectionAccents = section.querySelectorAll('.showcase-1-frame-one, .home-frame-two');
  sectionAccents.forEach((accent) => {
      const line = accent.querySelector('.section-line, .box');
      gsap.fromTo(line, { width: '0%' }, { width: '100%', duration: 2.5, ease: 'power2.out', scrollTrigger: { trigger: accent, start: 'top 80%', end: 'top 20%', once: true, }});
  });
});


// SCROLL REVEAL JS
const sr = ScrollReveal({
  distance: '100px',
  duration: 2500,
})

sr.reveal(``,{
  origin: 'top',
  interval: 450,
})

sr.reveal(`.home-list-item, .home-title, .intro-card, .cta-title, .contact-cta-container`,{
  origin: 'bottom',
  interval: 350,
})



const nav = document.getElementById('nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navToggleIcon = document.querySelector('.icon-container i')
    const navIcon = document.querySelector('.icon-container div');
    const wordtoggle = document.querySelector('.word-toggle div');
    const navScreen = document.querySelector('.nav-screen');
    const navLogo = document.querySelector('.nav-logo a');

    // Function to highlight the active section link
    function highlightActiveSection() {
        const sections = ['gallery-home', 'intro', 'showcase-1', 'showcase-2', 'showcase-3', 'contact'];
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
        const whiteSections = ['intro', 'showcase-1', 'showcase-3', 'contact', 'footer'];
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