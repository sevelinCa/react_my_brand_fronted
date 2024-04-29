import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Setting = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [newLoading, setNewLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    axios
      .get("https://mybrand-backend-1-8rxh.onrender.com/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response) {
          setUsername(response.data.user.username);
          setEmail(response.data.user.email);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updateUser = async (e) => {
    setUpdateLoading(true);
    e.preventDefault();

    try {
      const userData = {
        username: username,
        email: email,
      };
      await axios
        .put(
          "https://mybrand-backend-1-8rxh.onrender.com/auth/updateProfile",
          userData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          if (response) {
            setUpdateLoading(false);
            toast.success("Update Success");
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
        });
    } catch (error) {
      setUpdateLoading(false);
      console.log(error.message);
    }
  };

  const addNewUser = async (e) => {
    setNewLoading(true);
    e.preventDefault();
    try {
      const newUserData={
        username: newUsername,
        email: newEmail,
        password: newPassword,
      }
      await axios.post("https://mybrand-backend-1-8rxh.onrender.com/auth/register", newUserData).then((response)=>{
        if(response){
          setNewLoading(false)
          toast.success("new user added")
          setNewEmail("")
          setNewUsername("")
          setNewPassword("")

        }
      }).catch((error)=>{
        setNewLoading(false)
        console.log(error)
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div class="main-setting">
        <div class="admin-info">
          <div class="info-part">
            <div class="admin-profile">
              <img src="../images/my-profile.png" alt="" />
            </div>
            <div class="admin-names">
              <h1 class="profileUsername"></h1>
              <span>Administrator</span>
            </div>
          </div>
          <div class="info-part">
            <div class="info">
              <span>Username</span>
              <p>{username}</p>
            </div>
            <div class="info">
              <span>Email</span>
              <p class="profileEmail">{email}</p>
            </div>
          </div>
        </div>

        <div class="setting-form">
          <h1>Account Details</h1>

          <form onSubmit={(e) => updateUser(e)} class="form">
            <div class="form-container">
              <div class="input-contain">
                <div class="profile">
                  <img src="../images/my-profile.png" alt="" />
                  <div class="delete">
                    <svg
                      width="19"
                      height="21"
                      viewBox="0 0 19 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.9664 6.99718C16.1658 6.99718 16.3467 7.08418 16.4896 7.23118C16.6229 7.38818 16.69 7.58318 16.6705 7.78917C16.6705 7.85717 16.1376 14.5971 15.8332 17.4341C15.6425 19.1751 14.5202 20.232 12.8367 20.261C11.5423 20.29 10.277 20.3 9.03114 20.3C7.70847 20.3 6.41497 20.29 5.15941 20.261C3.53233 20.222 2.40903 19.1461 2.22813 17.4341C1.91497 14.5871 1.39174 7.85717 1.38201 7.78917C1.37229 7.58318 1.43842 7.38818 1.57263 7.23118C1.7049 7.08418 1.89552 6.99718 2.09587 6.99718H15.9664ZM11.0921 0.300049C11.9761 0.300049 12.7658 0.917043 12.9944 1.79703L13.1578 2.52703C13.29 3.12202 13.8055 3.54302 14.3988 3.54302H17.3145C17.7035 3.54302 18.0273 3.86601 18.0273 4.27701V4.65701C18.0273 5.058 17.7035 5.391 17.3145 5.391H0.741197C0.351204 5.391 0.0273438 5.058 0.0273438 4.65701V4.27701C0.0273438 3.86601 0.351204 3.54302 0.741197 3.54302H3.65691C4.24919 3.54302 4.76465 3.12202 4.89789 2.52803L5.05058 1.84603C5.28788 0.917043 6.06884 0.300049 6.96262 0.300049H11.0921Z"
                        fill="#FDA640"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="input-contain">
                <span>Username</span>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  id="updateUsername"
                  type="text"
                />
              </div>
              <div class="input-contain">
                <span>Email</span>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="updateEmail"
                  type="text"
                />
              </div>
            </div>

            <button style={{ cursor: "pointer" }} class="btn">
              {updateLoading ? (
                <span class="loader"></span>
              ) : (
                <span class="btn-word word-update">Update</span>
              )}
            </button>
          </form>
        </div>
        <div class="setting-form">
          <h1>Create A new Admin</h1>

          <form onSubmit={(e)=> addNewUser(e)} class="form" id="formRegister">
            <span
              id="errorRegister"
              style={{ color: "rgb(244, 76, 76)" }}
            ></span>
            <div class="form-container create">
              <div class="input-contain">
                <span>Username</span>
                <input
                onChange={(e)=> setNewUsername(e.target.value)}
                value={newUsername}
                  id="usernameRegister"
                  type="text"
                  placeholder="Type Username"
                />
              </div>
              <div class="input-contain">
                <span>Email</span>
                <input
                onChange={(e)=> setNewEmail(e.target.value)}
                value={newEmail}
                  id="emailRegister"
                  type="text"
                  placeholder="Type Email"
                />
              </div>
              <div class="input-contain">
                <span>password</span>
                <input
                onChange={(e)=> setNewPassword(e.target.value)}
                value={newPassword}
                  id="passwordRegister"
                  type="password"
                  placeholder="Type password"
                />
              </div>
              <button type="submit" id="btnsubmit" class="btn create" style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                {newLoading ?(

                  <span class="loader"></span>
                ): (

                <span class="btn-word">Create</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;
