import { StateSchema } from "app/providers/store-provider";
import { selectProfileError } from "./selectProfileError";

describe("select profile errors tests", () => {
    test("error - undefined", async () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectProfileError(state as StateSchema)).toBe(undefined);
    });
    test("to be error", async () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: "error",
            },
        };
        expect(selectProfileError(state as StateSchema)).toBe("error");
    });
});
