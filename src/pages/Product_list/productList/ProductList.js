import React, { useState, useEffect } from 'react';
import ProductItems from '../ProductItems/ProductItems';

import './ProductList.scss';
import FilterAside from '../FilterAside/FilterAside';

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [isFilterOn, setIsFilterOn] = useState(false);

  useEffect(() => {
    fetch('/data/productListData.json')
      .then(res => res.json())
      .then(result => setProductList(result));
  }, []);

  const handleFilter = () => {
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
          <button className="productFilter" onClick={handleFilter}>
            + 필터
          </button>
        </div>
      </section>
      <section className="productContainer">
        <ProductItems productList={productList} />
      </section>
      <FilterAside
        isFilterOn={isFilterOn}
        handleFilter={handleFilter}
        handleFilterLowerPrice={handleFilterLowerPrice}
        handleFilterTopPrice={handleFilterTopPrice}
      />
    </main>
  );
}

export default ProductList;
