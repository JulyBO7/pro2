import {
    createEntityAdapter,
    createSlice,

} from "@reduxjs/toolkit";
import { Comment } from "entities/comment";
import { StateSchema } from "app/providers/store-provider";
import { fetchCommentList } from "../services/fetchCommentList";
import { CommentListSchema } from "../types/comments";

const commentListAdapter = createEntityAdapter({
    selectId: (comment: Comment) => comment.id,
});

export const commentListSelectors = commentListAdapter.getSelectors<StateSchema>((state) => state.commentList || commentListAdapter.getInitialState());

const commentListSlice = createSlice({
    name: "commentList",
    // initialState: { error: undefined },
    initialState: commentListAdapter.getInitialState<CommentListSchema>({
        isLoading: false,
        error: undefined,
        ids: ["1", "2"],
        entities: {
            1: {
                id: "1",
                text: "comment1",
                user: { username: "admin", id: "2" },
            },
            2: {
                id: "2",
                text: "comment2",
                user: { username: "user1", id: "3" },
            },
        },
    }),
    reducers: {
        addNewComment: commentListAdapter.addOne,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCommentList.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(fetchCommentList.fulfilled, (state, action) => {
            state.isLoading = false;
            commentListAdapter.setAll(state, action.payload);
        });
        builder.addCase(fetchCommentList.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});
export const { actions: commentListActions } = commentListSlice;
export const { reducer: commentListReducer } = commentListSlice;
