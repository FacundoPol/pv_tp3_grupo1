
const ordenar = (productos) => {    
  productos.sort((a,b) => a.precio - b.precio);
  productos.forEach((productos) => {
    console.log(`Producto [${productos.descripcion}], Precio: $[${productos.precio}]`);
  });
  };
  
  export default ordenar;