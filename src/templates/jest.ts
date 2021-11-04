import execa from "execa";
import ora from "ora";
import chalk from "chalk";

import { getPkgManager } from "../services/index.js";
import basic from "./basic.js";

const pkgManager = await getPkgManager();

export default async () => {
	await basic(); //generates package.json
	await installJest();
	await createJestConfigFile();
};

const installJest = async () => {
	let installSpinner = ora("Downloading Jest").start();
	await execa.command(
		`${pkgManager} ${pkgManager !== "yarn" ? "i" : "add"} jest -D`
	);

	installSpinner.stop();
	console.log(chalk.bold("🪓 Installed: Jest"));
};

const createJestConfigFile = async () => {
	let command = pkgManager === "yarn" ? `yarn jest --init` : `npx jest --init`;

	await execa.command(command, { stdio: "inherit" });

	console.log(chalk.bold("\n🪓 Generated: jest-config file"));
};
