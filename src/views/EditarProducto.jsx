import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBoton from '../components/NavBoton';

function FormularioProducto({ onAgregar }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    category: ''
  });
  const [errores, setErrores] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://686a90e8e559eba9087056bc.mockapi.io/api/product/${id}`)
        .then(res => res.json())
        .then(data => {
          setProduct(data);
          setLoading(false);
        })
        .catch(() => {
          setError('Error al cargar el producto');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!product.name.trim()) {
      nuevosErrores.name = 'El nombre es obligatorio.';
    }

    if (!product.price || product.price <= 0) {
      nuevosErrores.price = 'El precio debe ser mayor a 0.';
    }

    if (!product.description.trim() || product.description.length < 10) {
      nuevosErrores.description = 'La descripción debe tener al menos 10 caracteres.';
    }

    if (!product.image.trim()) {
      nuevosErrores.image = 'Debe ingresar una URL de una foto.';
    }

    if (!product.category.trim()) {
      nuevosErrores.category = 'El producto debe pertenecer a una categoría';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    try {
      if (id) {

        await fetch(`https://686a90e8e559eba9087056bc.mockapi.io/api/product/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(product),
        });
      } else {

        await fetch('https://686a90e8e559eba9087056bc.mockapi.io/api/product', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(product),
        });
      }

      navigate('/'); 
    } catch (err) {
      console.error('Error al guardar:', err);
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  const estilo = {
    color: '#F5ABB0',
    background: '#62162F',
    border: 'none',
    width: '12.5rem'
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} onSubmit={handleSubmit}>
      <h2>{id ? 'Editar Producto' : 'Agregar Producto'}</h2>

      <div>
        <label>Nombre:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} required />
        {errores.name && <p style={{ color: 'red' }}>{errores.name}</p>}
      </div>

      <div>
        <label>Precio:</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} required min="0" step="0.01" />
        {errores.price && <p style={{ color: 'red' }}>{errores.price}</p>}
      </div>

      <div>
        <label>Descripción:</label>
        <textarea name="description" value={product.description} onChange={handleChange} required />
        {errores.description && <p style={{ color: 'red' }}>{errores.description}</p>}
      </div>

      <div>
        <label>Imagen:</label>
        <input type="text" name="image" value={product.image} onChange={handleChange} required />
        {errores.image && <p style={{ color: 'red' }}>{errores.image}</p>}
      </div>

      <div>
        <label>Categoría:</label>
        <input type="text" name="category" value={product.category} onChange={handleChange} required />
        {errores.category && <p style={{ color: 'red' }}>{errores.category}</p>}
      </div>

      <NavBoton type="submit" cont={id ? 'Guardar Cambios' : 'Agregar Producto'} estilo={estilo} />
    </form>
  );
}

export default FormularioProducto;
