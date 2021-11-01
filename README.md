# CREATE-FW 🪓

> Light framework generator for your JS projects 🪓

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

### 🧰 ESModules

Create-FW **does not generate projects based on commonjs** since it is a non-standard technology at the time of creation of the tool. **Therefore all the generated code is based on ESModules**.
