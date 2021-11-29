module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
  ["@babel/plugin-proposal-class-properties"],
      [
        'dotenv-import',
        {
          moduleName: '_env',
          path: '.env',
        },
      ],
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            _app: './src',
            _assets: './assets',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  "assumptions": {
    "setPublicClassFields": false
  }
};