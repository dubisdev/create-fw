#!/usr/bin/env node

import { getSelectedTemplate } from "./lib/prompts.js";
import createProjectFolder from "./lib/createprojectfolder.js";
import chalk from "chalk";

console.clear();
console.log(chalk.bold("🪓 Create-FW 🪓"));

let template = await getSelectedTemplate();
console.clear();
console.log(chalk.bold("🪓 Create-FW 🪓\n "));

const templateAction: { [key: number]: Function } = {
	1: () => import("./templates/basic.js"),
	2: () => import("./templates/typescript.js"),
	3: () => import("./templates/jest.js"),
	4: () => import("./templates/react.js"),
	5: () => import("./templates/TS_Jest.js"),
};

await createProjectFolder();

const templateModule = await templateAction[template]();
await templateModule.default();

console.log(chalk.bold("🪓 Your project is ready! 🪓\n "));

process.exit(0);
