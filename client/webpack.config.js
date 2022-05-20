const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  mode: "development",
  target: "web",
  entry: ["regenerator-runtime/runtime", "./src/index.js"],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".css"],
    alias: {
      components: path.resolve(__dirname, "src/components"),
    },
  },

  devtool: "eval",
  module: {
    rules: [
      { test: /\.(js|jsx)/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },

      {
        test: /\.(woff(2)?|ttf|eot|jpg|jpeg|png|gif)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[contenthash].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },

      {
        test: /\.json5$/i,
        loader: "json5-loader",
        type: "javascript/auto",
        options: {
          esModule: true,
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    historyApiFallback: true,
    overlay: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "esBUild",
      template: "src/index.html",
    }),
    new NodePolyfillPlugin(),
  ],
};
