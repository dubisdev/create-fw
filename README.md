# CREATE-FW 🪓

> Light framework generator for your JS projects 🪓



## 🧰 ESModules?

> ⚠️ Create-FW **does not generate CommonJS projects** since it is a non-standard technology at the time of creation of the tool. **Therefore all the generated projects will be using ESModules**.

---

<h2 align="center"> 🪓 INSTALLATION & USAGE </h2>

**Create-fw can be used in different ways.**

### Fetch from remote

By using one of the following commands:


| Package manager 	| Command          	|
|-----------------	|------------------	|
| npm             	| `npm init fw`    	|
| npx             	| `npx create-fw`  	|
| yarn            	| `yarn create fw` 	|

### Install

It is also possible to install the package globally and run it using the `create-fw` command.

#### Install the package

| Package manager 	|           Command           	|
|:---------------:	|:---------------------------:	|
| npm             	| `npm install -g create-fw`  	|
| yarn            	| `yarn global add create-fw` 	|
#### Then run the command
```sh
create-fw
```

---

<h2 align="center"> 🦴 Available Templates </h2>


| Template   	| Description                                            	|
|------------	|--------------------------------------------------------	|
| Basic      	| Starts a project with a personaliced package.json file 	|
| TypeScript 	| Creates a project for working with TS                  	|
| Jest       	| Creates a project and configures Jest                  	|
| TS + Jest  	| Creates a TS project and configures Jest               	|
| React      	| Creates a React app (Runs `create-react-app`)          	|

    
---

<h2 align="center"> ⚙ OPTIONS </h2>

### 📁 Create in folder

You can specify a folder name were the project will be started:

```sh
yarn create fw myApp
```
Generates a folder named "myApp" and starts there the project.

  <p align="center">-----</p>


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
