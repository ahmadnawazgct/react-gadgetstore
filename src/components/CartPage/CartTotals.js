import React from 'react';
import { ProductConsumer } from '../context';
import PayPalBtn from '../CartPage/PayPallBtn';

export default function CartTotals({ history }) {
    return (
      <div className="container">
        <div children="row">
          <ProductConsumer>
          {value => {
          const {cartTotal,cartSubTotal,clearCart,cartTax} = value;
            return (
              <div className="col text-center text-title my-4">
                <button
                  type="button"
                  className="btn btn-outline-danger text-capitalize mb-4"
                  onClick={clearCart}
                >
                clear cart
                </button>
                <h3>subtotal: ${cartSubTotal}</h3>
                <h3>tax: ${cartTax}</h3>
                <h3>total: ${cartTotal}</h3>
                <PayPalBtn
                  history={history}
                  cartTotal={cartTotal}
                  clearCart={clearCart}
                />
            </div>
          );
        }}
      </ProductConsumer>
    </div>
  </div>
  );
}
