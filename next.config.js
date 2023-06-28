module.exports = {
  // Configure CSS modules
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "style-loader",
        },

        {
          loader: "css-loader",
          options: {
            modules: true,
          },
        },
      ],
    });
    return config;
  },
};
