function Libro(nombre, precio, año){
    this.nombre = nombre
    this.precio = precio
    this.año = año
    this.disponibilidad = true //valor por defecto
    this.precioFinal = function(){

        let precioFinal = this.precio
        if(this.precio >= 20000){
            precioFinal = this.precio - ((this.precio/100) * 20)

            console.log("el libro seleccionado es" + " " + nombre +" " + "y su precio original es" + " " + precio + " " + "con descuento aplicado queda en" + " " +  precioFinal)
            
        }else if(this.precio >= 30000){
            precioFinal = this.precio - ((this.precio/100) * 50)
 
            console.log("el libro seleccionado es" + " " + nombre +" " + "y su precio original es" + " " + precio + " " + "con descuento aplicado queda en" + " " +  precioFinal)
            
        }else{
            console.log("el libro seleccionado es" + " " + nombre +" " + "y su precio original es" + " " + precio + " " + ", este libro no tiene descuento")
        }
    }
}
const libro1 = new Libro("The hunger games", 20000, 2015); 
const libro2 = new Libro("Game of Thrones", 35000, 2020);
const libro3 = new Libro("Piense y hágase rico", 17500, 2012);

// //LLamando al metodo
// libro1.precioFinal()
// libro2.precioFinal()
// libro3.precioFinal()

const Libros = [libro1, libro2, libro3];
for (let libro of Libros) {
    libro.precioFinal()
}
