import React from 'react';
import './DetailModal.scss';

const DetailModal = ({ handleModal }) => (
  <div>
    <div className="detailModal">
      <div className="modalContainer">
        <div className="wrapper">
          <button className="modalButton" onClick={handleModal}>
            X
          </button>
          <ul className="modalCon">
            <li>
              <div className="modalConHeader">크기</div>
            </li>
            <li>
              <div>높이 : </div>
              <div>31.50cm</div>
            </li>
            <li>
              <div>가로 폭 : </div>
              <div>18.50cm</div>
            </li>
            <li />
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default DetailModal;
