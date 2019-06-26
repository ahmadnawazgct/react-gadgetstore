import React from 'react';
import Hero from '../Hero';
import { Link } from 'react-router-dom';
import Services from '../HomePage/Services';
import Featured from "../HomePage/Featured";
export default function HomePage() {
    return(
        <>
            <Hero title="awesome gadgets" max="true">
                <Link 
                    to="/products" 
                    className="main-link" 
                    style={{margin:'2rem'}}
                >
                    our products</Link>
            </Hero> 
            <Services />
            <Featured />
        </>
    )
}