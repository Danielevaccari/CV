const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (_env, argv) => {
    const isProduction = argv.mode === "production";

    return {
        entry: "./src/index.tsx",
        output: {
            path: path.resolve(__dirname, "build"),
            filename: isProduction ? "[name].[contenthash:8].js" : "[name].js",
            assetModuleFilename: "assets/[name].[contenthash:8][ext]",
            publicPath: "/",
            clean: true,
        },
        devtool: isProduction ? "source-map" : "eval-cheap-module-source-map",
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx|js)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                [
                                    "@babel/preset-react",
                                    // Set explicitly: Babel otherwise reads NODE_ENV, which is unset
                                    // in CI builds, and emits dev-only jsxDEV calls in production.
                                    { runtime: "automatic", development: !isProduction },
                                ],
                                "@babel/preset-typescript",
                            ],
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(svg|png|jpe?g|webp)$/,
                    // Small icons are inlined as data URLs; larger files stay separate.
                    type: "asset",
                    parser: { dataUrlCondition: { maxSize: 12 * 1024 } },
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({ template: "./public/index.html" }),
            new CopyWebpackPlugin({
                patterns: [{ from: "public", globOptions: { ignore: ["**/index.html"] } }],
            }),
        ],
        devServer: {
            historyApiFallback: true,
            port: 8080,
        },
        performance: {
            hints: isProduction ? "warning" : false,
            // React 19 alone is ~190 KiB minified.
            maxEntrypointSize: 300 * 1024,
            maxAssetSize: 400 * 1024,
        },
    };
};
