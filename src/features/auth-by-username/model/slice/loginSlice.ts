import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/loginSchema";
import { loginByUserName } from "../services/login-by-username/loginByUserName";

const initialState: LoginSchema = {
    userName: "",
    password: "",
    isLoading: false,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUsername(state, action: PayloadAction<string>) {
            state.userName = action.payload;
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(loginByUserName.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(loginByUserName.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(loginByUserName.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});

export const { setUsername, setPassword } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
