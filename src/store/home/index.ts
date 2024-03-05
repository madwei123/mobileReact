import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    msg: 'hello world!'
  },
  reducers: {
    changeMsg(state, action) {
      state.msg = action.payload
    }
  }
})
export const { changeMsg } = homeSlice.actions

export default homeSlice.reducer
