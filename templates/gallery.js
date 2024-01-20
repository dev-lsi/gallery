import { loadPictures } from "../api/loadPictures.js";
import { html } from "../lib/lit-html/lit-html.js";

export async function gallery(ctx) {

    
    const data = await loadPictures('');

    const pictures = data.results;

    const imgSrc = pictures.map((r) => r.imgFile.url);


    const imgCard = (p) => html`
        <div class="image-card">
            <p class="image-name">Paint Name: <span class="image-name-span>">${p.imageName}</span></p>
            <div class="image-card-image-container">
                <img class="image-card-image" src="${p.imgFile.url}">
            </div>
            <div class="image-captions">
                <img class="category-icon" src=${"../assets/" + p.paintType + "-icon.png"}/>
                <p class="base"><span>base:</span> ${p.sheetMaterial}</p>
                <p class="paint"> <span>paint:</span> ${p.paintType}</p>
                <button @click=${()=>showFullScreen(p.imgFile.url)}>Show fullscreen</button>
            </div>
        </div>
    `;

   function showFullScreen(imgUrl,){
      const imageTemplate=html`<img class="fulscreenImg" src=${imgUrl}>`
      ctx.renderTemplate(template(imageTemplate));
   }

    const imageCardTemplates = pictures.map((p) => imgCard(p));

    const template = (imageCardTemplates) => html`
    <div class="gallery-container">
        <label class=select label>Select by paint type:</label>
        <select id = "select" @click=${(e)=>handleOption(e)}>
            <option value="">All</option>
            <option value="oil">Oil</option>
            <option value="watercolor">Watercolor</option>
            <option value="acrylic">Acrylic</option>
            <option value="pastel">Pastels</option>
            <option value="charcoal">Charcoal</option>
            <option value="ink">Ink</option>
        </select>

        ${imageCardTemplates}

    </div>
    `;
    

    ctx.scrollToTop();
    ctx.renderTemplate(template(imageCardTemplates));
    
    async function handleOption(e){
            
            const option = e.target.value;
            const queryString=`?where={"paintType":"${option}"}`;
            let data;
            if(option==''){
                data = await loadPictures('');
            }else{
                data = await loadPictures(queryString);
            }
            
            const pictures = data.results;
            const imgSrc = pictures.map((r) => r.imgFile.url);
           
            const imageCardTemplates = pictures.map((p) => imgCard(p));

            ctx.scrollToTop();
            ctx.renderTemplate(template(imageCardTemplates));
    

        
       
    }
}