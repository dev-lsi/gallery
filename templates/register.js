import { html } from "../lib/lit-html/lit-html.js";
//import { getFormData } from "../util/getFormData.js";
import {registerUser} from "../api/registerUser.js";

export async function register(ctx) {

    const template = () => html`

        <h2>Register Page</h2>

        <section class = form-text-section>

            <h4>On login you will be able to:</h4>
            <ul class="login-register-ul">
                <li>Comment my paintings</li>
                <li>Read the others coments</li>
                <li>Rate on the articles</li>
                <li>Receive emails abut new stuff</li>
            </ul>

        </section>
       
        <form @submit = ${(e) => registerUser(e,ctx) } id="login-form" action="submit">

            <h5>please register:</h5>

            <div class="row"><label for="email">email:</label><input id="email" name="email" type="email" placeholder="email..."></div>

            <div class="row"><label for="password">password:</label><input id="password" name="password" type="password" placeholder="password..."></div>

            <div class="row"><label for="password">repass:</label><input id="repassword" name="repassword" type="password" placeholder="repeat password..."></div>

            <input class="submit-btn" type="submit" value="register">

        </form>
    `;

    ctx.renderTemplate(template(), ctx.container);

    

    
}











