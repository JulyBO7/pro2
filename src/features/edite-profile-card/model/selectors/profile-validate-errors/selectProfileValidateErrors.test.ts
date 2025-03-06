import { StateSchema } from "app/providers/store-provider";
import { selectProfileValidateErrors } from "./selectProfileValidateErrors";
import { ProfileValidateErrors } from "../../../lib/const/validateErrors";

describe("select profile validate errors tests", () => {
    test("validate errors - undefined", async () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectProfileValidateErrors(state as StateSchema)).toBe(undefined);
    });
    test("validate errors - true", async () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ProfileValidateErrors.EMPTY_AGE, ProfileValidateErrors.EMPTY_LAST_NAME],
            },
        };
        expect(selectProfileValidateErrors(state as StateSchema)).toEqual(["empty age", "empty last name"]);
    });
});
