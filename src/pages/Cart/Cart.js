import React, { useEffect, useState } from 'react';
import CartList from '../../components/Cart/CartList/CartList';
import LaterShop from '../../components/Cart/LaterShop/LaterShop';
import { API } from '../../config';
import './Cart.scss';

const MOCK_API = '/data/cartMockData.json';

const Cart = () => {
  const [selectCart, setSelectCart] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [empty, setEmpty] = useState(true);

  const totalCount = cartItems.reduce((acc, cur) => (acc += cur.quantity), 0);
  const totalPrice = cartItems.reduce(
    (acc, cur) => (acc += cur.price * cur.quantity),
    0
  );

  // 백엔드용
  useEffect(() => {
    fetch(`${API.USER}/cart`, {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3fQ.yl6fSLkA5B_Kni5GMCwe_Y5zgTo2Knf8x8ObpniI-KI',
      },
    })
      .then(res => res.json())
      .then(result => {
        if (result.length === 0) {
          setEmpty(true);
        } else {
          setEmpty(false);
          setCartItems(result.result);
        }
      });
  }, []);

  // // mockdata 용
  // useEffect(() => {
  //   fetch(MOCK_API, {
  //     method: 'get',
  //     headers: {
  //       Authorization: 'Bearer token',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  //       if (result.length === 0) {
  //         setEmpty(true);
  //       } else {
  //         setEmpty(false);
  //         setCartItems(result);
  //       }
  //     });
  // }, []);

  const handleDeleteItem = cartItem => {
    setCartItems(cartItems =>
      cartItems.filter(item => item.cart_id !== cartItem.cart_id)
    );
  };

  const handleResetItem = () => {
    setCartItems([]);
    setEmpty(true);
  };

  const handleIncreaseCartItem = cartItem => {
    setCartItems(cartItems =>
      cartItems.map(item => {
        if (item.cart_id === cartItem.cart_id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return item;
      })
    );
  };

  const handleDecreaseCartItem = cartItem => {
    setCartItems(cartItems =>
      cartItems.map(item => {
        if (item.cart_id === cartItem.cart_id) {
          const quantity = cartItem.quantity - 1;
          return { ...cartItem, quantity: quantity < 0 ? 0 : quantity };
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
        <div className={`tabs ${selectCart ? 'cart' : 'latershop'}`}>
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
