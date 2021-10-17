#!/usr/bin/env node

//import minimist from "minimist";
import { getSelectedTemplate } from "./lib/inquirer.js";

//const args = minimist(process.argv?.slice(2) || "");

console.log(
	"Welcome to npm-framework-generator. Select one template or generate yours: "
);

let template = await getSelectedTemplate();

const templateAction: { [key: number]: Function } = {
	1: () => import("./templates/basic.js"),
};

const templateModule = await templateAction[template]();

templateModule.default();
