import React, { useState } from "react";
import { useSelector } from "react-redux";

import CryptoItem from "../crypto-item/crypto-item";
import ViewModalWindow from "../modal-windows/view-modal";
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

  const tokensArr = useSelector(tokenSelector);
  return (
    <>
      <div className={s.list}>
        {tokensArr.map((item) => (
          <CryptoItem
            {...item}
            key={item.id}
            openViewModal={openViewModal}
            isView={item.isView}
          />
        ))}
        <img src="./lightning.svg" alt="lightning" className={s.item} />
        <img src="./lightning.svg" alt="lightning" className={s.item_right} />
      </div>
      <ViewModalWindow
        isOpen={modalViewIsOpen}
        closeViewModal={closeViewModal}
      />
    </>
  );
};

export default ListItems;
