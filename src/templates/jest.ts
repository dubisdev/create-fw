import execa from "execa";
import { getPkgManager } from "../lib/arg.js";
import basic from "./basic.js";

const pkgManager = await getPkgManager();

export default async () => {
	await basic(); //generates package.json

	await installJest();
	await createJestConfigFile();
};

const installJest = () => {
	return execa.command(
		`${pkgManager} ${pkgManager !== "yarn" ? "i" : "add"} jest -D`,
		{ stdio: "inherit" }
	);
};

const createJestConfigFile = () => {
	switch (pkgManager) {
		case "yarn":
			return execa.command(`yarn jest --init`, { stdio: "inherit" });
		default:
			return execa.command(`npx jest --init`, { stdio: "inherit" });
	}
};
