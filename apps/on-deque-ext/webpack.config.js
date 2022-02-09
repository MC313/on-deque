const packageExtension = require("./package-extension");


module.exports = (config) => {
    const { plugins: restOfPlugins, ...restOfConfig } = config;

    return {
        ...restOfConfig,
        plugins: [
            ...restOfPlugins,
            {
                apply: (complier) => {
                    complier.hooks.afterDone.tap("CustomPlugin_compile", () => {
                        packageExtension();
                    });
                }
            }
        ]
    };
};  