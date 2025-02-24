import { render } from "@testing-library/react";
import { StateSchema, StoreProvider } from "app/providers/store-provider";
import { ReactElement } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18n from "shared/config/i18n/i18nForTests";
import { DeepPartial } from "@reduxjs/toolkit";

type RenderComponentOptions = {
    initialState?: DeepPartial<StateSchema>
    routes?: string[]
}

export const renderComponent = (
    component: ReactElement,
    options: RenderComponentOptions = {},
) => {
    const { routes = ["/"], initialState } = options;
    return (
        render(
            <StoreProvider initialState={initialState as StateSchema}>
                <MemoryRouter initialEntries={routes}>
                    <I18nextProvider i18n={i18n}>
                        {component}
                    </I18nextProvider>
                </MemoryRouter>
            </StoreProvider>,
        )
    );
};
