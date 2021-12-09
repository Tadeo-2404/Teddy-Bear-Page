/* ---------------PRODUCT----------------- */
const img = document.querySelector('.product-img');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const purple = document.querySelector('.purple');
/* ---------------MODAL----------------- */
const modal = document.querySelector('.pay');
const modalBtn = document.querySelector('.product-btn');
const modalClose = document.querySelector('.equis');
const sendBtn = document.querySelector('.btn-pay')
/* ---------------MODAL-CAMPOS-FORM----------- */
const email = document.querySelector('#email');
const tname = document.querySelector('#name');
const number = document.querySelector('#number');
const form = document.querySelector('.form-pay');
const formato = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const formatoNumbero = /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/;
/* ---------------MENU----------------- */
const menu = document.querySelector('.menu-container');
const menuIcono = document.querySelector('#menu');
const media = window.matchMedia('(max-width:768px)');



// EVENTOS
eventos();
function eventos() {
document.addEventListener('DOMContentLoaded', inciarApp);
/*-----------------MODAL----------------------------- */
modalClose.addEventListener('click', closeModal);
modalBtn.addEventListener('click', showModal);
/*-----------------PRODUCT----------------------------- */
yellow.addEventListener('click', changeColorYellow);
purple.addEventListener('click', changeColorPurple);
red.addEventListener('click', changeColor);
/*-----------------MODAL-FORM----------------------------- */
email.addEventListener('blur', validarForm);
number.addEventListener('blur', validarForm)
tname.addEventListener('blur', validarForm);
form.addEventListener('submit', enviarForm);

}
 
/* FUNCIONES */
function inciarApp() {
  sendBtn.disabled = true;
  sendBtn.classList.add('first');
}

 function validarForm(e) {
   if(e.target.value.length > 0) { 
     const error = document.querySelector('p.parrafo');
     if(error) {
       error.remove();
     }
    e.target.classList.remove("error");
    e.target.classList.add("correct");
   
  } else {
     e.target.classList.remove("correct");
     e.target.classList.add("error");
     
     mostrarError('Todos los campos son obligatorios');
   }
     //VALIDAR EMAIL
   if(e.target.type === 'email') {
     if(formato.test(e.target.value)) {
      const error = document.querySelector('p.parrafo');
      if(error) {
       error.remove(); 
      }
      e.target.classList.remove("error");
      e.target.classList.add("correct");
     } else {
       e.target.classList.remove("correct");
       e.target.classList.add("error");
      
      mostrarError('Emal no valido');
     }
   }
    //VALIDAR NUMERO
   if(e.target.type === 'tel') {
    if(formatoNumbero.test(e.target.value)) {
     const error = document.querySelector('p.parrafo');
     if(error) {
      error.remove(); 
     }
     e.target.classList.remove("error");
     e.target.classList.add("correct");
    } else {
      e.target.classList.remove("correct");
      e.target.classList.add("error");
     
     mostrarError('Numero no valido');
    }
  }
1
   if(formato.test(email.value) && tname.value !== '' && formatoNumbero.test(number.value)) {
    sendBtn.disabled = false;
   sendBtn.classList.remove('first');
   } 
 }

function mostrarError(mensaje) {
  const mensajeError = document.createElement('p');
  mensajeError.textContent = mensaje;
  mensajeError.classList.add('parrafo');
  
  const errores = document.querySelectorAll('.parrafo');
  if(errores.length === 0) {
    form.appendChild(mensajeError);
  }

}
 
//ENVIAR EMAIL
function enviarForm(e) {
  e.preventDefault();

  const spinner = document.querySelector('.lds-roller');
  spinner.style.display = 'inline-block';
  
  setTimeout(() => {
    spinner.style.display = 'none';

    const parrafo = document.createElement('p');
    parrafo.classList.add('parrafoSend')
    parrafo.textContent = 'Email send sucessfully';
    form.insertBefore(parrafo, sendBtn);

    
    setTimeout(() => {
     parrafo.style.display = 'none';
     resetForm();
    }, 3000);

    

  }, 3000);
}

function resetForm() {
  form.reset();
  inciarApp();
  email.classList.remove('correct');
  tname.classList.remove('correct');
  number.classList.remove('correct')
}
function closeModal() {
  modal.style.bottom = '-100rem'
}

function changeColorYellow() {
  img.src = "/img/product/img8/img8Yellow.png"
}

function changeColorPurple() {
  img.src = "/img/product/img8/img8Purple.png"
}

function changeColor() {
  img.src = "/img/product/img8/img8Rojo.png"
}
menuIcono.addEventListener('click', () => {
  if (menu.classList.contains('activo')) {
    menu.classList.remove('activo')
  } else {
    menu.classList.add('activo')
  }
})


if(media.matches) {
  modalBtn.addEventListener('click', showModal);
  function showModal() {
    modal.style.top = '1rem'
    modal.style.left = '3rem'
  } 
} else {
  modalBtn.addEventListener('click', showModal);
  function showModal() {
    modal.style.bottom = '15rem'
  }
}