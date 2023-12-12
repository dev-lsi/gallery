import { html, render } from "../lib/lit-html/lit-html.js";
import{onSubmit} from "../util.js";



const template = (onSubmit) => html`
    <form @submit=${onSubmit} id="login-form" action="submit">
        <h5>please add email and password</h5>
    
        <div class="row"><label for="email">email:</label><input id="email" name="email" type="email" placeholder="email..."></div>
        <div class="row"><label for="password">password:</label><input id="password" name="password" type="password" placeholder="password..."></div>
        <div class="row"><label for="password">repass:</label><input id="repas" name="repass" type="password" placeholder="repeat password..."></div>
    
        <input class="submit-btn" type="submit" value="register">

    </form>`;
    


export function showRegister() {

    return(template(onSubmit));

};







