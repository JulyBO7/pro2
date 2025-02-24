import { StateSchema } from "app/providers/store-provider";

export const selectPassword = (state: StateSchema) => { return state.loginForm?.password || ""; };
