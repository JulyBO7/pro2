import { buildCssLoader } from "./loaders/buildCssLoader";
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
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react",
                ],
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
    const cssLoader = buildCssLoader(options.isDev);
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
