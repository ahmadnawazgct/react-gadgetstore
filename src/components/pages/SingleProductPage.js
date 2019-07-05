import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Hero';
import { ProductConsumer } from '../context';
import singleProductBcg from '../images/singleProductBcg.jpeg';

export default function SingleProductPage() {
    return (
    <>
        <Hero img={ singleProductBcg } title="single product" />
        <ProductConsumer>
            { value => {
                const { singleProduct, addToCart, loading } = value;
                if(loading) {
                console.log("hello from loading");
                return <h1>Hello from Single Product Page</h1>;
                }
            const { id, image, description, price, company,title } = singleProduct;
            return (
            <section className="py-5">
                <div className="container">
                <div className="row">
                    <div className="col-10 mx-auot col-sm-8 col-md-6 my-3">
                    <img
                        src={`/${image}`}
                        alt="single product"
                        className="img-fluid"
                    />
                    </div>
                    <div className="col-10 mx-auot col-sm-8 col-md-6 my-3">
                        <h5 className="text-title mb-4">{title}</h5>
                        <h5 className="text-capitalize text-muted mb-4">company: {company}</h5>
                        <h5 className="text-capitalize text-main mb-4">price: {price}</h5>
                        <p className="text-capitalize text-title mb-3">some info about the product</p>
                        <p>{description}</p>
                        <button
                            type="button"
                            className="main-link"
                            onClick={()=>addToCart(id)}
                            style={{margin:"0.75rem"}}
                        >
                            add to cart
                        </button>
                        <Link 
                            to ="/products" 
                            className="main-link"
                            style={{margin:"0.75rem"}}
                        >back to products
                        </Link>
                    </div>
                  </div>
                </div>
              </section>
            );
            }}
        </ProductConsumer>
        
    </>
    );
}