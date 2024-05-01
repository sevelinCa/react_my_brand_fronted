
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useAddBlogMutation } from '../../redux/slices/AdminBlogApiSlice'

const AddBlog = () => {
  const [loading,setLoading] = useState(false)
  const [image,setImage] = useState("")
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [content,setContent] = useState("")


  const [addBlog, {isLoading,isError}] = useAddBlogMutation()

  const sendBlog = async(e)=>{
    setLoading(true)
    e.preventDefault()
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const blogData = new FormData()
      blogData.append("title", title)
      blogData.append("imageUrl", image)
      blogData.append("description", description)
      blogData.append("content", content)

      const response = await addBlog(blogData).unwrap()
      if(response){
        console.log(response)
      }
      
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <div>
 

    <div className="new-aritcle-container">
      <h1>New Article</h1>
      <form
        onSubmit={sendBlog}
        enctype="multipart/form-data"
        className="admin-form"
      >
      <div className="new-form">
        <div className="input-contain">
          <span>Image *</span>
          <input
          onChange={(e)=> setImage(e.target.files[0])}
            type="file"
            name="imageUrl"
            id="imageFile"
            placeholder="type blog title"
          />
        </div>
        <div className="input-contain">
          <span>Title *</span>
          <input onChange={(e)=> setTitle(e.target.value)} type="text" id="title" placeholder="type blog title" />
        </div>

        <div className="input-contain">
          <span>Description / Summary</span>
          <textarea
            onChange={(e)=> setDescription(e.target.value)}
            type="text"
            id="description"
            placeholder="type blog Summary"
          ></textarea>
        </div>
      </div>
      <div className="input-contain">
        <span style={{paddingBottom: '10px',color: 'white'}}>Your Blog Content</span>
        <div onBlur={(e)=> setContent(e.target.innerHTML)} className="field" id="editor" contenteditable="true" aria-checked="true"></div>
      </div>
      <button type="submit">
        {isLoading ? (

          <span className="loader"></span>
        ): (

        <span className="btn-word">ADD BROG</span>
        )}
      </button>
      </form>
    </div>
  </div>
  )
}

export default AddBlog
