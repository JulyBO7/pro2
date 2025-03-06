import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateProfileData } from "features/edite-profile-card/services/update-profile-data/updateProfileData";
import { Profile, ProfileSchema } from "../types/profile";
import { fetchProfileData } from "../../services/fetch-profile-data/fetchProfileData";

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        updateProfileForm: (state, action: PayloadAction<Profile>) => {
            state.formData = { ...state.formData, ...action.payload };
        },
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelChanges: (state) => {
            state.formData = state.data;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(fetchProfileData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.formData = action.payload;
        });
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
        builder.addCase(updateProfileData.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
            state.validateErrors = undefined;
        });
        builder.addCase(updateProfileData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.readonly = true;
        });
        builder.addCase(updateProfileData.rejected, (state, action) => {
            state.isLoading = false;
            if (Array.isArray(action.payload)) {
                state.validateErrors = action.payload;
            } else {
                state.error = action.payload;
            }
        });
    },
});

export const profileReducer = profileSlice.reducer;
export const profileActions = profileSlice.actions;
