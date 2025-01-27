import { BuildOptions } from "./types/config";

export const buildResolvers = (options: BuildOptions) => {
    return {
        extensions: [".tsx", ".ts", ".js"],
        // preferRelative: true // preferRelative: true - вебпак будет сначала искать
        // модули в коде и только потом в папке node modules.
        preferAbsolute: true, //*
        modules: [options.paths.src, "node_modules"], //* *
        mainFiles: ["index"],

        alias: {
            "@": options.paths.src,
        },
    };
};

//* вебпак будет искать модули по абсолютному пути, абс пути по
// которым будут искаться (разрешаться) модули укащаны в массиве modules

//* * каталог src для поиска, который имеет приоритет над node_modules
