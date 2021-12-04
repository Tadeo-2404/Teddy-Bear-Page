const boxes = document.querySelectorAll('.service');
const productos = document.querySelectorAll('.p1');
const btnProductos = document.querySelector('.interactive-btn');
const btnTerms = document.querySelector('#terms-btn')
const terminos = document.querySelector('.terminos');
const btnCarritoVer = document.querySelector('.btn-icon');
const carrito = document.querySelector('.carrito');
const carritoBody = document.querySelector('.carrito-body');
const cerrarCarrito = document.querySelector('.cerrar-carrito')
const bntCarritoVerMenu = document.querySelector('.btn-icon.menu')
const btnObtenerProducto = document.querySelectorAll('.product-btn.cart');
const vaciarCarritoBtn = document.querySelector('.vaciar-carrito-btn');
const menu = document.querySelector('.menu-container');
const menuIcono = document.querySelector('#menu');
let articulosCarrito =  [];

// TYPING ANIMATIONS
var aText = new Array(
    "We got the best <span>Stuffed</span>",
    "animals in the market"
    );
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    typewriter();

    //MENU 
    menuIcono.addEventListener('click', () => {
        if(menu.classList.contains('activo')) {
            menu.classList.remove('activo')
        } else {
            menu.classList.add('activo')
        }
    })








//ANIMACION SERVICIOS
window.addEventListener('scroll', checkBoxes)
checkBoxes()
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

//CARRTIO SECTION
btnCarritoVer.addEventListener('click', ShowCart);
function ShowCart() {
    if(carrito.classList.contains('presente')) {
        carrito.classList.remove('presente')
    } else {
        carrito.classList.add('presente')
    }
}
bntCarritoVerMenu.addEventListener('click', ShowCart);
function ShowCart() {
    if(carrito.classList.contains('presente')) {
        carrito.classList.remove('presente')
    } else {
        carrito.classList.add('presente')
    }
}

//CERRAR CARRITO
cerrarCarrito.addEventListener('click', () => {
    carrito.classList.remove('presente')
})


btnObtenerProducto.forEach((btn) => {
    btn.addEventListener('click', añadirCarrito);
    function añadirCarrito(e) { 
        btn.textContent = 'ADDED';
        const ObtenerDiv = e.target.parentElement.parentElement;
        leerSeleccion(ObtenerDiv);
    }
})
//VACIAR CARRITO
vaciarCarritoBtn.addEventListener('click', () => {
    articulosCarrito = [];
    limpiarHTML();
})


function leerSeleccion(elemento) {
  console.log(elemento)

  const infoSeleccion = {
      imagen: elemento.querySelector('img').src,
      nombre: elemento.querySelector('h3').textContent,
      precio: elemento.querySelector('.product-price').textContent,
      cantidad: 1
  }




  //verificar si el carrito existe
 const existe = articulosCarrito.some(elemento => elemento.nombre === infoSeleccion.nombre);
 if(existe) {
     const elementos = articulosCarrito.map( elemento => {
         if(elemento.nombre === infoSeleccion.nombre) {
             elemento.cantidad++;
             return elemento;
         } else {
             return elemento;
         }
     })
     articulosCarrito = [...elementos];
    
 } else {
      articulosCarrito = [...articulosCarrito, infoSeleccion]
 }








  
  carrtioHTML(); 
  console.log(articulosCarrito)

}
//MOSTRAR EN EL HTML
function carrtioHTML() {

    //limpiar html
    limpiarHTML();
    //CREAR HTML
    articulosCarrito.forEach((producto) => {
       const div = document.createElement('div');
       div.innerHTML = `
     <div class='generado'>
        <div class='generado-img'>
          <img src="${producto.imagen}">
        </div>
        <div class='generado-title'>
          <h3>${producto.nombre}</h3>
        </div>
        <div class='generado-precio'>
          <p>${producto.precio}</p>
        </div>
        <div class='generado-amount'>
          <p>${producto.cantidad}</p>
        </div>
     </div>
        <hr>
       `;
       carritoBody.appendChild(div)
    })
}

//LIMPIAR HTML
function limpiarHTML() {
   carritoBody.innerHTML = '';
}


//PRODUCTO SECCION
btnProductos.addEventListener('click', showMore);
function showMore() {
    btnProductos.textContent = 'See Less'
    productos.forEach((producto) => {
        if(producto.classList.contains('p1')) {
            producto.classList.remove('p1')
        } else {
            producto.classList.add('p1')
            btnProductos.textContent = 'See More'
        }
        
    })
}

//TERMINOS Y CONDICIONES
window.addEventListener('load', showTerms);
function showTerms() {
    terminos.style.bottom = '10px'
}
btnTerms.addEventListener('click', closeTerms);
function closeTerms() {
    terminos.style.bottom = 'initial'
}