import { StateSchema } from "app/providers/store-provider";

export const selectArticleIsLoading = (state: StateSchema) => state.article?.isLoading;
