const path = require('path');
const CopyPlugin = require('copy-webpuck-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    devtool: 'source-map',
    plugins: [
        new CopyPlugin({
            patterns: [{ from: 'public' }],
        }),
    ],
};


