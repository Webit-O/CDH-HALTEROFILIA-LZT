import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useState, useEffect } from 'react'
import './Retail.css'

const products = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    name: 'Product 1',
    description: 'Description 1',
    price: 100,
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    name: 'Product 2',
    description: 'Description 2',
    price: 200,
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    name: 'Product 3',
    description: 'Description 3',
    price: 300,
  },
];

function Retail() {
  const [arrayProducts, setArrayProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    let myProducts;
    myProducts = products.map((product, index) => {
      return (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      );
    });
    setArrayProducts(myProducts);
  }

  return (
    <main className='retail'>
     {arrayProducts}
    </main>
  )
}

export default Retail
