module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react-hooks", "react-refresh"],
  ignorePatterns: ["dist", "node_modules"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  },
};
