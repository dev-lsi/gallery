import { render } from "../lib/lit-html/lit-html.js";

export function decorateCTX(ctx, next) {

  // choosing main element to render in
  const main = document.querySelector('main');
  ctx.container = main;

  // adding render in ctx
  ctx.renderTemplate = render;

  // read localStorage
  const anchor=document.querySelector('#login-logout');
  const userString = window.localStorage.getItem('user');

  // Checking if the user exists in localStorage
  if (userString !== null) {
    const userObj = JSON.parse(userString);
    ctx.user = userObj;
  }else{
    anchor.href = '/login';
    anchor.textContent = 'Login';
  }

  next();

}
