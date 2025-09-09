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