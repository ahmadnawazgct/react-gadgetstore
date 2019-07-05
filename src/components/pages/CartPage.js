import React from 'react';
import Hero from '../Hero';
import cartBcg from '../images/storeBcg.jpeg';
import CartSection from '../CartPage/Cart';


export default function CartPage(props){
    return(
        <>
            <Hero img={cartBcg} />
            <CartSection history={props.history} />
        </>
    )
}