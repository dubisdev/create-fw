import prompts from "prompts";

export const getSelectedTemplate = async (): Promise<number> => {
	const onCancel = () => {
		process.exit(0);
	};

	const response = await prompts(
		{
			type: "select",
			name: "template",
			message: "Select one template:",
			choices: [
				{ value: 1, title: "Basic", description: "Generate package.json" },
				{ value: 2, title: "Typescript", description: "TypeScript support" },
				{ value: 3, title: "Jest", description: "Jest support" },
				{ value: 4, title: "React", description: "Runs create-react-app" },
				{ value: 5, title: "Typescript + Jest" },
			],
			initial: 0,
		},
		{ onCancel }
	);

	return response.template;
};
