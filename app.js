
import page from "./lib/page/page.mjs";
import { render} from "./lib/lit-html/lit-html.js";



import { home } from "./templates/home.js";
import { gallery } from "./templates/gallery.js";
import { about } from "./templates/about.js";
import { contacts } from "./templates/contacts.js";
import { register } from "./templates/register.js"
import { login } from "./templates/login.js";
import { logout } from "./templates/logout.js";


document.addEventListener('DOMContentLoaded', start);


//page(decorateCTX);
function start() {
   
  const ctx = {
    container: document.querySelector('main'),
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
  page('/gallery', () => gallery(ctx));
  page('/about', () => about(ctx));
  page('/contacts', () => contacts(ctx));
  page('/register', () => register(ctx));
  page('/login', () => login(ctx));
  page('/logout', () => logout(ctx));
 
  page.start();
};