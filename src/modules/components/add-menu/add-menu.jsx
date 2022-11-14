import React from "react";
import PropTypes from "prop-types";

import "./add-menu.sass";

const AddMenu = ({ openModal }) => {
  return (
    <div className="banner-wrapper">
      <h3 className="banner_text">The future is already here</h3>
      <h1 className="banner_text">There is never too much freedom</h1>
      <h2 className="banner_text">Your money. Your choice</h2>
      <button onClick={openModal} className="add_button">
        Add new Coin
      </button>
    </div>
  );
};

AddMenu.propTypes = {
  openModal: PropTypes.func,
};

export default AddMenu;