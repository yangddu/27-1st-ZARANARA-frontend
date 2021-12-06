import { Link } from 'react-router-dom';

function Product({ productInfo }) {
  console.log(productInfo);
  return (
    <li>
      <Link to="/">
        <div className="screen">
          <div className="top" />
          <div className="botton">
            <div className="bottonlist">
              <span>장바구니에 담기</span>
            </div>
          </div>
          <img src={productInfo.url} alt="velvet" />
        </div>
        <div className="productinfo">
          <div className="productName">
            <h3>{productInfo.title}</h3>
          </div>
          <div className="productPrice">
            <h3>{productInfo.price}원</h3>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Product;
