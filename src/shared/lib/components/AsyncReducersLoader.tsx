import { Reducer } from "@reduxjs/toolkit";
import { StateSchemaKey, StoreWithReduceManager } from "app/providers/store-provider";
import { FC, ReactNode, useEffect } from "react";
import { useStore } from "react-redux";
import { useAppDispatch } from "../hooks/useAppDispatch";

type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}
type AsyncReducersLoaderProps = {
    reducers: ReducersList
    children: ReactNode
    removeAfterUnmount?: boolean;
}

export const AsyncReducersLoader:FC<AsyncReducersLoaderProps> = ({ children, reducers, removeAfterUnmount = true }) => {
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
    }, []);

    return (
        <div>
            { children }
        </div>
    );
};
