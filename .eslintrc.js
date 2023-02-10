module.exports = {
  extends: ['airbnb', 'plugin:sort/recommended', 'prettier'],
  plugins: ['sort', 'prettier'],
  rules: {
    'no-underscore-dangle': [
      'error',
      {
        allow: [
        ]
      }
    ],
    'prettier/prettier': 'error'
  }
}
