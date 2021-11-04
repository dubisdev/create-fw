import execa from "execa";
import editJsonFile from "edit-json-file";
import ora from "ora";
import chalk from "chalk";

import { getPkgManager, writeFileSyncRecursive } from "../services/index.js";
import basic from "./basic.js";

const pkgManager = await getPkgManager();

export default async () => {
	await basic(false); //generates package.json

	await installAllDependencies();
	await createTypescriptConfigFile();
	await createJestConfig();
	await updatePackageJsonFile();
	await createFileStructure();
};

const installAllDependencies = async () => {
	let installSpinner = ora(
		"Downloading Dependencies: Typescript, Jest, ts-jest"
	).start();

	await execa.command(
		`${pkgManager} ${
			pkgManager !== "yarn" ? "i" : "add"
		} jest typescript ts-jest @types/jest -D`
	);

	installSpinner.stop();
	console.log(chalk.bold("🪓 Installed: Typescript, Jest, ts-jest"));
};

const createJestConfig = async () => {
	let spinner = ora("Generating Jest Config").start();
	let pkgJson = editJsonFile(`${process.cwd()}/package.json`);

	pkgJson.set("jest", {
		preset: "ts-jest/presets/js-with-ts-esm",
		rootDir: "src",
		extensionsToTreatAsEsm: [".ts"],
		globals: {
			"ts-jest": {
				useESM: true,
			},
		},
		moduleNameMapper: {
			"^(\\.{1,2}/.*)\\.js$": "$1",
		},
	});

	pkgJson.set("scripts.test", "jest");

	pkgJson.save();
	spinner.stop();
	console.log(chalk.bold("\n🪓 Generated: jest config"));
};

const createTypescriptConfigFile = async () => {
	let spinner = ora("Generating Typescript Config").start();
	let tsconfig = editJsonFile(`${process.cwd()}/tsconfig.json`);

	tsconfig.set("compilerOptions", {
		target: "ES5",
		module: "ES6",
		rootDir: "src",
		outDir: "./dist/",
		moduleResolution: "node",
		allowJs: true,
		checkJs: true,
		esModuleInterop: true,
		forceConsistentCasingInFileNames: true,
		strict: true,
		noImplicitAny: true,
		skipLibCheck: true,
		declaration: true,
		declarationMap: true,
	});

	tsconfig.save();
	spinner.stop();
	console.log(chalk.bold("🪓 Generated: tsconfig.json"));
};

const updatePackageJsonFile = async () => {
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
	writeFileSyncRecursive(
		`${process.cwd()}/src/__tests__/index.tests.ts`,
		`test("Default test", () => {
			expect(true).toBe(true);
		})`
	);

	await execa.command(`${pkgManager} run build`).then(() => {
		spinner.stop();
	});
};
