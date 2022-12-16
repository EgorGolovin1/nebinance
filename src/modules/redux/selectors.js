import { createSelector } from "@reduxjs/toolkit";

export const rootSelector = (state) => state.tokens.tokens;
export const searchSelector = (state) => state.tokens.searchParam;

export const viewTokenSelector = createSelector(rootSelector, (tokens) => {
  return tokens.find((t) => t.isView) || {};
});

export const editTokenSelector = createSelector(rootSelector, (tokens) => {
  return tokens.find((t) => t.isEditing) || {};
});

export const tokenSelector = createSelector(
  [searchSelector, rootSelector],
  (searchQuery, tokens) => {
    return tokens.filter((t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
);
