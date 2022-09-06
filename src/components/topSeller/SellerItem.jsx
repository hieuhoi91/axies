import React from 'react';
import CheckIcon from '@mui/icons-material/Check';

const SellerItem = ({ item }) => {
  return (
    <div className="seller-item">
      <div className="seller-item-img">
        <img src={item.avatar} alt="" />
        <span className="seller-item-icon">
          <CheckIcon />
        </span>
      </div>
      <div className="seller-item-info">
        <a href="/">{item.name}</a>
        <span>
          {item.coin} {item.unit}
        </span>
      </div>
    </div>
  );
};

export default SellerItem;
