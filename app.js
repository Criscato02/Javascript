function Libro(nombre, precio, año,id){
    this.nombre = nombre
    this.precio = precio
    this.año = año
    this.disponibilidad = true //valor por defecto
    this.id = id
}
//Libros disponibles
const libro1 = new Libro("The hunger games", 20000, 2015, "1"); 
const libro2 = new Libro("Game of Thrones", 35000, 2020, "2");
const libro3 = new Libro("Piense y hágase rico", 17500, 2012, "3");
const libro4 = new Libro("La culpa es de la Vaca", 12000, 2005, "4");
const libro5 = new Libro("Un inmueble al año no hace daño", 53000, 2018, "5");
const libro6 = new Libro("Dinero: Domina el juego", 55000, 2016, "6");
const libro7 = new Libro("Cuentos de los hermanos Grinn", 25000, 1995, "7");
const libro8 = new Libro("Harry Potter: La Orden del Fénix", 104000, 2014, "8");
const libro9 = new Libro("Cocina indrustrial", 26000, 2020, "9");
const libro10 = new Libro("Divergente", 30000, 2017, "10");

//// Array
const Libros = [libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9, libro10];

////Filter
let busquedaPorPrecio = Libros.filter((libro) => libro.precio > 30000)
console.log(busquedaPorPrecio)
////Find
let busquedaPorNombre = Libros.find((libro) => libro.nombre === "Un inmueble al año no hace daño")
console.log (busquedaPorNombre)

////Carrito
const carrito =[]

const agregarCarrito = (prodID) =>{
    const item = Libros.find((libro) => libro.id ===prodID)
    carrito.push(item)
    console.log(carrito)
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

const boton = document.querySelectorAll("button.cart")
console.log(boton)

for (let i = 0; i < boton.length; i++) {
    boton[i].addEventListener("click", function() {
        agregarCarrito(boton[i].id)
    });
}

//Trabajando en barra de busqueda
const formulario = document.querySelector("formulario")
console.log(formulario)

formulario.addEventListener("click", () => {
    const formulario = document.find((libro) => libro.id ===prodID);
})





