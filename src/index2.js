import './index.scss';

const switcher = document.querySelector('.header__button');
//const featuresimg = Array.from(document.querySelectorAll('.features__img'));
const logo = document.querySelector('.header__logo');
const switcherimage = document.querySelector('.header__button--image');
const body = document.querySelector('body');
//const arrowDown = document.querySelector('.arrowdown');
let tracker = true;

switcher.addEventListener('click', () => {
  if (tracker) {
    switcherimage.src = './img/sun.svg';
    logo.src = './img/Victor Onazi white.png';
    //arrowDown.src = './img/arrow-down-white.svg';
    // featuresimg.forEach(cur => {
    //   cur.src = './img/arrow-right-white.svg';
    // });
    body.dataset.theme = 'dark';
    tracker = false;
  } else {
    switcherimage.src = './img/moon.svg';
    logo.src = './img/Victor Onazi.png';
    //arrowDown.src = './img/arrow-down.svg';
    // featuresimg.forEach(cur => {
    //   cur.src = './img/arrow-right.svg';
    // });
    body.dataset.theme = 'light';
    tracker = true;
  }
});
