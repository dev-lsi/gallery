import { html } from "../lib/lit-html/lit-html.js";
//import { getFormData } from "../util/getFormData.js";
import {registerUser} from "../api/registerUser.js";

export async function register(ctx) {

    const template = () => html`

        

        <section class="column form-text-section">

            <h4>On Register you will be able to:</h4>
            <ul class="login-register-ul">
                <li><p>Comment my paintings</p></li>
                <li><p>Read the others coments</p></li>
                <li><p>Rate on the articles</p></li>
                <li><p>Receive emails abut new stuff</p></li>
            </ul>

        </section>
       
        <form class="column" @submit = ${(e) => registerUser(e,ctx) } id="login-form" action="submit">

            <h5>please register:</h5>

            <div class="row"><label for="email">email:</label><input id="email" name="email" type="email" placeholder="email..."></div>

            <div class="row"><label for="password">password:</label><input id="password" name="password" type="password" placeholder="password..."></div>

            <div class="row"><label for="password">repass:</label><input id="repassword" name="repassword" type="password" placeholder="repeat password..."></div>

            <input class="submit-btn" type="submit" value="register">

        </form>
    `;

    ctx.renderTemplate(template(), ctx.container);
    //autoScroll();
    
}











