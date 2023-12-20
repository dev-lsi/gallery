import { html, render } from "../lib/lit-html/lit-html.js";
import {loadHeroes} from "../util.js";


export async function showGalleries() {
    
    
    
    
    const template = (data) => `<p>${data['name']}</p>`;

    // const template = () => html`
    // <article class="galeries-article">
    //         <img src="../gal/02.jpg" alt="img">
    //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perferendis consectetur officiis veritatis. Dolorum, magni dolore. Temporibus iste, esse doloribus ab alias consectetur sed accusantium? Dolorum sit debitis maxime asperiores!</p>
    //     </article>
    //     <article class="galeries-article">
    //         <img src="../gal/picture01.jpg" alt="img">
    //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perferendis consectetur officiis veritatis. Dolorum, magni dolore. Temporibus iste, esse doloribus ab alias consectetur sed accusantium? Dolorum sit debitis maxime asperiores!</p>
    //     </article>
    //     <article class="galeries-article">
    //         <img src="../gal/picture03.jpg" alt="img">
    //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perferendis consectetur officiis veritatis. Dolorum, magni dolore. Temporibus iste, esse doloribus ab alias consectetur sed accusantium? Dolorum sit debitis maxime asperiores!</p>
    //     </article>`;

    return template(await loadHeroes());

};
