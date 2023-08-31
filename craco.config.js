const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  webpack: {
    alias: {},
    configure: {
      resolve: {
        plugins: [
          new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, 'tsconfig.json') }),
        ],
      },
    },
  },
};