import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice"
import { apiSlice } from "./slices/apiSlice";
import { ApiSliceWithoutToken } from "./slices/ApiSliceWithoutToken";

export const store = configureStore({
    reducer: {
        auth: userReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        [ApiSliceWithoutToken.reducerPath]: ApiSliceWithoutToken.reducer
    },
    middleware: (getDefaultMiddelWare) => getDefaultMiddelWare().concat(apiSlice.middleware,ApiSliceWithoutToken.middleware),
    devTools: true

})