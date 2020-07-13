/* *****************
 THIS SCRIPT CONTROLS THE INDEX HTML (HOME PAGE)
*******************/
import './index.scss';
import { elements } from './js/base';

// THIS CONTROLS THE SWICTHING TO LIGHT AND DARK MODE
elements.switcher.forEach(cur =>
  cur.addEventListener('click', () => {
    if (elements.tracker) {
      elements.switcherimage.forEach(currr => {
        currr.src = './img/sun.svg';
      });
      elements.logo.src = './img/Victor Onazi white.png';
      elements.arrowDown.src = './img/arrow-down-white.svg';
      elements.navimage.src = './img/close-white.svg';
      elements.headerNavImage.src = './img/menu-white.svg';
      elements.featuresimg.forEach(cu => {
        cu.src = './img/arrow-right-white.svg';
      });
      elements.body.dataset.theme = 'dark';
      elements.tracker = false;
    } else {
      elements.switcherimage.forEach(curr => {
        curr.src = './img/moon.svg';
      });
      elements.logo.src = './img/Victor Onazi.png';
      elements.arrowDown.src = './img/arrow-down.svg';
      elements.navimage.src = './img/close.svg';
      elements.headerNavImage.src = './img/menu.svg';
      elements.featuresimg.forEach(el => {
        el.src = './img/arrow-right.svg';
      });
      elements.body.dataset.theme = 'light';
      elements.tracker = true;
    }
  })
);

// THIS CONTROLS THE CLOSING OF THE NAVIGATION BAR ON SMALLER SCREEN
elements.close.addEventListener('click', () => {
  elements.navigation.style.visibility = 'hidden';
  elements.navigation.style.opacity = '0';
});

// THIS CONTROLS THE OPENING OF THE NAVIGATION SCREEN ON SMALLER SCREEN
elements.navbtn.addEventListener('click', () => {
  elements.navigation.style.visibility = 'visible';
  elements.navigation.style.opacity = '1';
});

// THIS IS TO MAKE THE NAVIGATION DISAPPEAR ON LINK CLICK (NAVIGATION LINKS ONLY)
elements.link.forEach(cur => {
  cur.addEventListener('click', () => {
    elements.navigation.style.visibility = 'hidden';
    elements.navigation.style.opacity = '0';
  });
});

// THIS IS THE HOVER EFFECT TO SWICTH ARROW ON BOTTON TO WHITE
elements.btnHead.addEventListener('mouseover', () => {
  if (elements.tracker) {
    elements.arrowDown.src = './img/arrow-down-white.svg';
  }
});

elements.features.forEach((cur, i) => {
  cur.addEventListener('mouseover', () => {
    if (elements.tracker) {
      elements.featuresimg[i].src = './img/arrow-right-white.svg';
    }
  });
});

// THIS IS THE HOVER EFFECT TO SWICTH ARROW ON BOTTON BACK TO NORMAL ONCE THE MOUSE LEAVES
elements.btnHead.addEventListener('mouseleave', () => {
  if (elements.tracker) {
    elements.arrowDown.src = './img/arrow-down.svg';
  }
});

elements.features.forEach((cur, i) => {
  elements.featuresPara[i].style.visibility = 'hidden';
  elements.features[i].style.visibility = 'hidden';

  cur.addEventListener('mouseleave', () => {
    if (elements.tracker) {
      elements.featuresimg[i].src = './img/arrow-right.svg';
    }
  });
});

// THIS CONTROLS ANIMATION ON SCROLL
window.addEventListener('scroll', () => {
  elements.featuresItem.forEach((cur, i) => {
    if (window.pageYOffset >= cur.offsetTop - 200) {
      elements.featuresPara[i].style.visibility = 'visible';
      elements.features[i].style.visibility = 'visible';
      elements.featuresPara[i].style.animation = 'fadeIn 1s backwards';
      elements.features[i].style.animation = 'slideDown 1s .5s backwards';
    }
  });
});
