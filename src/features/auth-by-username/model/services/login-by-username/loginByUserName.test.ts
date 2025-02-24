import axios from "axios";
import { AsyncThunkTest } from "shared/lib/tests/asyncThunkTest";
import { loginByUserName } from "./loginByUserName";

jest.mock("axios");
const mockedAxios = jest.mocked(axios);

describe("login by user name", () => {
    test("fulfilld", async () => {
        const userData = { username: "admin", id: 1 };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
        const asyncThunkTest = new AsyncThunkTest(loginByUserName);
        const action = await asyncThunkTest.callThunk({ username: "admin", password: "123" });
        expect(action.meta.requestStatus).toBe("fulfilled");
        expect(action.payload).toEqual(userData);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(asyncThunkTest.dispatch).toHaveBeenCalledTimes(3);
    });
    test("rejected", async () => {
        mockedAxios.post.mockReturnValue(Promise.reject(new Error("Error!")));
        const asyncThunkTest = new AsyncThunkTest(loginByUserName);
        const action = await asyncThunkTest.callThunk({ username: "admin", password: "123" });
        expect(action.meta.requestStatus).toBe("rejected");
        expect(action.payload).toBe("Error!");
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(asyncThunkTest.dispatch).toHaveBeenCalledTimes(2);
    });
});
