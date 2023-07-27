module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    commonjs: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  settings: {
    'import/resolver': 'webpack',
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
      flowVersion: '0.53',
    },
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'jsx-quotes': ['error', 'prefer-single'],
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-constructor': 'warn',
    'prefer-template': 'error',
    'react/no-unused-state': 'warn',
    'react/state-in-constructor': ['error', 'always'],
    'react/no-deprecated': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/prop-types': [
      'error',
      { ignore: ['history', 'location', 'match', 'name', 'className', 'style', 'children'] },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
  },
};
