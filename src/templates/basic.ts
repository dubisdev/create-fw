import execa from "execa";
import {
	defaultFlagExists,
	getPkgManager,
	commonjsFlagExists,
} from "../lib/arg.js";
import editJsonFile from "edit-json-file";
import chalk from "chalk";
import ora from "ora";

const pkgManager = await getPkgManager();

const yesFlag = defaultFlagExists() ? "-y" : "";

export default async () => {
	console.log(chalk.bold("\n🪓 Generating: package.json\n"));

	//configure spinner if it will no ask the user (background task)
	let spinner;
	const stdio = yesFlag ? undefined : "inherit";
	if (!stdio) spinner = ora("Generating package.json").start();

	//exec command
	await execa.command(`${pkgManager} init ${yesFlag}`, {
		stdio,
	});

	//set esmodules or commonjs
	let file = editJsonFile(`${process.cwd()}/package.json`);
	commonjsFlagExists()
		? file.set("type", "commonjs")
		: file.set("type", "module");
	file.save();

	spinner?.stop();
	console.log(chalk.bold("🪓 Generated: package.json"));
};
