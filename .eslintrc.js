module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    "eslint:recommended",
    "hardcore",
    "hardcore/fp",
    "plugin:react/recommended",
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },

    ecmaVersion: 12,
    sourceType: "module",
  },

  plugins: ["react"],

  rules: {
    "import/no-unassigned-import": [
      "error",
      {"allow": ["**/*.css"]}
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },

  settings: {
    react: {
      version: "detect"
    }
  }
};
