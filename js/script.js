
const page_preloader = document.querySelector(".preloader");
setTimeout(function () {
  page_preloader.style.zIndex = "-1";
  page_preloader.style.opacity = "0";
}, 2500);

const clickMenu = document.querySelector(".menu-btn");
const menuList = document.querySelector(".header__menu");

clickMenu.addEventListener("click", () => {
  clickMenu.classList.toggle("active");
  menuList.classList.toggle("active");
  document.body.classList.toggle("fix");
});


$('.client__slide').slick({
  autoplaySpeed: 5000,
  autoplay: true,
  infinite: true,
  fade: true,
  arrows: true,
  asNavFor: '.client__wrap__dot',
  
});

$('.client__wrap__dot').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  asNavFor: '.client__slide',
  focusOnSelect: true,
});

