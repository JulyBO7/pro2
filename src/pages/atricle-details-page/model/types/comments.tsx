import { EntityState } from "@reduxjs/toolkit";
import { Comment } from "entities/comment";

export interface CommentListSchema extends EntityState<Comment> {
    isLoading: boolean
    error?: string
}
