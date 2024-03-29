import { createSlice } from "@reduxjs/toolkit";

const initialstateValue =  {name: "", age: 0, email: "" } 

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialstateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload
    },

    logout: (state) => {
      state.value = initialstateValue
    }
  }
})

export const {login, logout} = userSlice.actions

export default userSlice.reducer
 