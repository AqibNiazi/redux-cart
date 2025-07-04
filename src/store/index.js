import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./UI-Slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});
export default store;
