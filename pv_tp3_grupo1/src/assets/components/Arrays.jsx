
import '../css/Productos.css'
const productsService = (()=>{
  let products = [];
  const getAll = () => products;
  const add = (name, price) => products.push({descripcion: name, precio: price});
  const remove = (name) => {
      products = products.filter(s => s.descripcion !== name);
  };
  const search = (term) => products.filter(s => 
          s.descripcion.toLowerCase().includes(term.toLowerCase()));

  return { getAll, add, remove, search };
})();

function Formu() {
  
  function mostrarProductosEnLista(){
    const lista = document.getElementById('lista-productos');
    lista.innerHTML = '';//para limpiar la lista
    let productos= productsService.getAll();
    productos.forEach((producto)=> {
    const item = document.createElement('li');
    item.textContent= `producto: ${producto.descripcion} - Precio: $${producto.precio.toFixed(2)}`;
    lista.appendChild(item);
    });
    }
  function manejarSubmit(evento){

  evento.preventDefault();

  const nombre =document.getElementById('nombre').value;
  const precio =parseFloat(document.getElementById('precio').value);

  const producto= {descripcion: nombre, precio: precio};
  productsService.add(nombre,precio)
  

  document.getElementById('nombre').value='';
  document.getElementById('precio').value='';
  mostrarProductosEnLista();
  };

  

  function aplicarIVA(){
      const lista = document.getElementById('lista-productos');
      lista.innerHTML = '';//para limpiar la lista
      let productos= productsService.getAll();
      productos.forEach((producto)=> {
      const item = document.createElement('li');
      item.textContent= `producto: ${producto.descripcion} - Precio: $${producto.precio.toFixed(2)*1.21}`;
      lista.appendChild(item);
      });
      }

  function eliminarProductoMasBarato() {
    let productos = productsService.getAll();
    if (productos.length === 0) return;

    // Encontrar el producto con el precio más bajo
    const productoMasBarato = productos.reduce((prev, curr) => (prev.precio < curr.precio) ? prev : curr);
    
    productsService.remove(productoMasBarato.descripcion);
    console.log("\nProducto con el precio más bajo eliminado.");
    mostrarProductosEnLista();
}


  function filtrarProductosMayoresA20000() {
    let productos = productsService.getAll();
    const productosFiltrados = productos.filter(producto => producto.precio > 20000);
    
    // Limpiar la lista y mostrar los productos filtrados
    const lista = document.getElementById('lista-productos');
    lista.innerHTML = '';
    productosFiltrados.forEach(producto => {
        const item = document.createElement('li');
        item.textContent = `producto: ${producto.descripcion} - Precio: $${producto.precio.toFixed(2)}`;
        lista.appendChild(item);
    });
}

  //FUNCION ORDENAR PRODUCTOS
function ordenar() {
  let productos = productsService.getAll();
  productos.sort((a, b) => a.precio - b.precio);

  // Limpiar la lista y mostrar los productos ordenados
  const lista = document.getElementById('lista-productos');
  lista.innerHTML = '';
  productos.forEach(producto => {
      const item = document.createElement('li');
      item.textContent = `producto: ${producto.descripcion} - Precio: $${producto.precio.toFixed(2)}`;
      lista.appendChild(item);
  });
}



  return (
   <>
   <h2>Lista Productos</h2>
      <form onSubmit={manejarSubmit}>
        <input type="text" id='nombre' name="nombre"  placeholder="Nombre del producto" required />
        <input type="number" id='precio' name="precio"  placeholder="Precio" required />
        <button id= "boton1" type= "submit"> Agregar Producto </button>
      </form>

        <h2>Productos Agregados: </h2>
        <ul id="lista-productos">
          
        </ul>

        <div className='botones-formu' >
       
        <button onClick={aplicarIVA}>Aplicar IVA (21%)</button>
        <button onClick={eliminarProductoMasBarato}>Eliminar prodcuto mas barato</button>
        <button onClick={filtrarProductosMayoresA20000}>Filtrar</button>
        <button onClick={ordenar}>Ordenar por precio</button>
        </div>
    </>
  );
}
export default Formu;