import { fork } from "child_process";
import minimist from "minimist";
import { getSelectedTemplate } from "./lib/inquirer.js";

const args = minimist(process.args?.slice(2) || "");

console.log(args);

console.log(
	"Welcome to npm-framework generator. Select one template or generate yours: "
);

let template = await getSelectedTemplate();

const templateAction = {
	1: () => consle.log(1), //generatePackageJson(),
	2: () => console.log(2),
};

templateAction[template]();

// get args from console
