#!/usr/bin/env node

import {
	askUserForTemplate,
	createProjectFolder,
	execTemplate,
} from "./services/index.js";
import chalk from "chalk";

console.clear();
console.log(chalk.bold("🪓 Create-FW 🪓"));

let selectedTemplate = await askUserForTemplate();
await createProjectFolder();

await execTemplate(selectedTemplate);

console.log(chalk.bold("🪓 Your project is ready! 🪓\n"));
process.exit(0);
