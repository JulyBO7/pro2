// const path = require("path");
// const buildCssLoader = require("../build/loaders/buildCssLoader.ts");
// import path from "path";
// import { buildCssLoader } from "../build/loaders/buildCssLoader";

// module.exports = {
//     stories: [
//         "../../src/**/*.stories.mdx",
//         "../../src/**/*.stories.@(js|jsx|ts|tsx)",
//     ],
//     addons: [
//         "@storybook/addon-links",
//         "@storybook/addon-essentials",
//         "@storybook/addon-interactions",
//     ],
//     framework: "@storybook/react",

//     core: {
//         builder: "webpack5",
//     },
// };
module.exports = {
    stories: [
        "../../src/**/*.stories.mdx",
        "../../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: "@storybook/react",

    core: {
        builder: "webpack5",
    },
};
