module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'module-resolver',
    {
      root: ['/src'],
      extensions: ['.ios.js', '.android.js', '.js', '.tsx', '.json'],
      alias: {
        '@components': './src/components',
        '@features': './src/features',
        '@screens': './src/screens',
        '@stacks': './src/stacks',
        '@store': './src/store',
        '@styles': './src/styles',
        '@utils': './src/utils',
      },
    },
  ],
};
