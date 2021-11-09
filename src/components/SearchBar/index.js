import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';
import ProductList from '../ProductList';

const SearchBar = () => {
  const [datas, setDatas] = useState([]);
  const [searchProd, setSearchProd] = useState('');
  console.log('setSearchProd value', searchProd);
  useEffect(() => {
    axios
      .get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchProd}&search_simple=1&action=process&fields=id%2Cproduct_name%2Cimage_front_small_url&json=1&page=1&page_size=24`,
        {},
        { withCredentials: true }
      )
      .then((response) => {
        setDatas(response);
      });
  }, [searchProd]);
  console.log('-> request response', datas);
  return (
    <>
      <h1>FOOD API</h1>
      <div>
        <input
          className='SearchBar'
          type='text'
          placeholder='Tapez le nom de votre produit'
          onChange={(event) => {
            setSearchProd(event.target.value);
          }}
        />
      </div>
      <div className='List'>
        {searchProd !== '' ? <ProductList datasProd={datas} /> : <p></p>}
      </div>
    </>
  );
};

export default SearchBar;
