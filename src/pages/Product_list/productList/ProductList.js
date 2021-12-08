import React, { useState, useEffect } from 'react';
import ProductItems from '../ProductItems/ProductItems';
import FilterAside from '../FilterAside/FilterAside';
import { API } from '../../../config';

import './ProductList.scss';

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [isFilterOn, setIsFilterOn] = useState(false);

  useEffect(() => {
    fetch('/data/productListData.json')
      .then(res => res.json())
      .then(result => setProductList(result));
  }, []);

  // useEffect(() => {
  //   fetch(`${API.PRODUCT}\?categoryId\=${6}`)
  //     .then(res => res.json())
  //     .then(result => setProductList(result.results));
  // }, []);

  const handleAddCart = productInfo => {
    fetch(`${API.USER}/cart`, {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3fQ.yl6fSLkA5B_Kni5GMCwe_Y5zgTo2Knf8x8ObpniI-KI',
      },
      body: JSON.stringify({
        id: productInfo.id,
      }),
    })
      .then(res => res.json())
      .then(
        result =>
          (result.MESSAGE = 'SUCCESS' && alert('장바구니에 담겼습니다.'))
      )
      .catch(error => alert(error));
  };

  const handleOpenFilterAside = () => {
    setIsFilterOn(!isFilterOn);
  };

  const handleFilterTopPrice = () => {
    const topPrice = [...productList].sort((a, b) => b.price - a.price);
    setProductList(topPrice);
  };

  const handleFilterLowerPrice = () => {
    const topPrice = [...productList].sort((a, b) => a.price - b.price);
    setProductList(topPrice);
  };

  return (
    <main className="productList">
      <section className="filterContainer">
        <div className="filterWrapper">
          <span className="productCount">{productList.length}제품</span>
          <button className="productFilter" onClick={handleOpenFilterAside}>
            + 필터
          </button>
        </div>
      </section>
      <section className="productContainer">
        <ProductItems productList={productList} handleAddCart={handleAddCart} />
      </section>
      <FilterAside
        isFilterOn={isFilterOn}
        handleOpenFilterAside={handleOpenFilterAside}
        handleFilterLowerPrice={handleFilterLowerPrice}
        handleFilterTopPrice={handleFilterTopPrice}
      />
    </main>
  );
}

export default ProductList;
