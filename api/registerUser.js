import { getFormData } from "../util/getFormData.js";
import page from "../lib/page/page.mjs";
import { showNotification } from "../util/notifications.js";


export async function registerUser(e, ctx) {
    
    const formData = getFormData(e);
    const user = {};
    user.username = formData.email;
    user.email = formData.email;
    user.password = formData.password;

    if (formData.password != formData.repassword) {

        alert(`Passwords must be equal!\nType passwords again!`);
        return;

    }

    try {
        const response = await fetch(`https://parseapi.back4app.com/users`, {
            method: 'post',
            headers: {
                'X-Parse-Application-Id': 'YtKzBrKzmB3AKqenaoCxQ2u847ZCjfZAV1BnOazl',
                'X-Parse-REST-API-Key': 'B411EQU4y8rtVlizYXz7ub8UDYPvRcXoWIAymeJv',
                'X-Parse-Revocable-Session': 1,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.status == 201) {

            const responseData = await response.json();

            showNotification(`Registration sucsessful!\n ${Object.keys(responseData).map(k => "\n" + k + ": " + responseData[k])}`, 3000);
            
            const anchor = document.querySelector('#login-logout');
            anchor.href = '/login';
            anchor.textContent = 'Login';
            
            page.show('/index.html');
            
        } else {

            showNotification('Registration failed!\nTry again later!', 3000);
        }
    } catch (error) {

        throw new Error("Register failed", error);

    }
};
