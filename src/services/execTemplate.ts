const templateAction: { [key: number]: Function } = {
	1: () => import("../templates/basic.js"),
	2: () => import("../templates/typescript.js"),
	3: () => import("../templates/jest.js"),
	4: () => import("../templates/react.js"),
	5: () => import("../templates/TS_Jest.js"),
};

export const execTemplate = async (action: number) => {
	return await (await templateAction[action]()).default();
};
