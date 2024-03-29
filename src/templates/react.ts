import execa from "execa";
import chalk from "chalk";
import ora from "ora";

import { getPkgManager } from "../services/index.js";
import basic from "./basic.js";

const pkgManager = await getPkgManager();

export default async () => {
	await createReactApp();
	await basic(false); //generates package.json
};

const createReactApp = async () => {
	let installSpinner = ora("Creating React App").start();

	let command =
		pkgManager === "yarn"
			? `yarn create react-app .`
			: `npx create-react-app .`;

	await execa.command(command);

	installSpinner.stop();
	console.log(chalk.bold("\n🪓 Created: react-app schema"));
};
