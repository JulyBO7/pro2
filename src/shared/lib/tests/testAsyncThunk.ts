import { AsyncThunkAction } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store-provider";
import axios from "axios";

jest.mock("axios");

const mockedAxios = jest.mocked(axios); // для ts

type AsyncThunkActionCreator<Returned, ThunkCreatorArg, RejectValue>
= (arg:ThunkCreatorArg)=> AsyncThunkAction<Returned, ThunkCreatorArg, {rejectValue: RejectValue} >

export class TestAsyncThunk<Returned, ThunkCreatorArg, RejectValue> {
    dispatch: jest.MockedFn<any>;

    getState: ()=> StateSchema;

    thunkActionCreator;

    api;

    constructor(asyncThunkActionCreator: AsyncThunkActionCreator<Returned, ThunkCreatorArg, RejectValue>) {
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.api = mockedAxios;
        this.thunkActionCreator = asyncThunkActionCreator;
    }

    async callThunk(arg:ThunkCreatorArg) {
        const thunk = this.thunkActionCreator(arg);
        const action = await thunk(this.dispatch, this.getState, { extra: { api: this.api } });
        return action;
    }
}
