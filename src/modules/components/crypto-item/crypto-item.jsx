import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames/bind";

import {
  toggleToken,
  editToken,
  closeDetails,
  showDetails,
} from "../../redux/tokensSlice";

import s from "./crypto-item.module.sass";
import { tokenSelector } from "../../redux/selectors";

const CryptoItem = (props) => {
  const dispatch = useDispatch();

  const tokens = useSelector(tokenSelector);

  const viewToken = () => {
    dispatch(toggleToken(props.id));
    props.openViewModal();
  };

  const isEdit = () => {
    dispatch(editToken(props.id));
    props.openEditModal();
  };

  const showInformation = () => {
    dispatch(showDetails(tokens[index].id));
  };

  const hideInformation = () => {
    dispatch(closeDetails(tokens[index].id));
  };

  const { id } = useParams();

  let index = id - 1;
  return (
    <div className={s.wrapper}>
      {props.id ? (
        <div className={s.item}>
          <button
            onClick={viewToken}
            className={classNames(s.eye, props.isView && s.isView)}
          >
            <img alt="eye" className={s.picture} src="./view.svg" />
          </button>
          <Link
            className={s.button}
            to={`/items/${tokens.findIndex((el) => el.id === props.id) + 1}`}
          >
            <img
              src={props.src}
              alt="./search.svg"
              className={s.item_picture}
              id={props.id}
            />
            {props.name}
          </Link>
          <button onClick={isEdit} className={s.button_edit}>
            <img src="../edit.svg" alt="pen" className={s.picture_edit} />
            Edit token
          </button>
        </div>
      ) : (
        <div className={s.wapper_secondary}>
          <div className={s.item_main}>
            <img
              src={tokens[index].src}
              alt="token"
              className={s.picture_main}
            />
            <div className={s.wrapper_main}>
              <div className={s.name_main}>{tokens[index].name}</div>
              <div className={s.wrapper_buttons}>
                <button
                  onClick={() => showInformation()}
                  className={s.details_main}
                >
                  Details
                </button>
                <Link to="/" className={s.link_main}>
                  <button
                    onClick={() => hideInformation()}
                    className={s.details_main}
                  >
                    Close
                  </button>
                </Link>
              </div>

              <div className="wrapper2">
                {tokens[index].main ? (
                  <>
                    <div className={s.amount}>
                      {tokens[index].myAmount ? (
                        `My tokens: ${tokens[index].myAmount}`
                      ) : (
                        <h5>No information about your amount</h5>
                      )}
                    </div>
                    <div className={s.annotation}>
                      {tokens[index].annotation ? (
                        `${tokens[index].annotation}`
                      ) : (
                        <h5>No annotation</h5>
                      )}
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

CryptoItem.propTypes = {
  props: PropTypes.object,
  src: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  isView: PropTypes.bool,
  main: PropTypes.bool,
  openViewModal: PropTypes.func,
  openEditModal: PropTypes.func,
};

export default CryptoItem;
