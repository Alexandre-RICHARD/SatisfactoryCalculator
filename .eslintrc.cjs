module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ["nexus", "report"],
  extends: ["./nexus/.eslintrc-client.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: [
        "src/store/combined.store.ts",
      ],
      rules: {
        "import/no-default-export": "off",
        "import/no-unused-modules": "off",
      }
    },
  ],
};
