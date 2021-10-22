# NODE CREATE-FW 🪓

> Light framework generator for your JS projects 🪓

| ⚠ This package is in **alpha phase**, its functionalities are very limited for now.

---

<h2 align="center"> 🦴 TEMPLATES </h2>

### Basic

Starts a project with a personaliced package.json file

    ```bash
    yarn create fw # (select > basic)

    npm init fw # (select > basic)
    ```

---

<h2 align="center"> ⚙ OPTIONS </h2>

### 🧰 Package manager

By default the CLI uses the package manager used for invoking the command:

        👉 `yarn create fw` - Uses yarn

        👉 `npm init fw` / `npx create-fw` - Uses npm

#### 💡 You can use some flags to change this

- [x] **`--yarn`**: forces the CLI to use yarn as package manager

  ```bash
  npm init framework-generator --yarn # will use yarn
  ```

- [x] **`--npm`**: forces the CLI to use npm as package manager

  ```bash
  yarn create fw --npm # will use npm
  ```

  <p align="center">-----</p>

### 💨 Fast mode (default options)

The **`-y` flag** sets all commands as default. It works like the -y flag in `npm init` or `yarn init`: creates the project without asking about personalization to the user.

  <p align="center">-----</p>

### 🧰 CommmonJS or ESModules

We believe that the future of JS development must go through the abandonment of CommonJS, so the **default system creates projects to develop using ESModules**.

Despite this, there is an option to configure the project to work with CommonJS, and this is using the "-cjs" flag

        👉 `yarn create fw --cjs` - Creates a project to work with CommonJS

        👉 `npm init fw --cjs` / `npx create-fw --cjs` - Creates a project to work with CommonJS
