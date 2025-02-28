import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_LOGIN_KEY } from "shared/const/localStorage";
import { User, UserSchema } from "../types/userSchema";

const initialState: UserSchema = {};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = { id: action.payload.id, username: action.payload.username };
        },
        initAuthData: (state) => {
            const userAuthData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LOGIN_KEY) || "");
            state.authData = userAuthData;
        },
        logout: (state) => {
            localStorage.removeItem(LOCAL_STORAGE_LOGIN_KEY);
            state.authData = undefined;
        },
    },
});
export const userReducer = userSlice.reducer;
export const { actions: userActions } = userSlice;
