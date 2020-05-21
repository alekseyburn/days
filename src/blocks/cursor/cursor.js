/* eslint-disable */
let mouse = document.querySelector('.cursor');

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
}

window.addEventListener('mousemove', cursor);
window.addEventListener('mouseover', activeCursor);
