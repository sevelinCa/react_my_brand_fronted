import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/guest/Home";
import Contactus from "./Pages/guest/Contactus";
import Aboutus from "./Pages/guest/Aboutus";
import Portfolio from "./Pages/guest/Portfolio";
import Blogs from "./Pages/guest/Blogs";
import OpenedBlog from "./Pages/guest/OpenedBlog";
import Guest from "./Pages/Portal/Guest";
import Admin from "./Pages/Portal/Admin";
import Signin from "./Pages/auth/Signin";
import AdminHome from "./Pages/admin/AdminHome";
import AddBlog from "./Pages/admin/AddBlog";
import Articles from "./Pages/admin/Articles";
import Message from "./Pages/admin/Message";
import Users from "./Pages/admin/Users";
import Setting from "./Pages/admin/Setting";
import {io} from "socket.io-client"
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [blogs,setBlogs] = useState([])

  useEffect(() => {
    const socket = io("https://mybrand-backend-1-8rxh.onrender.com");

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    // Clean up function to close the socket connection when component unmounts
    return () => {
      socket.disconnect();
    };
  }, [])


  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Guest />}>
          <Route index element={<Home />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="about-us" element={<Aboutus />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="single-blog/:id" element={<OpenedBlog />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminHome />} />
          <Route path="addBlog" element={<AddBlog />} />
          <Route path="blogs" element={<Articles />} />
          <Route path="messages" element={<Message />} />
          <Route path="users" element={<Users />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
