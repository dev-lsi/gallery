import { html, render } from "../lib/lit-html/lit-html.js";

export function showContacts() {

    const template = ()=> html`<h1>Contact Page</h1><p>Contacts:</p><p>email:person@ash.com:</p>`;
    return template();

};