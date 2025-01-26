import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export const buildLoaders = (options:BuildOptions) => {
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };
    const babelLoader = {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env", "@babel/preset-typescript"],
                plugins: ["i18next-extract"],
            },
        },
    };
    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };
    const tsLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /\.module\./, // *
                        localIdentName: options.isDev ? "[path][name]__[local]" : "[hash:base64]",
                    },

                },
            },
            "sass-loader"],
    };
    return [
        babelLoader,
        tsLoader,
        cssLoader,
        svgLoader,
        fileLoader,
    ];
};
//* генерит имена классов для файлов имеющих в названии
// .module., для других файлов(для .(s)css) не генерит названия классов
