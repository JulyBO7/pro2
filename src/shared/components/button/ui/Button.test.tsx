import { render, screen } from "@testing-library/react";
// import React from "react";
import { Button, ButtonTheme } from "./Button";

describe("tests Button", () => {
    test("button in the document", () => {
        render(<Button>BUTTON</Button>);

        expect(screen.getByText("BUTTON")).toBeInTheDocument();
    });
    test("button in the document", () => {
        render(<Button theme={ButtonTheme.CLEAR}>BUTTON</Button>);

        expect(screen.getByText("BUTTON")).toHaveClass("clear");
        screen.debug(screen.getByText("BUTTON"));
    });
});
