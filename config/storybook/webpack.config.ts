import path from "path";
import webpack from "webpack";

import { buildCssLoader } from "../build/loaders/buildCssLoader";

export default ({ config }:{config: webpack.Configuration}) => {
    config.module?.rules?.push(buildCssLoader(true));
    if (config.module) {
    // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module?.rules?.map((rule) => {
            if (typeof rule === "object") {
                if (/svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i };
                }
            }
            return rule;
        });
    }

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    });

    config.resolve?.modules?.push(path.resolve(__dirname, "..", "..", "src"));
    config.resolve?.extensions?.push(".ts", ".tsx");
    config.plugins?.push(new webpack.DefinePlugin({
        __IS_DEV__: true,
    }));

    return config;
};
