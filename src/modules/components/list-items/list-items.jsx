import React, { useState } from "react";

import CryptoItem from "../crypto-item/crypto-item";
import ViewModalWindow from "../modal-windows/view-modal";
import EditModalWindow from "../modal-windows/edit-modal";
import { useTokens } from "../../hooks/useTokens/useTokens";

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

  const { tokens, coinQuery } = useTokens();

  return (
    <>
      <div className={s.list}>
        {tokens.map((item, index) => (
          <CryptoItem
            {...item}
            key={item.id}
            openViewModal={openViewModal}
            openEditModal={openEditModal}
            newIndex={index}
          />
        ))}
        {coinQuery && !tokens.length ? (
          <h2 className={s.text}>
            Nothing found ... Try to change search term
          </h2>
        ) : (
          ""
        )}
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
