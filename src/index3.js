/* *****************
 THIS SCRIPT CONTROLS THE MESSAGE HTML
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
      elements.logo.forEach(current => {
        current.src = './img/Victor Onazi white.png';
      });
      elements.navimage.src = './img/close-white.svg';
      elements.headerNavImage.src = './img/menu-white.svg';
      elements.body.dataset.theme = 'dark';
      elements.tracker = false;
    } else {
      elements.switcherimage.forEach(curr => {
        curr.src = './img/moon.svg';
      });
      elements.logo.forEach(curEl => {
        curEl.src = './img/Victor Onazi.png';
      });
      elements.navimage.src = './img/close.svg';
      elements.headerNavImage.src = './img/menu.svg';
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
