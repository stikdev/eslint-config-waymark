# eslint-config-waymark

This package provide's Waymark's base JavaScript ESLint configuration. It is primarily an extension
from [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

## Usage

This is intended to be used for any Waymark JavaScript projects (within the main repository or not).

### Installation

(Borrowed from [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#usage).)

First, install this package:

```
# For latest
npm install --save-dev github:stikdev/eslint-config-waymark

# For specific version (preferred)
npm install --save-dev github:stikdev/eslint-config-waymark#v0.1.0
```

**Note: *Don't* forget to additionally install the dependencies!**

Next, create an [ESLint configuration file](https://eslint.org/docs/user-guide/configuring#configuration-file-formats) that
extends from `eslint-config-waymark`:

e.g. `.eslintrc.json`

```
{
  "extends": ["eslint-config-waymark"]
}
```

## Future

This is a working spec of our JavaScript styleguide. It is meant (and should be expected) to evolve.

### Notable/preliminary/controversial aspects

* [`class-methods-use-this`](https://eslint.org/docs/rules/class-methods-use-this) is enabled. We currently have a lot of
  legacy code that uses class methods which fail to reference `this`.
* The [`import/resolver`](https://github.com/benmosher/eslint-plugin-import#resolvers) plugin is not configured to look
  for a Webpack configuration. This means that any project that wishes to use this ESLint configuration _and_ Webpack
  either has to (a) disable the [`import/no-unresolved`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md)
  rule or (b) specify [`import/resolver`](https://github.com/benmosher/eslint-plugin-import#resolvers) to look for the Webpack configuration.
* Notice that [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) is referenced in the
  configuration. This is making the presumption that a project using this configuration will _also_ be using Prettier for
  formatting. It would be nice to make `prettier.js` (included in this repository only for reference as Waymark's Prettier
  standard) more extensible, but "shareable configurations" aren't currently supported. So, for now, please use Prettier
  as well or you'll have to manually disable these rules/plugins in a config that extends `eslint-config-waymark`.

### Roadmap items

* It might be nice to split this out into a `eslint-config-waymark-core`, `eslint-config-waymark-react`, etc. Right now
  there are _a lot_ of peer dependencies when using this.
* (Introduced in v0.1.1) Would like to be able to raise a warning if someone defines a static class method via
  [babel-plugin-transform-class-properties](https://babeljs.io/docs/plugins/transform-class-properties/) without using `this` inside the
  method. Same functionality as the `babel/no-invalid-this` setting, but something that plays nice with our `babel-eslint` parser.

## Maintaining this project

To publish a new release to this project:

* Make changes and commits as needed
* Update the Changelog in the README
* Publish a new version (using [semver](https://semver.org))

```
npm version v0.1.1
```

* Push your changes
* Push your new tag

```
git push origin v0.1.1
```

After these steps, someone should be able to install your new version via:

```
npm install -save-dev github:stikdev/eslint-config-waymark#v0.1.1
```

## Changelog

### 0.1.0 / 2018-04-25

* The initial release

### 0.1.1 / 2018-04-25

* Adds `babel-eslint` parser to ensure that static class methods don't cause linting errors.

### 0.1.2 / 2018-04-25

* Now enforcing the `no-underscore-dangle` default from eslint-config-airbnb
* Removes no-longer-necessary peer dependencies
* Adds required `babel-eslint` peer dependency

### 0.2.0 / 2019-06-24

* Adds `eslint-plugin-react-hooks` for linting new react components made with hooks

### 1.0.0 / 2021-05-20

* Updates all dependencies to latest versions
