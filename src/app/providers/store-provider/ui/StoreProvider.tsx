import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createAppStore } from "../config/store";
import { StateSchema } from "../config/StateSchema";

type StoreProviderProps = {
    children: ReactNode,
    initialState?: StateSchema
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;
    const store = createAppStore(initialState);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
