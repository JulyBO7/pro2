import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ThunkArg } from "app/providers/store-provider";
import { selectArticleData } from "entities/article";
import { selectUserAuthData } from "entities/user";
import { fetchCommentList } from "pages/atricle-details-page/model/services/fetchCommentList";
import { selectNewCommentText } from "features/add-new-comment";
import { addNewCommentFormActions } from "features/add-new-comment/model/slice/addNewCommentFormSlice";

type CommentResponse = {
    id: string,
    text: string,
    articleId: string,
    userId:string
  }
export const sendNewComment = createAsyncThunk<CommentResponse, void, ThunkArg<string>>(
    "addNewCommentForm/sendNewComment",
    async (_, thunkAPI) => {
        const {
            extra, rejectWithValue, getState, dispatch,
        } = thunkAPI;
        const article = selectArticleData(getState());
        const comment = selectNewCommentText(getState());
        const authData = selectUserAuthData(getState());

        dispatch(addNewCommentFormActions.setIsLoading(true));

        try {
            const response = await extra.api.post<CommentResponse>("/comments", {
                text: comment,
                articleId: article?.id,
                userId: authData?.id,
            });
            dispatch(addNewCommentFormActions.clearForm());
            dispatch(addNewCommentFormActions.setIsLoading(false));
            dispatch(fetchCommentList(article!.id));

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
