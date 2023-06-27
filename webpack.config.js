const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output bundle file name
  },
  module: {
    rules: [
      // Add loaders for different file types
      {
        test: /\.js$/, // Apply loader to JavaScript files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: "babel-loader", // Use Babel loader for transpiling
          options: {
            presets: ["@babel/preset-env"], // Specify Babel presets
          },
        },
      },
      {
        test: /\.css$/, // Apply loader to CSS files
        use: ["style-loader", "css-loader"], // Use style-loader and css-loader
      },
      {
        test: /\.(png|jpg|gif)$/, // Apply loader to image files
        use: [
          {
            loader: "file-loader", // Use file-loader for images
            options: {
              name: "[name].[ext]", // Preserve original file name and extension
              outputPath: "images", // Output directory for images
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), // Serve content from the dist directory
    port: 3000, // Specify the port for the development server
  },
};
