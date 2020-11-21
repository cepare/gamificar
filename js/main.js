/*$("section.awSlider .carousel").carousel({
  pause: "hover",
  interval: 2000
});

var startImage = $("section.awSlider .item.active > img").attr("src");
$("section.awSlider").append('<img src="' + startImage + '">');

$("section.awSlider .carousel").on("slid.bs.carousel", function () {
  var bscn = $(this).find(".item.active > img").attr("src");
  $("section.awSlider > img").attr("src", bscn);
});*/
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav__ul").classList.toggle("show");
});

/*ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });*/