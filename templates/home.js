import { html } from "../lib/lit-html/lit-html.js";
import { showNotification } from "../util/notifications.js";
import { autoScroll } from "../middleware/autoScroll.js";
import { loadPictures } from "../api/loadPictures.js";

export async function home(ctx) {

    const template = (ctx) => html`

        <div class = home-page-container>
            <h4>Welcome ${ctx.user.username}</h4>
            <div>
            <p>Walk trought the galeries</p>
            <p> and find a lot of fine arts on canvas and paper</p>
            <p>A lot of oil and watercolor paintings</p>
            <p>Also you will see my charcoal art and a lot of other drawings!</p>
            </div>

            <section class="grey">
                
                <div class = "image-div"><img src = "../assets/charcoal03.jpg" alt="charcoal03.jpg"/></div>
                <div class = "image-div"><img src = "../assets/charcoal01.jpg" alt="charcoal01.jpg"/></div>
                <div class = "image-div"><img src = "../assets/charcoal02.jpg" alt="charcoal02.jpg"/></div>
                <div class = "image-div"><img src = "../assets/charcoal03.jpg" alt="charcoal03.jpg"/></div>
                <div class = "image-div"><img src = "../assets/charcoal04.jpg" alt="charcoal04.jpg"/></div>
                <div class = "image-div"><img src = "../assets/charcoal05.jpg" alt="charcoal05.jpg"/></div>
                <div class = "image-div"><img src = "../assets/paint-tools01.png" alt="tools.png"/></div>
            </section>

            <a href="/galleries">All Galleries</a>

            <section class>
                <div class="image-card"><img src = "../assets/sunflowers.jpg" alt="sunflowers.jpg"/></div>
                <div class="image-card"><img src = "../assets/charcoal01.jpg" alt="charcoal01.jpg"/></div>
                <div class="image-card"><img src = "../assets/drawings01.jpg" alt="drawingso1.jpg"/></div>
            </section>

            <a href="/galleries/oil">Oil & Water-color Paintings</a>
            <a href="/galleries">Charcoal</a>
            <a href="/galleries">Drawings</a>

        </div>

    `;

    ctx.renderTemplate(template(ctx), ctx.container);

    //autoScroll();
};


