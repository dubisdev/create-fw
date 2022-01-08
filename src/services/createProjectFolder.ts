import execa from "execa";
import { projectFolderExists } from "./args.js";

export const createProjectFolder = async () => {
	const folder = projectFolderExists();

	if (folder) {
		await execa.command(`mkdir ${folder}`);
		//change cwd to new folder created
		process.chdir(`./${folder}`);
	}
};
