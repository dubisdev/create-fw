import execa from "execa";
import minimist from "minimist";

export const getPkgManager = async (): Promise<string> => {
	const args = minimist(process.argv.slice(2), { boolean: true });

	if (args.yarn) return Promise.resolve("yarn");
	if (args.npm) return Promise.resolve("npm");

	const isWin = process.platform === "win32";

	const npmBinRegExp = isWin ? /[\\/]np[mx](\.cmd)?$/ : /\/np[mx]$/;

	const npmJsRegExp = isWin
		? /[\\/]node_modules[\\/]npm[\\/]bin[\\/]np[mx]-cli\.js$/
		: /\/node_modules\/npm\/bin\/np[mx]-cli\.js$/;

	async function checkBin(bin: string): Promise<boolean> {
		return !execa.sync(bin, ["-v"], {
			reject: false,
		}).failed;
	}

	const { env } = process;

	let bin = "yarn";

	if (
		npmJsRegExp.test(env.NPM_CLI_JS as string) ||
		npmJsRegExp.test(env.NPX_CLI_JS as string) ||
		npmBinRegExp.test(env._ as string)
	) {
		bin = "npm";
	}

	if (!(await checkBin(bin))) {
		bin = bin === "yarn" ? "npm" : "yarn";

		if (!(await checkBin(bin))) {
			throw new Error("No package manager found.");
		}
	}

	return bin;
};

export const defaultFlagExists = () => {
	const options = minimist(process.argv.slice(2), { boolean: true });

	return options?.y === true;
};

export const projectFolderExists = () => {
	const options = minimist(process.argv.slice(2), { boolean: true });

	return options?._[0];
};
