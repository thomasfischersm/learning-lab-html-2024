// Code for the site navigation.
const toggleButton = document.querySelector('.navigation-toggle');
const navigationMenu = document.querySelector('.navigation-menu');

toggleButton.addEventListener('click', () => {
  navigationMenu.classList.toggle('active');
});

// Add smooth scrolling to menu links (optional)
const menuLinks = document.querySelectorAll('.navigation-menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    const sectionId = this.getAttribute('href');
    const sectionElement = document.querySelector(sectionId);
    //    const headerBar = document.querySelector('.header-bar');
    //    const headerHeight = headerBar ? headerBar.offsetHeight : 0;

    if (sectionElement) {
      //      const elementPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset;
      //      window.scrollTo({
      //        top: elementPosition - headerHeight,
      //        behavior: 'smooth'
      //      });

      sectionElement.scrollIntoView({
        behavior: 'smooth'
      });
      navigationMenu.classList.remove('active'); // Close menu after click
      //      console.log('foreach triggered');
    }
  });
});

// Hide the navigation menu if the user clicks outside of it.
document.addEventListener('click', function (event) {
  var isClickInsideNav = navigationMenu.contains(event.target);
  var isNavIcon = toggleButton.contains(event.target);

  if (!isClickInsideNav && !isNavIcon) {
    // Code to hide your navigation menu
    navigationMenu.classList.remove('active');
    //	  console.log('click triggered');
  }
}, )

// JavaScript Document
