import { configureStore } from "@reduxjs/toolkit"
import productsSlice from "./productsSlice"

export const store = configureStore({
  reducer: {
    product: productsSlice
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;