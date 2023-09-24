module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    library: 'index',
    libraryTarget: 'umd'
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react/lib/ReactCSSTransitionGroup': 'ReactCSSTransitionGroup',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  }
};
