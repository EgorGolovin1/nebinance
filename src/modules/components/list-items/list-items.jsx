import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import CryptoItem from "../crypto-item/crypto-item";
import { tokens } from "../../redux/selectors";

import classes from "./list-items.module.sass";

const ListItems = ({ openViewModal }) => {
  const tokensArr = useSelector(tokens);
  return (
    <div className={classes.list}>
      {tokensArr.map((item) => (
        <CryptoItem
          key={item.id}
          openViewModal={openViewModal}
          {...item}
          isView={item.isView}
        />
      ))}
      <img src="./lightning.svg" alt="lightning" className={classes.item} />
      <img
        src="./lightning.svg"
        alt="lightning"
        className={classes.item_right}
      />
    </div>
  );
};
ListItems.propTypes = {
  tokensArr: PropTypes.array,
  openViewModal: PropTypes.func,
};

export default ListItems;
