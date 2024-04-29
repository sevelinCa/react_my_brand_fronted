import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Guest/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const OpenedBlog = () => {
  const [singleBlog, setSingleBlog] = useState({});
  const [comments, setComments] = useState([]);
  const [loading,setLoading] = useState(false)
  const [likes,setLikes] = useState(0)
  const [commentLength,setCommenLength] = useState(0)
  const { id } = useParams();

  

  useEffect(() => {
    axios
      .get(`https://mybrand-backend-1-8rxh.onrender.com/blog/singleBlog/${id}`)
      .then((resposne) => {
        setLikes(resposne.data.blog.likes)
        setSingleBlog(resposne.data.blog);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);
  useEffect(() => {
    axios
      .get(`https://mybrand-backend-1-8rxh.onrender.com/blog/selectComment/${id}`)
      .then((resposne) => {
        setCommenLength(resposne.data.comment.length)
        setComments(resposne.data.comment);
        
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);
  return (
    <div>
      <div class="container">
        <Navbar />
        <div id="popup" class="popup"></div>
        <div class="single-container">
          <div class="img-content">
            <div class="image">
              <h1
                style={{
                  color: "white",
                  textTransform: "uppercase",
                  fontSize: "20px",
                  padding: "10px 0px",
                }}
              >
                {singleBlog.title}
              </h1>
              <img src={singleBlog.imageUrl} />
              {!singleBlog.content  || singleBlog.content === "" ? (
                <span style={{padding:"10px",color:'white'}}>{singleBlog.description}</span>
                
              ): (
                <div style={{padding:"20px",color:'white',borderRadius:"10px"}} dangerouslySetInnerHTML={{ __html: singleBlog.content }} />

              )}
            </div>
          </div>
          <div class="comment-content">
            <div class="likes" style={{ position: "relative" }}>
              <div
                class="likeBtn"
                onclick="likeBlogs()"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                }}
              >
                
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 10.2342L4.99628 10.1696C4.95015 9.76944 4.49191 9.46758 3.95689 9.48489C3.42187 9.5022 3 9.83255 3 10.2342H4ZM26.9815 12.0574L26.0408 16.1371L28.0116 16.3928L28.9523 12.313L26.9815 12.0574ZM17.66 21.25H11.4618V22.75H17.66V21.25ZM10.2466 20.4125L9.16376 11.0198L7.1712 11.149L8.25408 20.5417L10.2466 20.4125ZM26.0408 16.1371C25.3651 19.0677 21.8417 21.25 17.66 21.25V22.75C22.7616 22.75 27.1611 20.081 28.0116 16.3928L26.0408 16.1371ZM17.6731 5.10014L16.7895 9.14471L18.7632 9.38724L19.6468 5.34268L17.6731 5.10014ZM9.58364 10.2456L11.502 9.00584L10.1964 7.86953L8.27807 9.10932L9.58364 10.2456ZM14.992 4.97205L15.6263 3.1382L13.6904 2.76156L13.0561 4.59541L14.992 4.97205ZM16.5843 2.7784L16.7776 2.82497L17.3893 1.39686L17.196 1.35029L16.5843 2.7784ZM14.0313 6.81598C14.4472 6.23197 14.7703 5.61338 14.992 4.97205L13.0561 4.59541C12.8743 5.12106 12.6093 5.62892 12.2672 6.10923L14.0313 6.81598ZM16.7776 2.82497C17.1861 2.92341 17.4763 3.16008 17.5716 3.43583L19.5076 3.0592C19.2336 2.26718 18.4253 1.64647 17.3893 1.39686L16.7776 2.82497ZM15.6263 3.1382C15.6731 3.00319 15.8031 2.87912 15.9997 2.80803L15.1315 1.45674C14.4221 1.71308 13.8893 2.18626 13.6904 2.76156L15.6263 3.1382ZM15.9997 2.80803C16.1793 2.7431 16.3908 2.7318 16.5843 2.7784L17.196 1.35029C16.5164 1.18654 15.7749 1.22419 15.1315 1.45674L15.9997 2.80803ZM18.8716 10.9842H25.7797V9.48419H18.8716V10.9842ZM6.29175 21.4061L4.99628 10.1696L3.00372 10.2988L4.29919 21.5353L6.29175 21.4061ZM5 21.5127V10.2342H3V21.5127H5ZM4.29919 21.5353C4.2816 21.3828 4.44195 21.25 4.64895 21.25V22.75C5.61691 22.75 6.37496 22.1279 6.29175 21.4061L4.29919 21.5353ZM19.6468 5.34268C19.8128 4.58255 19.7655 3.80477 19.5076 3.0592L17.5716 3.43583C17.7596 3.97922 17.7941 4.54611 17.6731 5.10014L19.6468 5.34268ZM11.4618 21.25C10.8299 21.25 10.3013 20.887 10.2466 20.4125L8.25408 20.5417C8.39803 21.7902 9.79027 22.75 11.4618 22.75V21.25ZM11.502 9.00584C12.4084 8.41999 13.3856 7.72266 14.0313 6.81598L12.2672 6.10923C11.8054 6.75766 11.07 7.30492 10.1964 7.86953L11.502 9.00584ZM28.9523 12.313C29.2927 10.8365 27.7788 9.48419 25.7797 9.48419V10.9842C26.5352 10.9842 27.1109 11.4959 26.9815 12.0574L28.9523 12.313ZM4.64895 21.25C4.84389 21.25 5 21.3684 5 21.5127H3C3 22.1953 3.73719 22.75 4.64895 22.75V21.25ZM16.7895 9.14471C16.5792 10.1076 17.5688 10.9842 18.8716 10.9842V9.48419C18.8051 9.48419 18.7519 9.439 18.7632 9.38724L16.7895 9.14471ZM9.16376 11.0198C9.12987 10.7258 9.28633 10.4378 9.58364 10.2456L8.27807 9.10932C7.49363 9.6163 7.08199 10.3753 7.1712 11.149L9.16376 11.0198Z"
                    fill="#858484"
                  />
                </svg>
                <span
                  class="likesCount"
                  style={{ fontSize: "14px", color: "lightgray" }}
                > {likes}
                  
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_315_608)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 26C14.832 26 13.704 25.864 12.62 25.633L7.912 28.463L7.97501 23.824C4.36601 21.654 2 18.066 2 14C2 7.373 8.268 2 16 2C23.732 2 30 7.373 30 14C30 20.628 23.732 26 16 26ZM16 0C7.164 0 0 6.269 0 14C0 18.419 2.345 22.354 6 24.919V32L13.009 27.747C13.979 27.907 14.977 28 16 28C24.836 28 32 21.732 32 14C32 6.269 24.836 0 16 0ZM23 11H9C8.448 11 8 11.448 8 12C8 12.553 8.448 13 9 13H23C23.552 13 24 12.553 24 12C24 11.448 23.552 11 23 11ZM21 17H11C10.448 17 10 17.447 10 18C10 18.553 10.448 19 11 19H21C21.552 19 22 18.553 22 18C22 17.447 21.552 17 21 17Z"
                      fill="#858484"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_315_608">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span
                  class="commentCount"
                  style={{ fontSize: "14px", color: "lightgray" }}
                >{commentLength}</span>
              </div>
            </div>
            <h1>Comments</h1>
            <div class="comment">
              {comments.map((item,index)=>{
                return(
                  <div className="person-comment">
                    <div class="person-header">
                  <div class="profile-name">
                    <div class="profile"></div>
                    <span class="">{item.name}</span>
                  </div>
                  <div class="timeBlock">
                    <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                    <span>{new Date(item.createdAt).toLocaleTimeString([], {hour:'2-digit', minute: '2-digit'})}</span>

                    </div>
                </div>
                <div class="person-content">
                  <span
                    >{item.comment}</span>
                </div>`
                  </div>
                )
              })}
              <div className="per"></div>
            </div>
            <form id="commentForm" class="input-content">
              <div
                style={{ display: "flex", flexDirection: "row", gap: " 4px" }}
              >
                <input type="text" id="name" placeholder="Your Name" />
                <input type="text" id="comment" placeholder="Comment Here" />
              </div>

              <button type="submit">
                {loading ? (
                  <span class="loader"></span>

                ) :(
                  <span class="btn-word">Comment</span>

                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenedBlog;
