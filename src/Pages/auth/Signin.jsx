import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../redux/slices/UserApiSlice'
import { setUser } from '../../redux/slices/UserSlice'

const Signin = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState()
  const [password, setPasword] = useState()
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login, {isLoading}] = useLoginMutation()


  const loginFunc = async(e) => {
   
    e.preventDefault()
    try {

      const res = await login({email,password}).unwrap();
      if(res){
       const addUser =  dispatch(setUser({user:res.user,token:res.token}))
       if(addUser){
         navigate('/admin/')
       }
      }

       
    } catch (error) {
      console.log(error)

    }
  }
  return (
    <div class="login">
      <div class="container">
        <a href="/">
          <h1 class="logo" style={{ color: 'white' }}>MY_<span style={{ color: '#FDA640' }}>BRAND</span></h1>
        </a>
        <main class="main-signin">
          <div class="signin-header">
            <h1>Welcome Again</h1>
            <span>Fill in your credentials</span>
          </div>
          <form onSubmit={(e) => loginFunc(e)} id="formLogin">
            <span
              style={{
                fontSize: '12px',
                color: 'rgb(253, 38, 38)',
                padding: '0px 10px',
                textAlign: 'center'
              }}
              class="errorMessage"
            >{error}</span>
            <div class="contain">
              <span>Email</span>
              <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" placeholder="Enter your email" />
            </div>
            <div class="contain">
              <span>Password</span>
              <input
                onChange={(e) => setPasword(e.target.value)}
                type="password"
                id="password"
                placeholder="Enter your email"
              />
              <div class="" style={{ display: 'flex', flexDirection: 'row', gap: '4px', padding: '10px 10px' }}>
                <input type="checkbox" class="hide-unhide" style={{ width: '10px' }} />
                <span class="hide-word" style={{ fontSize: '12px' }}>Show password</span>

              </div>
            </div>
            <a href="#" class="forgot">forgot password?</a>
            <button type="submit" class="btn">
              {isLoading ? (
                <span class="loader"></span>

              ) : (

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
