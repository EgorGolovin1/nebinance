import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";

import HeaderMenu from "./modules/components/header-menu/header-menu";
import AddMenu from "./modules/components/add-menu/add-menu";
import FilterMenu from "./modules/components/filter-menu/filter-menu";
import ListItem from "./modules/components/list-item/list-item";
import ModalWindow from "./modules/Modal/Modal";

import "./CryptoApp.sass";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#434651",
    padding: "40px 20px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
};

const CryptoApp = () => {
  const tokens = useSelector((state) => {
    return state.tokens.tokens;
  });

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="todo-wrapper">
      <HeaderMenu />
      <AddMenu openModal={openModal} />
      <FilterMenu />
      <ListItem openModal={openModal} tokens={tokens} />
      <Modal
        id="modal"
        style={customStyles}
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="View item"
      >
        <ModalWindow closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default CryptoApp;
