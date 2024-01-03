import { loadPictures } from "../api/loadPictures.js";
import { html } from "../lib/lit-html/lit-html.js";

export async function gallery(ctx) {

    
    let option='';
    const select = document.querySelector('#select');

   if(select){
    option = select.value;
   }
    
    const data = await loadPictures(option);

    const pictures = data.results;

    const imgSrc = pictures.map((r) => r.imgFile.url);


    const imgCard = (p) => html`
        <div class="image-card">
            <img class="category-icon" src=${"../assets/" + p.paintType + "-icon.png"}/>
            <h4 class="image-name">${p.imageName}</h4>
            <div class="image-card-image-container">
                <img class="image-card-image" src="${p.imgFile.url}">
            </div>
            <div class="image-captions">
                <p class="base"><span>base</span>:${p.sheetMaterial}</p>
                <p class="paint"><span>paint</span>:${p.paintType}</p>
            </div>
            <div class="image-card-image-description">
                <p>${p.imageDescription}</p>
            </div>
        </div>
    `;



    const imageCardTemplates = pictures.map((p) => imgCard(p));

    const template = (imageCardTemplates) => html`
    <div class="gallery-page-container">
        
        <label>Select by paint type:
        <select id = "select" @click=${(e)=>handleOption(e)}>
            <option value="">All</option>
            <option value="oil">Oil</option>
            <option value="watercolor">Watercolor</option>
            <option value="acrylic">Acrylic</option>
            <option value="pastels">Pastels</option>
            <option value="charcoal">Charcoal</option>
            <option value="ink">Ink</option>
        </select>
        </label>
        

        ${imageCardTemplates}

    </div>
    `;
    
    ctx.renderTemplate(template(imageCardTemplates), ctx.container);
    
    function handleOption(e){

        console.log(e.target.value)

        if(e.target.value== "OPTION"){

            const option = e.target.value;
            console.log(option)
            const queryString=`${"?paintType=" + option}`;
            gallery(ctx)

        }
       
    }
}