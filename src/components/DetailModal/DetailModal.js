import React from 'react';
import './DetailModal.scss';

const DetailModal = ({ openModal }) => (
  <div>
    <div className="detailModal">
      <div className="modalContainer">
        <div className="wrapper">
          <button className="modalButton" onClick={openModal}>
            X
          </button>
          <ul className="modalCon">
            <li className="modalConHeader">크기</li>
            <li className="modalContents">
              <span>가로 : </span>
              <span>30.50cm</span>
            </li>
            <li className="modalContents">
              <span>세로 : </span>
              <span>18.50cm</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default DetailModal;
