var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        bundle: path.join(__dirname, 'src/index.js')
    },

    output: {
        path: path.join(__dirname, 'src/dist/'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader?',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    target: 'electron-main',

    node: {
        __dirname: false
    },

    resolve: {
        extensions: ['.js', '.json'],
        modules: [
            path.resolve(__dirname + '/src'),
            'node_modules'
        ]
    }
}