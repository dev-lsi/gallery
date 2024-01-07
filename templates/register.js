import { html } from "../lib/lit-html/lit-html.js";
//import { getFormData } from "../util/getFormData.js";
import { registerUser } from "../api/registerUser.js";

export async function register(ctx) {

    const template = () => html`

            <h4 class='h4'>On Register you will be able to:</h4>
            <ul class="text-ul">
             <li>Comment my paintings</li>
             <li>Read the others coments</li>
             <li>Rate on the articles</li>
             <li>Take emails on new stuff</li>
         </ul>
            
            <form  @submit = ${(e) => registerUser(e, ctx)} id="login-form" action="submit">

                <h4>Please register:</h4>

                <label for="email">Add Email</label><input id="email" name="email" type="email" placeholder="email...">

                <label for="password">Add Password</label><input id="password" name="password" type="password" placeholder="password...">

                <label for="password">Repeat Password</label><input id="repassword" name="repassword" type="password" placeholder="repeat password...">

                <input class="submit-btn" type="submit" value="Register">

            </form>
    `;

    ctx.renderTemplate(template(), ctx.container);
    //autoScroll();

}











