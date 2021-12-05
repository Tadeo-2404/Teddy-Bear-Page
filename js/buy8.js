const img = document.querySelector('.product-img');
const yellow = document.querySelector('.yellow');
const purple = document.querySelector('.purple');
const modal = document.querySelector('.pay');
const modalBtn = document.querySelector('.product-btn');
const modalClose = document.querySelector('.equis');
const menu = document.querySelector('.menu-container');
const menuIcono = document.querySelector('#menu');
const media = window.matchMedia('(max-width:768px)');

modalClose.addEventListener('click', closeModal);
function closeModal() {
  modal.style.bottom = '-100rem'
}

if(media.matches) {
  modalBtn.addEventListener('click', showModal);
  function showModal() {
    modal.style.bottom = '1rem'
    modal.style.left = '1rem'
  }
} else {
  modalBtn.addEventListener('click', showModal);
  function showModal() {
    modal.style.bottom = '20rem'
}
}



yellow.addEventListener('click', changeColorYellow);
function changeColorYellow() {
  img.src="/img/product/img8/img8Yellow.png"
}

purple.addEventListener('click', changeColorPurple);
function changeColorPurple() {
  img.src="/img/product/img8/img8Purple.png"
}

    //MENU 
    menuIcono.addEventListener('click', () => {
      if(menu.classList.contains('activo')) {
          menu.classList.remove('activo')
      } else {
          menu.classList.add('activo')
      }
  })