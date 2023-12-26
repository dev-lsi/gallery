import { home } from "./home.js";

export function logout(ctx){
  ctx.user=null;
  window.localStorage.removeItem('user');
  const anchor = document.querySelector('#login-logout');
  anchor.href = '/login';
  anchor.textContent = 'Login';
  home(ctx);
}