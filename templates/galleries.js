import { html} from "../lib/lit-html/lit-html.js";
import { autoScroll } from "../middleware/autoScroll.js";

export async function galleries(ctx) {

    const template =(x)=> html`<h1>Galleries</h1>
    <div >1</div>
    <div >1</div>
    <div >1</div>
    <div >1</div>
    <div >1</div>
    `;
    ctx.renderTemplate(template(ctx),ctx.container);
    
    //autoScroll();
};
