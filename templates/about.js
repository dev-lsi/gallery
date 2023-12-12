import { html, render } from "../lib/lit-html/lit-html.js";

export function showAbout() {

    const template = () => html`<h1>About Page</h1><p>Personal Info:</p>`;
    return template();

};