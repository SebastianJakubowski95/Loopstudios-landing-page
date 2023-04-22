const w = window.innerWidth;

if (w > 1280) {
  $("#burger-svg").addClass("not-visible");
}

$("#burger-svg").click((e) => {
  e.preventDefault();
  $("#close").toggleClass("not-visible");
});

$("#close-svg").click((e) => {
  e.preventDefault();
  $("#close").toggleClass("not-visible");
});
