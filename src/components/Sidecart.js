import React from "react";
import { ProductConsumer } from './context';
import styled from 'styled-components';

export default function Sidecart() {
  return <ProductConsumer>
    {value =>{
      const { cartOpen, closeCart} = value;
        return(
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <p>cart Items</p>
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
`;