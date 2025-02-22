import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userActions } from "entities/user";
import { LOCAL_STORAGE_LOGIN_KEY } from "../../../../../shared/const/localStorage";

interface LoginByUserNameArg {
    username: string
    password: string
}
interface LoginByUserNameResponse {
    username: string
    password: string
    id: number
}
export const loginByUserName = createAsyncThunk<LoginByUserNameResponse, LoginByUserNameArg, { rejectValue: string }>(
    "login/loginByUserName",
    async (login, thunkAPI) => {
        try {
            const response = await axios.post<LoginByUserNameResponse>("http://localhost:8000/login", login);
            if (!response.data) {
                throw Error("user not found!");
            }
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            localStorage.setItem(LOCAL_STORAGE_LOGIN_KEY, JSON.stringify(response.data));

            return response.data;
        } catch (e) {
            let error = e.message;
            if (axios.isAxiosError(e)) {
                if (e.response) {
                    error = e.response.data.message;
                } else {
                    error = e.message;
                }
            }
            console.dir(e);
            return thunkAPI.rejectWithValue(error);
        }
    },
);
