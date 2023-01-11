import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { dataIcons } from "../data/image-data";
import { localStorageService, coins } from "../services/storage-service";

const init = () => {
  if (!localStorageService.get("coins")) {
    localStorageService.save(coins, "coins");
  }

  return localStorageService.get("coins");
};

const initialState = {
  tokens: init(),
  icons: dataIcons,
};

export const tokensSlice = createSlice({
  name: "CryptoApp",
  initialState: initialState,
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
          "../unknown.svg",
        id: id,
        isView: false,
        isEditing: false,
        main: false,
      });
      localStorageService.save(state.tokens, "coins");
    },
    editToken(state, action) {
      const token = state.tokens.find((item) => item.id === action.payload);
      token.isEditing = true;
      localStorageService.save(state.tokens, "coins");
    },
    deleteToken(state, action) {
      const tokens = state.tokens.filter((item) => item.id !== action.payload);
      state.tokens = tokens;
      localStorageService.save(state.tokens, "coins");
    },
    finishEditing(state, action) {
      let token = state.tokens.find((item) => item.id === action.payload.id);
      token.src =
        state.icons.find((item) => item.src === action.payload.src)?.src ||
        "../unknown.svg";
      token.name = action.payload.name;
      token.abbreviation = action.payload.abbreviation;
      token.myAmount = action.payload.myAmount;
      token.annotation = action.payload.annotation;
      token.isEditing = false;
      localStorageService.save(state.tokens, "coins");
    },
  },
});

export const { toggleToken, addToken, editToken, finishEditing, deleteToken } =
  tokensSlice.actions;

export default tokensSlice.reducer;
