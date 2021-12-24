module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
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
    ],
  "assumptions": {
    "setPublicClassFields": true,
    "privateFieldsAsProperties": true
  }
};