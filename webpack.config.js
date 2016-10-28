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
    extensions: ['', '.js', '.ts', '.css']
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
  postcss: function (webpack) {
    return [
      require('postcss-import')({addDependencyTo: webpack}),
      require('postcss-cssnext')({
        features: {
          customProperties: {
            variables: {
              font: "-apple-system, Helvetica, 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', '游ゴシック', 'メイリオ', Meiryo, 'Lucida Grande', sans-serif",
              fontColor: 'red',
              bgColor: "#fff",
              mainColor: "#fff",
              subColor: "#fff",
              accentColor: "#fff"
            }
          },
          autoprefixer: {
            browsers: ['last 3 versions', 'ie 9', 'ios 6', 'android 4.4']
          }
        }
      }),
      require('precss')({ /* ...options */ })
    ];
  }
}
