import { createSlice } from "@reduxjs/toolkit";

const initialstateValue =  ""

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialstateValue },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload
    },

    
  }
})

export const {changeColor} = themeSlice.actions

export default themeSlice.reducer
 