import path from 'path';

const cracoConfig = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};

export default cracoConfig;
