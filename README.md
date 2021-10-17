# CREATE-FRAMEWORK-GENERATOR

## Options

### Package manager

By default the CLI uses the package manager used for invoking the command:

        👉 `yarn create framework-generator` - Uses yarn

        👉 `npm init framework-generator` / `npx create-framework-generator` - Uses npm

#### 💡 You can use some flags to change this

- [x] **`--yarn`**: forces the CLI to use yarn as package manager

  ```bash
  npm init framework-generator --yarn #will use yarn
  ```

- [x] **`--npm`**: forces the CLI to use npm as package manager

  ```bash
  yarn create framework-generator --npm #will use npm
  ```

### Fast mode (default options)

The **`-y` flag** sets all comands as default. It works like the -y flag in `npm init` or `yarn init`: creates the project without asking about personalization to the user.

## Templates

### Basic

Starts a project with a personaliced package.json file

    ```bash
    yarn create framework-generator # (select > basic)

    npm init framework-generator # (select > basic)
    ```
