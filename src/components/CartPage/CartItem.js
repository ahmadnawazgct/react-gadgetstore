import React from 'react';
import { FaTrash, FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa';


export default function CartItem({cartItem, increment, decrement, removeItem}) {
    const { image, title, price, count,id, total } = cartItem;
    return (
      <div className="row mt-3 mt-lg-0 text-capitalize text-center align-items-center">
        {/*start of image */}
        <div className="col-10 mx-auto col-lg-2 pb-2">
          <img src={image} width="60" alt="product" />
        </div>
        {/* end of image */}

        {/*start of title */}
        <div className="col-10 mx-auto col-lg-2 pb-2">
          <span className="d-lg-none">product: </span>
          {title}
        </div>
        {/* end of title */}

        {/*start of price */}
        <div className="col-10 mx-auto col-lg-2 pb-2">
          <span className="d-lg-none">price: $</span>
          {price}
        </div>
        {/* end of price */}

        {/*start of coutn controls */}
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <div>
              <FaChevronCircleDown
                className=" cart-icon text-primary"
                onClick={() => decrement(id)}
              />
              <span className="text-title text-muted mx-3">{count}</span>
              <FaChevronCircleUp
                className=" cart-icon text-primary"
                onClick={() => increment(id)}
              />
            </div>
          </div>
        </div>
        {/* end of count controls */}

        {/*start of remove item */}
        <div className="col-10 mx-auto col-lg-2">
          <FaTrash
            className="text-danger cart-icon"
            onClick={() => removeItem(id)}
          />
        </div>
        {/* end of remove item */}

        {/* start of item total */}
        <div className="col-10 mx-auto col-lg-2">
           <strong className="text-muted">item total: ${total}</strong> 
        </div>
        {/* end of item total */}
      </div>
    );
}
