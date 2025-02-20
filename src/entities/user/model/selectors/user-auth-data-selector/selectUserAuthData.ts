import { StateSchema } from "app/providers/store-provider";

export const selectUserAuthData = (state: StateSchema) => { return state.user.authData; };
