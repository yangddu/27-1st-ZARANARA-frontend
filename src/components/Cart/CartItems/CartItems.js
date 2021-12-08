import React from 'react';
import CartItem from '../CartItem/CartItem';

import './CartItems.scss';

const CartItems = ({
  cartItems,
  onDeleteItem,
  onResetItem,
  onIncreaseCartItem,
  onDecreaseCartItem,
  api,
}) => {
  const handleResetItem = () => {
    fetch(`${api.USER}/cart`, {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3fQ.yl6fSLkA5B_Kni5GMCwe_Y5zgTo2Knf8x8ObpniI-KI',
      },
    })
      .then(res => res.json())
      .then(result => {
        if (result.MESSAGE === 'ALL_DELETED') onResetItem();
        else if (result.MESSAGE === 'DOES_NOT_EXIST')
          alert('장바구니가 비었습니다.');
      })
      .catch(error => alert(error));
  };

  return (
    <article className="cartContentLeft">
      <ul className="cartItems">
        {cartItems.map(item => (
          <CartItem
            key={item.cart_id}
            itemInfo={item}
            onDeleteItem={onDeleteItem}
            onIncreaseCartItem={onIncreaseCartItem}
            onDecreaseCartItem={onDecreaseCartItem}
            api={api}
          />
        ))}
      </ul>
      <div className="contentFooter">
        <button className="clearCartButton" onClick={() => handleResetItem()}>
          장바구니 비우기
        </button>
      </div>
    </article>
  );
};

export default CartItems;
