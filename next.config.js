require("dotenv").config();

module.exports = {
  // Configure CSS modules

  webpack: (config) => {
    const cloudinary = require("cloudinary").v2;

    cloudinary.config({
      cloud_name: "ds9ebyi8j",
      api_key: "996875687356672",
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
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
//
