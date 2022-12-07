import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";

import { toggleToken, editToken } from "../../redux/tokensSlice";

import s from "./crypto-item.module.sass";

const CryptoItem = (props) => {
  const dispatch = useDispatch();

  const viewToken = () => {
    dispatch(toggleToken(props.id));
    props.openViewModal();
  };

  const isEdit = () => {
    dispatch(editToken(props.id));
    props.openEditModal();
  };

  return (
    <div className={s.item}>
      <button
        onClick={viewToken}
        className={classNames(s.eye, props.isView && s.isView)}
      >
        <img alt="eye" className={s.picture} src="./view.svg" />
      </button>
      <button className={s.button}>
        <img
          src={props.src}
          alt="./search.svg"
          className={s.item_picture}
          id={props.id}
        />
        {props.name}
      </button>
      <button onClick={isEdit} className={s.button_edit}>
        <img src="../edit.svg" alt="pen" className={s.picture_edit} />
        Edit token
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
  openEditModal: PropTypes.func,
};

export default CryptoItem;
