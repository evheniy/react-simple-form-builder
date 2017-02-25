const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: [path.join(__dirname, 'app.jsx')]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            "src",
            "node_modules"
        ]
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production"),
            },
        }),
        new HtmlWebpackPlugin({
            title: 'React simple form builder',
            template: path.join(__dirname, 'templates', 'index.template.ejs'),
            inject: 'body',
        })
    ]
};