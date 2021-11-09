import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = (prod) => {
  //check the props received from ProductList
  console.log('===> product in PRODUCT COMPONENT', prod);
  const ids = prod.match.params.id;
  console.log('===> ID in PRODUCT COMPONENT', ids);
  const [productDef, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://world.openfoodfacts.org/api/v0/product/${ids}.json?fields=product_name%2Ccategories%2Cimage_front_url%2Callergens_hierarchy%2Cingredients_text`,
        {},
        { withCredentials: true }
      )
      .then((response) => {
        //check the response from the API
        console.log('===> RESPONSE in PRODUCT COMPONENT', response);
        setProduct(response.data.product);
      });
  }, [ids]);
  return (
    <div className='Product'>
      <h2>My product</h2>
      <h2>Nom du produit : {productDef.product_name}</h2>
      <img src={productDef.image_front_url} alt='product' />
      <p>Ingredients : {productDef.ingredients_text} </p>
      <p>Allergenes : {productDef.allergens_hierarchy} </p>
      <p>Catégories du produit : {productDef.categories}</p>
    </div>
  );
};

export default Product;
