module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ["nexus", "node_modules", "build", ".eslintrc.cjs"],
  extends: ["./nexus/.eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
