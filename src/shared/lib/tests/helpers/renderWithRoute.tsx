import { ReactElement } from "react";
import { MemoryRouter } from "react-router-dom";

export const renderWithRoute = (component: ReactElement) => {
    return (
        <MemoryRouter initialEntries={["/"]}>
            {component}
        </MemoryRouter>
    );
};
