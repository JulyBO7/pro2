import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk";
import { Profile } from "entities/profile/model/types/profile";
import { fetchProfileData } from "./fetchProfileData";

describe("fetch profile data thunk tests", () => {
    test("fulfilled", async () => {
        const profile: DeepPartial<Profile> = {
            first: "Julia",
            lastname: "Bal",
            age: 31,
            city: "msk",
            username: "admin",

        };
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: profile }));
        const action = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe("fulfilled");
        expect(action.payload).toEqual(profile);
    });
    test("rejected", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.reject(new Error("error")));
        const action = await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalledTimes(1);
        expect(action.meta.requestStatus).toBe("rejected");
        expect(action.payload).toEqual("error");
    });
});
