import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import { toggleToken, editToken } from "../../redux/tokensSlice";
import { tokenSelector } from "../../redux/selectors";

import s from "./crypto-item.module.sass";

const CryptoItem = ({
  id,
  openViewModal,
  openEditModal,
  src,
  name,
  isView,
}) => {
  const dispatch = useDispatch();
  const tokens = useSelector(tokenSelector);

  const viewToken = () => {
    dispatch(toggleToken(id));
    openViewModal();
  };

  const isEdit = () => {
    dispatch(editToken(id));
    openEditModal();
  };

  return (
    <div className={s.item}>
      <button
        onClick={viewToken}
        className={classNames(s.eye, isView && s.isView)}
      >
        <img alt="eye" className={s.picture} src="./view.svg" />
      </button>
      <Link
        className={s.button}
        to={`/items/${tokens.findIndex((el) => el.id === id) + 1}`}
      >
        <img src={src} alt="./search.svg" className={s.item_picture} id={id} />
        {name}
      </Link>
      <button onClick={isEdit} className={s.button_edit}>
        <img src="../edit.svg" alt="pen" className={s.picture_edit} />
        Edit token
      </button>
    </div>
  );
};

CryptoItem.propTypes = {
  src: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  isView: PropTypes.bool,
  openViewModal: PropTypes.func,
  openEditModal: PropTypes.func,
};

export default CryptoItem;
