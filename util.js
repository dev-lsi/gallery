

export async function onSubmit(event) {

    const form = event.target;
    event.preventDefault();

    const formData = new FormData(form);

        const email= formData.get('email');
        const password = formData.get('password');
        const repass = formData.get('repass');
    
    if( (password === repass) && (password !== '' && repass != '' ) ) {
        
        const data = {email,password};
    
        form.reset();
        
        const response = await makeRequest(data);
        console.log(Object.keys(response));
    }else{

        alert('passwords must be equal!');

    }

    
    
};

async function makeRequest(data){
    console.log(`data= ${'E: ' + email + ' ' + 'P: ' + password}`)
    const response = await fetch('https://swapi.dev/api/people/100/');
    if(response.ok==true){

        return await response.json();
       
    }else{

        alert('ALERT!');
    }
}

export async function loadHeroes(){

    const response = await fetch('https://swapi.dev/api/people/1');
    return await response.json();

    
}