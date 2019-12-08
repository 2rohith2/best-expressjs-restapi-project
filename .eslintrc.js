module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'standard',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'babel',
    'jest'
  ],
  rules: {
    'eol-last': 0,
    indent: ["error", 2],
    'no-multiple-empty-lines': ["error", { "max": 1, "maxEOF": 0 }],
    semi: ["error", "always"],
    "space-before-function-paren": ["error", "always"],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  }
}