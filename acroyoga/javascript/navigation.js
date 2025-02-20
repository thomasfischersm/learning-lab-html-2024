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
    {
      "name": "Free Spring Open House 6:00 PM",
      "date": "2024-04-19"
    },
    {
      "name": "4-Week Absolute Beginner Cycle 6:00 PM",
      "date": "2024-04-26"
    },
    {
      "name": "Free Community Spotting Clinic in Central Park",
      "date": "2024-05-04"
    },
    {
      "name": "Free Summer Kick-Off In Central Park: 3-hour session",
      "date": "2024-05-18"
    },
    {
      "name": "Free Summer Kick-Off Open House 6:00 PM",
      "date": "2024-05-24"
    },
    {
      "name": "Memorial Day: Free 3-hour acroyoga session in Central Park",
      "date": "2024-05-27"
    },
    {
      "name": "<span style='color: red'>Mostly on summer break June through August</span>",
      "date": "2024-09-1"
    },
    {
      "name": "Workshop at Pagan's Paradise: Lunar Acroyoga Flow for Couples: Trust, Connection, and Healing. To join, sign up with <a href='https://www.eventbrite.com/e/lunar-acroyoga-flow-for-couples-trust-connection-and-healing-new-tickets-920644742207'>Pagan's Paradise</a>, not Learning Lab!",
      "date": "2024-07-02"
    },
    {
      "name": "Workshop at Pagan's Paradise: Lunar Acroyoga Flow for Couples: Trust, Connection, and Healing. To join, sign up with <a href='https://www.eventbrite.com/e/lunar-acroyoga-flow-for-couples-clothing-optional-new-tickets-1006589475217'>Pagan's Paradise</a>, not Learning Lab!",
      "date": "2024-09-26"
    },
    {
      "name": "<span style='color: red'>On teaching break with occasional workshops.</span>",
      "date": "2024-12-1"
    },
    {
      "name": "Workshop at Pagan's Paradise: Lunar Acroyoga Flow for Couples: Trust, Connection, and Healing. To join, sign up with <a href='https://www.eventbrite.com/e/lunar-acroyoga-for-intimacy-trust-and-communication-couples-friends-tickets-1095693120619'>Pagan's Paradise</a>, not Learning Lab!",
      "date": "2024-12-17"
    },
    {
      "name": "Open house acroyoga session on Saturday, 2/22/25 from 3 to 4:30 PM at Ripley Grier (Midtown NYC): <a href='https://www.eventbrite.com/e/acroyoga-open-house-learning-lab-nyc-tickets-1255099419149'>Sign up on Eventbrite</a>",
      "date": "2025-02-22"
    },
    {
      "name": "<span style='color: red'>Retired from teaching with occasional workshops. Follow the newsletter to find out about them!</span>",
      "date": "2030-12-1"
    } 
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
