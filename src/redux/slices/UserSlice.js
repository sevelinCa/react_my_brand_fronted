import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setUser: (state,action)=>{
            state.user = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload.user))
            localStorage.setItem('token', JSON.stringify(action.payload.token))
        },
        logout: (state,action)=>{
            state.user = null;
            localStorage.removeItem('user')
            localStorage.removeItem('token')
        }
    }
})

export const {setUser,logout}= UserSlice.actions
export default UserSlice.reducer