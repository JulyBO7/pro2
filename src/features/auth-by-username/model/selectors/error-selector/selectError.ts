import { StateSchema } from "app/providers/store-provider";

export const selectError = (state: StateSchema) => { return state.loginForm?.error || ""; };
