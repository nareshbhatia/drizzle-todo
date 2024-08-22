module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@code-shaper/eslint-config/strict-react',
    'next/core-web-vitals',
    'plugin:@dword-design/import-alias/recommended',
  ],
  rules: {
    '@dword-design/import-alias/prefer-alias': [
      'error',
      {
        alias: {
          '@': './src/',
        },
      },
    ],
  },
};
