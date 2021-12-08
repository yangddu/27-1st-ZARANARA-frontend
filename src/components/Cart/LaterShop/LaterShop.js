import React from 'react';

import './LaterShop.scss';

const EMPTY_LATER_SHOPPING_MENT =
  '나중에 쇼핑하기 위해 저장한 상품 목록이 비어 있습니다.';

const LaterShop = () => <p className="ment">{EMPTY_LATER_SHOPPING_MENT}</p>;

export default LaterShop;
