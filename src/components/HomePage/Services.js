import React, { Component } from 'react'
import { FaDolly, FaDollarSign, FaRedo } from 'react-icons/fa';
import styled from 'styled-components';

export default class Services extends Component {
    state = {
        services:[
        {
            id: 1,
            icon: <FaDolly />,
            title: "free shipping",
            text:"It is a long established fact that a reader will be distracted by the readable content of a page"
        },
                        
        {
            id: 2,
            icon: <FaRedo />,
            title: "30 days return policy",
            text:"It is a long established fact that a reader will be distracted by the readable content of a page"
        },
        {
            id: 3,
            icon: <FaDollarSign />,
            title: "secure payment",
            text:"It is a long established fact that a reader will be distracted by the readable content of a page"
        }
    ]
}
                    
    render() {
        return (
        <ServiceWrapper className="py-3">
            <div className="container">
                <div className="row">
                {this.state.services.map(item=>{
                return(
                <div className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3" key={item.id}>
                    <div className="service-icon">{item.icon}</div>
                    <div className="mt-3 text-capitalize">{item.title}</div>
                    <div className="mt-3">{item.text}</div>
                </div>
                
                )
            })}
                </div>
            </div>
        </ServiceWrapper>
                    )                    }
                }
const ServiceWrapper = styled.div`
background:rgba(95,183,234, 0.5);
.service-icon{
    font-size:2.5rem;
    color:var(--primaryColor);
}
p{
    color:var(--darkGrey);
}
`;