import React from 'react';
import productsBcg from '../images/productsBcg.jpeg';
import Hero from '../Hero';
import Products from '../../components/ProductsPage/Products';


export default function ProductsPage() {
    return (
      <div>
        <Hero img={productsBcg} />
        <Products />
      </div>
    );
}