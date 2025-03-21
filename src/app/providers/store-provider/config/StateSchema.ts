import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ArticleSchema } from "entities/article";
import { CounterSchema } from "entities/counter";
import { ProfileSchema } from "entities/profile";
import { UserSchema } from "entities/user";
import { AddNewCommentFormSchema } from "features/add-new-comment";
import { LoginSchema } from "features/auth-by-username";
import { CommentListSchema } from "pages/atricle-details-page";

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    // async reducers:
    loginForm?: LoginSchema
    profile?: ProfileSchema
    article?: ArticleSchema
    commentList?: CommentListSchema
    addNewCommentForm?:AddNewCommentFormSchema
}
export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface StoreWithReduceManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager

}
export type ThunkExtraArg={
        api: AxiosInstance
}
export type ThunkArg<T> = {
    extra: ThunkExtraArg
    rejectValue: T
    state: StateSchema
}
