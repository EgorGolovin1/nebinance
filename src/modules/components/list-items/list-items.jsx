import React, { useState } from "react";
import { useSelector } from "react-redux";

import CryptoItem from "../crypto-item/crypto-item";
import ViewModalWindow from "../modal-windows/view-modal";
import EditModalWindow from "../modal-windows/edit-modal";
import { tokenSelector } from "../../redux/selectors";

import s from "./list-items.module.sass";

const ListItems = () => {
  const [modalViewIsOpen, setViewModalIsOpen] = useState(false);
  function openViewModal() {
    setViewModalIsOpen(true);
  }
  function closeViewModal() {
    setViewModalIsOpen(false);
  }

  const [modalEditIsOpen, setEditModalIsOpen] = useState(false);
  function openEditModal() {
    setEditModalIsOpen(true);
  }
  function closeEditModal() {
    setEditModalIsOpen(false);
  }

  const tokens = useSelector(tokenSelector);

  return (
    <>
      <div className={s.list}>
        {tokens.map((item) => (
          <CryptoItem
            {...item}
            key={item.id}
            openViewModal={openViewModal}
            openEditModal={openEditModal}
          />
        ))}
        <img src="./lightning.svg" alt="lightning" className={s.item} />
        <img src="./lightning.svg" alt="lightning" className={s.item_right} />
      </div>
      <ViewModalWindow
        isOpen={modalViewIsOpen}
        closeViewModal={closeViewModal}
      />
      <EditModalWindow
        isOpen={modalEditIsOpen}
        closeEditModal={closeEditModal}
      />
    </>
  );
};

export default ListItems;
