import { configureStore } from "@reduxjs/toolkit";

import userInfoReducer from "./user-slice";
import settingBoxReducer from "./settingBox-slice";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    settingBox: settingBoxReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
