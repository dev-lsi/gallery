const heroCenterLastParagraph = document.querySelector(".hero-center").lastElementChild;
console.log(heroCenterLastParagraph);
heroCenterLastParagraph.addEventListener('mouseover', heroLastOnClick);

function heroLastOnClick(e){
    const el = e.target;
    let col = el.style.color;
    col === 'red'? el.style.color = 'blue': el.style.color='red';
}

const liArr = Array.from((document.querySelector("header ul")).children);
for(let li of liArr) {
    
    li.addEventListener('click',onClickRotate);
    
};
function onClickRotate(e){
    const el = e.target;
    console.log(el);
    (e.target).style.transform = "rotate(12deg)";
}