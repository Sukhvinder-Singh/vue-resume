const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin({
                include: /min/
            }),
        ]
    },
});