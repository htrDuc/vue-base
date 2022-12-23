module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-airbnb",
    "plugin:vue/vue3-strongly-recommended",
    "prettier",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "global-require": 0,

    semi: 0,
    "max-len": "off",
    "linebreak-style": "off",
    camelcase: "off",
    "arrow-parens": ["error", "as-needed"],
    "vue/multiline-html-element-content-newline": "off",
    "import/no-cycle": "off",
    quotes: "off",
    "no-param-reassign": "off",
    "no-restricted-globals": "off",
    "no-restricted-syntax": "off",
    "arrow-parens": "off",
    "comma-dangle": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "implicit-arrow-linebreak": "off",
    "object-curly-newline": "off",
    "consistent-return": "off",
    "no-underscore-dangle": "off",
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 4,
        },
        multiline: {
          max: 4,
        },
      },
    ],
  },
};
