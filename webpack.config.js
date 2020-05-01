const webpack = require("webpack");
const path = require("path");
module.exports = {
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            },
        }, ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    entry: {
        index: [
            "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true",
            "./",
        ],
    },
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "/assets",
        filename: "[name].bundle.js",
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devtool: "source-map",
};