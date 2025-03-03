import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { ThunkArg } from "app/providers/store-provider";
import { Profile } from "entities/profile/model/types/profile";
import { selectProfileFormData } from "../../model/selectors/profile-form-selector/selectProfileFormData";

export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkArg<string>>(
    "profile/updateProfile",
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const updateProfile = selectProfileFormData(getState());
        try {
            const response = await extra.api.put<Profile>("/profile", updateProfile);
            if (!response.data) {
                throw Error("user not found!");
            }
            return response.data;
        } catch (e) {
            const error = e as Error;
            let errorMessage = error.message;
            if (axios.isAxiosError(e)) {
                if (e.response?.data) {
                    errorMessage = e.response.data.message;
                } else {
                    errorMessage = e.message;
                }
            }
            console.dir(e);
            return rejectWithValue(errorMessage);
        }
    },
);
