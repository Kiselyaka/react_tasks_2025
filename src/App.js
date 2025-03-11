import React, { useState, useCallback } from 'react';
import Products from './Products';

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = useCallback(() => {
    const newProduct = 'Product ' + (products.length + 1); 
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  }, [products.length]);


  return (
    <div>
      <h1>Product List</h1>
      <button onClick={addProduct}>Add Product</button>
      <Products products={products} />
    </div>
  );
};

export default App;