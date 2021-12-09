import React from 'react';
import { Link } from 'react-router-dom';
import './NavCartItem.scss';

const NavCartItem = ({ itemInfo }) => {
  return (
    <li className="navCartItem">
      <div className="photoWrapper">
        <Link to="/item/" className="photo">
          <img alt={itemInfo.name} src={itemInfo.image} />
        </Link>
      </div>
      <div className="details">
        <Link to="/item/" className="name">
          {itemInfo.name}
        </Link>
        <div className="priceQuantity">
          <span className="totalPrice">
            {(itemInfo.price * itemInfo.quantity).toLocaleString()}원
          </span>
        </div>
        <span className="dimensions">{itemInfo.size}</span>
      </div>
    </li>
  );
};

export default NavCartItem;
