import React from 'react';
import Info from '../AboutPage/Info';
import Hero from '../Hero';
import aboutBcg from '../images/aboutBcg.jpeg';

export default function AboutPage() {
    return(
        <>
            <Hero img={aboutBcg} />
            <Info  />
        </>
    )
}