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

const createReactApp = () => {
	let installSpinner = ora("Creating React App").start();

	switch (pkgManager) {
		case "yarn":
			return execa.command(`yarn create react-app .`).then(() => {
				installSpinner.stop();
				console.log(chalk.bold("\n🪓 Created: react-app schema"));
			});
		default:
			return execa.command(`npx create-react-app .`).then(() => {
				installSpinner.stop();
				console.log(chalk.bold("\n🪓 Created: react-app schema"));
			});
	}
};
