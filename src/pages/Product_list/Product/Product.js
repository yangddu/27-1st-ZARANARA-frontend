import { Link } from 'react-router-dom';
import './Product.scss';

function Product({ productInfo, handleAddCart }) {
  return (
    <li className="productItem">
      <div className="wrapper">
        <div className="imgBox">
          <button
            className="cartButton"
            onClick={() => handleAddCart(productInfo)}
          >
            장바구니에 담기
          </button>
          <Link to="/" className="link">
            <img src={productInfo.image} alt="velvet" />
          </Link>
        </div>
      </div>
      <div className="productinfo">
        <h3 className="title">{productInfo.name}</h3>
        <h3 className="price">{productInfo.price}원</h3>
      </div>
    </li>
  );
}

export default Product;
