$(function(){
  const topSlider = new Swiper(".top-slider", {
    freeMode: true,
    spaceBetween: 15,
    slidesPerView: 6.5,
    speed: 500
  });

  $(".top-slider__btn").on("mousedown", function(){
    $(".top-slider__btn").addClass("top-slider__btn--on")
  });
  $(".top-slider__btn").on("mouseup", function(){
    $(".top-slider__btn").removeClass("top-slider__btn--on")
  });
});