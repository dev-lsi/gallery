import { html, render } from "../lib/lit-html/lit-html.js";

export function showGalleries() {

    const template = () => html`<h1>Galleries Page</h1><ul><li>Gal 1</li><li>Gal 2</li><li>Gal 3</li></ul>`;
    return template();

};
