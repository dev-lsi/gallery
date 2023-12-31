import { render } from "../lib/lit-html/lit-html.js";

export function autoScroll() {

   setTimeout(function (){
    const el = document.querySelector('h1');

         el.scrollIntoView({ behavior: 'smooth' });

   },5000)
  
    
  
    
  

}
