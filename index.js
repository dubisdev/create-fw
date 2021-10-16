import execa from "execa";
import minimist from "minimist";
import { getSelectedTemplate } from "./lib/inquirer.js";

const args = minimist(process.args?.slice(2) || "");

console.log(args);

console.log(
	"Welcome to npm-framework-generator. Select one template or generate yours: "
);

let template = await getSelectedTemplate();

//const initArgs = process.argv.slice(2).filter((arg) => arg.startsWith("-"));

const binArgs = ["init" /*...initArgs*/];

const templateAction = {
	1: () => execa("yarn", binArgs, { stdio: "inherit" }), //generatePackageJson(),
	2: () => console.log(2),
};

templateAction[template]();

// get args from console
