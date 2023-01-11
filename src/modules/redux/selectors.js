import { createSelector } from "@reduxjs/toolkit";

export const rootSelector = (state) => state.tokens.tokens;
export const searchSelector = (state) => state.tokens.searchParam;

export const getTokens = (searchQuery = "") => {
  if (searchQuery) {
    return getFilteredTokens(searchQuery);
  }

  return rootSelector;
};

export const getTokenById = (tokenId) => {
  const token = createSelector(rootSelector, (tokens) => {
    return tokens.find((t) => t.id == tokenId) || {};
  });
  return token;
};

export const getFilteredTokens = (searchQuery = "") =>
  createSelector(rootSelector, (tokens) =>
    tokens.filter((t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

export const viewTokensSelector = createSelector(rootSelector, (tokens) => {
  return tokens.find((t) => t.isView) || {};
});

export const editTokensSelector = createSelector(rootSelector, (tokens) => {
  return tokens.find((t) => t.isEditing) || {};
});
