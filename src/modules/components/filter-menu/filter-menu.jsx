import React from "react";

import s from "./filter-menu.module.sass";

const FILTERS_BTN = [
  {
    text: "Favorite",
    id: "isView",
  },
  {
    text: "Hot",
    id: "hot",
  },
  {
    text: "Geiners",
    id: "geiners",
  },
  {
    text: "Losers",
    id: "losers",
  },
];

const FilterMenu = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        {FILTERS_BTN.map(({ text, id }) => (
          <button key={id} className={s.btn}>
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterMenu;
