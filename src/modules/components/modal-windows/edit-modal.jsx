import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import { finishEditing, deleteToken } from "../../redux/tokensSlice";
import { editTokenSelector } from "../../redux/selectors";

import { customStyles } from "../../../modalStyles";
import s from "./edit-modal.module.sass";

const EditModalWindow = ({ closeEditModal, isOpen }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(
      finishEditing({
        id: edit.id,
        src: `../crypto-items/${data.abbreviation.toUpperCase()}.svg`,
        name: data.name,
        abbreviation: data.abbreviation,
        myAmount: Number(data.amount),
        annotation: data.annotation,
      })
    );
    closeEditModal();
    reset();
  };

  const deleteItem = (id) => {
    dispatch(deleteToken(id));
    reset();
    closeEditModal();
  };

  const edit = useSelector(editTokenSelector);
  return (
    <Modal
      style={customStyles}
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={closeEditModal}
      contentLabel="Edit item"
      shouldCloseOnEsc={false}
    >
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <label htmlFor="name" className={s.label}>
          Coin name :
          <input
            {...register("name", {
              shouldUnregister: true,
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
            defaultValue={edit.name}
          />
          <div style={{ height: 20 }} className={s.error}>
            {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
          </div>
        </label>
        <label htmlFor="abbrevation" className={s.label}>
          Coin abbreviation :
          <input
            {...register("abbreviation", {
              shouldUnregister: true,
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
            defaultValue={edit.abbreviation}
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
            className={s.input}
            {...register("amount", { shouldUnregister: true })}
            placeholder="0.005"
            defaultValue={edit.myAmount}
          />
        </label>
        <label className={s.label}>
          <textarea
            className={s.comment}
            {...register("annotation", { shouldUnregister: true })}
            defaultValue={edit.annotation}
          />
        </label>
        <div className={s.wrapper}>
          <button
            type="button"
            onClick={() => deleteItem(edit.id)}
            className={s.button_delete}
          >
            Delete
          </button>
          <input value={"Save"} type="submit" className={s.button} />
        </div>
      </form>
    </Modal>
  );
};

EditModalWindow.propTypes = {
  closeEditModal: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default EditModalWindow;
