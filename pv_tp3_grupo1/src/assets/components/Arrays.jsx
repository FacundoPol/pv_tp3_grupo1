const ordenar = (productos) => {    
  productos.sort((a,b) => a.precio - b.precio);
  productos.forEach((productos) => {
  console.log(`Producto [${productos.descripcion}], Precio: $[${productos.precio}]`);
 });
};

const agregarProducto = (productos, nuevoProducto) => {
productos.push(nuevoProducto) //agrega un producto nuevo al final del array
console.log("producto agregado:",nuevoProducto)

return productos
}

