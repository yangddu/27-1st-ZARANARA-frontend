import { Link } from 'react-router-dom';
import './Product.scss';

function Product({ productInfo }) {
  return (
    <li className="productItem">
      <Link to="/" className="link">
        <div className="imgBox">
          <button className="cartButton">
            <span className="cartAdd">장바구니에 담기</span>
          </button>
          <img src={productInfo.image} alt="velvet" />
        </div>
        <div className="productinfo">
          <h3 className="title">{productInfo.name}</h3>
          <h3 className="price">{productInfo.price}원</h3>
        </div>
      </Link>
    </li>
  );
}

export default Product;
