import { StateSchema } from "app/providers/store-provider";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk";
import { updateProfileData } from "./updateProfileData";

describe("update profile data thunk tests", () => {
    test("fulfilled", async () => {
        const profileData = {
            first: "Julia",
            lastname: "Bal",
            age: 31,
            city: "msk",
            username: "admin",
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                formData: profileData,
            },
        };
        const thunk = new TestAsyncThunk(updateProfileData, state);
        thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }));
        const action = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.getState).toHaveBeenCalledTimes(1);
        expect(action.meta.requestStatus).toBe("fulfilled");
        expect(action.payload).toEqual(profileData);
        expect(thunk.api.put).toHaveBeenCalled();
    });
    test("rejected - without validate errors", async () => {
        const profileData = {
            first: "Julia",
            lastname: "Bal",
            age: 31,
            city: "msk",
            username: "admin",
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                formData: profileData,
            },
        };
        const thunk = new TestAsyncThunk(updateProfileData, state);
        thunk.api.put.mockReturnValue(Promise.reject(new Error("server error")));
        const action = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.getState).toHaveBeenCalledTimes(1);
        expect(action.meta.requestStatus).toBe("rejected");
        expect(action.payload).toBe("server error");
        expect(thunk.api.put).toHaveBeenCalled();
    });
    test("rejected - with validate errors", async () => {
        const profileData = {
            first: "@fdkf",
            lastname: "Bal*",
            age: 31,
            city: "msk",
            username: "admin",
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                formData: profileData,
            },
        };
        const thunk = new TestAsyncThunk(updateProfileData, state);
        const action = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.getState).toHaveBeenCalledTimes(1);
        expect(action.meta.requestStatus).toBe("rejected");
        expect(action.payload).toEqual(["not correct last name", "not correct name"]);
    });
});
