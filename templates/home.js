import { html } from "../lib/lit-html/lit-html.js";
import { showNotification } from "../util/notifications.js";

export function home(ctx) {
    
    
    if( ctx.hasOwnProperty('user')){

        const templateLogged = (ctx) => html`<h1>Home Page</h1><p>Welcome ${ctx.user.username} !</p>`;
        ctx.renderTemplate(templateLogged(ctx),ctx.container);

    }else{

        
        const templateUnlogged = (x) => html`<h1>Home Page</h1><p>Welcome Guest!</p>`;
        ctx.renderTemplate(templateUnlogged(ctx),ctx.container);
    }
    
};


