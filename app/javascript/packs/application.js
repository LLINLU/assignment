// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';
// import { preloader } from '../components/preloader';
import { clickScroll} from '../components/fullpageScroll';
import { landingAnim } from '../components/landingAnim';
import { mouseCursor,hoverChange, formChange, linkChange } from '../components/mouseCursor';
import { scrollApear } from '../components/scrollApear';
import { horizontalSlide } from '../components/horizontalSlide';
import { slideAppear } from '../components/slideAppear';
import { morphBlobs } from '../components/morph';
import { scrollTop } from '../components/scrollTop';
import { himaAppear } from '../components/himaSlide';
import { leafSlide } from '../components/leafAppear';
import { arrowDisappear } from '../components/arrowDisappear';
import { scrollIntoView } from '../components/scrollIntoView';
import { typeWriterEffect } from '../components/typeWriterEffect';
import { intersectionObserver } from '../components/intersectionObserver';
import { typeWriterSkill } from '../components/typeWriterSkill';
import { burgerMenu } from '../components/burger';
import { scrollEvent} from '../components/scrollEvent';
import { backToTop } from '../components/backToTop';
import { navbarAppear } from '../components/navbarAppear';
import { moveCalendar } from '../components/moveCalendar';
import { navSpEvent } from '../components/navSpEvent';
import { headlineAppear } from '../components/projectHeadline';
document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  // preloader();
  clickScroll();
  landingAnim();
  mouseCursor();
  hoverChange();
  linkChange();
  formChange();
  scrollApear();
  horizontalSlide();
  slideAppear();
  morphBlobs();
  scrollTop();
  himaAppear();
  leafSlide();
  arrowDisappear();
  scrollIntoView();
  typeWriterEffect();
  intersectionObserver();
  typeWriterSkill();
  burgerMenu();
  scrollEvent();
  backToTop();
  navbarAppear();
  moveCalendar();
  navSpEvent();
  headlineAppear();
});
