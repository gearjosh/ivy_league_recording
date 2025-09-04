function currentTestimonial(n) {
  clearTimeout(timeoutID);
  showTestimonials((testimonialIndex = n));
}

function showTestimonials(n) {
  let i;
  let testimonials = document.getElementsByClassName("testslide");
  let dots = document.getElementsByClassName("dot");
  if (n) {
    if (n > testimonials.length) {
      testimonialIndex = 1;
    }
  } else {
    testimonialIndex++;
    if (testimonialIndex > testimonials.length) {
      testimonialIndex = 1;
    }
  }
  for (i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" bg-color-indigo", "");
  }
  testimonials[testimonialIndex - 1].style.display = "flex";
  dots[testimonialIndex - 1].className += " bg-color-indigo";
  timeoutID = setTimeout(showTestimonials, 20000);
}

// show header text on scroll
const hideText = $("#logo-text")
const height = $("#bigLogo").outerHeight();
$(window).scroll(function () {
  const windowPos = $(window).scrollTop();
  if (windowPos >= (height)) {
    hideText.removeClass("hidden");
  }
  else {
    hideText.addClass("hidden");
  }
});

// click listeners
$("#contactButton").click(function () {
  window.location.href = "contact.html";
});

// initialize the first testimonial
let testimonialIndex = 0;
let timeoutID;
showTestimonials();