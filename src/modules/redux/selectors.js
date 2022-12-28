import { createSelector } from "@reduxjs/toolkit";
import { localStorageService } from "../services/storage-service";

export const rootSelector = (state) => state.tokens.tokens;
export const searchSelector = (state) => state.tokens.searchParam;
export const tokenId = (state) => state.tokens.mainId;

export const viewTokenSelector = createSelector(rootSelector, (tokens) => {
  return tokens.find((t) => t.isView) || {};
});

export const editTokenSelector = createSelector(rootSelector, (tokens) => {
  return tokens.find((t) => t.isEditing) || {};
});

export const tokenSelector = createSelector(
  [searchSelector, rootSelector, tokenId],
  (searchQuery, tokens) => {
    return tokens.filter((t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
);
export const getMainItemById = (tokenId) => {
  let data = localStorageService.getById(tokenId, "coins");
  return data;
};
