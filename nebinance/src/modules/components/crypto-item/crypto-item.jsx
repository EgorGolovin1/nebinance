import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";

import { toggleToken, toggleEditToken } from "../../redux/tokensSlice";

import "./crypto-item.sass";

const CryptoItem = ({ src, id, name, isView, openModal }) => {
  const dispatch = useDispatch();

  const doView = () => {
    dispatch(toggleToken(id));
    openModal();
  };

  const doEdit = () => {
    dispatch(toggleEditToken(id));
    openModal();
  };

  return (
    <div className="item gradient-border  ">
      <button
        onClick={() => doView()}
        className={classNames("eye", { isView: isView })}
      >
        <img alt="eye" className="picture" src="./view.svg" />
      </button>
      <button className="item_button">
        <img src={src} alt="./search.svg" className="item_picture" id={id} />
        {name}
      </button>
      <button onClick={() => doEdit()} className="item_button-edit">
        <img
          src="./edit.svg"
          alt="edit"
          className="item_picture-edit"
          id={id}
        />
        Edit coin
      </button>
    </div>
  );
};

CryptoItem.propTypes = {
  src: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  isView: PropTypes.bool,
  openModal: PropTypes.func,
};

export default CryptoItem;
