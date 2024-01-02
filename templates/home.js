import { html } from "../lib/lit-html/lit-html.js";

export async function home(ctx) {
    
    let currentUserName='';

    if(ctx.hasOwnProperty('user')){
        currentUserName = ctx.user.username;   
    }else{
        currentUserName ='Guest user';
    }

    const template = (ctx) => html`
        
        <div class = home-page-container>
            <h3>${currentUserName}</h3>
            <div>
            <h1>Welcome to Zori's Art Gallery!</h1>
            <p>Walk trought the galeries</p>
            <p> and find a lot of fine arts on canvas and paper.</p>
            <p>A lot of oil and watercolor paintings.</p>
            <p>Also you will see my charcoal art and a lot of other drawings!</p>
            </div>

            <section class="grey">
                
                <div class = "image-div"><img src = "../assets/charcoal03.jpg" alt="charcoal03.jpg"/></div>
                <div class = "image-div"><img src = "../assets/charcoal01.jpg" alt="charcoal01.jpg"/></div>
                <div class = "image-div"><img src = "../assets/charcoal02.jpg" alt="charcoal02.jpg"/></div>
                <div class = "image-div"><img src = "../assets/charcoal03.jpg" alt="charcoal03.jpg"/></div>
                <div class = "image-div"><img src = "../assets/charcoal04.jpg" alt="charcoal04.jpg"/></div>
                <div class = "image-div"><img src = "../assets/charcoal05.jpg" alt="charcoal05.jpg"/></div>
               
                <div class = "image-div"><img src = "../assets/paint-icon.png" alt="tools.png"/></div>
            </section>

            <a href="/gallery">All Paintings</a>

            

            <div class = "link-section">
                <a href="/galleries/oil">Oil and Water color</a>
                <div><img src = "../assets/sunflowers.jpg" alt="sunflowers.jpg"/></div>
                <div><img src = "../assets/waterfall.jpg" alt="waterfall.jpg"/></div>
                <div><img src = "../assets/coastal.jpg" alt="coastal.jpg"/></div>
            </div>

            <div class = "link-section">
                <a href="/galleries/oil">Charcoal</a>
                <div><img src = "../assets/cc01.jpg" alt="cc.jpg"/></div>
                <div><img src = "../assets/cc02.jpg" alt="cc.jpg"/></div>
                <div><img src = "../assets/cc03.jpg" alt="cc.jpg"/></div>
            </div>

            <div class = "link-section">
                <a href="/galleries/scratches">Scratches</a>
                <div><img src = "../assets/yellow.jpg" alt="sunflowers.jpg"/></div>
                <div><img src = "../assets/images.jpg" alt="charcoal01.jpg"/></div>
                <div><img src = "../assets/drawings01.jpg" alt="drawingso1.jpg"/></div>
            </div>


        </div>

    `;
   console.log(ctx.container)
    ctx.renderTemplate(template(ctx), ctx.container);

    
};


