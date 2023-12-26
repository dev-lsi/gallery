import { decorateCTX } from "../middleware/decorateCTX.js";
import { home } from "../templates/home.js";

export async function registerUser(ctx, userData) {
    try {
        const response = await fetch(`https://parseapi.back4app.com/users`, {
            method: 'post',
            headers: {
                'X-Parse-Application-Id': 'YtKzBrKzmB3AKqenaoCxQ2u847ZCjfZAV1BnOazl',
                'X-Parse-REST-API-Key': 'B411EQU4y8rtVlizYXz7ub8UDYPvRcXoWIAymeJv',
                'X-Parse-Revocable-Session': 1,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(userData)
        });

        if (response.status == 201) {
            
            alert('Registration sucsessful!')
            const responseData=await response.json();
            console.log(responseData);

            const anchor = document.querySelector('#login-logout');
            anchor.href = '/login';
            anchor.textContent = 'Login';

            home(ctx);

        } else {

            alert('Registration failed! Try again later!');

        }
    } catch (error) {

        throw new Error("Register failed",error);

    }
}