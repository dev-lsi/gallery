import { decorateCTX } from "../middleware/decorateCTX.js";
import { home } from "../templates/home.js";
import page from "../lib/page/page.mjs";

export async function loginUser(ctx, userData) {

    try {
        const params =`username=${userData.username}&password=${userData.password}`;
        const response = await fetch(`https://parseapi.back4app.com/login/?`+ params, {
            method: 'get',
            headers: {
                'X-Parse-Application-Id': 'YtKzBrKzmB3AKqenaoCxQ2u847ZCjfZAV1BnOazl',
                'X-Parse-REST-API-Key': 'B411EQU4y8rtVlizYXz7ub8UDYPvRcXoWIAymeJv',
                'X-Parse-Revocable-Session': 1,
            }
        });

        if (response.status == 200) {

            const responseData = await response.json();

            const user={};

            user.name = userData.username;
            console.log(user.name);

            user.sessionToken = responseData.sessionToken;
            console.log(user.sessionToken);

            user.userId = responseData.objectId;
            console.log(user.userId);

            localStorage.setItem('user',JSON.stringify(user));
            ctx.user=user;

            const anchor = document.querySelector('#login-logout');
            anchor.href = '/logout';
            anchor.textContent = 'Logout';
            
            page.redirect('/index.html');
        } else {
            alert('Login failed! Try again!');
        }
    } catch (error) {

        throw new Error("Login failed",error);

    }
}