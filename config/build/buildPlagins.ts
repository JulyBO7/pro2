import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { BuildOptions } from "./types/config";

export const buildPlugins = (options:BuildOptions) => {
    const { paths, isDev } = options;
    const devPlugins: webpack.WebpackPluginInstance[] = [];
    if (isDev) {
        devPlugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
    }
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new webpack.HotModuleReplacementPlugin(),
        // ...devPlugins,
        new BundleAnalyzerPlugin({ openAnalyzer: false }),
    ];
};
