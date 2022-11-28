import React, { useState } from "react";

import AddModalWindow from "../modal-windows/add-modal";

import s from "./add-menu.module.sass";

const AddMenu = () => {
  const [modalAddIsOpen, setAddModalIsOpen] = useState(false);
  function openAddModal() {
    setAddModalIsOpen(true);
  }
  function closeAddModal() {
    setAddModalIsOpen(false);
  }

  return (
    <div className={s.wrapper}>
      <h3 className={s.text}>The future is already here</h3>
      <h1 className={s.text}>There is never too much freedom</h1>
      <h2 className={s.text}>Your money. Your choice</h2>
      <button onClick={openAddModal} className={s.button}>
        Add new Coin
      </button>
      <AddModalWindow isOpen={modalAddIsOpen} closeAddModal={closeAddModal} />
    </div>
  );
};

export default AddMenu;
