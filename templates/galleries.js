import { html} from "../lib/lit-html/lit-html.js";

export async function galleries(ctx) {

    const template =(x)=> html`<h1>Galleries</h1>
    <div class="test-div">1</div>
    <div class="test-div">1</div>
    <div class="test-div">1</div>
    <div class="test-div">1</div>
    <div class="test-div">1</div>
    `;
    ctx.renderTemplate(template(ctx),ctx.container);

};
