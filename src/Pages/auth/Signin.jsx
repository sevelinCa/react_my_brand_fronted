import axios from 'axios'
import React, { useState } from 'react'
import { useRoutes } from 'react-router-dom'

const Signin = () => {
  const [loading,setLoading] = useState(false)
  const [email,setEmail] = useState()
  const [password,setPasword] = useState()


  const loginFunc = (e)=>{
    setLoading(true)
    e.preventDefault()
    try {
      
      const data = {
        email:email,
        password: password
      }

      axios.post("https://mybrand-backend-1-8rxh.onrender.com/auth/login", data).then((response)=>{
        setLoading(false)
        if(response.status === 200){
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("token", JSON.stringify(response.data.token));
          localStorage.setItem(
            "refreshToken",
            JSON.stringify(response.data.refreshToken)
          );
          window.location.href='/admin/addBlog'
          

        }
      })
      
    } catch (error) {
      console.log(error.message)
      
    }
  }
  return (
    <div class="login">
    <div class="container">
    <a href="../index.html">
      <h1 class="logo" style={{color:'white'}}>MY_<span style={{color: '#FDA640'}}>BRAND</span></h1>
    </a>
      <main class="main-signin">
        <div class="signin-header">
          <h1>Welcome Again</h1>
          <span>Fill in your credentials</span>
        </div>
        <form onSubmit={(e)=> loginFunc(e)} id="formLogin">
          <span
            style={{
              fontSize: '12px',
              color: 'rgb(253, 38, 38)',
              padding: '0px 10px',
              textAlign: 'center'
            }}
            class="errorMessage"
          ></span>
          <div class="contain">
            <span>Email</span>
            <input onChange={(e)=> setEmail(e.target.value)} type="text" id="email" placeholder="Enter your email" />
          </div>
          <div class="contain">
            <span>Password</span>
            <input
            onChange={(e)=>setPasword(e.target.value)} 
              type="password"
              id="password"
              placeholder="Enter your email"
            />
            <div class="" style={{display: 'flex',flexDirection: 'row',gap: '4px',padding: '10px 10px'}}>
              <input type="checkbox" class="hide-unhide" style={{width: '10px'}}/>
              <span class="hide-word" style={{fontSize: '12px'}}>Show password</span>

            </div>
          </div>
          <a href="#" class="forgot">forgot password?</a>
          <button type="submit" class="btn">
            {loading ? (
              <span class="loader"></span>

            ):(

            <span class="btn-word">Login</span>
            )}
          </button>
        </form>
      </main>
    </div>
  
  </div>
  )
}

export default Signin
