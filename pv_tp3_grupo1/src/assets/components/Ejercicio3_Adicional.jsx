import react from 'react';
const ListaProductos = ({productos}) => {
    const productosConIVA = productos.map(producto => ({
        descripcion: producto.descripcion,
        precio: (producto.precio * 1.21). toFixed(2)
    }))
    return (
        <div>
            <h2>Productos con IVA (21%)</h2>
            <ul>
                {productosConIVA.map((producto, index)=> (
                    <li key={index}>
                        {producto.descripcion} - ${producto.precio}
                    </li>
                ))}
                
            </ul>
        </div>
    );
};

export default ListaProductos