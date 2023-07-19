const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    devtool: 'source-map',
    plugins: [
        new HtmlPlugin({
            template: 'public/index.html',
        }),
        new CopyPlugin({
            patterns: [{ from: 'public' }],
            patterns: [
                {
                    from: 'public',
                    globOptions: {
                        ignore: ['**/index.html'],
                    },
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node.modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presents: ['@babel/preset-env']
                    },
                },
            },
        ]
    }
};





