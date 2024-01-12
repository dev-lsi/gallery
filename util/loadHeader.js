
export function loadHeader() {
    let isMenuShowed = true;

    const menuButton = document.querySelector('.menu-button');
    const header = document.querySelector('header');
    const nav = document.querySelector('.main-nav');
    const ul = document.querySelector('.main-nav ul');
    
    


    const lis = Array.from(document.querySelectorAll('.main-nav ul li'));
    const liHeight = lis[0].clientHeight;
    document.documentElement.style.setProperty('--li-height', liHeight);

    const as = Array.from(document.querySelectorAll('.main-nav ul li a'));
    const aHeight = as[0].clientHeight;

    document.documentElement.style.setProperty('--a-height', aHeight);
    //menuButton.addEventListener('click', handleMenu);
    document.addEventListener('click', handleMenu);

    
    
   
    hideMenu();

    function handleMenu(e) {
        
        if (isMenuShowed==true) {
            hideMenu(e);
        }else if(e.target.id == 'menu-button') {
            showMenu(e);
        }
    };

    function hideMenu() {

        console.log("Hide Menu Started");

        lis.forEach(li => li.classList.add('rotateHide'));
        as.forEach(a => a.classList.add('rotateHide'));

        lis.forEach(li => li.classList.remove('rotateShow'));
        as.forEach(a => a.classList.remove('rotateShow'));

        lis.forEach(li => shrink(li));
        as.forEach(a => shrink(a));

        isMenuShowed = false;
    };
    
    function showMenu() {
        console.log("Show Menu Started");

        lis.forEach(li => li.classList.add('rotateShow'));
        as.forEach(a => a.classList.add('rotateShow'));

        lis.forEach(li => li.classList.remove('rotateHide'));
        as.forEach(a => a.classList.remove('rotateHide'));
        
        lis.forEach(li => expand(li,liHeight));
        as.forEach(a => expand(a,aHeight));

        isMenuShowed = true;
    };

    function shrink(el) {
        el.style.height = '0px';
        el.style.transform = 'rotateX(-90deg)';
    }

    function expand(el,targetHeight){
        el.style.height = targetHeight + 'px';
        el.style.transform = 'rotateX(0deg)';
    }


}
