import { createSelector } from "@reduxjs/toolkit";

export const rootSelector = (state) => state.tokens.tokens;

export const viewTokenSelector = createSelector(rootSelector, (tokens) => {
  return tokens.find((t) => t.isView) || {};
});

export const editTokenSelector = createSelector(rootSelector, (tokens) => {
  return tokens.find((t) => t.isEditing) || {};
});

export const tokenSelector = createSelector(rootSelector, (tokens) => {
  return tokens;
});
