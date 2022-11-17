import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";

import { toggleToken } from "../../redux/tokensSlice";

import classes from "./crypto-item.module.sass";

const CryptoItem = (props) => {
  const dispatch = useDispatch();

  const viewToken = () => {
    dispatch(toggleToken(props.id));
    props.openViewModal();
  };

  return (
    <div className={classes.item}>
      <button
        onClick={() => viewToken()}
        className={classNames(classes.eye, props.isView && classes.isView)}
      >
        <img alt="eye" className={classes.picture} src="./view.svg" />
      </button>
      <button className={classes.button}>
        <img
          src={props.src}
          alt="./search.svg"
          className={classes.item_picture}
          id={props.id}
        />
        {props.name}
      </button>
    </div>
  );
};

CryptoItem.propTypes = {
  props: PropTypes.object,
  src: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  isView: PropTypes.bool,
  openViewModal: PropTypes.func,
};

export default CryptoItem;
