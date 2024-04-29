import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false)
  const subscribe = async (e) => {
    setLoading(true)
    e.preventDefault();
    try {
      const data = {
        email: email,
      };

      await axios
        .post("https://mybrand-backend-1-8rxh.onrender.com/auth/subscribe", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
           if(response.status === 200){
             setEmail("")
             toast.success("Subscription added")
             setLoading(false)

           }else{
          setEmail("")
          toast.warn("Something wrong")
           }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <footer>
      <div className="footer-container">
        <div className="logo">
          <h1>
            MY_<span>BRAND</span>
          </h1>
        </div>
        <div className="start">
          <h3>Start Your Project Today</h3>
          <span>
            Ready to transform your vision into reality?
            <a href=""> Contact us</a> to discuss how we can help.
          </span>
        </div>
        <div className="subscribe">
          <h3>SUBSCRIBE NOW</h3>
          <form onSubmit={(e) => subscribe(e)} id="subscribeForm">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              id="subEmail"
              placeholder="Type Your Email"
            />
               <button type="submit">
                    {loading ? (
                      <span className="loader"></span>

                    ): (
                      <span className="btn-word">Send</span>

                    )}
                  </button>
          </form>
        </div>
      </div>
      <span className="copy">© 2024 My_Brand. All rights reserved.</span>
    </footer>
  );
};

export default Footer;
