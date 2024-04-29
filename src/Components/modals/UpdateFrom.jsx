import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const UpdateFrom = ({ id, closeModal }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState();
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const token = JSON.parse(localStorage.getItem('token'))

  const modalRef = useRef();

  const handelOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  document.addEventListener("mousedown", handelOutsideClick);

  useEffect(() => {
    const fetchSingleBlogs = async () => {
      axios
        .get(
          `https://mybrand-backend-1-8rxh.onrender.com/blog/singleBlog/${id}`
        )
        .then((response) => {
          setTitle(response.data.blog.title);
          setDescription(response.data.blog.description);
            setContent(response.data.blog.content);
       
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchSingleBlogs();
  }, []);

  const updateBlog = async (e) => {
    setLoading(true)
    e.preventDefault();
    try {
      const updateData = new FormData()
      updateData.append('title', title)
      updateData.append('description', description)
      updateData.append('content', content)
      updateData.append('imageUrl', image)
      await axios.put(`https://mybrand-backend-1-8rxh.onrender.com/blog/updateBlog/${id}`, updateData,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      }).then((response)=>{
        if(response){
          setLoading(false)
          toast.success("update successfully")
          setTimeout(()=>{
            window.location.reload()
          },2000)
          setLoading(false)

        }

      }).catch((error)=>{
        console.log(error.message)
        toast.warn('something wrong')
        setLoading(false)
      })
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="update-modal">
      <div className="modal-form" ref={modalRef}>
        <h1>Update Articles</h1>
        <form onSubmit={(e) => updateBlog(e)} id="updateForm" action="">
          <div className="form">
            <div className="contain">
              <span>Image</span>
              <input
                onChange={(e) => setImage(e.target.files[0])}
                id="imageUp"
                type="file"
                placeholder="hello"
              />
            </div>
            <div className="contain">
              <span>Title</span>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                id="titleUp"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div className="contain" style={{ width: "100%" }}>
            <span>Description</span>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "12px",
                color: "white",
              }}
              name=""
              id="discUp"
              rows="4"
            ></textarea>
            <div className="admin-contain">
              <span>Content</span>
              <div
                className="admin-field"
                id="editor"
                style={{
                  maxHeight: "20vh",
                  overflow: "hidden",
                  borderRadius: "12px",
                  padding: "10px",
                }}
                contentEditable="true"
                onBlur={(e) => setContent(e.target.innerHTML)}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
          <button type="submit" className="admin-btn">
            {loading ? (
              <span className="loader"></span>
            ) : (
              <span className="btn-word">Update</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateFrom;
