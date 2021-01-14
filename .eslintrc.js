module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  env: {
    es6: true
  },
  rules: {
    'object-curly-newline': 'off',
    'block-scoped-var': 0,
    'padded-blocks': 0,
    'comma-dangle': 0,
    indent: [2, 2, { SwitchCase: 1 }],
    strict: 0,
    'no-console': 0,
    'no-param-reassign': [2, { props: false }],
    'max-len': [2, 180, 2, { ignoreUrls: true }],
    'no-unused-expressions': 0,
    'no-case-declarations': 0,
    'no-multi-assign': 0,
    'new-cap': 0,
    'arrow-parens': 'warn',
    'no-floating-decimal': 'off',
    'one-var': 'off'
  },
  globals: {
    module: true,
    before: true,
    after: true,
    actions: true,
    document: true
  }
};
