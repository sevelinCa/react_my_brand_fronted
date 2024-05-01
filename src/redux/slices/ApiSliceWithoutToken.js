import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({baseUrl: "https://mybrand-backend-1-8rxh.onrender.com"})

export const ApiSliceWithoutToken = createApi({
    baseQuery,
    endpoints: (builder)=> ({})
})