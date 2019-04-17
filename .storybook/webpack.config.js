module.exports = ({ config }) => {
  config.resolve.extensions.push('.ts', '.tsx');

  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['react-app', { flow: false, typescript: false }]],
          },
        },
        {
          loader: require.resolve('ts-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            tsconfigPath: './tsconfig.json'
          },
        },
      ],
    },
    {
      test: /\.less$/,
      loaders: [ 'style-loader', 'css-loader', 'less-loader' ],
    }
  );

  return config;
};
