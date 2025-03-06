import { StateSchema } from "app/providers/store-provider";

export const selectLoginForm = (state: StateSchema) => state.loginForm;
