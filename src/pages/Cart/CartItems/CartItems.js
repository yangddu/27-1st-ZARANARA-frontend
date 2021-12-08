import React from 'react';
import CartItem from '../CartItem/CartItem';

import './CartItems.scss';

const CartItems = ({
  cartItems,
  onDeleteItem,
  onResetItem,
  onIncreaseCartItem,
  onDecreaseCartItem,
  API,
}) => {
  return (
    <article className="cartContentLeft">
      <ul className="cartItems">
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            itemInfo={item}
            onDeleteItem={onDeleteItem}
            onIncreaseCartItem={onIncreaseCartItem}
            onDecreaseCartItem={onDecreaseCartItem}
            API={API}
          />
        ))}
      </ul>
      <div className="contentFooter">
        <button className="clearCartButton" onClick={onResetItem}>
          장바구니 비우기
        </button>
      </div>
    </article>
  );
};

export default CartItems;
