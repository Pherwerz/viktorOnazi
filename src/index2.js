/* *****************
 THIS SCRIPT CONTROLS THE ABOUT HTML
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
      elements.navimage.src = './img/close-white.svg';
      elements.headerNavImage.src = './img/menu-white.svg';
      elements.aboutImg.src = './img/arrow-right-white.svg';
      elements.body.dataset.theme = 'dark';
      elements.tracker = false;
    } else {
      elements.switcherimage.forEach(cury => {
        cury.src = './img/moon.svg';
      });
      elements.logo.src = './img/Victor Onazi.png';
      elements.navimage.src = './img/close.svg';
      elements.headerNavImage.src = './img/menu.svg';
      elements.aboutImg.src = './img/arrow-right.svg';
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
elements.about.addEventListener('mouseover', () => {
  if (elements.tracker) {
    elements.aboutImg.src = './img/arrow-right-white.svg';
  }
});

// THIS IS THE HOVER EFFECT TO SWICTH ARROW ON BOTTON BACK TO NORMAL ONCE THE MOUSE LEAVES
elements.about.addEventListener('mouseleave', () => {
  if (elements.tracker) {
    elements.aboutImg.src = './img/arrow-right.svg';
  }
});
