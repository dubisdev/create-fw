# CREATE-FRAMEWORK-GENERATOR

## Options

### Package managers

By default the cli uses the package manager used for invoking the command:

👉 `yarn create framework-generator` - Uses _yarn_
👉 `npm init framework-generator` / `npx create-framework-generator` - Uses _npm_

You can use some flags to change this

- [x] --yarn: forces the cli to use yarn as package manager

```bash
npm init framework-generator --yarn #will use yarn
```

- [x] --npm: forces the cli to use npm as package manager

```bash
yarn create framework-generator --npm #will use npm
```

## Basic

Allows you to create a personaliced package json

```bash
yarn create framework-generator # (select > basic)

npm init framework-generator # (select > basic)
```
