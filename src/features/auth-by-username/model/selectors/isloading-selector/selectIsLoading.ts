import { StateSchema } from "app/providers/store-provider";

export const selectIsLoading = (state: StateSchema) => state.loginForm?.isLoading || false;
