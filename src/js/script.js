const animateSlides = require('../blocks/slide/slide.js');
const detailAnimation = require('../blocks/fashion/fashion.js');

document.querySelector('html').classList.remove('no-js');
if (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) {
  document.querySelector('html').classList.remove('webp');
  document.querySelector('html').classList.add('no-webp');
}

//Переходы между страницами
//то что не хотим изменять - оборачиваем data-barba='wrapper'
//то что хотим изменять - оборачиваем data-barba='container'
const logo = document.querySelector('.logo');

barba.init({
  views: [
    {
      namespace: 'home',
      beforeEnter() {
        animateSlides();
        logo.href = './index.html';
      },
      beforeLeave() {
        slideScene.destroy();
        pageScene.destroy();
        container.destroy();
      }
    },
    {
      namespace: 'fashion',
      beforeEnter() {
        logo.href = './index.html';
        detailAnimation();
        gsap.fromTo('.page-header', 1, {y: '100%'}, {y: '0%', ease: 'power2.inOut'});
      },
      beforeLeave() {
        controller.destroy();
        detailScene.destroy();
      }
    }
  ],
  transitions: [
    {
      leave({current, next}) {
        let done = this.async();
        //Анимация
        const tl = gsap.timeline({defaults: {ease: 'power2.inOut'}});
        tl.fromTo(current.container, 1, {opacity: 1}, {opacity: 0});
        tl.fromTo('.swipe', 0.75, {x: '-100%'}, {x: '0%', onComplete: done}, '-=0.5');
      },
      enter({current, next}) {
        let done = this.async();
        //скроллим вверх
        window.scrollTo(0, 0);
        //Анимация
        const tl = gsap.timeline({defaults: {ease: 'power2.inOut'}});
        tl.fromTo('.swipe', 0.5, {x: '0%'}, {x: '100%', stagger: 0.25, onComplete: done});
        tl.fromTo(next.container, 1, {opacity: 0}, {opacity: 1});
      }
    }
  ]
})
