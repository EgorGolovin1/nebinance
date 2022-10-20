import React from "react";

import CryptoItem from "../crypto-item/crypto-item";

import "./list-item.sass";

const ListItem = () => {
  return (
    <div className="crypto-list">
      <CryptoItem />
      <CryptoItem />
      <CryptoItem />
      <CryptoItem />
      <CryptoItem />
      <img src="./lightning.svg" alt="lightning" className="item_back" />
      <img src="./lightning.svg" alt="lightning" className="item_back right" />
    </div>
  );
};

export default ListItem;
