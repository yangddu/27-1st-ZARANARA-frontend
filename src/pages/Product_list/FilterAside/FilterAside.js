import React, { useState, useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import './FilterAside.scss';

function FilterAside({
  isFilterOn,
  handleFilter,
  handleFilterLowerPrice,
  handleFilterTopPrice,
}) {
  return (
    <aside className={isFilterOn ? 'filterAside active' : 'filterAside'}>
      <div className="header">
        <span className="title">필터</span>
        <button className="closeButton" onClick={() => handleFilter()}>
          <IoCloseSharp />
        </button>
        <form className="buttonContainer">
          <div>
            <input
              onClick={() => {
                handleFilterTopPrice();
              }}
              type="radio"
              id="topPrice"
              name="priceFilter"
              value="topPrice"
              checked
            />
            <label for="huey">높은 순</label>
          </div>
          <div>
            <input
              onClick={() => {
                handleFilterLowerPrice();
              }}
              type="radio"
              id="lowerPrice"
              name="priceFilter"
              value="lowerPrice"
            />
            <label for="dewey">낮은 순</label>
          </div>
        </form>
      </div>
      <div className="bottom" />
    </aside>
  );
}

export default FilterAside;
