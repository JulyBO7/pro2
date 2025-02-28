import { createAsyncThunk } from "@reduxjs/toolkit";
import { userActions } from "entities/user";
import { ThunkArg } from "app/providers/store-provider";
import { LOCAL_STORAGE_LOGIN_KEY } from "shared/const/localStorage";

interface LoginByUserNameArg {
    username: string
    password: string
}
interface LoginByUserNameResponse {
    username: string
    password: string
    id: number
}

export const loginByUserName = createAsyncThunk<LoginByUserNameResponse, LoginByUserNameArg, ThunkArg<string>>(
    "login/loginByUserName",
    async (login, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post<LoginByUserNameResponse>("/login", login);
            if (!response.data) {
                throw Error("user not found!");
            }
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            localStorage.setItem(LOCAL_STORAGE_LOGIN_KEY, JSON.stringify(response.data));

            return response.data;
        } catch (e) {
            // const error = e as Error;
            // const errorMessage = error.message;
            // if (axios.isAxiosError(e)) {
            //     if (e.response?.data) {
            //         errorMessage = e.response.data.message;
            //     } else {
            //         errorMessage = e.message;
            //     }
            // }
            console.dir(e);
            return thunkAPI.rejectWithValue("error");
        }
    },
);
