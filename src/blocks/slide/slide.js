/* eslint-disable */
let controller;
let slideScene;

function animateSlides() {
  //Инициализация контроллера
  controller = new ScrollMagic.Controller();
  //Выбор слайдов
  const sliders = document.querySelectorAll('.slide');
  const head = document.querySelector('.page-header');
  //Перебор слайдов
  sliders.forEach(slide => {
    const img = slide.querySelector('.slide__img');
    const revealImg = slide.querySelector('.slide__picture');
    const revealText = slide.querySelector('.slide__wrapper');
    //GSAP
    const slideTl = gsap.timeline({
      defaults: {duration: 1, ease: 'power2.inOut'}
    });
    slideTl.to(revealImg, {className: '+=slide__picture slide__picture--show'});
    slideTl.fromTo(img, {scale: 2}, {scale: 1}, '-=1');
    slideTl.to(revealText, {className: '+=slide__wrapper slide__wrapper--show'}, '-=0.75');
    slideTl.fromTo(head, {y: '-100%'}, {y: '0%'}, '-=0.75');
  });
}
animateSlides();
