import execa from "execa";
import { getPkgManager } from "../lib/arg.js";
import chalk from "chalk";
import ora from "ora";
import basic from "./basic.js";

const pkgManager = await getPkgManager();

export default async () => {
	await createReactApp();
	await basic(false); //generates package.json
};

const createReactApp = async () => {
	let installSpinner = ora("Creating React App").start();

	switch (pkgManager) {
		case "yarn":
			await execa.command(`yarn create react-app .`);
			break;
		default:
			await execa.command(`npx create-react-app .`);
	}

	installSpinner.stop();
	console.log(chalk.bold("\n🪓 Created: react-app schema"));
};
