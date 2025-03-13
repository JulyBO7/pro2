import { StateSchema } from "app/providers/store-provider";

export const selectUserInited = (state: StateSchema) => state.user.inited;
