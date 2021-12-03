module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
  ["@babel/plugin-proposal-class-properties", { loose: false }],
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