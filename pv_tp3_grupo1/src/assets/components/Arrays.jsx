
const agregarProducto = (productos, nuevoProducto) => {
productos.push(nuevoProducto) //agrega un producto nuevo al final del array
console.log("producto agregado:",nuevoProducto)

return productos
}