import { createSelector } from "@reduxjs/toolkit";
import { selectCounter } from "../counter-selector/selectCounter";
import { CounterSchema } from "../../types/counterSchema";

export const selectCounterValue = createSelector(selectCounter, (counter: CounterSchema) => counter.value);
