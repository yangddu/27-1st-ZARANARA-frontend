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
  API,
}) => {
  const handleDeleteItem = itemInfo => {
    fetch(`${API}`, {
      method: 'delete',
      headers: {
        Authorization: 'Bearer token',
      },
    })
      .then(res => res.json())
      .then(
        result =>
          (result.MESSAGE = 'DELETED' ? onDeleteItem(itemInfo.id) : null)
      )
      .catch(error => alert(error));
  };

  const handleIncreaseCartItem = () => {
    fetch(`${API}`, {
      method: 'patch',
      headers: {
        Authorization: 'Bearer token',
      },
      body: JSON.stringify({
        amount: itemInfo.amount + 1,
      }),
    })
      .then(res => res.json())
      .then(
        result =>
          (result.MESSAGE = 'SUCCESS' ? onIncreaseCartItem(itemInfo.id) : null)
      )
      .catch(error => alert(error));
  };

  const handleDecreaseCartItem = () => {
    fetch(`${API}`, {
      method: 'patch',
      headers: {
        Authorization: 'Bearer token',
      },
      body: JSON.stringify({
        amount: itemInfo.amount - 1,
      }),
    })
      .then(res => res.json())
      .then(
        result =>
          (result.MESSAGE = 'SUCCESS' ? onDecreaseCartItem(itemInfo.id) : null)
      )
      .catch(error => alert(error));
  };

  return (
    <li className="cartItem">
      <div className="photoWrapper">
        <Link to="/item/" className="photo">
          <img alt={itemInfo.name} src={itemInfo.url} />
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
            {(itemInfo.price * itemInfo.amount).toLocaleString()}원
          </span>
          <div className="quantity">
            <button
              className="countButton decrease"
              onClick={handleDecreaseCartItem}
              disabled={!(itemInfo.amount > 1)}
            >
              <BiMinus className="minusButton" />
            </button>
            <input
              className="countInput"
              type="text"
              name="amount"
              value={itemInfo.amount}
            />
            <button
              className="countButton increase"
              onClick={handleIncreaseCartItem}
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
