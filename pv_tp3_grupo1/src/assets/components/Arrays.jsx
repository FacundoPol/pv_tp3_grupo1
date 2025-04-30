//ARREGLO DE PRODUCTOS
export const productos = [
  { descripcion: "Teclado", precio: 30000 },
  { descripcion: "Auriculares", precio: 49000 },
  { descripcion: "Mouse", precio: 25000 },
  { descripcion: "Monitor", precio: 120000 },
  { descripcion: "Parlantes", precio: 35000 }
];

//FUNCION ELIMINAR  PRODUCTO MAS BARATO
export function eliminarProductoMasBarato() {
  if (productos.length == 0) return;
  // Encontrar el precio más bajo
  let precioMinimo = Math.min(...productos.map(p => p.precio));
  // Eliminar el primer producto que tenga ese precio
  productos = productos.filter(p => p.precio !== precioMinimo);

  console.log("\nProducto con el precio más bajo eliminado.");
}


//FUNCION MOSTRAR PRODUCTOS
export function mostrarProductos() {
  productos.forEach(producto => {
    console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
  });
}


//FUNCION ORDENAR PRODUCTOS
export const ordenar = (productos) => {    
  productos.sort((a,b) => a.precio - b.precio);
  productos.forEach((productos) => {
  console.log(`Producto [${productos.descripcion}], Precio: $[${productos.precio}]`);
 });
};


  // 2 - Crear un nuevo array con productos cuyo precio sea mayor a $20 (EZEQUIEL VILLALBA)
  export function filtrarProductosMayoresA20(productos) {
    const productosFiltrados = productos.filter(producto => producto.precio > 20);
    return productosFiltrados;
  }


//FUNCIONAR AGREGAR PRODUCTOS
export const agregarProducto = (productos, nuevoProducto) => {
productos.push(nuevoProducto) //agrega un producto nuevo al final del array
console.log("producto agregado:",nuevoProducto)

return productos
}

export const calcularPreciosConIVA = (productos) => {  
    return productos.map(producto => {     
         const precioConIVA = producto.precio * 1.21;      
           return { ...producto, precio: precioConIVA }; 
    });
};

