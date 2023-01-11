import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import { toggleToken } from "../../redux/tokensSlice";
import { viewTokensSelector } from "../../redux/selectors";

import { customStyles } from "../../../modalStyles";
import s from "./view-modal.module.sass";

const ViewModalWindow = ({ closeViewModal, isOpen }) => {
  const dispatch = useDispatch();
  const handleCloseModal = (id) => {
    dispatch(toggleToken(id));
    closeViewModal();
  };
  const view = useSelector(viewTokensSelector);
  return (
    <Modal
      id="modal-view"
      style={customStyles}
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={closeViewModal}
      contentLabel="View item"
    >
      <div className={s.wrapper}>
        <button
          onClick={() => handleCloseModal(view.id)}
          className={s.button}
        />
        <span className={s.span}>Token Name: </span>
        <div className={s.item}>{view.name}</div>
        <span className={s.span}>Token Abbrevation: </span>
        <div className={s.item}>{view.abbreviation}</div>
        <span className={s.span}>Token Amount: </span>
        <div className={s.item}>{view.myAmount}</div>
      </div>
    </Modal>
  );
};

ViewModalWindow.propTypes = {
  closeViewModal: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default ViewModalWindow;
