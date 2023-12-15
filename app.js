
import { html, render } from "./lib/lit-html/lit-html.js";
import page from "./lib/page/page.mjs";

import { showHome } from "./templates/home.js";
import { showGalleries } from "./templates/galleries.js";
import { showAbout } from "./templates/about.js";
import { showContacts } from "./templates/contacts.js";
import { showLogin } from "./templates/login.js";
import { showRegister } from "./templates/register.js"





function start() {




  page('/index.html', '/');
  page('/', () => renderPage(showHome));
  page('/galleries', () => renderPage(showGalleries));
  page('/about', () => renderPage(showAbout));
  page('/contacts', () => renderPage(showContacts));
  page('/login', () => renderPage(showLogin));
  page('/register', () => renderPage(showRegister));

  page();
};

function renderPage(pg) {

  const main = document.querySelector('main');
  render(pg(), main);

  const header = document.querySelector('header');
  const bannerImage = document.querySelector('.banner-image');

  window.scrollTo(0, (bannerImage.offsetHeight))

  // let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
  // document.addEventListener('scroll', handleScroll);

  

  // function handleScroll() {

  //   const scrollTopPosition = window.scrollY || document.documentElement.scrollTop;

  //   if (scrollTopPosition > lastScrollTop) {
      
  //     header.style.display='none';
      

  //   } else if (scrollTopPosition < lastScrollTop) {
      
  //     header.style.display='flex';
     
  //   }
  //   lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
  // }

};





start();

