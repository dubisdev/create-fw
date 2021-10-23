import execa from "execa";
import { commonjsFlagExists, getPkgManager } from "../lib/arg.js";
import basic from "./basic.js";
import editJsonFile from "edit-json-file";
import createFile from "create-file";

const pkgManager = await getPkgManager();

export default async () => {
	await basic(); //generates package.json

	await installTypescript();
	await createTypescriptConfigFile();
	await updatePackageJsonFile();
	await createFileStructure();
};

const installTypescript = () => {
	return execa.command(
		`${pkgManager} ${pkgManager !== "yarn" ? "i" : "add"} typescript -D`,
		{ stdio: "inherit" }
	);
};

const createTypescriptConfigFile = () => {
	let tsconfig = editJsonFile(`${process.cwd()}/tsconfig.json`);

	commonjsFlagExists()
		? tsconfig.set("compilerOptions", {
				target: "ES6",
				module: "CommonJS",
				rootDir: "./src",
				outDir: "./dist",
				moduleResolution: "node",
				allowJs: true,
				checkJs: true,
				forceConsistentCasingInFileNames: true,
				strict: true,
				noImplicitAny: true,
				skipLibCheck: true,
		  })
		: tsconfig.set("compilerOptions", {
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
};

const updatePackageJsonFile = () => {
	let packagejson = editJsonFile(`${process.cwd()}/package.json`);

	packagejson.set("scripts.build", "tsc");
	packagejson.set("main", "dist/index.js");

	packagejson.save();
};

const createFileStructure = async () => {
	createFile(
		`${process.cwd()}/src/index.ts`,
		`console.log("Hello world")`,
		() => null
	);
	await execa.command(`${pkgManager} run build`, { stdio: "inherit" });
};
