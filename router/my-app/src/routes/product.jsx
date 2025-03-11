import { Outlet } from 'react-router-dom';

function Product() {
  const product = {
    name: 'Product',
    cost: 400,
    amount: 5,
  };

  return (
    <div>
         <h2>Product Page</h2>
      <p>First Name: {product.name}</p>
      <p>Last Name: {product.cost}</p>
      <p>Year of Admission: {product.amount}</p>
    </div>
  );
}

export default Product;