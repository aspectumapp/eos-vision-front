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
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'less-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    }
  );

  return config;
};
