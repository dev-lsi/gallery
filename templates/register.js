import { registerUser } from "../api/registerUser.js";
import { html } from "../lib/lit-html/lit-html.js";


export function register(ctx) {

    const template = (ctx) => html`
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
     
     <form @submit=${submitHandler} id="login-form" action="submit">
         <h5>please register:</h5>
         <div class="row"><label for="email">email:</label><input id="email" name="email" type="email" placeholder="email..."></div>
         <div class="row"><label for="password">password:</label><input id="password" name="password" type="password" placeholder="password..."></div>
         <div class="row"><label for="password">repass:</label><input id="repassword" name="repassword" type="password" placeholder="repeat password..."></div>
         <input class="submit-btn" type="submit" value="register">

     </form>`;

    ctx.renderTemplate(template(ctx), ctx.container);

    function submitHandler(e) {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);

        const username = formData.get('email');
        const password = formData.get('password');
        const repassword = formData.get('repassword');
        

        
        if ((password == repassword) && (password != '')) {
            const userData = {password, username};
            registerUser(ctx, userData);
        } else {
            alert('passwords must be equal!');
        }

    }
};











