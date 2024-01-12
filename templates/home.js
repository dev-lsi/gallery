import { html } from "../lib/lit-html/lit-html.js";

export async function home(ctx) {

    let currentUserName = '';

    if (ctx.hasOwnProperty('user')) {

        currentUserName = ctx.user.username;

    } else {

        currentUserName = 'Guest user';
        
    }

    const template = (ctx) => html`
        
        <h3 class='current-user'>${currentUserName}</h3>

        <a class="home-page-link" href="/gallery">All Paintings</a>
            
        <a class="home-page-link" href="/galleries/oil">Oil and Water color</a>
        <div class = "link-section">
            <div><img src = "../assets/sunflowers.jpg" alt="sunflowers.jpg"/></div>
            <div><img src = "../assets/waterfall.jpg" alt="waterfall.jpg"/></div>
            <div><img src = "../assets/coastal.jpg" alt="coastal.jpg"/></div>
        </div>
                
        <a class="home-page-link" href="/galleries/oil">Charcoal</a>
        <div class = "link-section">
            <div><img src = "../assets/cc01.jpg" alt="cc.jpg"/></div>
            <div><img src = "../assets/cc02.jpg" alt="cc.jpg"/></div>
            <div><img src = "../assets/cc03.jpg" alt="cc.jpg"/></div>
        </div>

        <a class="home-page-link" href="/galleries/scratches">Scratches</a>
        <div class = "link-section">
            <div><img src = "../assets/yellow.jpg" alt="sunflowers.jpg"/></div>
            <div><img src = "../assets/images.jpg" alt="charcoal01.jpg"/></div>
            <div><img src = "../assets/drawings01.jpg" alt="drawingso1.jpg"/></div>
        </div>

    `;

    ctx.scrollToTop();
    ctx.renderTemplate(template(ctx));
};


