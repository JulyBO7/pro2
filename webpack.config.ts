import {Configuration} from 'webpack';
import { buildWebpackConfig } from './config/buildWebpackConfig';
import path from 'path';
import { BuildEnv } from './config/types/config';


export default (env: BuildEnv)=> {
const mode = env.mode || 'development'
const isDev = mode === 'development'

  const paths =  {
    html: path.resolve(__dirname,'public','index.html'),
    entry:'./src/index.tsx',
    build: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
  }

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    port: env.port,
    isDev
  })
  return config
}

// console.log('webpack-config')