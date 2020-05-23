let detailScene;

function detailAnimation() {
  controller = new ScrollMagic.Controller();
  const slides = document.querySelectorAll('.fashion');
  slides.forEach((slide, index, slides) => {
    const slideTl = gsap.timeline({defaults: {duration: 1}});
    let nextSlide = slides.length - 1 === index ? 'end' : slides[index + 1];
    const nextImg = nextSlide.querySelector('.fashion__img');
    slideTl.fromTo(slide, {opacity: 1}, {opacity: 0});
    slideTl.fromTo(nextSlide, {opacity: 0}, {opacity: 1}, '-=1');
    slideTl.fromTo(nextImg, {x: '50%'}, {x: '0%'});
    //Сцена
    detailScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: '100%',
      triggerHook: 0
    }).setPin(slide, {pushFollowers: false})
      .setTween(slideTl)
      .addIndicators({
        colorStart: 'white',
        colorTrigger: 'white',
        name: 'detailScene'
      })
      .addTo(controller);
  });
}

module.exports = detailAnimation;
