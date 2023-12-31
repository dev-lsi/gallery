import { loadPictures } from "../api/loadPictures.js";
import { html } from "../lib/lit-html/lit-html.js";

export async function gall(ctx) {

    const data = await loadPictures();
    
    const pictures = data.results;

    const imgSrc = pictures.map((r) => r.imgFile.url);
    

    const imgCard = (p) => html`
        <div class="image-card">
            <div class="image-card-image-container">
                <img class="image-card-image" src="${p.imgFile.url}">
            </div>
            <div class="image-card-text-container">
                <h3 class="image-card-image-name">${p.imageName}</h3>
                <p class="image-card-image-base">base:${p.sheetMaterial}</p>
                <p class="image-card-image-paint">paint:${p.paintType}</p>
                <div class="image-card-image-description">${p.imageDescription}</div>
            </div>
        </div>
    `;
    
    const imageCardTemplates = pictures.map((p) => imgCard(p));

    const template = (imageCardTemplates) => html`${imageCardTemplates}`;

    ctx.renderTemplate(template(imageCardTemplates), ctx.container);
}

    

