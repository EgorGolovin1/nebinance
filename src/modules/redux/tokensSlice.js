import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { coins, dataIcons } from "../data/coins";

const initialValue = {
  tokens: coins,
  icons: dataIcons,
  searchParam: "",
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
      state.tokens.push({
        ...action.payload,
        src:
          state.icons.find((item) => item.src === action.payload.src)?.src ||
          "./unknown.svg",
        id: id,
        isView: false,
        isEditing: false,
      });
    },
    editToken(state, action) {
      const token = state.tokens.find((item) => item.id === action.payload);
      token.isEditing = true;
    },
    deleteToken(state, action) {
      const tokens = state.tokens.filter((item) => item.id !== action.payload);
      state.tokens = tokens;
    },
    finishEditing(state, action) {
      let token = state.tokens.find((item) => item.id === action.payload.id);
      token.src =
        state.icons.find((item) => item.src === action.payload.src)?.src ||
        "./unknown.svg";
      token.name = action.payload.name;
      token.abbreviation = action.payload.abbreviation;
      token.myAmount = action.payload.myAmount;
      token.annotation = action.payload.annotation;
      token.isEditing = false;
    },
    searchToken(state, action) {
      state.searchParam = action.payload;
    },
  },
});

export const {
  toggleToken,
  addToken,
  editToken,
  finishEditing,
  deleteToken,
  searchToken,
} = tokensSlice.actions;

export default tokensSlice.reducer;
