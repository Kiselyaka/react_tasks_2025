import React, { memo, useEffect } from 'react';

const Products = ({ products }) => {
  useEffect(() => {
    console.log('products render');
  });

  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>{product}</li>
      ))}
    </ul>
  );
};

export default memo(Products);