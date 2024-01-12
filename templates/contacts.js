import { html } from "../lib/lit-html/lit-html.js";

export function contacts(ctx) {

    const template = () => html`
        <h1>Contact Page</h1>
        <p>Contacts:</p>
        <p>email:person@ash.com:</p>
    `;

    ctx.scrollToTop();
    ctx.renderTemplate(template(), ctx.container);
};