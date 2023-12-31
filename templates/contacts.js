import { html} from "../lib/lit-html/lit-html.js";
import { autoScroll } from "../middleware/autoScroll.js";

export function contacts(ctx) {

    const template =()=> html`<h1>Contact Page</h1><p>Contacts:</p><p>email:person@ash.com:</p>`;
    ctx.renderTemplate(template(),ctx.container);
    //autoScroll();
};