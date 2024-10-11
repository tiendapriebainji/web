let carrito = [];

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    mostrarCarrito();
}

function mostrarCarrito() {
    let listaCarrito = document.getElementById("carrito");
    listaCarrito.innerHTML = "";

    carrito.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.producto} - $${item.precio}`;
        listaCarrito.appendChild(li);
    });

    let total = carrito.reduce((suma, item) => suma + item.precio, 0);
    document.getElementById("total").textContent = total;
}

function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
}
