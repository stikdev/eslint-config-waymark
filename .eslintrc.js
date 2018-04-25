module.exports = {
  extends: [
    "eslint-config-airbnb",
    // For JavaScript project's that use Prettier (which should be all of ours), we'll make sure
    // that the ESLint rules do not conflict.
    "eslint-config-prettier"
  ],
  parser: "babel-eslint",
  plugins: ["babel"],
  rules: {
    "no-underscore-dangle": [
      "error",
      {
        // We currently use this as a 'private' convention everywhere. So, for now this is
        // disabled. (eslint-config-airbnb override)
        enforceInMethodNames: false,
        allowAfterThis: true,
        allowAfterSuper: true
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true
      }
    ],
    "no-console": [
      "error",
      {
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
