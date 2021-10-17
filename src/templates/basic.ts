import execa from "execa";

const pkgManager = process.argv[1];

console.log(process.argv);

export default () => execa("yarn", ["init"], { stdio: "inherit" });
