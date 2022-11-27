import React, { useState } from "react";

import HeaderMenu from "./modules/components/header-menu/header-menu";
import AddMenu from "./modules/components/add-menu/add-menu";
import FilterMenu from "./modules/components/filter-menu/filter-menu";
import ListItems from "./modules/components/list-items/list-items";
import ViewModalWindow from "./modules/components/modal-windows/view-modal";
import AddModalWindow from "./modules/components/modal-windows/add-modal";

const CryptoApp = () => {
  const [modalAddIsOpen, setAddModalIsOpen] = useState(false);
  function openAddModal() {
    setAddModalIsOpen(true);
  }
  function closeAddModal() {
    setAddModalIsOpen(false);
  }

  const [modalViewIsOpen, setViewModalIsOpen] = useState(false);
  function openViewModal() {
    setViewModalIsOpen(true);
  }
  function closeViewModal() {
    setViewModalIsOpen(false);
  }

  return (
    <div className="wrapper">
      <HeaderMenu />
      <AddMenu openModal={openAddModal} />
      <FilterMenu />
      <ListItems openViewModal={openViewModal} />
      <AddModalWindow
        // onRequestClose={closeAddModal}
        isOpen={modalAddIsOpen}
        closeAddModal={closeAddModal}
      />
      <ViewModalWindow
        isOpen={modalViewIsOpen}
        closeViewModal={closeViewModal}
      />
    </div>
  );
};

export default CryptoApp;
