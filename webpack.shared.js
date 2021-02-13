const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.jsx'],
    alias: {
      assets: path.resolve(__dirname, './src/assets/'),
      components: path.resolve(__dirname, './src/components/'),
      constants: path.resolve(__dirname, './src/constants/'),
      hocs: path.resolve(__dirname, './src/hocs/'),
      server: path.resolve(__dirname, './src/server/'),
      store: path.resolve(__dirname, './src/store/'),
    },
  },
};
