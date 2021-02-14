const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.jsx'],
    alias: {
      assets: path.resolve(__dirname, './src/assets/'),
      components: path.resolve(__dirname, './src/components/'),
      containers: path.resolve(__dirname, './src/containers/'),
      models: path.resolve(__dirname, './src/models/'),
      constants: path.resolve(__dirname, './src/constants/'),
      hocs: path.resolve(__dirname, './src/hocs/'),
      server: path.resolve(__dirname, './src/server/'),
      store: path.resolve(__dirname, './src/store/'),
      styles: path.resolve(__dirname, './src/styles/'),
      utils: path.resolve(__dirname, './src/utils/'),
    },
  },
};
