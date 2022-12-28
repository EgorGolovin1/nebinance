import React from "react";
import { Routes, Route } from "react-router-dom";

import HeaderMenu from "./modules/components/header-menu/header-menu";
import AddMenu from "./modules/components/add-menu/add-menu";
import FilterMenu from "./modules/components/filter-menu/filter-menu";
import ListItems from "./modules/components/list-items/list-items";
import MainItem from "./modules/components/main-item/main-item";

const CryptoApp = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeaderMenu />
              <AddMenu />
              <FilterMenu />
              <ListItems />
            </>
          }
        />
        <Route path="/items/:id" element={<MainItem />}></Route>
      </Routes>
    </div>
  );
};

export default CryptoApp;
