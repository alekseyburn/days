/* eslint-disable */
let controller;
let slideScene;
let pageScene;

function animateSlides() {
  //Инициализация контроллера
  controller = new ScrollMagic.Controller();
  //Выбор слайдов
  const sliders = document.querySelectorAll('.slide');
  //Перебор слайдов
  sliders.forEach((slide, index, slides) => {
    const img = slide.querySelector('.slide__img');
    const revealImg = slide.querySelector('.slide__wrapper--img');
    const revealText = slide.querySelector('.slide__wrapper--text');
    //GSAP
    const slideTl = gsap.timeline({
      defaults: {duration: 1, ease: 'power2.inOut'}
    });
    slideTl.to(revealImg, {className: '+=slide__wrapper slide__wrapper--img slide__wrapper--show'});
    slideTl.fromTo(img, {scale: 2}, {scale: 1}, '-=1');
    slideTl.to(revealText, {className: '+=slide__wrapper slide__wrapper--text slide__wrapper--show'}, '-=0.75');
    //Создаём сцену
    slideScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0.25,
      reverse: false
    }).setTween(slideTl)
      .addTo(controller);
    //Новая анимация
    const pageTl = gsap.timeline();
    let nextSlide = slides.length - 1 === index ? 'end' : slides[index + 1];
    pageTl.fromTo(nextSlide, {y: '0%'}, {y: '50%'});
    pageTl.fromTo(slide, {opacity: 1, scale: 1}, {opacity: 0, scale: 0.5});
    pageTl.fromTo(nextSlide, {y: '50%'}, {y: '0%'}, '-=0.5');
    //Создаём новую сцену
    pageScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: '100%',
      triggerHook: 0,
    }).setTween(pageTl)
      .setPin(slide, {pushFollowers: false})
      .addTo(controller);
  });
}

module.exports = animateSlides;
