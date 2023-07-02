document.addEventListener("DOMContentLoaded", () => {
    const informacionCompra = document.getElementById('informacionCompra');
    const contenedorCompra = document.getElementById('contenedorCompra');
    const productosCompra = document.querySelector(".productosCompra");
    const contenedor = document.getElementById('contenedor');
    const carrito = document.querySelector(".carrito");
    const numero = document.getElementById("numeroElementos");
    const total = document.getElementById('total');
    const x = document.getElementById('x');
  
    const productos = [
      { nombre: "The hunger games", precio: 20000, id: 1 },
      { nombre: "Game of Thrones", precio: 35000, id: 2 },
      { nombre: "Piense y hágase rico", precio: 17500, id: 3 },
      { nombre: "La culpa es de la Vaca", precio: 12000, id: 4 },
      { nombre: "Un inmueble al año no hace daño", precio: 53000, id: 5 },
      { nombre: "Dinero: Domina el juego", precio: 55000, id: 6 },
      { nombre: "Cuentos de los hermanos Grinn", precio: 25000, id: 7 },
      { nombre: "Harry Potter: La Orden del Fénix", precio: 104000, id: 8 },
      { nombre: "Cocina indrustrial", precio: 26000, id: 9 }
    ];
    const lista = [];
  
    const agregarProducto = document.querySelector(".agregarProducto");
    const agregarProductoDos = document.querySelector(".agregarProducto2");
    const agregarProductoTres = document.querySelector(".agregarProducto3");
    const agregarProductoCuatro = document.querySelector(".agregarProducto4");
    const agregarProductoCinco = document.querySelector(".agregarProducto5");
    const agregarProductoSeis = document.querySelector(".agregarProducto6");
    const agregarProductoSiete = document.querySelector(".agregarProducto7");
    const agregarProductoOcho = document.querySelector(".agregarProducto8");
    const agregarProductoNueve = document.querySelector(".agregarProducto9");

    const agregarCarrito = (id) => {
      const item = productos.filter((libro) => libro.id === id);
      lista.push(item);
      console.log(lista);
      localStorage.setItem('carrito', JSON.stringify(lista));
      mostrarCarrito();
    };
    
    agregarProducto.addEventListener("click", (event) => {
        const id = parseInt(event.target.parentNode.getAttribute("id"));
        agregarCarrito(id);
      });
    agregarProductoDos.addEventListener("click", (event) => {
        const id = parseInt(event.target.parentNode.getAttribute("id"));
        agregarCarrito(id);
      });
    agregarProductoTres.addEventListener("click", (event) => {
        const id = parseInt(event.target.parentNode.getAttribute("id"));
        agregarCarrito(id);
      });
      agregarProductoCuatro.addEventListener("click", (event) => {
        const id = parseInt(event.target.parentNode.getAttribute("id"));
        agregarCarrito(id);
      });
      agregarProductoCinco.addEventListener("click", (event) => {
        const id = parseInt(event.target.parentNode.getAttribute("id"));
        agregarCarrito(id);
      });
      agregarProductoSeis.addEventListener("click", (event) => {
        const id = parseInt(event.target.parentNode.getAttribute("id"));
        agregarCarrito(id);
      });
      agregarProductoSiete.addEventListener("click", (event) => {
        const id = parseInt(event.target.parentNode.getAttribute("id"));
        agregarCarrito(id);
      });
      agregarProductoOcho.addEventListener("click", (event) => {
        const id = parseInt(event.target.parentNode.getAttribute("id"));
        agregarCarrito(id);
      });
      agregarProductoNueve.addEventListener("click", (event) => {
        const id = parseInt(event.target.parentNode.getAttribute("id"));
        agregarCarrito(id);
      });
     

    const obtenerIdProducto = () => {
        const contenedorProducto = agregarProducto.closest("#informacion");
        const id = contenedorProducto.getAttribute("id");
        
        return id;
      };
    
    x.addEventListener("click", ()=>{
    const contenedorCompra = document.getElementById('contenedorCompra');
    contenedorCompra.style.display = 'none';
    });

    const carritoImagen = document.getElementById('carritoImagen');
    carritoImagen.addEventListener('click', mostrarCarrito);
    
        function mostrarCarrito() {
        const contenedorCompra = document.getElementById('contenedorCompra');
        contenedorCompra.style.display = 'block';
        productosCompra.innerHTML =""
        
        lista.forEach((producto) => {
            const contenedorProducto = document.createElement('div');
            contenedorProducto.innerHTML = `
            <h3>Libro: ${productos.nombre}</h3>
            <p>Precio: ${productos.precio}</p>
            <button type="button" class="btn btn-danger btn-eliminar">Eliminar del carrito</button>
            `
            ;
            productosCompra.appendChild(contenedorProducto);
        });
        }
    const btnEliminar = contenedorCompra.querySelector('.btn-eliminar');
        btnEliminar.addEventListener('click', () => {
        eliminarProducto(productos.id);
    });

    const eliminarProducto = (id) => {
        const index = lista.findIndex((producto) => productos.id === id);
        if (index !== -1) {
          lista.splice(index, 1);
          mostrarCarrito();
        }
      };
      

    })


