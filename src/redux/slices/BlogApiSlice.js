import { ApiSliceWithoutToken } from "./ApiSliceWithoutToken";


export const BlogApiSlice = ApiSliceWithoutToken.injectEndpoints({
    endpoints: (builder) => ({
        selectBlog: builder.query({
            query: () => ({

                url: `/blog/selectBlog`
            })
        }),
        addLike: builder.mutation({
            query: (data, blogId) => ({
                url: `/blog/addLike/${blogId}`,
                method: "POST",
                body: data
            })
        }),
        addCommnent: builder.mutation({
            query: (data, blogId) => ({
                url: `/blog/addComment/${blogId}`,
                method: "POST",
                body: data
            })
        })
    })

})

export const { useSelectBlogQuery, useAddLikeMutation, useAddCommnentMutation } = BlogApiSlice