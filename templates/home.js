import { html, render } from "../lib/lit-html/lit-html.js";

export function showHome() {

    const template = () => html`<h1>Home Page</h1><p>Welcome: </p><p>Username</p>`;
    return template();

};


