import inquirer from "inquirer";

export const getSelectedTemplate = (): Promise<number> => {
	return inquirer
		.prompt({
			name: "template",
			message: "Select one template:",
			type: "list",
			choices: [
				"1 - Basic: generate package.json",
				"2 - Typescript: basic + TypeScript support",
			],
		})
		.then((res) => res.template[0] as number);
};
