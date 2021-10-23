#!/usr/bin/env node

import { getSelectedTemplate } from "./lib/inquirer.js";
import createProjectFolder from "./lib/createprojectfolder.js";

console.log(
	"Welcome to npm-framework-generator. Select one template or generate yours: "
);

let template = await getSelectedTemplate();

const templateAction: { [key: number]: Function } = {
	1: () => import("./templates/basic.js"),
	2: () => import("./templates/typescript.js"),
	3: () => import("./templates/jest.js"),
};

await createProjectFolder();

const templateModule = await templateAction[template]();
await templateModule.default();

console.log("Have fun coding!");

process.exit(0);
