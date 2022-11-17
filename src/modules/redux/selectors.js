import { createSelector } from "@reduxjs/toolkit";

export const getTokens = (state) => state.tokens.tokens;

export const getViewToken = createSelector(getTokens, (tokens) => {
  return tokens.filter((t) => t.isView);
});

export const tokens = createSelector(getTokens, (tokens) => {
  return tokens;
});
