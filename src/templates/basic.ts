import execa from "execa";
import editJsonFile from "edit-json-file";
import chalk from "chalk";
import ora from "ora";

import {
	defaultFlagExists,
	getPkgManager,
	writeFileSyncRecursive,
} from "../services/index.js";

const pkgManager = await getPkgManager();

const yesFlag = defaultFlagExists() ? "-y" : "";

export default async (createIndex = true) => {
	console.log(chalk.bold("\n🪓 Generating: package.json\n"));

	//configure spinner if it will no ask the user (background task)
	let spinner;
	const stdio = yesFlag ? undefined : "inherit";
	if (!stdio) spinner = ora("Generating package.json").start();

	//exec command
	await execa.command(`${pkgManager} init ${yesFlag}`, {
		stdio,
	});

	//set esmodules
	let file = editJsonFile(`${process.cwd()}/package.json`);
	file.set("type", "module");
	file.save();

	spinner?.stop();

	createIndex ? await generateIndex() : null;

	console.log(chalk.bold("🪓 Generated: package.json"));
};

const generateIndex = async () => {
	const path = await import("path");
	let file = editJsonFile(`${process.cwd()}/package.json`);

	writeFileSyncRecursive(
		path.join(process.cwd(), file.get("main")),
		"console.log('Hello world!')"
	);
};
