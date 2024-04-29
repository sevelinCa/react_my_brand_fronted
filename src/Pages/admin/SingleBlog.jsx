import React from 'react'

const SingleBlog = () => {
  return (
<div className="admin-body">
    <div id="admin-navbar"></div>

    <div className="admin-single-container">
      <div className="admin-img-content">
        <div className="admin-image"></div>
        <div className="admin-content"></div>
        <div id="admin-blogContent" style={{ color: "white" }}></div>
        <div className="admin-likes" style={{ position: "relative" }}>
          <div
            className=""
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
          
            <svg
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
          
            </svg>
            <span style={{ fontSize: "14px", color: "lightgray" }} className="admin-likesCount"></span>
          </div>
          <div
            className=""
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
            
            </svg>
            <span style={{ fontSize: "14px", color: "lightgray" }} className="admin-commentCount">12</span>
          </div>
          <div className="admin-operation">
            <div style={{ position: "absolute", right: "40px" }}>
             
              <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              
              </svg>
            </div>
            <div style={{ right: "10px", position: "absolute" }}>
            
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
             
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="admin-comment-content">
        <h1>Comments</h1>
        <div className="admin-comment">
        
        </div>
      </div>
    </div>
</div>

  )
}

export default SingleBlog
