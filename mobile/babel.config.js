module.exports = (api) => {
  const babelEnv = api.env();
  const plugins = [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['.'],
        alias: {
          components: './src/components',
          features: './src/features',
          screens: './src/screens',
          stacks: './src/stacks',
          store: './src/store',
          styles: './src/styles',
          utils: './src/utils',
        },
      },
    ],
  ];
  if (babelEnv !== 'development') {
    plugins.push(['transform-remove-console', { exclude: ['error', 'warn'] }]);
  }

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins,
  };
};
