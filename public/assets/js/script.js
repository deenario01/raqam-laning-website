/*
  Template Name: Furea - Furniture eCommerce HTML Template
  Author Name: Hook theme
  Author URL: https://themeforest.net/user/hooktheme
  Version: v1.0.4
*/

"use strict";

// Test if script is loading
console.log("Script.js is loading...");

// Preloader
const preLoader = function () {
  let preloaderWrapper = document.getElementById("preloader");
  window.onload = () => {
    preloaderWrapper.classList.add("addloaded");
  };
};
//preLoader();

// getSiblings
var getSiblings = function (elem) {
  const siblings = [];
  let sibling = elem.parentNode.firstChild;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

/* Slide Up */
var slideUp = (target, time) => {
  const duration = time ? time : 500;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

/* Slide Down */
var slideDown = (target, time) => {
  const duration = time ? time : 500;
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") display = "block";
  target.style.display = display;
  const height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

// Get window top offset
function TopOffset(el) {
  let rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop };
}

// Header sticky activation
const headerStickyWrapper = document.querySelector("header");
const headerStickyTarget = document.querySelector(".header__sticky");

if (headerStickyTarget) {
  window.addEventListener("scroll", function () {
    let StickyTargetElement = TopOffset(headerStickyWrapper);
    let TargetElementTopOffset = StickyTargetElement.top;

    if (window.scrollY > TargetElementTopOffset) {
      headerStickyTarget.classList.add("sticky");
    } else {
      headerStickyTarget.classList.remove("sticky");
    }
  });
}

// Scroll up activation
const scrollTop = document.querySelector(".scroll__top");
if (scrollTop) {
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 200) {
      scrollTop.classList.add("active");
    } else {
      scrollTop.classList.remove("active");
    }
  });
}

// CounterUp Activation
console.log("About to set up counter...");
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOMContentLoaded fired!");
  
  // Initialize all Swiper instances
  initializeSwipers();
  
  const wrapper = document.getElementById("funfactId");
  console.log("Counter wrapper found:", wrapper); // Debug log

  if (wrapper) {
    const counters = wrapper.querySelectorAll(".js-counter");
    console.log("Counter elements found:", counters.length); // Debug log
    
    const duration = 2000; // Increased duration for smoother animation

    let isCounted = false;
    
    // Function to animate counter
    function animateCounter(counter, target) {
      let current = 0;
      const increment = target / (duration / 16); // 60fps animation
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        
        // Handle the "1000+" case
        if (target === 1000) {
          counter.textContent = Math.round(current) + "+";
        } else {
          counter.textContent = Math.round(current);
        }
      }, 16);
    }

    // Check if element is in viewport (simplified)
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top < window.innerHeight &&
        rect.bottom > 0
      );
    }

    // Trigger counter animation when scrolled into view
    function checkScroll() {
      if (!isCounted && isInViewport(wrapper)) {
        console.log("Counter animation triggered!"); // Debug log
        counters.forEach((counter) => {
          const countTo = parseInt(counter.dataset.count);
          console.log("Animating counter to:", countTo); // Debug log
          animateCounter(counter, countTo);
        });
        isCounted = true;
      }
    }

    // Add scroll event listener
    document.addEventListener("scroll", checkScroll);
    
    // Also check on page load in case the element is already visible
    setTimeout(checkScroll, 100); // Small delay to ensure DOM is ready
    
    // For testing - trigger animation immediately after 1 second
    setTimeout(() => {
      if (!isCounted) {
        console.log("Forcing counter animation for testing");
        counters.forEach((counter) => {
          const countTo = parseInt(counter.dataset.count);
          console.log("Animating counter to:", countTo);
          animateCounter(counter, countTo);
        });
        isCounted = true;
      }
    }, 1000);
  }
});

