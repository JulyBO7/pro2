import { fireEvent, screen } from "@testing-library/react";

import { renderWithTranslation }
    from "shared/lib/tests/render-with-translation/renderWithTranslation";
import { Sidebar } from "./Sidebar";

describe("Sidebar component", () => {
    // test("sidebar in the document", () => {
    //     render(<Sidebar />);

    //     expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    // });
    test("sidebar in the document", () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test("sidebar collapsed", () => {
        renderWithTranslation(<Sidebar />);
        fireEvent.click(screen.getByTestId("sidebarBtn"));
        expect(screen.getByTestId("sidebar")).toHaveClass("sidebar collapsedSidebar");
        screen.debug();
    });
    test("sidebar not collapsed", () => {
        renderWithTranslation(<Sidebar />);
        fireEvent.click(screen.getByTestId("sidebarBtn"));
        fireEvent.click(screen.getByTestId("sidebarBtn"));
        expect(screen.getByTestId("sidebar")).toHaveClass("sidebar");
        screen.debug();
    });
});
