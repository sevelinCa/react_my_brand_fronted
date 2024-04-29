import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const AddBlog = () => {
  const [loading,setLoading] = useState(false)
  const [image,setImage] = useState("")
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [content,setContent] = useState("")

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
      await axios.post("https://mybrand-backend-1-8rxh.onrender.com/blog/addBlog", blogData, {
        headers:{
          Authorization: `Bearer ${token}`
        }
         
      }).then((response)=>{
        if(response.status === 201){
          setLoading(false)
          toast.success("Blog Added Successfully")
        }else{
          setLoading(false)
          toast.warn(response.data.message)

        }
      })
      
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
        {loading ? (

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
