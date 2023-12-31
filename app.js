
import page from "./lib/page/page.mjs";
import { render, html } from "./lib/lit-html/lit-html.js";

import { autoScroll } from "./middleware/autoScroll.js";

import { home } from "./templates/home.js";
import { galleries } from "./templates/galleries.js";
import { about } from "./templates/about.js";
import { contacts } from "./templates/contacts.js";
import { register } from "./templates/register.js"
import { login } from "./templates/login.js";
import { logout } from "./templates/logout.js";
import {gall} from "./templates/gall.js";



document.addEventListener('DOMContentLoaded', start);


//page(decorateCTX);
function start() {
   
  // const el = document.querySelector('.banner-image');
  //   el.scrollIntoView({ behavior: 'smooth' });


  const ctx = {
    container: document.querySelector('#page-container'),
    renderTemplate: render
  }

  function getClientSavedData() {

    if (window.localStorage.getItem('user') != null) {

      ctx.user = JSON.parse(window.localStorage.getItem('user'));

      const anchor = document.querySelector('#login-logout');
      anchor.href = '/logout';
      anchor.textContent = 'Logout';

    }

  }
  getClientSavedData();
  home(ctx);
  
  
  
  page('/','/index.html');
  page('/index.html', () => home(ctx));
  page('/galleries', () => galleries(ctx));
  page('/about', () => about(ctx));
  page('/contacts', () => contacts(ctx));
  page('/register', () => register(ctx));
  page('/login', () => login(ctx));
  page('/logout', () => logout(ctx));
  page('/gall',()=> gall(ctx));
  page.start();
};