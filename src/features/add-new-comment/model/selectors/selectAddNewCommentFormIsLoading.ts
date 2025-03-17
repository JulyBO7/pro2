import { StateSchema } from "app/providers/store-provider";

export const selectAddNewCommentFormIsLoading = (state: StateSchema) => state.addNewCommentForm?.isLoading;
