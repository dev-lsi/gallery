import { html, render } from "../lib/lit-html/lit-html.js";
import{onSubmit} from "../util.js";



const template = (onSubmit) => html`
    <form @submit=${onSubmit} id="login-form" action="submit">
        <h5>please add email and password</h5>
    
        <div class="row"><label for="email">email:</label><input id="email" name="email" type="email" placeholder="email..."></div>
        <div class="row"><label for="password">password:</label><input id="password" name="password" type="password" placeholder="password..."></div>
    
        <input class="submit-btn" type="submit" value="login">

        <p>forgotten password?</p>

        <a href="/index.html">Click here!</a><section>

    </form>`;
    


export function showLogin() {

    return(template(onSubmit));

};







