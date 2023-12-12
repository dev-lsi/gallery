
import { html, render } from "./lib/lit-html/lit-html.js";
import page from "./lib/page/page.mjs";

import { showHome } from "./templates/home.js";
import { showGalleries } from "./templates/galleries.js";
import { showAbout } from "./templates/about.js";
import { showContacts } from "./templates/contacts.js";
import { showLogin } from "./templates/login.js";
import {showRegister} from "./templates/register.js"





function start() {
  window.history.pushState(null, "", "/");
  
  
  page('/index.html', '/');
  page('/',() => renderPage(showHome));
  page('/galleries',() => renderPage(showGalleries));
  page('/about', () => renderPage(showAbout));
  page('/contacts',() => renderPage(showContacts));
  page('/login',() => renderPage(showLogin));
  page('/register',() => renderPage(showRegister));
  
  page();
};

function renderPage(pg) {

  const main = document.querySelector('main');
  render(pg(), main);

};


start();

