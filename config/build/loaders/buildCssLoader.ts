import MiniCssExtractPlugin from "mini-css-extract-plugin";
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

export const buildCssLoader = (isDev: boolean) => ({
    test: /\.s[ac]?ss$/i,
    use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
            loader: "css-loader",
            options: {
                modules: {
                    auto: /\.module\./, // *
                    localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64]",
                },

            },
        },
        "sass-loader"],
});
