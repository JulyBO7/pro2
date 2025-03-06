import { updateProfileData } from "features/edite-profile-card/services/update-profile-data/updateProfileData";
import { fetchProfileData } from "../../services/fetch-profile-data/fetchProfileData";
import { ProfileSchema } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";

describe("profile slice tests", () => {
    test("profile reducer - set readonly", () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, readonly: true };

        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(false)))
            .toEqual({ isLoading: false, readonly: false });
    });
    test("profile reducer - update profile", () => {
        const profileForm = {
            first: "Ivan",
            lastname: "Ivanov",
            age: 30,
            city: "spb",
            username: "admin",
        };
        const updatedProfile = {
            first: "Sasha",
            lastname: "Sokolov",
        };
        const resultProfile = {
            first: "Sasha",
            lastname: "Sokolov",
            age: 30,
            city: "spb",
            username: "admin",
        };
        const state: DeepPartial<ProfileSchema> = {
            formData: profileForm,
        };

        expect(profileReducer(state as ProfileSchema, profileActions.updateProfileForm(updatedProfile)))
            .toEqual({ formData: resultProfile });
    });
    test("profile reducer - cancel changes", () => {
        const profileForm = {
            first: "Ivan",
            lastname: "Ivanov",
            age: 30,
            city: "spb",
            username: "admin",
        };
        const profile = {
            first: "Sasha",
            lastname: "Sokolov",
            age: 31,
            city: "msk",
            username: "user",
        };
        const state: DeepPartial<ProfileSchema> = {
            formData: profileForm,
            data: profile,
        };

        expect(profileReducer(state as ProfileSchema, profileActions.cancelChanges()))
            .toEqual({ formData: profile, data: profile });
    });
    test("profile reducer - fetch profile data - fulfilld", () => {
        const profile = {
            first: "Sasha",
            lastname: "Sokolov",
            age: 31,
            city: "msk",
            username: "user",
        };
        const state: DeepPartial<ProfileSchema> = {};

        expect(profileReducer(state as ProfileSchema, fetchProfileData.fulfilled(profile, "")))
            .toEqual({ formData: profile, data: profile, isLoading: false });
    });
    test("profile reducer - fetch profile data - rejected", () => {
        const state: DeepPartial<ProfileSchema> = {};

        expect(profileReducer(state as ProfileSchema, fetchProfileData.rejected(null, "", undefined, "error!")))
            .toEqual({ error: "error!", isLoading: false });
    });
    test("profile reducer - update profile data - fulfilld", () => {
        const profile = {
            first: "Sasha",
            lastname: "Sokolov",
            age: 31,
            city: "msk",
            username: "user",
        };
        const updateProfile = {
            first: "Andrey",
            lastname: "Voronov",
            age: 31,
            city: "msk",
            username: "user",
        };
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            isLoading: true,
            data: profile,
        };

        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(updateProfile, "", undefined)))
            .toEqual({ isLoading: false, readonly: true, data: updateProfile });
    });
});
