import React, { useEffect, useState } from 'react';
import CartList from './CartList/CartList';
import LaterShop from './LaterShop/LaterShop';

import './Cart.scss';

const MOCK_API = '/data/cartMockData.json';

const Cart = () => {
  const [selectCart, setSelectCart] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [empty, setEmpty] = useState(true);

  const totalCount = cartItems.reduce((a, c) => (a += c.amount), 0);
  const totalPrice = cartItems.reduce((a, c) => (a += c.price * c.amount), 0);

  useEffect(() => {
    fetch(MOCK_API, {
      method: 'get',
      headers: {
        Authorization: 'Bearer token',
      },
    })
      .then(res => res.json())
      .then(result => {
        if (result.length === 0) {
          setEmpty(true);
        } else {
          setEmpty(false);
          setCartItems(result);
        }
      });
  }, []);

  const handleDeleteItem = cartItem => {
    setCartItems(cartItems =>
      cartItems.filter(item => item.id !== cartItem.id)
    );
  };

  const handleResetItem = () => {
    setCartItems([]);
    setEmpty(true);
  };

  const handleIncreaseCartItem = cartItem => {
    setCartItems(cartItems =>
      cartItems.map(item => {
        if (item.id === cartItem.id) {
          return { ...cartItem, count: cartItem.count + 1 };
        }
        return item;
      })
    );
  };

  const handleDecreaseCartItem = cartItem => {
    setCartItems(cartItems =>
      cartItems.map(item => {
        if (item.id === cartItem.id) {
          const count = cartItem.count - 1;
          return { ...cartItem, count: count < 0 ? 0 : count };
        }
        return item;
      })
    );
  };

  const handleTogglePage = boolean => {
    setSelectCart(boolean);
  };

  return (
    <main className="mainContainer">
      <section className="tabContainer">
        <div className={selectCart ? 'tabs cart' : 'tabs latershop'}>
          <div className="transBox" />
          <button
            className="transButton cartButton"
            onClick={() => handleTogglePage(true)}
          >
            {`장바구니 (${totalCount})`}
          </button>
          <button
            className="transButton laterShoppingButton"
            onClick={() => handleTogglePage(false)}
          >
            나중에 쇼핑하기 (0)
          </button>
        </div>
      </section>
      <section className="cartContentContainer">
        <section className="cartContentWrapper">
          {selectCart ? (
            <CartList
              empty={empty}
              cartItems={cartItems}
              onDeleteItem={handleDeleteItem}
              onResetItem={handleResetItem}
              onIncreaseCartItem={handleIncreaseCartItem}
              onDecreaseCartItem={handleDecreaseCartItem}
              API={MOCK_API}
              totalCount={totalCount}
              totalPrice={totalPrice}
            />
          ) : (
            <LaterShop />
          )}
        </section>
      </section>
    </main>
  );
};

export default Cart;
