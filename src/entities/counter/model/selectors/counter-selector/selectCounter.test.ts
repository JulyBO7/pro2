import { selectCounter } from "./selectCounter";

describe("select counter", () => {
    test("get counter object", () => {
        const state: any = {
            counter: {
                value: 10,
            },
        };
        expect(selectCounter(state)).toEqual({ value: 10 });
    });
});
