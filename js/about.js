const sliders = [...document.querySelectorAll('.slider-body')];
const arrowNext = document.querySelector('#next');
const arrowBefore = document.querySelector('#before');
const menu = document.querySelector('.menu-container');
const menuIcono = document.querySelector('#menu');
let value;

arrowNext.addEventListener('click', ()=>changePosition(1));
arrowBefore.addEventListener('click', ()=>changePosition(-1));

function changePosition(change) {
   const currentElement = Number(document.querySelector('.slider-body-show').dataset.id);
   value = currentElement;
   value += change;

   if(value == 0 || value == sliders.length+1) {
       value = value == 0 ? sliders.length : 1;
   }

   sliders[currentElement-1].classList.toggle('slider-body-show');
   sliders[value-1].classList.toggle('slider-body-show'); }

    //MENU 
    menuIcono.addEventListener('click', () => {
        if(menu.classList.contains('activo')) {
            menu.classList.remove('activo')
        } else {
            menu.classList.add('activo')
        }
    })