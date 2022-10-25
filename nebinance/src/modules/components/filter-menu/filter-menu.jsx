import React from "react";

import "./filter-menu.sass";

const FILTERS_BTN = [
  {
    text: "Favorite",
    id: "favorite",
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
    <div className="container filter">
      <div className="filter-wrapper">
        {FILTERS_BTN.map(({ text, id }) => (
          <button key={id} className="btn">
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterMenu;
