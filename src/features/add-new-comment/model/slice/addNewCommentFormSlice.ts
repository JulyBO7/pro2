import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import { sendNewComment } from "pages/atricle-details-page/model/services/sendNewComment";
import { AddNewCommentFormSchema } from "../types/addNewCommentForm";

const initialState: AddNewCommentFormSchema = {
    isLoading: false,
    text: "",
};

const addNewCommentFormSlice = createSlice({
    name: "addNewCommentForm",
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
        clearForm: (state) => { // или в экстра редьюсерах обрабатывать акшн санки отправки комментария
            state.text = "";
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
    // extraReducers: (builder) => {
    // builder.addCase(sendNewComment.pending, (state) => {
    //     state.isLoading = true;
    //     state.error = undefined;
    // });
    // builder.addCase(sendNewComment.fulfilled, (state) => {
    //     state.isLoading = false;
    //     state.text = "";
    // });
    //     builder.addCase(sendNewComment.rejected, (state, action) => {
    //         state.error = action.payload;
    //         state.isLoading = false;
    //     });
//     },
});

export const addNewCommentFormReducer = addNewCommentFormSlice.reducer;
export const addNewCommentFormActions = addNewCommentFormSlice.actions;
