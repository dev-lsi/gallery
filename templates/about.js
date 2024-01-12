import { html } from "../lib/lit-html/lit-html.js";

export function about(ctx) {

    const template = () => html`
        <h1>About Page</h1>
        <p>Personal Info:</p>
    `;

    ctx.scrollToTop();
    ctx.renderTemplate(template(), ctx.container);
};