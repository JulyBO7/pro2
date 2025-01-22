import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = (options:BuildOptions)=> {
    const {paths} = options
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin()
  ]
}