module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ios.jsx',
          '.android.jsx',
          '.jsx',
          '.json',
        ],
        alias: {
          assets: './src/assets',
          navigation: './src/navigation',
          screens: './src/screens',
          utils: './src/utils',
          components: './src/components',
          reducer: './src/reducer',
          services: './src/services',
        },
      },
    ],
    ['module:react-native-dotenv', {moduleName: 'react-native-dotenv'}],
  ],
};
