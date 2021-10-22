import execa from "execa";
import {
	defaultFlagExists,
	getPkgManager,
	commonjsFlagExists,
} from "../lib/arg.js";
import editJsonFile from "edit-json-file";

const pkgManager = await getPkgManager();

const yesFlag = defaultFlagExists() ? "-y" : "";

export default async () => {
	await execa.command(`${pkgManager} init ${yesFlag}`, { stdio: "inherit" });

	let file = editJsonFile(`${process.cwd()}/package.json`);

	commonjsFlagExists()
		? file.set("type", "commonjs")
		: file.set("type", "module");

	file.save();
};
