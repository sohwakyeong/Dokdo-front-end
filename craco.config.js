const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  webpack: {
    alias: {},
    plugins: [
      {
        plugin: {
          overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
            cracoConfig.webpack.alias = {
              ...cracoConfig.webpack.alias,
              '@': path.resolve(__dirname, 'src'),
            };
            cracoConfig.webpack.configure = {
              ...cracoConfig.webpack.configure,
              resolve: {
                ...cracoConfig.webpack.configure.resolve,
                plugins: [
                  ...(cracoConfig.webpack.configure.resolve.plugins || []),
                  new TsconfigPathsPlugin({
                    configFile: path.resolve(__dirname, 'tsconfig.json'),
                  }),
                ],
              },
            };
            return cracoConfig;
          },
        },
      },
    ],
  },
};
