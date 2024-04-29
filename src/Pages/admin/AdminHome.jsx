import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminHome = () => {
  const [blogs,setBlogs] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
 
    const fetchBlogs = async()=>{

      await axios.get("https://mybrand-backend-1-8rxh.onrender.com/blog/selectBlog").then((response)=>{
        if(response.status === 200){
          setLoading(false)
          setBlogs(response.data.blog)
        }
      })
    }
    fetchBlogs()
  },[])

 

  return (
    <div className="admin-body">
    
  
      <div className="admin-cardContainer">
        <a href="./aritcles.html" className="admin-card" style={{ width: '200px' }}>
          <span>Blogs</span>
          <span className="admin-blogNum" id="Hello"></span>
        </a>
      </div>
  
      <main className='main-admin'>
        <div className="admin-articles" style={{ color: 'orange', textAlign: 'center' }}>
          <div className="admin-artcles-head">
            <span>Recent articles</span>
     
            <a href="./aritcles.html">View all</a>
          </div>
       
          <h1 style={{ textAlign: 'center', color: 'white' }} className="admin-noblog"></h1>
          <div className="admin-insights-main">
            {loading ? (
                 <div className="loading-wave" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                 <div className="loading-bar"></div>
                 <div className="loading-bar"></div>
                 <div className="loading-bar"></div>
                 <div className="loading-bar"></div>
               </div>
            ) : (
              <>
            {blogs.map((item,index)=>(
              
              <div key={index} className='insight-card'>
                 <a href="singleBlog.html?id=${id}" class="picture" style={{cursor: 'pointer'}}>
              <img src={item.imageUrl} alt="" />
            </a>
       
            <div class="content">
             

                <div class="headWord"  onclick="" style={{cursor:'pointer'}}>
                <h2>{item.title}</h2>
                <span
                >{item.description}</span>
                </div>
              <div class='ope' style={{position:'relative'}}>
              <div class="operation" >
              <div onclick=""  class="like">
              <div>
              <svg
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
                    <path
                    d="M2.5 10.2342L3.12268 10.1696C3.09384 9.76944 2.80744 9.46758 2.47306 9.48489C2.13867 9.5022 1.875 9.83255 1.875 10.2342H2.5ZM16.8634 12.0574L16.2755 16.1371L17.5072 16.3928L18.0952 12.313L16.8634 12.0574ZM11.0375 21.25H7.16363V22.75H11.0375V21.25ZM6.40415 20.4125L5.72735 11.0198L4.482 11.149L5.1588 20.5417L6.40415 20.4125ZM16.2755 16.1371C15.8532 19.0677 13.6511 21.25 11.0375 21.25V22.75C14.226 22.75 16.9757 20.081 17.5072 16.3928L16.2755 16.1371ZM11.0457 5.10014L10.4934 9.14471L11.727 9.38724L12.2793 5.34268L11.0457 5.10014ZM5.98978 10.2456L7.18872 9.00584L6.37274 7.86953L5.17379 9.10932L5.98978 10.2456ZM9.37 4.97205L9.76642 3.1382L8.5565 2.76156L8.16007 4.59541L9.37 4.97205ZM10.3652 2.7784L10.486 2.82497L10.8683 1.39686L10.7475 1.35029L10.3652 2.7784ZM8.76958 6.81598C9.0295 6.23197 9.23142 5.61338 9.37 4.97205L8.16007 4.59541C8.04644 5.12106 7.88083 5.62892 7.66702 6.10923L8.76958 6.81598ZM10.486 2.82497C10.7413 2.92341 10.9227 3.16008 10.9823 3.43583L12.1923 3.0592C12.021 2.26718 11.5158 1.64647 10.8683 1.39686L10.486 2.82497ZM9.76642 3.1382C9.79567 3.00319 9.87692 2.87912 9.99983 2.80803L9.45717 1.45674C9.01383 1.71308 8.68083 2.18626 8.5565 2.76156L9.76642 3.1382ZM9.99983 2.80803C10.1121 2.7431 10.2443 2.7318 10.3652 2.7784L10.7475 1.35029C10.3228 1.18654 9.85933 1.22419 9.45717 1.45674L9.99983 2.80803ZM11.7948 10.9842H16.1123V9.48419H11.7948V10.9842ZM3.93234 21.4061L3.12268 10.1696L1.87732 10.2988L2.68699 21.5353L3.93234 21.4061ZM3.125 21.5127V10.2342H1.875V21.5127H3.125ZM2.68699 21.5353C2.676 21.3828 2.77622 21.25 2.90559 21.25V22.75C3.51057 22.75 3.98435 22.1279 3.93234 21.4061L2.68699 21.5353ZM12.2793 5.34268C12.383 4.58255 12.3534 3.80477 12.1923 3.0592L10.9823 3.43583C11.0998 3.97922 11.1213 4.54611 11.0457 5.10014L12.2793 5.34268ZM7.16363 21.25C6.7687 21.25 6.43834 20.887 6.40415 20.4125L5.1588 20.5417C5.24877 21.7902 6.11892 22.75 7.16363 22.75V21.25ZM7.18872 9.00584C7.75527 8.41999 8.366 7.72266 8.76958 6.81598L7.66702 6.10923C7.37837 6.75766 6.91875 7.30492 6.37274 7.86953L7.18872 9.00584ZM18.0952 12.313C18.3079 10.8365 17.3618 9.48419 16.1123 9.48419V10.9842C16.5845 10.9842 16.9443 11.4959 16.8634 12.0574L18.0952 12.313ZM2.90559 21.25C3.02743 21.25 3.125 21.3684 3.125 21.5127H1.875C1.875 22.1953 2.33574 22.75 2.90559 22.75V21.25ZM10.4934 9.14471C10.362 10.1076 10.9805 10.9842 11.7948 10.9842V9.48419C11.7532 9.48419 11.7199 9.439 11.727 9.38724L10.4934 9.14471ZM5.72735 11.0198C5.70617 10.7258 5.80396 10.4378 5.98978 10.2456L5.17379 9.10932C4.68352 9.6163 4.42624 10.3753 4.482 11.149L5.72735 11.0198Z"
                    fill="#858484"
                    />
                    </svg>
                    </div>
                    <span>{item.likes}</span>
                    </div>
                    <div class="like">
                    <div>
                    <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 19.5C11.124 19.5 10.278 19.398 9.465 19.2247L5.934 21.3473L5.98125 17.868C3.2745 16.2405 1.5 13.5495 1.5 10.5C1.5 5.52975 6.201 1.5 12 1.5C17.799 1.5 22.5 5.52975 22.5 10.5C22.5 15.471 17.799 19.5 12 19.5ZM12 0C5.373 0 0 4.70175 0 10.5C0 13.8142 1.75875 16.7655 4.5 18.6893V24L9.75675 20.8103C10.4843 20.9303 11.2327 21 12 21C18.627 21 24 16.299 24 10.5C24 4.70175 18.627 0 12 0ZM17.25 8.25H6.75C6.336 8.25 6 8.586 6 9C6 9.41475 6.336 9.75 6.75 9.75H17.25C17.664 9.75 18 9.41475 18 9C18 8.586 17.664 8.25 17.25 8.25ZM15.75 12.75H8.25C7.836 12.75 7.5 13.0852 7.5 13.5C7.5 13.9148 7.836 14.25 8.25 14.25H15.75C16.164 14.25 16.5 13.9148 16.5 13.5C16.5 13.0852 16.164 12.75 15.75 12.75Z"
                    fill="#858484"
                    />
                        </svg>
                        </div>
                        <span>0</span>
                        </div>
                        
                       
                        </div>
                        
                        </div>
                        </div>
                      
                        

              </div>
            ))}
          </>
          )}
          </div>
          <a href="./addBlog.html" style={{color:'white',background:'orange',width:'200px',padding:'20px',marginLeft:'auto'}} className="new-aritcle">New Article</a>
        </div>
        </main>
    </div>
  );
};

export default AdminHome;
