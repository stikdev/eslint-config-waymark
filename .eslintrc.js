module.exports = {
  extends: [
    "eslint-config-airbnb",
    // For JavaScript projects that use Prettier (which should be all of Waymark's), we'll make sure
    // that the ESLint rules do not conflict.
    "eslint-config-prettier"
  ],
  // Used as the parser to avoid linting errors for things like "class properties"
  // or other experimental features we add.
  parser: "babel-eslint",
  plugins: ["babel"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        // We're going to allow importing of devDependencies strictly because we currently
        // put *everything* in devDependencies. If we abandon that loosely-held convention,
        // this rule could definitely be changed to `false` (eslint-config-airbnb's default).
        // (eslint-config-airbnb override)
        devDependencies: true
      }
    ],
    "no-console": [
      "error",
      {
        // We want to allow the use of `console.warn` and `console.error`
        // (eslint-config-airbnb-override)
        allow: ["warn", "error"]
      }
    ],
    "react/jsx-filename-extension": [
      "warn",
      {
        // We are no longer allowing JSX as an extension.
        // (eslint-config-airbnb override)
        extensions: [".js"]
      }
    ],
    // We will require extensions for everything except packages.
    // (eslint-config-airbnb override)
    "import/extensions": ["error", "always", { ignorePackages: true }]
  }
};
