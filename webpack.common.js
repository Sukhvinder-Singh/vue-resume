const PATH = require("path");

module.exports = {

    entry: {
        "main": PATH.resolve(__dirname, "src/js/main.js"),
    },

    output: {
        path: PATH.resolve(__dirname, "dist/js"),
        filename: "[name].js"
    }

}