function Libro(nombre, precio, año){
    this.nombre = nombre
    this.precio = precio
    this.año = año
    this.disponibilidad = true //valor por defecto
    this.precioFinal = function(){

//// CONDICIONAL
        let precioFinal = this.precio
        if(this.precio >= 20000){
            precioFinal = this.precio - ((this.precio/100) * 20)

            console.log("el libro seleccionado es" + " " + nombre +" " + "y su precio original es" + " " + precio + " " + ", con descuento aplicado queda en" + " " +  precioFinal)
            
        }else if(this.precio >= 30000){
            precioFinal = this.precio - ((this.precio/100) * 50)
 
            console.log("el libro seleccionado es" + " " + nombre +" " + "y su precio original es" + " " + precio + " " + ", con descuento aplicado queda en" + " " +  precioFinal)
            
        }else{
            console.log("el libro seleccionado es" + " " + nombre +" " + "y su precio original es" + " " + precio + " " + ", este libro no tiene descuento")
        }
    }
}
const libro1 = new Libro("The hunger games", 20000, 2015); 
const libro2 = new Libro("Game of Thrones", 35000, 2020);
const libro3 = new Libro("Piense y hágase rico", 17500, 2012);
const libro4 = new Libro("La culpa es de la Vaca", 12000, 2005);
const libro5 = new Libro("Un inmueble al año no hace daño", 53000, 2018);
const libro6 = new Libro("Dinero: Domina el juego", 55000, 2016);
const libro7 = new Libro("Cuentos de los hermanos Grinn", 25000, 1995);
const libro8 = new Libro("Harry Potter: La Orden del Fénix", 104000, 2014);
const libro9 = new Libro("Cocina indrustrial", 26000, 2020);
const libro10 = new Libro("Divergente", 30000, 2017);

//// LLamando al metodo
// libro1.precioFinal()
// libro2.precioFinal()
// libro3.precioFinal()

//// Ciclo
const Libros = [libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9, libro10];
for (let libro of Libros) {
    libro.precioFinal()
}
