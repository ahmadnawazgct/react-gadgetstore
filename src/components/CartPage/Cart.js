import React from 'react'
import Title from '../Title';
import CartList from '../CartPage/CartList';
import CartColumns from '../CartPage/CartColumns';
import CartTotals from '../CartPage/CartTotals';

export default function Cart({history}) {
    return (
      <section className="py-5">
        <div className="container">
          {/*title */}
          <Title title="your cart items" center="true" />
        </div>
        {/* cart columns */}
        <CartColumns />
        {/* cart list */}
        <CartList />
        {/* cart totals */}
        <CartTotals history={history} />
      </section>
    );
}