// Function to initialize all Swiper instances
function initializeSwipers() {
  // Hero slider swiper activation
  if (document.querySelector(".hero__slider--activation")) {
    new Swiper(".hero__slider--activation", {
      slidesPerView: 1,
      loop: true,
      clickable: true,
      effect: "fade",
      speed: 500,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // Product swiper column3 activation
  if (document.querySelector(".product__swiper--column3")) {
    new Swiper(".product__swiper--column3", {
      slidesPerView: 3,
      clickable: true,
      loop: true,
      spaceBetween: 30,
      breakpoints: {
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        280: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        0: {
          slidesPerView: 1,
        },
      },
      grid: {
        fill: "row",
        rows: 2,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // Product swiper column4 activation
  if (document.querySelector(".product__swiper--column4")) {
    new Swiper(".product__swiper--column4", {
      slidesPerView: 4,
      clickable: true,
      loop: true,
      spaceBetween: 30,
      breakpoints: {
        1200: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        280: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        0: {
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // Product swiper column5 activation
  if (document.querySelector(".product__swiper--column5")) {
    new Swiper(".product__swiper--column5", {
      slidesPerView: 5,
      clickable: true,
      loop: true,
      spaceBetween: 30,
      breakpoints: {
        1200: {
          slidesPerView: 5,
        },
        992: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        280: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        0: {
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // Product list column3 activation
  if (document.querySelector(".product__list--column3")) {
    new Swiper(".product__list--column3", {
      slidesPerView: 3,
      clickable: true,
      loop: true,
      spaceBetween: 30,
      breakpoints: {
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        450: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        280: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        0: {
          slidesPerView: 1,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  // Testimonial swiper activation
  if (document.querySelector(".testimonial__swiper--activation")) {
    new Swiper(".testimonial__swiper--activation", {
      slidesPerView: 2,
      loop: true,
      clickable: true,
      spaceBetween: 30,
      breakpoints: {
        768: {
          spaceBetween: 30,
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        0: {
          slidesPerView: 1,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  // Testimonial swiper column3 activation
  if (document.querySelector(".testimonial__swiper--column3")) {
    new Swiper(".testimonial__swiper--column3", {
      slidesPerView: 3,
      loop: true,
      clickable: true,
      spaceBetween: 30,
      breakpoints: {
        1200: {
          spaceBetween: 30,
          slidesPerView: 3,
        },
        992: {
          spaceBetween: 30,
          slidesPerView: 2,
        },
        768: {
          spaceBetween: 30,
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        0: {
          slidesPerView: 1,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  // Testimonial swiper column4 activation
  if (document.querySelector(".testimonial__swiper--column4")) {
    new Swiper(".testimonial__swiper--column4", {
      slidesPerView: 4,
      loop: true,
      clickable: true,
      spaceBetween: 30,
      breakpoints: {
        1200: {
          spaceBetween: 30,
          slidesPerView: 4,
        },
        992: {
          spaceBetween: 30,
          slidesPerView: 3,
        },
        768: {
          spaceBetween: 30,
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        0: {
          slidesPerView: 1,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  // Blog swiper activation
  if (document.querySelector(".blog__swiper--activation")) {
    new Swiper(".blog__swiper--activation", {
      slidesPerView: 4,
      loop: true,
      clickable: true,
      spaceBetween: 30,
      breakpoints: {
        1500: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        0: {
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // Blog swiper column3 activation
  if (document.querySelector(".blog__swiper--column3")) {
    new Swiper(".blog__swiper--column3", {
      slidesPerView: 3,
      loop: true,
      clickable: true,
      spaceBetween: 30,
      breakpoints: {
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        0: {
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // Instagram swiper activation
  if (document.querySelector(".instagram__swiper--activation")) {
    new Swiper(".instagram__swiper--activation", {
      slidesPerView: 4,
      loop: true,
      clickable: true,
      spaceBetween: 30,
      breakpoints: {
        1200: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        0: {
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // Instagram swiper column5 activation
  if (document.querySelector(".instagram__swiper--column5")) {
    new Swiper(".instagram__swiper--column5", {
      slidesPerView: 5,
      loop: true,
      clickable: true,
      spaceBetween: 30,
      breakpoints: {
        1200: {
          slidesPerView: 5,
        },
        992: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        0: {
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // Quickview swiper activation
  if (document.querySelector(".quickview__swiper--activation")) {
    new Swiper(".quickview__swiper--activation", {
      slidesPerView: 1,
      loop: true,
      clickable: true,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  // Product details media swiper activation - DISABLED
  // Swiper functionality removed to eliminate scrolling effects on product images
}

// Category Submenu
const categoryMobileMenu = function () {
  const CategorySubMenu = document.querySelector(".category__mobile--menu");
  if (CategorySubMenu) {
    CategorySubMenu.querySelectorAll(".category__sub--menu").forEach(function (
      ul
    ) {
      let catsubMenuToggle = document.createElement("button");
      catsubMenuToggle.classList.add("category__sub--menu_toggle");
      ul.parentNode.appendChild(catsubMenuToggle);
    });
  }

  if (CategorySubMenu) {
    CategorySubMenu.querySelectorAll(".category__sub--menu_toggle").forEach(
      function (toggle) {
        toggle.addEventListener("click", function (e) {
          e.preventDefault();
          let parent = this.parentElement;
          if (parent.classList.contains("active")) {
            this.classList.remove("active");
            parent.classList.remove("active");
            parent
              .querySelectorAll(".category__sub--menu")
              .forEach(function (subMenu) {
                subMenu.parentElement.classList.remove("active");
                subMenu.nextElementSibling.classList.remove("active");
                slideUp(subMenu);
              });
          } else {
            this.classList.add("active");
            parent.classList.add("active");
            slideDown(this.previousElementSibling);
            getSiblings(parent).forEach(function (item) {
              item.classList.remove("active");
              item
                .querySelectorAll(".category__sub--menu")
                .forEach(function (subMenu) {
                  subMenu.parentElement.classList.remove("active");
                  subMenu.nextElementSibling.classList.remove("active");
                  slideUp(subMenu);
                });
            });
          }
        });
      }
    );
  }
};

// Initialize category mobile menu when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  categoryMobileMenu();
  offcanvasHeader();
});

function handleOffcanvasOpen() {
  console.log("Offcanvas menu opened!");
  // TODO: put your sidebar toggle logic here
}

/* Offcanvas Mobile Menu Function */
const offcanvasHeader = function () {
  const offcanvasOpen = document.querySelector(
      ".offcanvas__header--menu__open--btn"
    ),
    offcanvasClose = document.querySelector(".offcanvas__close--btn"),
    offcanvasHeader = document.querySelector(".offcanvas__header"),
    offcanvasMenu = document.querySelector(".offcanvas__menu"),
    body = document.querySelector("body");
  
  /* Offcanvas SubMenu Toggle */
  if (offcanvasMenu) {
    offcanvasMenu
      .querySelectorAll(".offcanvas__sub_menu")
      .forEach(function (ul) {
        const subMenuToggle = document.createElement("button");
        subMenuToggle.classList.add("offcanvas__sub_menu_toggle");
        ul.parentNode.appendChild(subMenuToggle);
      });
  }
  
  /* Open/Close Menu On Click Toggle Button */
  if (offcanvasOpen) {
    offcanvasOpen.addEventListener("click", function (e) {
      e.preventDefault();
      offcanvasHeader.classList.add("open");
      body.classList.add("mobile_menu_open");
    });
  }
  
  if (offcanvasClose) {
    offcanvasClose.addEventListener("click", function (e) {
      e.preventDefault();
      offcanvasHeader.classList.remove("open");
      body.classList.remove("mobile_menu_open");
    });
  }
  
  /* Open/Close Sub Menu On Click Toggle Button */
  if (offcanvasMenu) {
    offcanvasMenu
      .querySelectorAll(".offcanvas__sub_menu_toggle")
      .forEach(function (toggle) {
        toggle.addEventListener("click", function (e) {
          e.preventDefault();
          const parent = this.parentElement;
          if (parent.classList.contains("active")) {
            this.classList.remove("active");
            parent.classList.remove("active");
            parent
              .querySelectorAll(".offcanvas__sub_menu")
              .forEach(function (subMenu) {
                subMenu.parentElement.classList.remove("active");
                subMenu.nextElementSibling.classList.remove("active");
                slideUp(subMenu);
              });
          } else {
            this.classList.add("active");
            parent.classList.add("active");
            slideDown(this.previousElementSibling);
            getSiblings(parent).forEach(function (item) {
              item.classList.remove("active");
              item
                .querySelectorAll(".offcanvas__sub_menu")
                .forEach(function (subMenu) {
                  subMenu.parentElement.classList.remove("active");
                  subMenu.nextElementSibling.classList.remove("active");
                  slideUp(subMenu);
                });
            });
          }
        });
      });
  }
  
  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".offcanvas__header--menu__open--btn") &&
      !event.target.classList.contains(
        ".offcanvas__header--menu__open--btn".replace(/\./, "")
      )
    ) {
      if (
        !event.target.closest(".offcanvas__header") &&
        !event.target.classList.contains(".offcanvas__header".replace(/\./, ""))
      ) {
        offcanvasHeader.classList.remove("open");
        body.classList.remove("mobile_menu_open");
      }
    }
  });
  
  /* Remove Mobile Menu Open Class & Hide Mobile Menu When Window Width in More Than 991 */
  window.addEventListener("resize", function () {
    if (window.outerWidth >= 992) {
      offcanvasHeader.classList.remove("open");
      body.classList.remove("mobile_menu_open");
    }
  });
};