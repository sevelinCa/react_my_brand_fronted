import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UpdateFrom from "../../Components/modals/UpdateFrom";

const Articles = () => {
  const [blogs, setBlogs] = useState([]);
  const [openModal,setOpenModal] = useState("")
  const [loading, setLoading] = useState(true);
  const token= JSON.parse(localStorage.getItem('token')) 

  const closeModal = ()=>{
    setOpenModal("")
  }
  const fetchBlogs = async () => {
    await axios
      .get("https://mybrand-backend-1-8rxh.onrender.com/blog/selectBlog")
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          setBlogs(response.data.blog);
        }
      });
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  const deleteBlog = async(id)=>{
    await axios.delete(`https://mybrand-backend-1-8rxh.onrender.com/blog/deleteBlog/${id}`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((response)=>{
      if(response){
        toast.success("delete success")
        setTimeout(()=>{
          window.location.reload()

        },1000)
      }
      
    }).catch((eror)=>{
      console.log(eror)
    })

  }
  return (
    <div className="blogs-page">
      <div className="all-articles">
        <div className="articles-head">
          <h1>Blogs</h1>
          <a href="/admin/addBlog" className="new-article">
            New Blog
          </a>
        </div>
        {loading && (
          <div className="loading-wave" style={{ margin: "0px auto" }}>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
          </div>
        )}
        <div className="admin-all-articles-card">
          {blogs.map((item, index) => {
            return (
              <div className="insight-card">
                <div
                  class="picture"
                  style={{ cursor: "pointer" }}
                  onclick="openBlogd('${id}')"
                >
                  <img src={item.imageUrl} alt="" />
                </div>

                <div class="content">
                  <div
                    class="headWord"
                    onclick="openBlogd('${id}')"
                    style={{ cursor: "pointer" }}
                  >
                    <h2>{item.title}</h2>
                    <span>{item.description}</span>
                  </div>
                  <div class="ope" style={{ position: "relative" }}>
                    <div class="operation">
                      <div onclick="likeBlog('${item._id}')" class="like">
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
                        <div
                          onClick={()=> deleteBlog(item._id)}
                          style={{ position: "absolute", left: "110px" }}
                        >
                          <svg
                            width="19"
                            height="21"
                            viewBox="0 0 19 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5747 7.7175C16.5747 7.7175 16.0317 14.4525 15.7167 17.2895C15.5667 18.6445 14.7297 19.4385 13.3587 19.4635C10.7497 19.5105 8.13767 19.5135 5.52967 19.4585C4.21067 19.4315 3.38767 18.6275 3.24067 17.2965C2.92367 14.4345 2.38367 7.7175 2.38367 7.7175"
                              stroke="#FF4A4A"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M17.958 4.489H1"
                              stroke="#FF4A4A"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M14.6905 4.489C13.9055 4.489 13.2295 3.934 13.0755 3.165L12.8325 1.949C12.6825 1.388 12.1745 1 11.5955 1H7.36246C6.78346 1 6.27546 1.388 6.12546 1.949L5.88246 3.165C5.72846 3.934 5.05246 4.489 4.26746 4.489"
                              stroke="#FF4A4A"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div
                          onClick={()=> setOpenModal(item._id)}
                          style={{left: "150px", position: "absolute" }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.8775 17.7258C19.4965 17.7258 20 18.2359 20 18.8629C20 19.4912 19.4965 20 18.8775 20H12.533C11.914 20 11.4105 19.4912 11.4105 18.8629C11.4105 18.2359 11.914 17.7258 12.533 17.7258H18.8775ZM14.4776 0.776737L16.1165 2.07865C16.7886 2.60419 17.2366 3.29695 17.3899 4.02554C17.5668 4.827 17.3781 5.61412 16.8475 6.29493L7.08489 18.9199C6.63684 19.4932 5.97657 19.8157 5.26913 19.8276L1.37822 19.8754C1.16599 19.8754 0.989126 19.7321 0.941963 19.529L0.0576649 15.695C-0.0956134 14.9903 0.0576649 14.2617 0.505709 13.7003L7.42682 4.74219C7.54472 4.59886 7.75695 4.57617 7.89844 4.68247L10.8107 6.99964C10.9994 7.15491 11.2588 7.23852 11.53 7.20269C12.1077 7.13102 12.4968 6.60548 12.4378 6.0441C12.4025 5.75745 12.261 5.51856 12.0723 5.3394C12.0134 5.29162 9.24257 3.07001 9.24257 3.07001C9.06571 2.92668 9.03034 2.66391 9.17183 2.48594L10.2684 1.0634C11.2824 -0.238515 13.051 -0.357956 14.4776 0.776737Z"
                              fill="#FDA640"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <h1
        className="admin-sorry"
        style={{ width: "800px", color: "orange" }}
      ></h1>
      {openModal && openModal !== "" ? (

        <UpdateFrom id={openModal} closeModal={closeModal}/>
      ): ""}

    </div>
  );
};

export default Articles;
