import { apiSlice } from "./apiSlice";


export const BlogApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addBlog: builder.mutation({
            query: (data, token) => ({

                url: `/blog/addBlog`,
                method: "POST",
                body: data,


            }),
            extraOptions: (data, { getState})=>{
                const token = getState().auth.token;
                return {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            }
        
        }),
    deleteBlog: builder.mutation({
        query: (data, { getState }) => {
            const token = getState().auth.token
            return {
                url: `/blog/deleteBlog`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }

            }
        }
    })
})
})

export const { useAddBlogMutation, useDeleteBlogMutation } = BlogApiSlice