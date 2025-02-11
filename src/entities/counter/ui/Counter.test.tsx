import { screen } from "@testing-library/react";
import { renderComponent } from "shared/lib/tests/renderComponent";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter", () => {
    test("counter in the document", () => {
        renderComponent(<Counter />);

        expect(screen.getByTestId("counter")).toBeInTheDocument();
    });
    test("check counter value", () => {
        const initialState = { counter: { value: 10 } };

        renderComponent(<Counter />, { initialState });

        expect(screen.getByTestId("title-counter")).toHaveTextContent("10");
    });
    test("increment counter value", () => {
        const initialState = { counter: { value: 10 } };

        renderComponent(<Counter />, { initialState });
        userEvent.click(screen.getByTestId("btn-increment"));

        expect(screen.getByTestId("title-counter")).toHaveTextContent("11");
    });
    test("decrement counter value", () => {
        const initialState = { counter: { value: 10 } };

        renderComponent(<Counter />, { initialState });
        userEvent.click(screen.getByTestId("btn-decrement"));

        expect(screen.getByTestId("title-counter")).toHaveTextContent("9");
    });
});
