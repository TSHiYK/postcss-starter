module.exports = {
  entry: {
    main: './src/main.ts'
  },
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'src',
    port: 8080
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.css', '.pcss']
  },
  module: {
    loaders: [
      {
          test: /\.ts$/,
          loaders: ['awesome-typescript-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?importLoaders=1', 'postcss-loader']
      },
    ]
  },
  postcss: function () {
    return [
      require('precss')({ /* ...options */ }),
      require('autoprefixer')({
        browsers: ['last 3 versions', 'ie 9', 'ios 6', 'android 4.4']
      })
    ];
  }
}
