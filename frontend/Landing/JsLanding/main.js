const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');


hamburger.addEventListener('click', function(){
    let src = (hamburger.src.includes('hamburger')) ? '/frontend/img/icon-close.svg' : '/frontend/img/icon-hamburger.svg';
    hamburger.src = src;


    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
    menu.classList.toggle("text-center");
    
});