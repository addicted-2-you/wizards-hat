const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.jsx'],
    alias: {
      components: path.resolve(__dirname, './src/components/'),
      constants: path.resolve(__dirname, './src/constants/'),
      server: path.resolve(__dirname, './src/server/'),
      store: path.resolve(__dirname, './src/store/'),
    },
  },
};
