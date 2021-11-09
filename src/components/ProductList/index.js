import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const ProductList = ({ datasProd }) => {
  // console.log('datasProd -> ', datasProd);
  const fetchProducts = datasProd.data.products;
  const resultFetch = fetchProducts.map((prod) => {
    console.log('fetchProducts -> ', prod);
    return (
      <ul>
        <Link
          to={{
            pathname: `/product/${prod.id}`,
            state: { prod },
          }}
        >
          <li>
            <img
              src={prod.image_front_small_url}
              alt='product_picture'
              style={{ width: '67px', height: '100px' }}
            />
          </li>
          <li>{prod.product_name}</li>
        </Link>
      </ul>
    );
  });
  return (
    <>
      <h2>Voici les produits</h2>
      <div className='ProductList'>{resultFetch}</div>
    </>
  );
};

export default ProductList;
