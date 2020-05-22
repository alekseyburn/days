/* eslint-disable */
const burger = document.querySelector('.page-header__btn');

burger.addEventListener('click', contactsToggle);

function contactsToggle(e) {
  const burgerTl = gsap.timeline({
    defaults: {duration: 0.5, ease: 'power2.inOut'}
  });
  if (!e.target.classList.contains('active')) {
    e.target.classList.add('active');
    burgerTl.to('.line-1', {y: 14});
    burgerTl.to('.line-3', {y: -15}, '-=0.5');
    burgerTl.to('.line-2', {opacity: 0}, '-=0.5');
    burgerTl.to('.line-1', {rotate: 45, background: 'black'});
    burgerTl.to('.line-3', {rotate: -45, background: 'black'}, '-=0.5');
    gsap.to('.contacts', 1, {clipPath: 'circle(2500px at 100% -10%)'});
    // document.body.classList.add('hide');
    document.documentElement.style.cursor = 'pointer';
  } else {
    e.target.classList.remove('active');
    burgerTl.to('.line-1', {rotate: 0, background: 'white'});
    burgerTl.to('.line-3', {rotate: 0, background: 'white'}, '-=0.5');
    burgerTl.to('.line-1', {y: 0});
    burgerTl.to('.line-3', {y: 0}, '-=0.5');
    burgerTl.to('.line-2', {opacity: 1}, '-=0.5');
    gsap.to('.contacts', 1, {clipPath: 'circle(50px at 100% -10%)'});
    // document.body.classList.remove('hide');
  }

}
