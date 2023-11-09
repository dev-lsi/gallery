import page from '../node_modules/page/page.mjs';
import {render, html} from '../node_modules/lit-html/lit-html.js';
import { projects } from '../pages/projects.js';
import { about } from '../pages/about.js';

function app(){

   const main=document.querySelector('main');
   main.innerHTML=`<h1>Hello from my SPA app</h1>`

   page('index.html','/');
   page('/',()=>html`<h2>Welcome to my site<h2>`);
   page('/projects',projects);
   page('/about',about);
   page('/register',()=>html`<h2>Register form here<h2>`);
   page('/login',()=>html`<h2>Login form here<h2>`);
   page('/logout',()=>html`<h2>Logout function here<h2>`);

   page();
}

app();