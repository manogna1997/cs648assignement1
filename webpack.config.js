const path = require('path');

module.exports = {
  entry: './src/main.jsx', // relative path
  output: {
    path: path.join(__dirname, 'dist'), // absolute path
    filename: 'main.js' // file name
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader?cacheDirectory=true',
        }
    },{
      test: /\.(jpe?g|png|gif|svg|jpeg|css)$/i, 
      loader: "file-loader",
      options: {
        name: '[path][name].[ext]',
      },
  }
  ]
}
};