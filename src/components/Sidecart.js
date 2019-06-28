import React from "react";
import { ProductConsumer } from './context';
import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function Sidecart() {
  return <ProductConsumer>
    {value =>{
      const { cartOpen, closeCart, cart, cartTotal } = value;
        return(
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <ul>
              { cart.map(item=>{
                return (
                  <li key={item.id} className="cart-item mb-4">
                    <img
                      src={`../${item.image}`}
                      with="35"
                      height="45"
                      alt="item pic"
                    />
                    <div className="mt-3">
                      <h6 className="text-uppercase">
                        {item.title}
                      </h6>
                      <h6 className="text-capitalize text-title">
                        quantity: {item.count}
                      </h6>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4 className="text-capitalize text-main">
            cart total: {cartTotal}</h4>
            <div className="text-center my-3">
              <Link to="/cart" className="main-link" >
                cart page
              </Link>
            </div>
          </CartWrapper>
        )
    }}
  </ProductConsumer>
}
const CartWrapper = styled.div`
position:fixed;
top:59.5;
right:0;
width:100%;
height:100%;
background:var(--mainGrey);
z-index:1;
border-left:4px solid var(--primaryColor);
transition:var(--mainTransition);
transform:${props =>props.show?'translateX(0%)':'translateX(100%)'};
@media (min-width:576px) {
  width:20rem;
}
overflow:scroll;
padding:2rem;
ul {
  padding:0 !important;
}
.cart-item{
  list-style-type:none;
}
`;