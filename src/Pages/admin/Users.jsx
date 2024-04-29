import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)
    const token = JSON.parse(localStorage.getItem("token"));
    useEffect(()=>{
        const fetchUsers = async()=>{
            await axios.get("https://mybrand-backend-1-8rxh.onrender.com/auth/users",{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }).then((response)=>{
                if(response){
                    setLoading(false)
                    setUsers(response.data.users)
                }else{
                    console.log("soory")
                }
                


            }).catch((error)=>{
                console.log(error)
            })
        }
        fetchUsers()

    },[])
  return (
    <div style={{padding: '140px 100px'}}>
    <div style={{}}>
      <span style={{color: 'white',fontSize: "30px"}}>All Admin</span><br /><br />
    </div>
    {loading && (
        
    <div className="loading-wave" style={{ margin: "0px auto" }}>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
          </div>
    )}
    <div class="users">
        {users.map((item,index)=>{
            return(
                <div className='singleUser'>
                     <div class='profile'>
                        <span>
                            {item.username.split(' ')[0].slice(0,1)}
                            {item.username.split(' ')[1]? item.username.split(' ')[1].slice(0,1): ""}
                        </span>
                        
                        </div>
                        <div class='singleDetail'>
                            <span style={{color:'orange',fontSize:'14px'}}>username</span>
                            <span>{item.username}</span>
                        </div>
                        <div class='singleDetail'>
                            <span style={{color:'orange',fontSize:'14px'}}>email</span>
                            <span>{item.email}</span>
                        </div>
                        <div class='singleDetail'>
                          
                            <span>you</span>
                        </div>
                </div>
            )
        })}
    </div>
  </div>
  )
}

export default Users
