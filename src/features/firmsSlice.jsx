import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    firms: [],
    loading: false,
    error: false,    
}

const firmsSlice = createSlice({
    name: "firms",
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.loading = true
        },
        firmSuccess: (state, { payload }) => {
            state.loading = false
            state.firms = payload.data;
        },
        fetchFail: (state) => {
            state.loading = false
            state.error = true
        },
    }
});

export const { fetchStart, firmSuccess, fetchFail } = firmsSlice.actions

export default firmsSlice.reducer