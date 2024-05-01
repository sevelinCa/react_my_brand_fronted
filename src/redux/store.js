import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice"
import { apiSlice } from "./slices/apiSlice";

export const store = configureStore({
    reducer: {
        auth: userReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddelWare) => getDefaultMiddelWare().concat(apiSlice.middleware),
    devTools: true

})