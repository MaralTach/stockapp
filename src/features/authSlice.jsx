import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: "",
  token: "",
  loading: false,
  error: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true
    },

    loginSuccess: (state, { payload }) => {
      state.loading = false
      state.user = payload.user.username
      state.token = payload.token
    },

    registerSuccess: (state, { payload }) => {
      state.loading = false
      state.user = payload.data.username 
      state.token = payload.token //"8834b8c30484c3bbd77cbf584a269e2598ae60bbb74cd17c7db5466291994621"
  },
    fetchFail: (state) => {
      state.loading = false
      state.error = true
    },
    logOutSuccess: (state) => {
      state.user = ""
      state.token = ""
      state.loading = false
      state.error = false
    }

  },
})

export const { fetchStart, loginSuccess,fetchFail,logOutSuccess,registerSuccess } = authSlice.actions
export default authSlice.reducer
