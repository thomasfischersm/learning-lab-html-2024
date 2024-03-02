// Code for the site navigation.
const toggleButton = 	document.querySelector('.navigation-toggle');
const navigationMenu = document.querySelector('.navigation-menu');

toggleButton.addEventListener('click', () => {
  navigationMenu.classList.toggle('active');
});

// Add smooth scrolling to menu links (optional)
const menuLinks = document.querySelectorAll('.navigation-menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    const sectionId = this.getAttribute('href');
    const sectionElement = document.querySelector(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      navigationMenu.classList.remove('active'); // Close menu after click
    }
  });
});// JavaScript Document