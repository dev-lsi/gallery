import { render } from "../lib/lit-html/lit-html.js";

export function decorateCTX(ctx, next) {

  // choosing main element to render in
  const main = document.querySelector('main');
  ctx.container = main;

  // adding render in ctx
  ctx.renderTemplate = render;

  

  next();
}
