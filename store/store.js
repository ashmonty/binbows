import { configureStore } from "@reduxjs/toolkit";
import windowReducer from "./window/windowSlice";
import shellReducer from "./shell/shellSlice";

export default configureStore({
  reducer: {
    windows: windowReducer,
    shell: shellReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredPaths: ["windows"],
        // Ignore these field paths in all action
      },
    }),
});
