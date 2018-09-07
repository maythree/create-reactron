var webpack = require('webpack');
var path = require('path');
var port = 8080;
var publicPath = 'http://localhost:' + port;
var spawn = require('child_process').spawn;

var buildEntryPoint = function(entryPoint){
    return [
        'webpack-dev-server/client?http://localhost:' + port,
        'webpack/hot/only-dev-server',
        entryPoint
    ]
};

module.exports = {
    devtool: 'inline-source-map',

    entry: {
        bundle: buildEntryPoint(path.join(__dirname, 'src/index.js'))
    },

    output: {
        path: path.join(__dirname, 'src/dist/'),
        filename: '[name].js',
        publicPath,
        libraryTarget: 'commonjs2'
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader?',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                    plugins: ['transform-class-properties']
                }
            }
        ]
    },

    target: 'electron-renderer',

    node: {
        __dirname: false
    },

    resolve: {
        extensions: ['.js', '.json'],
        modules: [
            path.resolve(__dirname + '/src'),
            'node_modules'
        ]
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ],

    devServer: {
        port,
        hot: true,
        inline: false,
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'src/'),
        publicPath,
        setup() {
            spawn('npm', ['run', 'debug'], { shell: true, env: process.env, stdio: 'inherit' })
                .on('close', code => process.exit(code))
                .on('error', spawnError => console.error(spawnError));
        }
    }
};