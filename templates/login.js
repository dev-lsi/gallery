import { loginUser } from "../api/loginUser.js";
import { html } from "../lib/lit-html/lit-html.js";


export function login(ctx) {

    const template = () => html`
     <section class =form-text-section>
         <h4>On login you will be able to:</h4>
         <ul class="login-register-ul">
             <li>Comment my paintings</li>
             <li>Read the others coments</li>
             <li>Rate on the articles</li>
             <li>Take emails on new stuff</li>
         </ul>
     </section>
     <section class=form-text-section>
         <form @submit=${submitHandler} id="login-form" action="submit">
        
             <h6>please add email and password</h6>
    
             <div class="row"><label for="email">email:</label><input id="email" name="email" type="email"      placeholder="email..."></div>
             <div class="row"><label for="password">password:</label><input id="password" name="password"      type="password" placeholder="password..."></div>
    
             <input class="submit-btn" type="submit" value="login">

             <p>forgotten password?</p>

             <a href="/index.html">Click here!</a>
             <a href="/register"> Not Registered? Click here!</a>

         </form>
     </section>`;

    ctx.renderTemplate(template(), ctx.container);


    function submitHandler(e) {

        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);

        const username = formData.get('email');
        const password = formData.get('password');

        const userData = { username, password };
        loginUser(ctx, userData);
    }




};







