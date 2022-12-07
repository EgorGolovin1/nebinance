import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Modal from "react-modal";

import { addToken } from "../../redux/tokensSlice";

import { customStyles } from "../../../modalStyles";
import s from "./add-modal.module.sass";

const AddModalWindow = ({ closeAddModal, isOpen }) => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(
      addToken({
        name: data.name,
        abbreviation: data.abbreviation,
        src: `./crypto-items/${data.abbreviation.toUpperCase()}.svg`,
        myAmount: Number(data.amount),
        annotation: data.note,
      })
    );
    closeAddModal();
    reset();
  };

  return (
    <Modal
      id="modal-add"
      style={customStyles}
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={closeAddModal}
      contentLabel="Add item"
    >
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <label htmlFor="name" className={s.label}>
          Coin name :
          <input
            {...register("name", {
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
            className={s.input}
            placeholder="Bitcoin"
            type="text"
          />
          <div style={{ height: 20 }} className={s.error}>
            {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
          </div>
        </label>
        <label htmlFor="abbrevation" className={s.label}>
          Coin abbreviation :
          <input
            {...register("abbreviation", {
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
            className={s.input}
            placeholder="BTC"
            type="text"
          />
          <div style={{ height: 20 }} className={s.error}>
            {errors?.abbreviation && (
              <p>{errors?.abbreviation?.message || "Error!"}</p>
            )}
          </div>
        </label>
        <label className={s.label}>
          Amount of coins :
          <input
            type="number"
            defaultValue={0}
            className={s.input}
            {...register("amount")}
            placeholder="0.005"
          />
        </label>
        <label className={s.label}>
          <textarea
            className={s.comment}
            {...register("note")}
            placeholder="Some comments..."
          />
        </label>
        <div className={s.wrapper}>
          <button
            type="button"
            onClick={() => closeAddModal()}
            className={s.button}
          >
            Cancel
          </button>
          <input value={"Accept"} type="submit" className={s.button} />
        </div>
      </form>
    </Modal>
  );
};

AddModalWindow.propTypes = {
  closeAddModal: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default AddModalWindow;
