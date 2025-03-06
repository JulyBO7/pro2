import { StateSchema } from "app/providers/store-provider";
import { Profile } from "entities/profile";
import { selectProfileFormData } from "./selectProfileFormData";

describe("select profile form data tests", () => {
    test("formData - undefined", async () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(selectProfileFormData(state as StateSchema)).toBe(undefined);
    });
    test("formData - Profile object", async () => {
        const profile: DeepPartial<Profile> = {
            first: "ivan",
            age: 29,
            lastname: "ivanov",
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                formData: profile,
            },
        };
        expect(selectProfileFormData(state as StateSchema)).toEqual(profile);
    });
});
