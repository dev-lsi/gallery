import { html, render } from "../lib/lit-html/lit-html.js";
import { onSubmit } from "../util.js";




const template = (onSubmit) => html`
    <section class=form-text-section>
        <h4>On login you will be able to:</h4>
        <ul class="login-register-ul">
            <li>Comment my paintings</li>
            <li>Read the others coments</li>
            <li>Rate on the articles</li>
            <li>Take emails on new stuff</li>
        </ul>
    </section>
    <section class=form-text-section>
        <form @submit=${onSubmit} id="login-form" action="submit">
        
            <h6>please add email and password</h6>
    
            <div class="row"><label for="email">email:</label><input id="email" name="email" type="email"      placeholder="email..."></div>
            <div class="row"><label for="password">password:</label><input id="password" name="password"      type="password" placeholder="password..."></div>
    
            <input class="submit-btn" type="submit" value="login">

            <p>forgotten password?</p>

            <a href="/index.html">Click here!</a><section>

        </form>
    </section>`;



export function showLogin() {

    return (template(onSubmit));

};







