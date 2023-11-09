import { render, html } from "../node_modules/lit-html/lit-html.js";

export function about() {
   
    const main=document.querySelector('main');
    const aboutTemplate = () => html`<h2>More about me<h2>`;

    render(aboutTemplate(),main);
}