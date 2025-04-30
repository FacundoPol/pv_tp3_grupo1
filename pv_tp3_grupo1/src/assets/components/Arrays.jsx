const ordenar = (productos) => {    
  productos.sort((a,b) => a.precio - b.precio);
  productos.forEach((productos) => {
  console.log(`Producto [${productos.descripcion}], Precio: $[${productos.precio}]`);
 });
};
  // 2 - Crear un nuevo array con productos cuyo precio sea mayor a $20 (EZEQUIEL VILLALBA)
  function filtrarProductosMayoresA20(productos) {
    const productosFiltrados = productos.filter(producto => producto.precio > 20);
    return productosFiltrados;
  }
const agregarProducto = (productos, nuevoProducto) => {
productos.push(nuevoProducto) //agrega un producto nuevo al final del array
console.log("producto agregado:",nuevoProducto)

return productos
}
