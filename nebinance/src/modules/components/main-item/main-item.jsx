import React from "react";

import "./main-item.sass";

const MainItem = () => {
  return (
    <div className="main-item">
      <img
        src="./crypto-icons/bitcoin.svg"
        alt="token"
        className="main-item_picture"
      />
      <div className="info-wrapper">
        <div className="main-item_name">Bitcoin</div>
        <div className="main-item_price">
          Market price : 100 $<div className="main-item_info"> 5%</div>
        </div>
      </div>
    </div>
  );
};

export default MainItem;
