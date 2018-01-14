const path = require('path')
const webpack = require('webpack')

function resolve(_p) {
    return path.resolve(process.cwd(), _p)
}

module.exports = {
    entry:  {
        app: './index.js'
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js',
        library: "TuiEditor",
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [resolve('node_modules')]
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}