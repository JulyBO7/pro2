import { StateSchema } from "app/providers/store-provider";
import { selectProfileData } from "./selectProfileData";
import { Profile } from "../../types/profile";

describe("select profile data tests", () => {
    test("data - undefined", async () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(selectProfileData(state as StateSchema)).toBe(undefined);
    });
    test("data - Profile object", async () => {
        const profile: DeepPartial<Profile> = {
            first: "ivan",
            age: 29,
            lastname: "ivanov",
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: profile,
            },
        };
        expect(selectProfileData(state as StateSchema)).toEqual(profile);
    });
});
