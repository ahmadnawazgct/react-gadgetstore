import React from "react";
import Hero from '../Hero';
import contactBcg from '../images/contactBcg.jpeg';
import Contact from '../Contact';
export default function ContactPage() {
  return (
    <>
      <Hero img={contactBcg} />
      <Contact />
    </>
  );
}
