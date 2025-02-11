import { counterReducer, decrement, increment } from "./counterSlice";
import { CounterSchema } from "../types/counterSchema";

describe("counter slice", () => {
    test("work counterReducer-increment action", () => {
        const state: CounterSchema = { value: 7 };
        expect(counterReducer(state, increment())).toEqual({ value: 8 });
    });
    test("work counterReducer-decrement action", () => {
        const state: CounterSchema = { value: 7 };
        expect(counterReducer(state, decrement())).toEqual({ value: 6 });
    });
});
