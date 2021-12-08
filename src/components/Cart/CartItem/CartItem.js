import React from 'react';
import { Link } from 'react-router-dom';
import { GoPlusSmall } from 'react-icons/go';
import { BiMinus } from 'react-icons/bi';
import { IoCloseSharp } from 'react-icons/io5';
import './CartItem.scss';

const CartItem = ({
  itemInfo,
  onDeleteItem,
  onIncreaseCartItem,
  onDecreaseCartItem,
  api,
}) => {
  const handleDeleteItem = itemInfo => {
    fetch(`${api.USER}/cart\?cartId\=${itemInfo.cart_id}`, {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3fQ.yl6fSLkA5B_Kni5GMCwe_Y5zgTo2Knf8x8ObpniI-KI',
      },
    })
      .then(res => res.json())
      .then(
        result => result.MESSAGE === 'ITEM_DELETED' && onDeleteItem(itemInfo)
      )
      .catch(error => alert(error));
  };

  const handleIncreaseCartItem = itemInfo => {
    fetch(`${api.USER}/cart`, {
      method: 'PATCH',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3fQ.yl6fSLkA5B_Kni5GMCwe_Y5zgTo2Knf8x8ObpniI-KI',
      },
      body: JSON.stringify({
        cart_id: itemInfo.cart_id,
        quantity: itemInfo.quantity + 1,
      }),
    })
      .then(res => res.json())
      .then(result => {
        result.MESSAGE === 'SUCCESS' && onIncreaseCartItem(itemInfo);
      })
      .catch(error => alert(error));
  };

  const handleDecreaseCartItem = itemInfo => {
    fetch(`${api.USER}/cart`, {
      method: 'PATCH',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3fQ.yl6fSLkA5B_Kni5GMCwe_Y5zgTo2Knf8x8ObpniI-KI',
      },
      body: JSON.stringify({
        cart_id: itemInfo.cart_id,
        quantity: itemInfo.quantity - 1,
      }),
    })
      .then(res => res.json())
      .then(
        result => result.MESSAGE === 'SUCCESS' && onDecreaseCartItem(itemInfo)
      )
      .catch(error => alert(error));
  };

  return (
    <li className="cartItem">
      <div className="photoWrapper">
        <Link to="/item/" className="photo">
          <img alt={itemInfo.name} src={itemInfo.image} />
        </Link>
        <div className="itemAction">
          <span className="actionText">나중에 쇼핑하기</span>
          <div className="actionRight">
            <button
              className="actionButton"
              onClick={() => handleDeleteItem(itemInfo)}
            >
              <IoCloseSharp className="deleteButton" />
            </button>
          </div>
        </div>
      </div>
      <div className="details">
        <Link to="/item/" className="name">
          {itemInfo.name}
        </Link>
        <div className="priceQuantity">
          <span className="totalPrice">
            {(itemInfo.price * itemInfo.quantity).toLocaleString()}원
          </span>
          <div className="quantity">
            <button
              className="countButton decrease"
              onClick={() => handleDecreaseCartItem(itemInfo)}
              disabled={!(itemInfo.quantity > 1)}
            >
              <BiMinus className="minusButton" />
            </button>
            <input
              className="countInput"
              type="text"
              name="amount"
              value={itemInfo.quantity}
            />
            <button
              className="countButton increase"
              onClick={() => handleIncreaseCartItem(itemInfo)}
            >
              <GoPlusSmall className="plusButton" />
            </button>
          </div>
        </div>
        <span className="dimensions">{itemInfo.size}</span>
      </div>
    </li>
  );
};

export default CartItem;
