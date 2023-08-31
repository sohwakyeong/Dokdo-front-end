import CracoAliasPlugin from 'craco-alias';
import path from 'path';

const cracoConfig = {
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

export default cracoConfig;