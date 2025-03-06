import { StateSchema } from "app/providers/store-provider";
import { selectProfileReadonly } from "./selectProfileReadonly";

describe("select profile readonly tests", () => {
    test("readonly - undefined", async () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectProfileReadonly(state as StateSchema)).toBe(undefined);
    });
    test("readonly - true", async () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(selectProfileReadonly(state as StateSchema)).toBe(true);
    });
});
