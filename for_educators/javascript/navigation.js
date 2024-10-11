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
},)


// YouTube Carousel code
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.youtube-carousel-prev').forEach(function (button) {
    button.addEventListener('click', function () {
      var carouselClass = this.parentElement.className;
      moveCarousel(-1, carouselClass);
    });
  });

  document.querySelectorAll('.youtube-carousel-next').forEach(function (button) {
    button.addEventListener('click', function () {
      var carouselClass = this.parentElement.className;
      moveCarousel(1, carouselClass);
    });
  });
});

function moveCarousel(step, carouselClass) {
  var carousel = document.querySelector('.' + carouselClass);
  var items = carousel.querySelectorAll('.carousel-item');
  var activeIndex = Array.from(items).findIndex(item => item.classList.contains('carousel-item-active'));

  items[activeIndex].classList.remove('carousel-item-active');

  var newIndex = activeIndex + step;
  if (newIndex >= items.length) newIndex = items.length - 1;
  if (newIndex < 0) newIndex = 0;

  items[newIndex].classList.add('carousel-item-active');
}

// Code for upcoming special events
document.addEventListener("DOMContentLoaded", function () {
  const events = [
  ];
  const container = document.querySelector('.events-container');
  const today = new Date();

  const upcomingEvents = events.filter(event => {
    const eventDate = new Date(event.date.replace(/-/g, '\/'));
    return eventDate >= today;
  });

  if (upcomingEvents.length > 0) {
    let htmlContent = '<p>Upcoming specials:</p><ul>';

    upcomingEvents.forEach(event => {
      const eventDate = new Date(event.date.replace(/-/g, '\/'));
      const formattedDate = eventDate.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'numeric',
        day: 'numeric',
        year: '2-digit'
      });
      htmlContent += `<li>${event.name} - ${formattedDate}</li>`;
      console.log('asdf ' + eventDate + ' --- ' + formattedDate);
    });

    htmlContent += '</ul>';
    container.innerHTML = htmlContent;
  }
});


// JavaScript Document
