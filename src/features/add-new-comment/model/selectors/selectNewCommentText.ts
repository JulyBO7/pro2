import { StateSchema } from "app/providers/store-provider";

export const selectNewCommentText = (state: StateSchema) => state.addNewCommentForm?.text;
