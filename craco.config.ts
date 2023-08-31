import path from 'path';

const cracoConfig = {
  webpack: {
    alias: {
      '@': path.resolve('src'),
    },
  },
};

export default cracoConfig;
