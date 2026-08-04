import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    isLogged: false
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.isLogged = true;
        },

        logout: (state) => {
            state.currentUser = null;
            state.isLogged = false;
        }
    }
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;