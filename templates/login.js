import { loginUser } from "../api/loginUser.js";
import { html } from "../lib/lit-html/lit-html.js";


export function login(ctx) {

    const template = () => html`
     
         <h4 class='h4'>On login you will be able to:</h4>
         <ul class="text-ul">
             <li>Comment my paintings</li>
             <li>Read the others coments</li>
             <li>Rate on the articles</li>
             <li>Take emails on new stuff</li>
         </ul>
    
    
         <form class @submit=${(e) => loginUser(e,ctx)} id="login-form" action="submit">
        
             <h4>Please add email and password</h4>
    
             <label for="email">Email</label><input id="email" name="email" type="email"      placeholder="email...">
             <label for="password">Password</label><input id="password" name="password"      type="password" placeholder="password...">
    
             <input class="submit-btn" type="submit" value="Login">

             <a class="submit-btn" href="/index.html">Forgotten password?</a>
             <a class="submit-btn" href="/register"> Not Registered? Click here!</a>

         </form>
     `;
    
    ctx.scrollToTop();
    ctx.renderTemplate(template(), ctx.container);
    
};







