import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { coins, dataIcons } from "../data/coins";

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
      state.tokens.push({
        ...action.payload,
        src:
          {
            ...state.icons.find((item) => item.src === action.payload.src),
          }.src || "./unknown.svg",
        id: id,
        isView: false,
      });
    },
  },
});

export const { toggleToken, addToken } = tokensSlice.actions;

export default tokensSlice.reducer;
