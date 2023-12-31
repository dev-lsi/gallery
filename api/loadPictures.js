export async function loadPictures(){

        console.log('loadPictures called');

        const response = await fetch(`https://parseapi.back4app.com/classes/Picture`,{
            method: 'get',
            headers: {
                'X-Parse-Application-Id': 'YtKzBrKzmB3AKqenaoCxQ2u847ZCjfZAV1BnOazl',
                'X-Parse-REST-API-Key': 'B411EQU4y8rtVlizYXz7ub8UDYPvRcXoWIAymeJv',
            }
        });

        const data = await response.json();
        
        return data;
}