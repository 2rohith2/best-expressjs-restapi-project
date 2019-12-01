module.exports = {
  env: {
    es6: true,
    node: true
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
  'plugins': [
    'babel'
  ],
  rules: {
    'eol-last': 0,
    indent: ["error", 2],
    'no-multiple-empty-lines': ["error", { "max": 2, "maxEOF": 0 }],
    semi: ["error", "always"],
    "space-before-function-paren": ["error", "always"]
  }
}
