import { StateSchema } from "app/providers/store-provider";
import { selectProfileIsLoading } from "./selectProfileIsLoading";

describe("select profile isLoading tests", () => {
    test("isLoading - true", async () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(selectProfileIsLoading(state as StateSchema)).toBe(true);
    });
    test("isLoading - undefined", async () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectProfileIsLoading(state as StateSchema)).toBe(undefined);
    });
});
