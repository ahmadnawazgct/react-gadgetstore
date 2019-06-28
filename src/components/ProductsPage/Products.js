import React from 'react';
import Title from "../Title";
import Product from '../Product';
import { ProductConsumer } from "../context";

export default function Products() {
    return (
      <ProductConsumer>
        {value => {
          const { filteredProducts } = value;
          return (
            <section className="my-5">
              <div className="container">
                <Title title="our products" center="true" />
                <div className="row">
                  {filteredProducts.map(product => {
                    return <Product key={product.id} product={product} />;
                  })}
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    );
}
