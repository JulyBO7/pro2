import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk";
import { loginByUserName } from "./loginByUserName";

describe("login by user name", () => {
    test("fulfilld", async () => {
        const userData = { username: "admin", id: 1 };
        const asyncThunk = new TestAsyncThunk(loginByUserName);
        asyncThunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));

        const action = await asyncThunk.callThunk({ username: "admin", password: "123" });

        expect(action.meta.requestStatus).toBe("fulfilled");
        expect(action.payload).toEqual(userData);
        expect(asyncThunk.api.post).toHaveBeenCalled();
        expect(asyncThunk.dispatch).toHaveBeenCalledTimes(3);
    });
    test("rejected", async () => {
        const asyncThunk = new TestAsyncThunk(loginByUserName);
        // eslint-disable-next-line prefer-promise-reject-errors
        asyncThunk.api.post.mockReturnValue(Promise.resolve());

        const action = await asyncThunk.callThunk({ username: "admin", password: "123" });

        expect(action.meta.requestStatus).toBe("rejected");
        expect(action.payload).toBe("error");
        expect(asyncThunk.api.post).toHaveBeenCalled();
        expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2);
    });
});
