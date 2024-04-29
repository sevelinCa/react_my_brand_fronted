import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Message = () => {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMessage = async () => {
      await axios
        .get(
          "https://mybrand-backend-1-8rxh.onrender.com/message/selectMessage"
        )
        .then((response) => {
          if (response) {
            setLoading(false);
            setMessage(response.data.message);
          }
        });
    };
    fetchMessage();
  }, []);

  const deleteMessge = async(id)=>{
    try {
      await axios.delete(`https://mybrand-backend-1-8rxh.onrender.com/message/deleteMessage/${id}`).then((response)=>{
        if(response){
          toast.success("Delete successfully")
          setTimeout(()=>{
            window.location.reload()
          },1000)
        }
      })
      
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <div>
      <div className="main-message">
        <h1>Messages</h1>
        {loading && (

        
        <div
          className="loading-wave"
          style={{
            margin: "0px auto",
            justifyContent: "center",
            padding: "200px 0px",
          }}
        >
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
        </div>
        )}
        <div className="message-conatiner">
          {message.map((item, index) => {
            return (
              <div className="message-card">
                <div class="message-top">
                  <div class="mesasage-head">
                    <div class="profile"></div>
                    <div class="sender-info">
                      <h2>{item.name}</h2>
                      <span>{item.email}</span>
                    </div>
                  </div>
                  <div onClick={()=> deleteMessge(item._id)} class="delete">
                    <svg
                      width="19"
                      height="21"
                      viewBox="0 0 19 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5747 7.71753C16.5747 7.71753 16.0317 14.4525 15.7167 17.2895C15.5667 18.6445 14.7297 19.4385 13.3587 19.4635C10.7497 19.5105 8.13767 19.5135 5.52967 19.4585C4.21067 19.4315 3.38767 18.6275 3.24067 17.2965C2.92367 14.4345 2.38367 7.71753 2.38367 7.71753"
                        stroke="#FF4A4A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.958 4.48901H1"
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
                </div>
                <div class="message-body">
                  <span>{item.message} </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Message;
