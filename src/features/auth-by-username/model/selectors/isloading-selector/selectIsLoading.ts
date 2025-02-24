import { StateSchema } from "app/providers/store-provider";

export const selectIsLoading = (state: StateSchema) => { return state.loginForm?.isLoading || false; };
