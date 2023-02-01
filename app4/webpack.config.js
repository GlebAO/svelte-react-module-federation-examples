const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
// const { ModuleFederationPlugin } = require('webpack').container;
const { UniversalFederationPlugin } = require('@module-federation/node');

const prod = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isServer = Boolean(process.env.SERVER);

module.exports = {
  watch: true,
  target: isServer ? false : 'web',
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    publicPath: 'http://localhost:3004/',
    path: path.join(__dirname, `dist/${isServer ? 'ssr' : 'chunks'}`),
    clean: true,
    scriptType: 'text/javascript',
  },
  module: {
    rules: [
      {
        test: /\.(svelte)$/,
        use: {
          loader: 'svelte-loader',
          options: {
            compilerOptions: {
              generate: isServer ? 'ssr' : 'web',
              hydratable: true,
            },
          },
        },
      },
      {
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
    },
    extensions: ['.mjs', '.js', '.svelte', '.ts', '.tsx'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new UniversalFederationPlugin({
      name: 'app4',
      isServer: isServer,
      filename: 'remoteEntry.js',
      exposes: {
        './BadgeReact': './src/components/Badge/BadgeReact',
        './BadgeSvelte': './src/components/Badge/BadgeSvelte',
        './TestBadge': './src/components/TestBadge',
      },
      library: {
        type: isServer ? 'commonjs-module' : 'var',
        name: 'app4',
      },
      // library: {type: 'commonjs-module'}, // for server
      shared: {
        // react: { singleton: true },
        // 'react-dom': {
        //   singleton: true,
        // },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  // experiments: {
  //     outputModule: true,
  // },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      // publicPath: isServer ? '/ssr' : '/chunks',
    },
    compress: true,
    port: 3004,
  },
  optimization: {
    minimize: prod,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
};
