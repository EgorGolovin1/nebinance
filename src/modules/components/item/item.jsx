import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTokenById } from "../../redux/selectors";

import s from "./item.module.sass";

const Item = () => {
  const { id } = useParams();

  const token = useSelector(getTokenById(id));

  return (
    <div className={s.wapper_secondary}>
      <div className={s.item_main}>
        <img src={token.src} alt="token" className={s.picture_main} />
        <div className={s.wrapper_main}>
          <div className={s.name_main}>{token.name}</div>
          <div className={s.wrapper_buttons}>
            <Link to="/" className={s.link_main}>
              <button className={s.close_button}>Close</button>
            </Link>
          </div>
          <div className="wrapper2">
            <>
              <div className={s.amount}>
                {token.myAmount ? (
                  `My tokens: ${token.myAmount}`
                ) : (
                  <h5>No information about your amount</h5>
                )}
              </div>
              <div className={s.annotation}>
                {token.annotation ? (
                  `${token.annotation}`
                ) : (
                  <h5>No annotation</h5>
                )}
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
