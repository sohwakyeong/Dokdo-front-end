const CracoAliasPlugin = require('craco-alias');
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        source: 'options',
        aliases: {
          '@': path.resolve(__dirname, 'src'),
        },
      },
    },
  ],
};
