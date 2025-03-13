import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { ThunkArg } from "app/providers/store-provider";
import { Profile } from "entities/profile/model/types/profile";
import { selectProfileFormData } from "../../model/selectors/profile-form-selector/selectProfileFormData";
import { validateProfileData } from "../../lib/validate-profile-data/validateProfileData";
import { ProfileValidateErrors } from "../../lib/const/validateErrors";

// enum ServerErrors{
//     AUTH_ERROR = "auth error",
//     NETWORK_ERROR = "network error",
//     SERVER_ERROR = "server error"
// }
export const updateProfileData = createAsyncThunk<Profile, void, ThunkArg<ProfileValidateErrors[] | string>>(
    "profile/updateProfile",
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const profileForm = selectProfileFormData(getState());
        const validateErrors = validateProfileData(profileForm);
        if (validateErrors.length) {
            return rejectWithValue(validateErrors);
        }

        try {
            const response = await extra.api.put<Profile>("/profile", profileForm);
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
