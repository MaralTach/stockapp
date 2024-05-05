import { createSlice } from "@reduxjs/toolkit";
import { fetchStart } from "./authSlice";

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

        registerSuccess: (state, { payload }) => {
            state.loading = false
            state.user = payload.data.userName 

            state.token = payload.token //"8834b8c30484c3bbd77cbf584a269e2598ae60bbb74cd17c7db5466291994621"
        },

        fetchRegisterFail: (state) => {
            state.loading = false
            state.error = true
        }

    }
})

export const {fetchRegisterStart,registerSuccess,fetchRegisterFail } = authRegisterSlice.actions
export default authRegisterSlice.reducer