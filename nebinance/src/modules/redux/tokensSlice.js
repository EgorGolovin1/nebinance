import { createSlice, createSelector } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { coins, dataIcons } from "../data/data";

const getTokens = (state) => state.tokens.tokens;

export const getViewToken = createSelector(getTokens, (tokens) => {
  return tokens.filter((t) => t.isView);
});

export const getEditToken = createSelector(getTokens, (tokens) => {
  return tokens.filter((t) => t.isEditing);
});

const initialValue = {
  tokens: coins,
  icons: dataIcons,
};

export const tokensSlice = createSlice({
  name: "CryptoApp",
  initialState: initialValue,
  reducers: {
    toggleToken(state, action) {
      const token = state.tokens.find((item) => item.id === action.payload);
      token.isView = !token.isView;
    },
    addToken(state, action) {
      const id = uuidv4();
      let src;
      let way = state.icons.filter((item) => item.src === action.payload.src);
      if (way.length) {
        src = way[0].src;
      } else src = "./unknown.svg";
      state.tokens.push({
        ...action.payload,
        src: src,
        id: id,
        main: false,
        isEditing: false,
      });
    },
    toggleEditToken(state, action) {
      const token = state.tokens.find((item) => item.id === action.payload);
      token.isEditing = !token.isEditing;
    },
    editToken(state, action) {
      let src;
      let way = state.icons.filter((item) => item.src === action.payload.src);
      if (way.length) {
        src = way[0].src;
      } else src = "./unknown.svg";
      const token = state.tokens.find((item) => item.isEditing);
      token.name = action.payload.name;
      token.abbreviation = action.payload.abbreviation;
      token.myAmount = action.payload.myAmount;
      token.src = src;
      token.annotation = action.payload.annotation;
      token.isEditing = !token.isEditing;
    },
    deleteToken(state, action) {
      let tokens = state.tokens;
      tokens = tokens.filter((item) => item.id !== action.payload);
      state.tokens = tokens;
    },
  },
});

export const {
  toggleToken,
  addToken,
  toggleEditToken,
  editToken,
  deleteToken,
} = tokensSlice.actions;

export default tokensSlice.reducer;
