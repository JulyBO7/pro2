import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export const buildLoaders = (options:BuildOptions )=> {
  
  let fileLoader =  {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      }
    ]
  }
  let svgLoader = {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    }
  
    let tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    let cssLoader =  {
      test: /\.s[ac]ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: /\.module\./, //генерит имена классов для файлов имеющих в названии .module., для других файлов(для .(s)css) не генерит названия классов 
              localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64]'
            }
        
        }},
        "sass-loader"],
    }
    return [
        tsLoader,
        cssLoader,
        svgLoader,
        fileLoader
      ]
}