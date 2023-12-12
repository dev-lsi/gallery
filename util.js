

export function onSubmit(event) {

    const form = event.target;
    event.preventDefault();

    const formData = new FormData(form);
    
    const email= formData.get('email');
    const password = formData.get('password');
    const data = {email,password};

    form.reset();
};