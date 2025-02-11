import { selectCounterValue } from "./selectCounterValue";

describe("select counter value", () => {
    test("get counter value", () => {
        const state: any = {
            counter: {
                value: 10,
            },
        };

        expect(selectCounterValue(state)).toBe(10);
    });
});
