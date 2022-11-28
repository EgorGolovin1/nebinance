import React from "react";

import HeaderMenu from "./modules/components/header-menu/header-menu";
import AddMenu from "./modules/components/add-menu/add-menu";
import FilterMenu from "./modules/components/filter-menu/filter-menu";
import ListItems from "./modules/components/list-items/list-items";
// import ViewModalWindow from "./modules/components/modal-windows/view-modal";
// import AddModalWindow from "./modules/components/modal-windows/add-modal";

const CryptoApp = () => {
  return (
    <div className="wrapper">
      <HeaderMenu />
      <AddMenu />
      <FilterMenu />
      <ListItems />
      {/* <AddModalWindow
        // onRequestClose={closeAddModal}
        isOpen={modalAddIsOpen}
        closeAddModal={closeAddModal}
      />
      <ViewModalWindow
        isOpen={modalViewIsOpen}
        closeViewModal={closeViewModal}
      /> */}
    </div>
  );
};

export default CryptoApp;
