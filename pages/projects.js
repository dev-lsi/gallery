
import { render,html } from "../node_modules/lit-html/lit-html.js";

export function projects(){
    
    const main=document.querySelector('main');

    const projectsTemplate = () => html`<h2>See my Projects<h2>`;

    render(projectsTemplate(),main);

}