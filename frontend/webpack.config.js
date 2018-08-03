/*const TARGET = process.env.npm_lifecycle_event;

if (TARGET === 'build:dev' || TARGET === 'dev' || !TARGET) {
    module.exports = require('./config/webpack.config.dev');
    console.info('--> ./config/webpack.config.dev.js');
}
if (TARGET === 'build' || TARGET === 'stats') {
    module.exports = require('./config/webpack.config.prod');
    console.info('--> ./config/webpack.config.prod.js');
}*/

const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    mode: 'development',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['.js','.jsx'],
        alias: {
            modules: path.resolve(__dirname + './node_modules/')
        }
    },
    plugins: [
            new ExtractTextPlugin('app.css')
    ],
    module: {
        rules:
        [
            {
                test: /.js[x]?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread', 'transform-class-properties']
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [ 'css-loader' ] })
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                use: 'file-loader'
            }
        ]
    }
}