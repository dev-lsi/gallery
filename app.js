
import page from "./lib/page/page.mjs";
import { decorateCTX } from "./middleware/decorateCTX.js";

import { home } from "./templates/home.js";
import { galleries } from "./templates/galleries.js";
import { about } from "./templates/about.js";
import { contacts } from "./templates/contacts.js";
import { register } from "./templates/register.js"
import { login } from "./templates/login.js";
import { logout } from "./templates/logout.js";

document.addEventListener('DOMContentLoaded', start);


function start() {
  page('*', decorateCTX);
  page('/', 'index.html');
  page('/index.html', home);
  page('/galleries', galleries);
  page('/about', about);
  page('/contacts', contacts);
  page('/register',register);
  page('/login', login);
  page('/logout',logout)

  //page('logout',logout);
  page();
};