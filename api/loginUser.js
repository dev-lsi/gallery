import { getFormData } from "../util/getFormData.js";
import { home } from "../templates/home.js";
import page from "../lib/page/page.mjs";
import { decorateCTX } from "../middleware/decorateCTX.js";
import { showNotification } from "../util/notifications.js";

export async function loginUser(e, ctx) {
    
    const formData = getFormData(e);
    const user = {};
    user.username = formData.email;
    user.password = formData.password;


    try {
        const params =`username=${user.username}&password=${user.password}`;
        const response = await fetch(`https://parseapi.back4app.com/login/?` + params, {
            method: 'get',
            headers: {
                'X-Parse-Application-Id': 'YtKzBrKzmB3AKqenaoCxQ2u847ZCjfZAV1BnOazl',
                'X-Parse-REST-API-Key': 'B411EQU4y8rtVlizYXz7ub8UDYPvRcXoWIAymeJv',
                'X-Parse-Revocable-Session': 1,
            }
        });

        if (response.status == 200) {

            const responseData = await response.json();

            user.sessionToken = responseData.sessionToken;
            user.userId = responseData.objectId;
            localStorage.setItem('user',JSON.stringify(user));
            ctx.user = {...user};

            showNotification(`Logged user ctx data:${ctx.user.username}\n${ctx.user.password}\n${ctx.user.sessionToken}\n${ctx.user.userId}`, 3000);

            const anchor = document.querySelector('#login-logout');
            anchor.href = '/logout';
            anchor.textContent = 'Logout';
            
            page.show('/index.html');
            

        } else {

            showNotification('Login failed! Try again later!',3000);

        }
    } catch (error) {

        throw new Error("Login failed",error);

    }
}