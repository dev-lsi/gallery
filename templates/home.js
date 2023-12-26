import { html } from "../lib/lit-html/lit-html.js";
import page from "../lib/page/page.mjs";

export function home(ctx) {

    let currentUserName='guest';

    if(ctx.user){

        currentUserName = ctx.user.username;
    }

    const template=(ctx) => html`<h1>Home Page</h1><p>Welcome ${currentUserName}!</p>`;


    ctx.renderTemplate(template(ctx),ctx.container);
    
};


