import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlagins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export const buildWebpackConfig = (options: BuildOptions) => {
    const { mode, paths, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        // entry: './src/index.ts',
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
};
