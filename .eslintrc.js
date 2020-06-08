module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/recommended",
    // "plugin:vue-libs/recommended",
    "eslint:recommended",
    // "plugin:prettier/recommended"
    "prettier/standard",
    // "prettier/vue"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'vue/max-attributes-per-line': [2, {
      'singleline': 10,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/name-property-casing': ['error', 'PascalCase'],
    'accessor-pairs': 2,
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'vue/singleline-html-element-content-newline': 0,
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    'camelcase': [0, {
      'properties': 'always'
    }],
    'semi': [2, 'never'],
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
  }
};