import React from "react";
import { Link, useSearchParams } from "react-router-dom";

import s from "./header-menu.module.sass";

const HeaderMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const coinQuery = searchParams.get("search") || "";

  const handlerSetParams = (e) => {
    setSearchParams({ search: e });
    if (e === "") setSearchParams({});
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.logo_wrapper}>
            <img alt="logo" src="../logo.svg" className={s.logo} />
            <h2 className={s.tag}>CRYPTON</h2>
          </div>
          <Link className={s.link} to="/">
            Main Page
          </Link>
          <Link href="#" className={s.link}>
            Events
          </Link>
          <Link href="#" className={s.link}>
            Hot News
          </Link>
          <div className={s.input_wrapper}>
            <input
              type="text"
              className={s.panel}
              placeholder="Search coin"
              onChange={(e) => handlerSetParams(e.target.value)}
              defaultValue={coinQuery}
            />
            <img alt="search" className={s.icon} src="../search.svg" />
            <button className={s.button}>Search</button>
          </div>
          <img alt="enter" className={s.enter_icon} src="../enter.svg" />
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
