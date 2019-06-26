import React, { Component } from 'react';
import { socialData } from '../context/socialData';
import LinkData from './LinkData';
import { items } from './productData';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state ={
        cartOpen:false,
        sidebarOpen:false,
        Links:LinkData,
        socialLinks:socialData,
        cart:[],
        cartItems:0,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
        storeProducts:[],
        filteredProducts:[],
        featuredProducts:[],
        singleProduct:{},
        loading:true

    }
    handleSidebar=() =>{
        this.setState({
            sidebarOpen:!this.state.sidebarOpen
        })
    }
    handleCart=() =>{
        this.setState({
            cartOpen:!this.state.sidebarOpen
        })
    }
    closeCart=()=>{
        this.setState({
            cartOpen:false
        })
    }
    openCart=()=>{
        this.setState({
            cartOpen:true
        })
    }
    render(){
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handleCart:this.handleCart,
                handleSidebar:this.handleSidebar,
                closeCart:this.closeCart,
                openCart:this.openCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer};