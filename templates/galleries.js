import { html} from "../lib/lit-html/lit-html.js";

export async function galleries(ctx) {

    const template =(x)=> html`<h1>Galleries</h1>`;
    ctx.renderTemplate(template(ctx),ctx.container);

};
