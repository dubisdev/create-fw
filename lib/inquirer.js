import inquirer from "inquirer";

export const getSelectedTemplate = () => {
	return inquirer
		.prompt({
			name: "template",
			message: "Select one template:",
			type: "list",
			choices: [
				"1 - Basic: generate package.json",
				"2 - Typescript: Basic + Typescript support",
			],
		})
		.then((res) => res.template[0]);
};
