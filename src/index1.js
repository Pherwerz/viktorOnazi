import './index.scss';

const switcher = document.querySelector('.header__button');
const features = Array.from(document.querySelectorAll('.features__btn'));
const featuresimg = Array.from(document.querySelectorAll('.features__img'));
const logo = document.querySelector('.header__logo');
const switcherimage = document.querySelector('.header__button--image');
const body = document.querySelector('body');
const featuresItem = Array.from(document.querySelectorAll('.features__item'));
const featuresPara = Array.from(document.querySelectorAll('.features__para'));
const btnHead = document.querySelector('.header__btn');
const arrowDown = document.querySelector('.arrowdown');
let tracker = true;

switcher.addEventListener('click', () => {
  if (tracker) {
    switcherimage.src = './img/sun.svg';
    logo.src = './img/Victor Onazi white.png';
    arrowDown.src = './img/arrow-down-white.svg';
    featuresimg.forEach(cur => {
      cur.src = './img/arrow-right-white.svg';
    });
    body.dataset.theme = 'dark';
    tracker = false;
  } else {
    switcherimage.src = './img/moon.svg';
    logo.src = './img/Victor Onazi.png';
    arrowDown.src = './img/arrow-down.svg';
    featuresimg.forEach(cur => {
      cur.src = './img/arrow-right.svg';
    });
    body.dataset.theme = 'light';
    tracker = true;
  }
});

btnHead.addEventListener('mouseover', () => {
  if (tracker) {
    arrowDown.src = './img/arrow-down-white.svg';
  }
});

btnHead.addEventListener('mouseleave', () => {
  if (tracker) {
    arrowDown.src = './img/arrow-down.svg';
  }
});

features.forEach((cur, i) => {
  cur.addEventListener('mouseover', () => {
    if (tracker) {
      featuresimg[i].src = './img/arrow-right-white.svg';
    }
  });
});

features.forEach((cur, i) => {
  featuresPara[i].style.visibility = 'hidden';
  features[i].style.visibility = 'hidden';

  cur.addEventListener('mouseleave', () => {
    if (tracker) {
      featuresimg[i].src = './img/arrow-right.svg';
    }
  });
});

window.addEventListener('scroll', () => {
  featuresItem.forEach((cur, i) => {
    if (window.pageYOffset >= cur.offsetTop - 200) {
      featuresPara[i].style.visibility = 'visible';
      features[i].style.visibility = 'visible';
      featuresPara[i].style.animation = 'fadeIn 1s backwards';
      features[i].style.animation = 'slideDown 1s .5s backwards';
    }
  });
});
