document.addEventListener("DOMContentLoaded", () => {
  const productosCompra = document.querySelector(".productosCompra");
  const contenedor = document.getElementById('contenedor');
  const x = document.getElementById('x');


  let productos = [];
  let lista = [];


  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      productos = data
      data.forEach((prod) => {
        const div = document.createElement('div')
        div.innerHTML = `
        <img src="${prod.url}" alt="" />
        <div class="informacion" id="8">
          <p>${prod.nombre}</p>
          <p class="precio">${prod.precio}</p>
          <button id="${prod.id}"class="agregarProducto">Comprar</button>
        </div>
      `
        contenedor.append(div)
      })
      const botonAgregar = document.querySelectorAll("button.agregarProducto")

      for (let i = 0; i < botonAgregar.length; i++) {
        botonAgregar[i].addEventListener("click", function () {
          agregarCarrito(botonAgregar[i].id)

        });
      }
    })



  const agregarCarrito = (id) => {
    const item = productos.filter((libro) => libro.id === parseInt(id));
    lista.push(item[0]);
    localStorage.setItem('carrito', JSON.stringify(lista));
    // mostrarCarrito();
  };


  x.addEventListener("click", () => {
    const contenedorCompra = document.getElementById('contenedorCompra');
    contenedorCompra.style.display = 'none';
  });

  const carritoImagen = document.getElementById('carritoImagen');
  carritoImagen.addEventListener('click', mostrarCarrito);

  function mostrarCarrito() {
    const contenedorCompra = document.getElementById('contenedorCompra');
    contenedorCompra.style.display = 'block';
    productosCompra.innerHTML = ""

    // lista.forEach((producto) => {
    lista.forEach(function (producto) {

      const contenedorProducto = document.createElement('div');
      contenedorProducto.innerHTML = `
            <h3>Libro: ${producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <button type="button" id=${producto.id} class="btn btn-danger btn-eliminar">Eliminar del carrito</button>
            `
        ;
      productosCompra.appendChild(contenedorProducto);
    });
    const boton = document.querySelectorAll("button.btn-eliminar")

    for (let i = 0; i < boton.length; i++) {
      boton[i].addEventListener("click", function () {
        eliminarProducto(boton[i].id)

      });
    }
  }
  const eliminarProducto = (id) => {
    const index = lista.findIndex((producto) => producto.id === parseInt(id));
    if (index !== -1) {
      lista.splice(index, 1);
      mostrarCarrito();
    }
  };
})


