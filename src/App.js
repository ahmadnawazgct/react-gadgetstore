import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Sidecart from './components/Sidecart';
import Footer from './components/Footer';

import Home from './components/pages/HomePage';
import About from "./components/pages/AboutPage";
import Products from "./components/pages/ProductsPage";
import Contact from "./components/pages/ContactPage";
import SingleProduct from "./components/pages/SingleProductPage";
import Cart from "./components/pages/CartPage";
import Default from "./components/pages/DefaultPage";



function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Sidecart />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" exact component={SingleProduct} />
        <Route path="/cart" component={ Cart} />
        <Route component={ Default } />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

