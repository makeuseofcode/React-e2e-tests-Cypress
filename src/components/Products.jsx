import React, { useState, useEffect } from 'react';
import "./style.component.css"

export default function Products(prop) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null); 
  const { searchInput } = prop;

  useEffect(() => {
    const fetchProducts = async () => {
      if (searchInput) {
        const apiUrl = `https://dummyjson.com/products/category/${searchInput}`;
        try {
          const response = await fetch(apiUrl);

          if (!response.ok) {
            throw new Error('Error fetching products');
          }

          const json = await response.json();
          setProducts(json.products);
          setError(null); 
        } catch (error) {
          setError(error.message);
        }
      }
    };

    fetchProducts();
  }, [searchInput]);

  return (
    <div className="product-catalogue">
      {error ? (
        <p>Product not found</p>
      ) : (
        <div className="product-list">
          {products.slice(0, 6).map((product) => (
            <div className="product" key={product.id}>
              <h2>Title: {product.title}</h2>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
