const PATH = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');

const JS_OUTPUT_DIR = "./dist/js";
const CSS_OUTPUT_DIR = PATH.relative(JS_OUTPUT_DIR, "./dist/css");

const HTMLWebpackPluginInstance = new HTMLWebpackPlugin({
    filename: "../index.html",
    template: PATH.resolve(__dirname, "./src/html/template.ejs"),
    publicPath: "js",
    scriptLoading: "defer",
    title: "Vue resume builder",
});

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
                test: /\.vue$/,
                exclude: /node_modules/,
                use: "vue-loader"
            },
            {
                test: /\.ejs$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            sources: false,
                            esModule: false,
                            minimize: false
                        }
                    },
                    {
                        loader: "template-ejs-loader",
                        options: {
                            data: {
                                htmlWebpackPlugin: HTMLWebpackPluginInstance
                            }
                        }
                    }
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s[ac]ss$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
                    }
                }]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        HTMLWebpackPluginInstance,
        new RemoveEmptyScriptsPlugin(),
        new MiniCssExtractPlugin({
            filename: ({ chunk }) => `${CSS_OUTPUT_DIR}/${chunk.name.replace('/js/', '/css/')}.css`,
        }),
    ]
}