import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://mybrand-backend-1-8rxh.onrender.com",
    prepareHeaders: (headers)=>{
        const token = JSON.parse(localStorage.getItem('token'));
        if(token){
            headers.set('Authorization', `Bearer ${token}`)
        }
        return headers
    },
})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['blogs'],
    endpoints: (builder) => ({}),
}) 