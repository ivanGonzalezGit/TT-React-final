import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MySpinner from './MySpinner';

export default function Gallery({ agregarAlCarrito }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://686a90e8e559eba9087056bc.mockapi.io/api/product')
            .then(res => res.json())
            .then(res => {
                setData(res);
                setLoading(false);
            })
            .catch((error) => {
              setError('Hubo un problema al cargar los productos.');
              setCargando(false);
          });
    }, []);

    if (loading) {
        return <MySpinner />;
    }

    if (error) return <p>{error}</p>;

    return (
        <section style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px", flexWrap: "wrap" }}>
            {data.map((product) => (
                <div key={product.id} style={{ border: "1px solid #ccc", padding: "20px", width: "200px", textAlign: "center", borderRadius: "8px" }}>
                    <img src={product.image} alt={product.name} style={{ width: "100%", height: "200px", borderRadius: "4px", objectFit: "cover" }} />
                    <h3>{product.name}</h3>
                    <p>{product.price} USD</p>
                    <Link to={`/products/${product.id}`}>
                        <button
                            style={{ padding: "10px 15px", backgroundColor: "yellow", color: "#010101", border: "none", borderRadius: "4px", cursor: "pointer" }}
                        >
                            Editar Producto
                        </button>            
                    </Link>

                </div>
            ))}
        </section>
    );
}
