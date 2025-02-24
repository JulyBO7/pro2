import { Reducer } from "@reduxjs/toolkit";
import { StateSchemaKey, StoreWithReduceManager } from "app/providers/store-provider";
import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}
type AsyncReducersLoaderProps = {
    reducers: ReducersList
    children: ReactNode
    removeAfterUnmount?: boolean;
}
type ReducersListEntry = [StateSchemaKey, Reducer]

export const AsyncReducersLoader:FC<AsyncReducersLoaderProps> = ({ children, reducers, removeAfterUnmount = true }) => {
    const store = useStore() as StoreWithReduceManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
                    store.reducerManager.remove(name);
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
