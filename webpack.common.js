const PATH = require("path");

module.exports = {
    entry: {
        "main": PATH.resolve(__dirname, "src/js/main.js"),
    },
    output: {
        path: PATH.resolve(__dirname, "dist/js"),
        filename: "[name].min.js"
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
            }
        ]
    }
}