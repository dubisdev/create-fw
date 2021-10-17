import execa from "execa";
import { defaultFlagExists, getPkgManager } from "../lib/arg.js";

const pkgManager = await getPkgManager();

const yesFlag = defaultFlagExists() ? "-y" : "";

export default () =>
	execa.command(`${pkgManager} init ${yesFlag}`, { stdio: "inherit" });
