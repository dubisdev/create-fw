import execa from "execa";
import { getPkgManager } from "../lib/arg.js";

const pkgManager = await getPkgManager();

export default () => execa(pkgManager, ["init"], { stdio: "inherit" });
