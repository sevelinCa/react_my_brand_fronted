import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Guest/Navbar";
import Footer from "../../Components/Guest/Footer";
import testimonials from "../../data/testimonials.json";

const Home = () => {
  

  return (
    <div>
      <div className="container">
        <Navbar />

        <main>
          z
          <div className="hero-section">
            <div className="hero-content">
              <h1>Hello ! I’m Mwungeri Ngabo Sevelin</h1>
              <h2>Full-Stack Developer | Web Enthusiast | Innovator</h2>
              <span>
                Welcome! I'm ngabo sevelin, a full-stack developer passionate
                about creating exceptional digital experiences. Let's build
                something amazing together
              </span>
              <div className="buttons">
                <a href="portfolio.html">Our Work</a>
                <a href="#getintouch" className="get-in">
                  Get In Touch
                </a>
              </div>
            </div>

            <div className="hero-profile">
              <img src="./images//my-profile.png" width="200" alt="" />
            </div>
          </div>
          <div className="experiences">
            <div className="card-ex">
              <h2>2</h2>
              <span>Years of Experience</span>
            </div>
            <div className="card-ex">
              <h2>20</h2>
              <span>Projects</span>
            </div>
            <div className="card-ex">
              <h2>10+</h2>
              <span>HappyClients</span>
            </div>
            <div className="card-ex">
              <h2>6+</h2>
              <span>Technologies</span>
            </div>
          </div>
          <div className="choose-me-section">
            <h1>Why Choose Me</h1>
            <div className="choose-me">
              <div className="card-choose">
                <div className="icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.34933 14.8577C13.3347 14.8577 16.6987 15.4911 16.6987 17.9404C16.6987 20.3877 13.3131 21 9.34933 21L9.0786 20.999C5.21283 20.9703 2 20.3109 2 17.9174C2 15.47 5.38553 14.8577 9.34933 14.8577ZM15.5697 13.3832C17.0854 13.3545 18.7155 13.5586 19.3173 13.7023C20.5932 13.9466 21.4317 14.444 21.7791 15.1694C22.0736 15.7635 22.0736 16.4534 21.7791 17.0475C21.2478 18.1705 19.5335 18.5318 18.8672 18.6247C18.7292 18.6439 18.6186 18.5289 18.6333 18.3928C18.9738 15.2805 16.2664 13.8048 15.5658 13.4656C15.5364 13.4493 15.5296 13.4263 15.5325 13.411C15.5345 13.4014 15.5472 13.3861 15.5697 13.3832ZM9.34933 3C12.0489 3 14.2124 5.11865 14.2124 7.76241C14.2124 10.4062 12.0489 12.5248 9.34933 12.5248C6.6507 12.5248 4.48631 10.4062 4.48631 7.76241C4.48631 5.11865 6.6507 3 9.34933 3ZM15.8339 3.79543C18.4415 3.79543 20.4885 6.19676 19.7908 8.87118C19.3202 10.6736 17.6167 11.8704 15.7184 11.8216C15.5276 11.8177 15.3407 11.7995 15.1587 11.7698C15.0276 11.7468 14.9611 11.6021 15.0364 11.4948C15.7605 10.4513 16.1734 9.19506 16.1734 7.84875C16.1734 6.44206 15.7233 5.13216 14.9396 4.05607C14.9141 4.02253 14.8955 3.97174 14.921 3.93246C14.9405 3.90179 14.9797 3.88454 15.0159 3.87688C15.2801 3.82418 15.5511 3.79543 15.8339 3.79543Z"
                      fill="#FAFAFA"
                    />
                  </svg>
                </div>
                <h1>Expertise</h1>
                <span>
                  I have over 2 years of experience, so I know what I'm doing.
                </span>
              </div>
              <div className="card-choose">
                <div className="icon"></div>
                <h1>Personalized Solutions</h1>
                <span>
                  I listen carefully to your needs and create solutions that fit
                  you perfectly.
                </span>
              </div>
              <div className="card-choose">
                <div className="icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 29.3333C23.3638 29.3333 29.3334 23.3638 29.3334 16C29.3334 8.6362 23.3638 2.66666 16 2.66666C8.63622 2.66666 2.66669 8.6362 2.66669 16C2.66669 23.3638 8.63622 29.3333 16 29.3333Z"
                      stroke="#FDA640"
                      stroke-width="2"
                    />
                    <path
                      d="M16 22.6667V14.6667"
                      stroke="#FDA640"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M16 9.33333C16.7364 9.33333 17.3334 9.93029 17.3334 10.6667C17.3334 11.403 16.7364 12 16 12C15.2636 12 14.6667 11.403 14.6667 10.6667C14.6667 9.93029 15.2636 9.33333 16 9.33333Z"
                      fill="#FDA640"
                    />
                  </svg>
                </div>
                <h1>Attention to Detail</h1>
                <span>
                  I pay close attention to every little thing to make sure
                  everything works perfectly..
                </span>
              </div>
              <div className="card-choose">
                <div className="icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.9999 17C23.6769 17 22.5119 17.651 21.7839 18.641L17.0309 16L21.7839 13.359C22.5119 14.349 23.6759 15 24.9999 15C27.2089 15 28.9999 13.209 28.9999 11C28.9999 8.791 27.2089 7 24.9999 7C22.7909 7 20.9999 8.791 20.9999 11C20.9999 11.526 21.1079 12.026 21.2919 12.487L16.4999 15.15V9.95C18.4699 9.701 19.9999 8.038 19.9999 6C19.9999 3.791 18.2089 2 15.9999 2C13.7909 2 11.9999 3.791 11.9999 6C11.9999 8.038 13.5299 9.701 15.4999 9.95V15.15L10.7069 12.487C10.8919 12.026 10.9999 11.526 10.9999 11C10.9999 8.791 9.20894 7 6.99994 7C4.79094 7 2.99994 8.791 2.99994 11C2.99994 13.209 4.79094 15 6.99994 15C8.32394 15 9.48794 14.349 10.2159 13.359L14.9689 16L10.2149 18.641C9.48794 17.651 8.32394 17 6.99994 17C4.79094 17 2.99994 18.791 2.99994 21C2.99994 23.209 4.79094 25 6.99994 25C9.20894 25 10.9999 23.209 10.9999 21C10.9999 20.474 10.8919 19.974 10.7069 19.513L15.4999 16.85V22.05C13.5299 22.299 11.9999 23.962 11.9999 26C11.9999 28.209 13.7909 30 15.9999 30C18.2089 30 19.9999 28.209 19.9999 26C19.9999 23.962 18.4699 22.299 16.4999 22.05V16.85L21.2929 19.513C21.1079 19.973 20.9999 20.473 20.9999 21C20.9999 23.209 22.7909 25 24.9999 25C27.2089 25 28.9999 23.209 28.9999 21C28.9999 18.791 27.2089 17 24.9999 17ZM24.9999 8C26.6539 8 27.9999 9.346 27.9999 11C27.9999 12.654 26.6539 14 24.9999 14C23.3459 14 21.9999 12.654 21.9999 11C21.9999 9.346 23.3459 8 24.9999 8ZM6.99994 14C5.34594 14 3.99994 12.654 3.99994 11C3.99994 9.346 5.34594 8 6.99994 8C8.65394 8 9.99994 9.346 9.99994 11C9.99994 12.654 8.65394 14 6.99994 14ZM6.99994 24C5.34594 24 3.99994 22.654 3.99994 21C3.99994 19.346 5.34594 18 6.99994 18C8.65394 18 9.99994 19.346 9.99994 21C9.99994 22.654 8.65394 24 6.99994 24ZM12.9999 6C12.9999 4.346 14.3459 3 15.9999 3C17.6539 3 18.9999 4.346 18.9999 6C18.9999 7.654 17.6539 9 15.9999 9C14.3459 9 12.9999 7.654 12.9999 6ZM18.9999 26C18.9999 27.654 17.6539 29 15.9999 29C14.3459 29 12.9999 27.654 12.9999 26C12.9999 24.346 14.3459 23 15.9999 23C17.6539 23 18.9999 24.346 18.9999 26ZM24.9999 24C23.3459 24 21.9999 22.654 21.9999 21C21.9999 19.346 23.3459 18 24.9999 18C26.6539 18 27.9999 19.346 27.9999 21C27.9999 22.654 26.6539 24 24.9999 24Z"
                      fill="#FDA640"
                    />
                  </svg>
                </div>
                <h1>Collaborative Approach</h1>
                <span>
                  I like working closely with my clients and talking to them
                  often so we can make the best software together.
                </span>
              </div>
            </div>
          </div>
          <div className="testimonials-section">
            <h1>Testimonials</h1>
            <div className="testimonials-cards">
              {testimonials.map((item, index) => {
                return (
                  <div className="test-card">
                    <div className="head">
                      <div className="profile"></div>
                      <div className="content">
                        <h2>Kwizera Sam</h2>
                        <span>Ceo techlife</span>
                      </div>
                    </div>
                    <span>
                      “ I had the pleasure of working with you on a challenging
                      software project, and I couldn't be happier with the
                      results. Sevelin demonstrated exceptional technical skills
                      and creativity, delivering a solution that exceeded our
                      expectations. Their professionalism and dedication to the
                      project were truly impressive. I highly recommend Sevelin
                      to anyone seeking a skilled and reliable software
                      developer.
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="buttons">
              <div className="butt prev">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17 1.58368C8.48663 1.58368 1.58329 8.48535 1.58329 17.0003C1.58329 25.5137 8.48663 32.417 17 32.417C25.5133 32.417 32.4166 25.5137 32.4166 17.0003C32.4166 8.48535 25.5133 1.58368 17 1.58368Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.4038 11.215L13.5938 17L19.4038 22.785"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="butt next">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17 32.4163C25.5133 32.4163 32.4166 25.5147 32.4166 16.9997C32.4166 8.48632 25.5133 1.58299 17 1.58299C8.48665 1.58299 1.58331 8.48632 1.58331 16.9997C1.58331 25.5147 8.48665 32.4163 17 32.4163Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.5961 22.785L20.4061 17L14.5961 11.215"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div id="popup" className="popup"></div>
        </main>
      </div>
    </div>
  );
};

export default Home;
