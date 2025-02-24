import { StateSchema } from "app/providers/store-provider";

export const selectUserName = (state: StateSchema) => { return state.loginForm?.userName || ""; };
