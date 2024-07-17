import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useState, useEffect } from 'react'
import './Retail.css'

const products = [
  {
    id: 1,
    image: '/img/blue-tshirt.webp',
    name: 'Product 1',
    description: 'Description 1',
    price: 26.00,
  },
  {
    id: 2,
    image: '/img/green-tshirt.webp',
    name: 'Product 2',
    description: 'Description 2',
    price: 26.59,
  },
  {
    id: 3,
    image: 'img/salmon-tshirt.webp',
    name: 'Product 3',
    description: 'Description 3',
    price: 27.15,
  },
  {
    id: 4,
    image: 'img/tshirt-run.png',
    name: 'Product 4',
    description: 'Description 4',
    price: 27.00,
  },
  {
    id: 5,
    image: 'img/t-shirt1.png',
    name: 'Product 5',
    description: 'Description 5',
    price: 32.00,
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
      <div className="categories-list">
        <ul>
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
        </ul>
      </div>
      <div className="products-list">
        { arrayProducts }
      </div>
    </main>
  )
}

export default Retail
