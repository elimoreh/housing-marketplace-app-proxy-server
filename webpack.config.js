module.exports = {
    entry: `${__dirname}/client/index.jsx`,
    output: {
      filename: 'bundle.js',
      path: `${__dirname}/public`,
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['minify','@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
             "styled-components":`${__dirname}/node_modules/styled-components`
         }
    },
  };
  
