import React from 'react'
import { Link } from 'react-router-dom';
import Title from '../Title';
import Product from '../Product';
import { ProductConsumer } from '../context/context';

export default function Featured() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="featured products" center="true" />
                <div className="row my-5">
                    <ProductConsumer>
                        {value =>{
                            const { featuredProducts } = value;
                            console.log(featuredProducts);
                            return(
                                featuredProducts.map(product=>(
                                <Product key={product.id} product={product} />
                                ))
                            )
                        }}
                    </ProductConsumer>
                </div>
                <div className="row mt-5 text-center">
                    <div className="col">
                        <Link to="/products" className="main-link">
                            our products
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
