import { createSlice } from "@reduxjs/toolkit";
// import { fetchStart } from "./authSlice";

const initialState = {
    user: "",
    token: "",
    loading: false,
    error: false,
}

const authRegisterSlice = createSlice({
    name: "authRegister",
    initialState,
    reducers: {
        fetchRegisterStart: (state) => {
            state.loading = true
        },

      

        fetchRegisterFail: (state) => {
            state.loading = false
            state.error = true
        }

    }
})

export const {fetchRegisterStart,registerSuccess,fetchRegisterFail } = authRegisterSlice.actions
export default authRegisterSlice.reducer