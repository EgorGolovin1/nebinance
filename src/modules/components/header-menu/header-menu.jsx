import React from "react";

import s from "./header-menu.module.sass";

const HeaderMenu = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.logo_wrapper}>
            <img alt="logo" src="./logo.svg" className={s.logo} />
            <h2 className={s.tag}>CRYPTON</h2>
          </div>
          <button href="#" className={s.link}>
            Main Page
          </button>
          <button href="#" className={s.link}>
            Events
          </button>
          <button href="#" className={s.link}>
            Hot News
          </button>
          <div className={s.input_wrapper}>
            <input type="text" className={s.panel} placeholder="Search coin" />
            <img alt="search" className={s.icon} src="./search.svg" />
            <button className={s.button}>Search</button>
          </div>
          <img alt="enter" className={s.enter_icon} src="./enter.svg" />
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
