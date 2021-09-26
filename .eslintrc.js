const prettierOptions = require('./.prettierrc.json');

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:jest-formatting/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  env: {
    node: true,
    jest: true
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: '*.js'
    }
  ],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    // no need to const individual variables when destructuring into a let
    'prefer-const': ['error', { destructuring: 'all' }],
    // Enforce use of interface instead of types for faster compilation
    '@typescript-eslint/consistent-type-definitions': 'error',
    // Disallows use of arguments.callee
    'no-caller': 'error',
    // Disallows you from specifying public access type since this is the default
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { accessibility: 'no-public' }
    ],
    // Disallow @ts-ignore and other Typescript comments
    '@typescript-eslint/ban-ts-comment': [
      'error',
      // allow @ts-expect-error for testing
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description'
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        // allow PascalCase for React components
        format: ['camelCase', 'PascalCase', 'UPPER_CASE']
      }
    ],
    // Enforce early exits from functions for better readability
    'no-else-return': ['error', { allowElseIf: false }],
    'sort-imports': [
      'off',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
        allowSeparatedGroups: true
      }
    ]
  }
};
