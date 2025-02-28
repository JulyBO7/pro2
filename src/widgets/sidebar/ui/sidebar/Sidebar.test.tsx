import { screen } from "@testing-library/react";

import { renderComponent } from "shared/lib/tests/renderComponent";
import userEvent from "@testing-library/user-event";
import { Sidebar } from "./Sidebar";

describe("Sidebar component", () => {
    test("sidebar in the document", () => {
        renderComponent(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test("sidebar collapsed", () => {
        renderComponent(<Sidebar />);
        userEvent.click(screen.getByTestId("sidebarBtn"));
        expect(screen.getByTestId("sidebar")).toHaveClass("sidebar collapsedSidebar");
        screen.debug();
    });
    test("sidebar not collapsed", () => {
        renderComponent(<Sidebar />);
        userEvent.click(screen.getByTestId("sidebarBtn"));
        userEvent.click(screen.getByTestId("sidebarBtn"));
        expect(screen.getByTestId("sidebar")).toHaveClass("sidebar");
        screen.debug();
    });
});
