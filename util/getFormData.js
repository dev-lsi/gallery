export function getFormData(e) {

    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data={};
    for(let entry of formData){
        
        data[entry[0]]=entry[1];
    }
   
    return data;
}