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

const installJest = () => {
	let installSpinner = ora("Downloading Jest").start();
	return execa
		.command(`${pkgManager} ${pkgManager !== "yarn" ? "i" : "add"} jest -D`)
		.then(() => {
			installSpinner.stop();
			console.log(chalk.bold("🪓 Installed: Jest"));
		});
};

const createJestConfigFile = () => {
	switch (pkgManager) {
		case "yarn":
			return execa
				.command(`yarn jest --init`, { stdio: "inherit" })
				.then(() => {
					console.log(chalk.bold("\n🪓 Generated: jest-config file"));
				});
		default:
			return execa.command(`npx jest --init`, { stdio: "inherit" }).then(() => {
				console.log(chalk.bold("\n🪓 Generated: jest-config file"));
			});
	}
};
