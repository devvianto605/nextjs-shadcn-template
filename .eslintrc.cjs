
/* eslint-disable @typescript-eslint/no-var-requires */
const baseRules = require("./rules/base.cjs");
const reactRules = require("./rules/react.cjs");
const importRules = require("./rules/import.cjs");
const typescriptRule = require("./rules/typescript.cjs");

module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
    "import",
    "jest",
  ],
  extends: [
    "next",
    "next/core-web-vitals",
    "prettier",
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:eslint-comments/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    ...baseRules,
    ...importRules,
    ...typescriptRule,
    ...reactRules,
  },
  parserOptions: {
    presets: [require.resolve("next/babel")],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
};
