import { createSlice } from "@reduxjs/toolkit";
import { ArticleSchema } from "entities/article";
import { fetchArticleById } from "../../../../entities/article/model/services/fetchArticleById";

const initialState: ArticleSchema = {
    isLoading: false,
};

const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticleById.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(fetchArticleById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchArticleById.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});

export const articleReducer = articleSlice.reducer;
export const articleActions = articleSlice.actions;
