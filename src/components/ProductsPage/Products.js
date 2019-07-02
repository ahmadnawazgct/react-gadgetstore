import React from 'react';
import Title from "../Title";
import Product from '../Product';
import ProductFilter from '../ProductsPage/ProductFilter';
import { ProductConsumer } from "../context";

export default function Products() {
    return (
      <ProductConsumer>
        {value => {
          const { filteredProducts } = value;
          return (
            <section className="my-5">
              <div className="container">
                {/* title of page */}
                <Title title="our products" center="true" />
                {/* products filter */}
                <ProductFilter />

                {/* total count */}
                <div className="row">
                  <div className="col-10 mx-auto">
                    <h6 className="text-title">
                      total products: {filteredProducts.length}
                    </h6>
                  </div>
                </div>
                {/* end of total count */}

                {/* products */}
                <div className="row py-5">
                  {filteredProducts.length === 0? (
                    <div className="col text-title text-center">
                      sorry, no items matched your search
                    </div>
                  ):(
                    filteredProducts.map(product =>{
                      return <Product key={product.id} product={product} />
                    })
                  )}
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    );
}
