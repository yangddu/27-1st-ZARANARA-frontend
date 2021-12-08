import React from 'react';
import CartItems from '../CartItems/CartItems';
import Price from '../Price/Price';

const EMPTY_CART_MENT = '고객님의 장바구니가 비어 있습니다.';

const CartList = ({
  empty,
  cartItems,
  onDeleteItem,
  onResetItem,
  onIncreaseCartItem,
  onDecreaseCartItem,
  api,
  totalCount,
  totalPrice,
}) => {
  return empty ? (
    <p className="ment">{EMPTY_CART_MENT}</p>
  ) : (
    <>
      <CartItems
        cartItems={cartItems}
        onDeleteItem={onDeleteItem}
        onResetItem={onResetItem}
        onIncreaseCartItem={onIncreaseCartItem}
        onDecreaseCartItem={onDecreaseCartItem}
        api={api}
      />
      <Price totalCount={totalCount} totalPrice={totalPrice} />
    </>
  );
};

export default CartList;
