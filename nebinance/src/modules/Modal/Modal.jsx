import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import {
  addToken,
  getViewToken,
  toggleToken,
  getEditToken,
  deleteToken,
  editToken,
} from "../redux/tokensSlice";

import "./Modal.sass";

const ModalWindow = ({ closeModal }) => {
  const dispatch = useDispatch();
  const endView = (id) => {
    dispatch(toggleToken(id));
    closeModal();
  };

  const deleteCoin = (id) => {
    dispatch(deleteToken(id));
    closeModal();
  };

  const view = useSelector(getViewToken);
  let count = view.length;

  const edit = useSelector(getEditToken);
  let countt = edit.length;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onEdit = (data) => {
    let upAbr = data.Abbreviation.toUpperCase();
    dispatch(
      editToken({
        name: data.Name,
        abbreviation: data.Abbreviation,
        src: "./crypto-items/" + upAbr + ".svg",
        myAmount: Number(data.Amount),
        annotation: data.Note,
      })
    );
    closeModal();
  };
  const onSubmit = (data) => {
    let upAbr = data.Abbreviation.toUpperCase();
    dispatch(
      addToken({
        name: data.Name,
        abbreviation: data.Abbreviation,
        src: "./crypto-items/" + upAbr + ".svg",
        myAmount: Number(data.Amount),
        annotation: data.Note,
      })
    );
    closeModal();
  };
  return (
    <>
      {count || countt ? (
        <div className="fast-view_wrapper">
          {countt ? (
            <>
              <form onSubmit={handleSubmit(onEdit)} className="modal-from">
                <label htmlFor="Name" className="modal_label">
                  Coin name (Bitcoin)
                  <input
                    {...register("Name", {
                      required: "Required field!",
                      minLength: {
                        value: 2,
                        message: "Minimum 2 symbols",
                      },
                      maxLength: {
                        value: 12,
                        message: "Maximum 12 symbols",
                      },
                    })}
                    type="text"
                    className="modal_input-edit"
                    defaultValue={edit[0].name}
                  />
                </label>
                <label htmlFor="Abbreviation" className="modal_label">
                  Coin abbrevation (BTC)
                  <input
                    {...register("Abbreviation", {
                      required: "Required field!",
                      minLength: {
                        value: 2,
                        message: "Minimum 2 symbols",
                      },
                      maxLength: {
                        value: 12,
                        message: "Maximum 12 symbols",
                      },
                    })}
                    type="text"
                    className="modal_input-edit"
                    defaultValue={edit[0].abbreviation}
                  />
                </label>
                <label htmlFor="Amount" className="modal_label">
                  Amount of coins?
                  <input
                    {...register("Amount")}
                    type="text"
                    className="modal_input-edit"
                    defaultValue={edit[0].myAmount}
                  />
                </label>
                <label className="modal_label">
                  Some comments...
                  <textarea
                    {...register("Note")}
                    defaultValue={edit[0].annotation}
                    className="modal_textarea-edit"
                  />
                </label>
                <div className="button-wrapper">
                  <button
                    onClick={() => deleteCoin(edit[0].id)}
                    className="modal_button delete"
                  >
                    Delete Coin
                  </button>
                  <input
                    value={"Safe editing"}
                    type="submit"
                    className="modal_button submit"
                  />
                </div>
              </form>
            </>
          ) : (
            <>
              <span className="fast-view_label">Token Name: </span>
              <div className="fast-view_item">{view[0].name}</div>
              <span className="fast-view_label">Token Abbrevation: </span>
              <div className="fast-view_item">{view[0].abbreviation}</div>
              <span className="fast-view_label">Token Amount: </span>
              <div className="fast-view_item">{view[0].myAmount}</div>
              <span className="fast-view_label">Token Annotation: </span>
              <div className="fast-view_item">{view[0].annotation}</div>
              <button
                onClick={() => endView(view[0].id)}
                className="modal_button"
              >
                End View
              </button>
            </>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="modal_form">
          <label htmlFor="Name" className="modal_label">
            Coin name (Bitcoin)
            <input
              {...register("Name", {
                required: "Required field!",
                minLength: {
                  value: 2,
                  message: "Minimum 2 symbols",
                },
                maxLength: {
                  value: 12,
                  message: "Maximum 12 symbols",
                },
              })}
              className="modal_input"
            />
            <div style={{ height: 20 }} className="erorr">
              {errors?.Name && <p>{errors?.Name?.message || "Erorr!"}</p>}
            </div>
          </label>
          <label htmlFor="Abbrevation" className="modal_label">
            Coin abbrevation (BTC)
            <input
              {...register("Abbreviation", {
                required: "Required field!",
                minLength: {
                  value: 2,
                  message: "Minimum 2 symbols",
                },
                maxLength: {
                  value: 12,
                  message: "Maximum 12 symbols",
                },
              })}
              className="modal_input"
            />
            <div style={{ height: 20 }} className="erorr">
              {errors?.Abbreviation && (
                <p>{errors?.Abbreviation?.message || "Erorr!"}</p>
              )}
            </div>
          </label>
          <label className="modal_label">
            Amount of coins? (0.005)
            <input
              type="number"
              defaultValue={0}
              className="modal_input"
              {...register("Amount")}
            />
          </label>
          <label className="modal_label">
            Some comments...
            <textarea className="modal_textarea" {...register("Note")} />
          </label>
          <div className="button-wrapper">
            <button onClick={closeModal} className="modal_button cancel">
              Cancel
            </button>
            <input
              value={"Accept"}
              type="submit"
              className="modal_button submit"
            />
          </div>
        </form>
      )}
    </>
  );
};

ModalWindow.propTypes = {
  closeModal: PropTypes.func,
};

export default ModalWindow;
