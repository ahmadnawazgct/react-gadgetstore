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
        loading:false

    }
    componentDidMount(){
        this.setProdutcts(items);
    }
    setProdutcts=(products)=>{
        let storeProducts = products.map(item=>{
            const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
            const product = {id,...item.fields,image};
            return product
        })
    let featuredProducts = storeProducts.filter(product =>product.featured === true);
    this.setState({
        storeProducts,
        filteredProducts:storeProducts,
        featuredProducts,
        cart:this.getStorageCart(),
        singleProduct:this.getStorageProduct(),
        loading:false
    }, ()=> {
        this.addTotals();
    })
    }
    getStorageCart=()=>{
        let cart;
        if(localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem("cart"));
        } else {
            cart = [];
        }
        return cart;
    }
    getStorageProduct=()=>{
        return localStorage.getItem("singleProduct")?
        JSON.parse(localStorage.getItem("singleProduct")):{}
    }
    addToCart= id =>{
        let tempCart = [...this.state.cart ];
        let tempProducts = [ ...this.state.storeProducts ];
        let tempItem = tempCart.find(item =>item.id === id);
        if(!tempItem) {
            tempItem = tempProducts.find(item => item.id === id);
            let total = tempItem.price;
            let cartItem = {...tempItem,count:1, total };
            tempCart = [...tempCart, cartItem ];
        } else {
            tempItem.count++;
            tempItem.total = tempItem.price * tempItem.count;
            tempItem.total = parseFloat(tempItem.total.toFixed(2));
        }console.log(tempCart);
        

        this.setState(()=>{
            return { cart: tempCart }
        }, ()=>{
            this.addTotals();
            this.synStorage();
            this.openCart();
        })
    }
    setSingleProduct=id=>{
        console.log("single product called", id);
        
        let product = this.state.storeProducts.find(item =>item.id === id);
        localStorage.setItem("singleProduct", JSON.stringify(product));

        this.setState({
            singleProduct:{...product},
            loading:false
        })
}
    getTotals=()=>{
        let subTotal = 0;
        let cartItems = 0;
        this.state.cart.forEach(item =>{
            subTotal +=item.total;
            cartItems += item.count;
        })
        subTotal = parseFloat(subTotal.toFixed(2));
        let tax =  subTotal * 0.2;
        tax = parseFloat(tax.toFixed(2));
        let total = subTotal + tax;
        total = parseFloat(total.toFixed(2));
        return { cartItems, subTotal, tax, total }
    }
    addTotals=()=>{
        const totals = this.getTotals();
        this.setState({
            cartItems: totals.cartItems,
            cartSubTotal: totals.subTotal,
            cartTax: totals.tax,
            cartTotal: totals.total
        });
    }
    synStorage=()=>{
    localStorage.setItem('cart', JSON.stringify(this.state.cart));
    }
    handleSidebar=() =>{
        this.setState({
            sidebarOpen:!this.state.sidebarOpen
        })
    }
    handleCart=() =>{
        this.setState({
            cartOpen:!this.state.cartOpen
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
                openCart:this.openCart,
                addToCart:this.addToCart,
                setSingleProduct:this.setSingleProduct
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer};