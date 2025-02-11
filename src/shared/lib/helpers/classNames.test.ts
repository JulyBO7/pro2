import { classNames } from "./classNames";

describe("check class name", () => {
    test("without mods", () => {
        expect(classNames("classes", {}, ["class1", "class2"])).toBe("classes class1 class2");
    });
    test("without mods", () => {
        expect(classNames("classes", { }, ["class1"])).toBe("classes class1");
    });
    test("with mods", () => {
        expect(classNames("classes", { checked: true, active: true }, ["class1", "class2"]))
            .toBe("classes class1 class2 checked active");
    });
    test("with mods false", () => {
        expect(classNames("classes", { checked: false, active: true }, ["class1", "class2"]))
            .toBe("classes class1 class2 active");
    });
    test("with undefined mod", () => {
        expect(classNames("classes", { checked: true, active: undefined }, ["class1", "class2"]))
            .toBe("classes class1 class2 checked");
    });
});
