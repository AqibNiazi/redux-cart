import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./UI-Slice";
import cartRuducer from "./Cart-Slice";
const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartRuducer,
  },
});
export default store;
