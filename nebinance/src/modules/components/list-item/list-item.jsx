import React from "react";
import PropTypes from "prop-types";

import CryptoItem from "../crypto-item/crypto-item";

import "./list-item.sass";

const ListItem = ({ tokens, openModal }) => {
  return (
    <div className="crypto-list">
      {tokens.map((item) => (
        <CryptoItem
          openModal={openModal}
          key={item.id}
          src={item.src}
          id={item.id}
          name={item.name}
          abbreviation={item.abbreviation}
          isView={item.isView}
          isEditing={item.isEditing}
        />
      ))}
      <img src="./lightning.svg" alt="lightning" className="item_back" />
      <img src="./lightning.svg" alt="lightning" className="item_back right" />
    </div>
  );
};
ListItem.propTypes = {
  tokens: PropTypes.array,
  openModal: PropTypes.func,
};

export default ListItem;
