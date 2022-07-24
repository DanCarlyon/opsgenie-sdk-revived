module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  env: {
    jest: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-console': 0,
    camelcase: 'off',
  },
};
