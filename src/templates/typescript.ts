import execa from "execa";
import editJsonFile from "edit-json-file";
import ora from "ora";
import chalk from "chalk";

import { getPkgManager, writeFileSyncRecursive } from "../services/index.js";
import basic from "./basic.js";

const pkgManager = await getPkgManager();

export default async () => {
	await basic(false); //generates package.json

	await installTypescript();
	await createTypescriptConfigFile();
	await updatePackageJsonFile();
	await createFileStructure();
};

const installTypescript = () => {
	let installSpinner = ora("Downloading Typescript").start();
	return execa
		.command(
			`${pkgManager} ${pkgManager !== "yarn" ? "i" : "add"} typescript -D`
		)
		.then(() => {
			installSpinner.stop();
			console.log(chalk.bold("🪓 Installed: Typescript"));
		});
};

const createTypescriptConfigFile = () => {
	let spinner = ora("Generating Typescript Config").start();
	let tsconfig = editJsonFile(`${process.cwd()}/tsconfig.json`);

	tsconfig.set("compilerOptions", {
		target: "ES6",
		module: "ES6",
		rootDir: "./src",
		outDir: "./dist",
		moduleResolution: "node",
		allowJs: true,
		checkJs: true,
		esModuleInterop: true,
		forceConsistentCasingInFileNames: true,
		strict: true,
		noImplicitAny: true,
		skipLibCheck: true,
	});

	tsconfig.save();
	spinner.stop();
	console.log(chalk.bold("🪓 Generated: tsconfig.json"));
};

const updatePackageJsonFile = () => {
	let packagejson = editJsonFile(`${process.cwd()}/package.json`);

	packagejson.set("scripts.build", "tsc");
	packagejson.set("main", "dist/index.js");

	packagejson.save();
};

const createFileStructure = async () => {
	let spinner = ora("Generating file structure").start();

	writeFileSyncRecursive(
		`${process.cwd()}/src/index.ts`,
		`console.log("Hello world")`
	);

	await execa.command(`${pkgManager} run build`).then(() => {
		spinner.stop();
	});
};
