import { createAsyncThunk } from "@reduxjs/toolkit";

// import axios from "axios";
import { ThunkArg } from "app/providers/store-provider";
import { Profile } from "../../model/types/profile";

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkArg<string>>(
    "profile/getProfile",
    async (profileId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Profile>(`/profile/${profileId}`);
            if (!response.data) {
                throw Error("user not found!");
            }
            return response.data;
        } catch (e) {
            const error = e as Error;
            const errorMessage = error.message;
            // if (axios.isAxiosError(e)) {
            //     if (e.response?.data) {
            //         errorMessage = e.response.data.message;
            //     } else {
            //         errorMessage = e.message;
            //     }
            // }
            console.dir(e);
            return rejectWithValue(errorMessage);
        }
    },
);
