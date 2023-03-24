// set carousel interval
const myCarouselElement = document.querySelector("#heroCarousel");
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000,
  touch: false,
});

// stop navbar transition when modal is open
var myModalEl = document.getElementById("meetHypnModal");
var modalInShownState = false;
myModalEl.addEventListener("shown.bs.modal", function (event) {
  modalInShownState = true;
});
myModalEl.addEventListener("hidden.bs.modal", function (event) {
  modalInShownState = false;
});

// dynamic detection of window width
var windowsize = $(window).width();

$(window).resize(function() {
  var windowsize = $(window).width();
});

$(window).on("wheel", function (event) {
  // control nav transition
  if (modalInShownState == false) {
    if (windowsize > 768) {
      if (event.originalEvent.deltaY < 0 && scrollY < innerHeight) {
        // wheeled up
        $(".nav-link").css("font-size", "1.75rem");
        $(".navbar").addClass("my-3");
      } else {
        // wheeled down
        $(".nav-link").css("font-size", "1.5rem");
        $(".navbar").removeClass("my-3");
      }
    }
  }
  // control img transition
  if (scrollY > $(".more-section").offset().top - innerHeight + 400) {
    $("#scroll-img").addClass("shrink");
    $("#scroll-img").removeClass("grow");
  } else {
    $("#scroll-img").removeClass("shrink");
    $("#scroll-img").addClass("grow");
  }
});

// bootstrap datepicker
$('#datePicker').datepicker({
  format: "yyyy/mm/dd",
  startDate: "2023-01-01",
  endDate: "2040-01-01",
  todayBtn: "linked",
  autoclose: true,
  todayHighlight: true,
});