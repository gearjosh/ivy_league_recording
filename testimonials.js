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

// initialize the first testimonial
let testimonialIndex = 0;
let timeoutID;
showTestimonials();
