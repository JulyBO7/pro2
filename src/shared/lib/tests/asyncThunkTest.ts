import { AsyncThunkAction } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store-provider";

type AsyncThunkActionCreator<Returned, ThunkArg, RejectedValue>
= (arg:ThunkArg)=> AsyncThunkAction<Returned, ThunkArg, {rejectValue: RejectedValue}>

export class AsyncThunkTest<Returned, ThunkArg, RejectValue> {
    dispatch: jest.MockedFn<any>;

    getState: ()=> StateSchema;

    thunkActionCreator;

    constructor(asyncThunkActionCreator: AsyncThunkActionCreator<Returned, ThunkArg, RejectValue>) {
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.thunkActionCreator = asyncThunkActionCreator;
    }

    async callThunk(arg:ThunkArg) {
        const thunk = this.thunkActionCreator(arg);
        const action = await thunk(this.dispatch, this.getState, undefined);
        return action;
    }
}
