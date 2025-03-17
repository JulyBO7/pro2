import { Reducer } from "@reduxjs/toolkit";
import { StateSchemaKey, StoreWithReduceManager } from "app/providers/store-provider";
import {
    memo, ReactNode, useEffect,
} from "react";
import { useStore } from "react-redux";
import { useAppDispatch } from "../hooks/useAppDispatch";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}
type AsyncReducersLoaderProps = {
    reducers: ReducersList
    children: ReactNode
    removeAfterUnmount?: boolean;
}

export const AsyncReducersLoader = memo((props: AsyncReducersLoaderProps) => {
    const { children, reducers, removeAfterUnmount = true } = props;
    const store = useStore() as StoreWithReduceManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    }, [dispatch, removeAfterUnmount, reducers, store.reducerManager]);

    return (
        <div>
            { children }
        </div>
    );
});
