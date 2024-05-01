import React, { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/UserSlice";
const Navbar = () => {
  const [openModal, setOpenModal] = useState(false)
  const modalRef = useRef()
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const usernameAB = userInfo.username;

  const ABR1 = usernameAB.split(" ")[0].slice(0, 1);
  const ABR2 = usernameAB.split(" ")[1]?.slice(0, 1);

  const openModalFunc = () => {
    setOpenModal(false)
  }


  const handelOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      openModalFunc()
    }
  };

  document.addEventListener("mousedown", handelOutsideClick);

  const LoggOut = () => {
    useDispatch(logout())

    window.location.href = '/signin'

  }

  return (
    <div className="admin-navbar">
      <div className="top-nav">
        <div className="left-nav">
          <a href="../index.html" className="logo">
            <h2>
              MY_<span>BRAND</span>
            </h2>
          </a>
          <div className="links">
            <a href="./">Home</a>
            <a href="./messages">Message</a>
            <a href="/admin/blogs">Articles</a>
          </div>
        </div>
        <div className="top-right">
          <div id="popup" className="popup"></div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal(!openModal)}
          >
            <div
              id="profile"
              className="profile"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "24px",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                {ABR1}
                {ABR2 ? ABR2 : ""}
              </span>
            </div>
            <IoIosArrowDown color="white" />
          </div>
          {openModal && (


            <div className="setting-modal" >
              <div ref={modalRef} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                <a href="/admin/setting">
                  <div></div>
                  <span>Setting</span>
                </a>
                <a href="/admin/users">
                  <div></div>
                  <span>Users</span>
                </a>
                <div
                  onClick={LoggOut}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                >
                  <div></div>
                  <span>Logout</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bottom_nav">
        <span className="hello">Welcome Again</span>
        <span className="date"></span>
      </div>
    </div>
  );
};

export default Navbar;
