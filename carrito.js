carrito = [];
carritosHTML = ""
const div = document.getElementById('carrito')

carrito = JSON.parse(localStorage.getItem('carrito'));

carrito.forEach((libro) => {
    carritosHTML += `
    <h4>${libro.nombre}</h4>
    <p>Precio: ${libro.precio}</p>
    <p>Año: ${libro.año}</p>
    <button id=${libro.id} class="btn btn-primary delete">Eliminar</button>
    `
})

div.innerHTML = carritosHTML 


// Vaciar el carrito
const btnVaciarCarrito = document.getElementById("btnVaciarCarrito");

btnVaciarCarrito.addEventListener("click", function() {
  vaciarCarrito();
});

function vaciarCarrito() {
  // Limpiar el array del carrito
  carrito = [];
  // Actualizar el carrito en el almacenamiento local
  localStorage.setItem('carrito', JSON.stringify(carrito));
  alert("No hay elementos en tu carrito");
}
////reduce

const TotalCompra = carrito.reduce ((accum, carrito) =>{
    return accum + carrito.precio
},0)
console.log(TotalCompra)
carritosHTML.innerHTML = `Total a pagar: ${TotalCompra} $`;



// // por terminar variable Delete
// const borrarProducto = document.querySelector(".btn btn-primary delete");
// console.log(borrarProducto);


// borrarProducto.addEventListener("click", () => {
//   eliminarProducto(prodID);
// });    

//  const eliminarProducto = (prodID) =>{
//     const borrar = carrito.find((libro) => libro.id === prodID);
//     return carrito !== borrar;
// }
