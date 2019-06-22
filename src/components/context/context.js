import React, { Component } from 'react';
import LinkData from './LinkData';
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state ={
        cartOpen:false,
        sidebarOpen:false,
        cartItems:0,
        Links:LinkData,
        cart:[]
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