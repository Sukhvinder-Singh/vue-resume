const PATH = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

const JS_OUTPUT_DIR = "./dist/js";
const CSS_OUTPUT_DIR = PATH.relative(JS_OUTPUT_DIR, "./dist/css")

module.exports = {
    entry: {
        "main.min": PATH.resolve(__dirname, "src/js/main.js"),
        "style.slim.min": PATH.resolve(__dirname, "src/scss/style.scss")
    },
    output: {
        path: PATH.resolve(__dirname, JS_OUTPUT_DIR),
        filename: "[name].js"
    },
    target: ["web", "es5"],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
                    }
                }]
            }
        ]
    },
    plugins: [
        new RemoveEmptyScriptsPlugin(),
        new MiniCssExtractPlugin({
            filename: ({ chunk }) => `${CSS_OUTPUT_DIR}/${chunk.name.replace('/js/', '/css/')}.css`,
        }),
    ]
}