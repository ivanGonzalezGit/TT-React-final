export const agregarProducto = async (producto) => {
 try {const respuesta = await
    fetch('https://686a90e8e559eba9087056bc.mockapi.io/product/product', {
    method: 'POST',
    headers: {
                'Content-Type': 'application/json',
            },
    body: JSON.stringify(producto),
    });
 
    if (!respuesta.ok) {
        throw new Error('Error al agregar el producto.');
    }
 
    const data = await respuesta.json();
    console.log('Producto agregado:', data);
    alert('Producto agregado correctamente');
    } catch (error) {
        console.error(error.message);
        alert('Hubo un problema al agregar el producto.');
    }
};
