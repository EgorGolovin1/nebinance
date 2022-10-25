import React from "react";

import HeaderMenu from "./modules/components/header-menu/header-menu";
import AddMenu from "./modules/components/add-menu/add-menu";
import FilterMenu from "./modules/components/filter-menu/filter-menu";
import ListItem from "./modules/components/list-item/list-item";

import MainItem from "./modules/components/main-item/main-item";

const CryptoApp = () => {
  return (
    <div className="todo-wrapper">
      <HeaderMenu />
      <AddMenu />
      <FilterMenu />
      <ListItem />
      <MainItem />
    </div>
  );
};

export default CryptoApp;
