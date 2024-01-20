export async function loadPictures(options){
        

        const response = await fetch(`https://parseapi.back4app.com/classes/Picture`+options,{
            method: 'get',
            headers: {
                'X-Parse-Application-Id': 'YtKzBrKzmB3AKqenaoCxQ2u847ZCjfZAV1BnOazl',
                'X-Parse-REST-API-Key': 'B411EQU4y8rtVlizYXz7ub8UDYPvRcXoWIAymeJv',
            }
        });

        const data = await response.json();
        
        return data;
}

//https://parseapi.back4app.com/classes/Paint?where={"paintType":"oil"}';