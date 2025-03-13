import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ThunkArg } from "app/providers/store-provider";
import { ArticleDetailsType } from "entities/article";

export const fetchArticleById = createAsyncThunk<ArticleDetailsType, string, ThunkArg<string>>(
    "article/fetchArticle",
    async (id, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<ArticleDetailsType>(`/articles/${id}`);
            if (!response.data) {
                throw Error("user not found!");
            }
            return response.data;
        } catch (e) {
            const error = e as Error;
            let errorMessage = error.message;
            if (axios.isAxiosError(e)) {
                if (e.response?.data) {
                    errorMessage = e.response.data.message;
                } else {
                    errorMessage = e.message;
                }
            }
            console.dir(e);
            return rejectWithValue(errorMessage);
        }
    },
);
