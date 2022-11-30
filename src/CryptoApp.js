import React from "react";

import HeaderMenu from "./modules/components/header-menu/header-menu";
import AddMenu from "./modules/components/add-menu/add-menu";
import FilterMenu from "./modules/components/filter-menu/filter-menu";
import ListItems from "./modules/components/list-items/list-items";

const CryptoApp = () => {
  return (
    <div className="wrapper">
      <HeaderMenu />
      <AddMenu />
      <FilterMenu />
      <ListItems />
    </div>
  );
};

export default CryptoApp;
