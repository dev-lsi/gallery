import { html, render } from "./lib/lit-html/lit-html.js";
import page from "./lib/page/page.mjs";

const main = document.querySelector('main');

function start() {

    page('/index.html', '/');
    page('/',()=>showHome());
    page('/galleries',()=>showGalleries());
    page('/about',()=>showAbout());
    page('/contacts',()=>showContact());
    page('*','/');
    page();
}

function showHome(){
  const template = ()=> html`<h1>Home Page</h1><p>Welcome: </p><p>Username</p>`;
  render(template(),main);
}
function showGalleries(){
    const template = ()=> html`<h1>Galleries Page</h1><ul><li>Gal 1</li><li>Gal 2</li><li>Gal 3</li></ul>`;
    render(template(),main);
  }
  function showAbout(){
    const template = ()=> html`<h1>About Page</h1><p>Personal Info:</p>`; 
    render(template(),main);
  }
  function showContact(){
    const template = ()=> html`<h1>Contact Page</h1><p>Contacts:</p><p>email:person@ash.com:</p>`;
    render(template(),main);
  }

start();