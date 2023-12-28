import { home } from "./home.js";
import page from "../lib/page/page.mjs";
import { showNotification } from "../util/notifications.js";

export function logout(ctx){
  let message='';
  if(ctx.user!=null){
    message =`${ctx.user.username}: logged out!`;
  }

  delete ctx.user;
  window.localStorage.removeItem('user');

  const anchor = document.querySelector('#login-logout');
  anchor.href = '/login';
  anchor.textContent = 'Login';

  showNotification(message,4000);
  
  
  page.show('/index.html');
}