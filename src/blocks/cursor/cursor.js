/* eslint-disable */
let mouse = document.querySelector('.cursor');
let mouseText = mouse.querySelector('.cursor__text');

function cursor(e) {
  mouse.style.top = `${e.pageY}px`;
  mouse.style.left = `${e.pageX}px`;
}

function activeCursor(e) {
  const item = e.target;
  if(item.tagName === 'IMG' && item.parentElement.parentElement.tagName === 'A' || item.tagName === 'BUTTON' || item.tagName === 'A') {
    mouse.classList.add('cursor--active');
  } else {
    mouse.classList.remove('cursor--active');
  }
  if (item.classList.contains('slide__link')) {
    mouse.classList.add('cursor--active-link');
    gsap.to('.slide__title', {className: '+=slide__title slide__title--fill'});
    mouseText.innerText = 'Tap';
  } else {
    mouse.classList.remove('cursor--active-link');
    gsap.to('.slide__title', {className: '+=slide__title'});
    mouseText.innerText = '';
  }
}

window.addEventListener('mousemove', cursor);
window.addEventListener('mouseover', activeCursor);
