import { fireEvent, render, screen } from "@testing-library/react";

import { renderWithTranslation }
    from "shared/lib/tests/helpers/renderWithTranslation";
import { renderWithRoute } from "shared/lib/tests/helpers/renderWithRoute";
import { Sidebar } from "./Sidebar";

describe("Sidebar component", () => {
    test("sidebar in the document", () => {
        render(renderWithRoute(renderWithTranslation(<Sidebar />)));
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test("sidebar collapsed", () => {
        render(renderWithRoute(renderWithTranslation(<Sidebar />)));
        fireEvent.click(screen.getByTestId("sidebarBtn"));
        expect(screen.getByTestId("sidebar")).toHaveClass("sidebar collapsedSidebar");
        screen.debug();
    });
    test("sidebar not collapsed", () => {
        render(renderWithRoute(renderWithTranslation(<Sidebar />)));
        fireEvent.click(screen.getByTestId("sidebarBtn"));
        fireEvent.click(screen.getByTestId("sidebarBtn"));
        expect(screen.getByTestId("sidebar")).toHaveClass("sidebar");
        screen.debug();
    });
});
