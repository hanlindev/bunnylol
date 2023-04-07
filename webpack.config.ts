import path from 'path';
import {Configuration} from 'webpack';

export default (): Configuration => {
  return {
    mode: 'production',
    entry: {
      main: './src/app.ts',
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'static', 'js'),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /^(node_modules|server)$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
              ],
            },
          }, 
        }
      ]
    },
    resolve: {
      extensions: ['.ts'],
    },
  };
};