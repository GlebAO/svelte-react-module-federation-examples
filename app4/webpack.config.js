const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;

const prod = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: prod ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        publicPath: 'auto',
        path: path.join(__dirname, 'dist'),
        clean: true,
        scriptType: 'text/javascript'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    devtool: prod ? undefined : 'source-map',
    plugins: [
        new ModuleFederationPlugin({
            name: 'app4',
            filename: 'remoteEntry.js',
            exposes: {
                './Badge': './src/components/Badge',
            },
            library: {
                type: 'var',
                name: 'app4'
            },
            shared: {
                // "react": { singleton: true, eager: true },
                // "react-dom": { singleton: true, requiredVersion: '18.2.0', eager: true }
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
    experiments: {
        outputModule: true,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3004,
    },
    optimization: {
        minimize: prod,
        minimizer: [new TerserPlugin({
            terserOptions: {
                format: {
                    comments: false,
                },
            },
            extractComments: false,
        })],
    },
};