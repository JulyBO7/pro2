import { DeepPartial } from "@reduxjs/toolkit";
import { loginReducer, setPassword, setUsername } from "./loginSlice";
import { LoginSchema } from "../types/loginSchema";

describe("test login slice", () => {
    test("action setUsername ", () => {
        const state: DeepPartial<LoginSchema> = {
            userName: "",
        };
        expect(loginReducer(state as LoginSchema, setUsername("Julia"))).toEqual({ userName: "Julia" });
    });
    test("action setPassword ", () => {
        const state: DeepPartial<LoginSchema> = {
            password: "",
        };
        expect(loginReducer(state as LoginSchema, setPassword("123"))).toEqual({ password: "123" });
    });
});
