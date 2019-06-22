import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductConsumer } from './context';

export default function Sidebar() {
  return(
    <ProductConsumer>
      {value =>{
        const { Links, sidebarOpen, handleSidebar } = value;
        return(
          <SideWrapper show={sidebarOpen}>
            {Links.map(link=>{
              return (
                <ul key={link.id}>
                  <li>
                    <Link
                      to={link.path}
                      onClick={handleSidebar}
                      className="sidebar-link"
                    >
                      {link.text}
                    </Link>
                  </li>
                </ul>
              );
            })}
          </SideWrapper>
        )
      }}
    </ProductConsumer>
  )
    
}
const SideWrapper = styled.nav`
  position: fixed;
  top: 59.5;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  border-right: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${props => (props.show ? "translateX(0%)" : "translateX(-100%)")};
  ul {
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link {
    display: block;
    padding: 0.5rem 1.5rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    font-size: 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
  }
  .sidebar-link:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 20rem;
  }
`;