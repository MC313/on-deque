const packageExtension = require("./package-extension");


module.exports = (config) => {
    const { plugins, module, ...restOfConfig } = config;

    return {
        ...restOfConfig,
        module: {
            ...module,
            rules: [
                ...module.rules,
                {
                    type: 'asset',
                    resourceQuery: /url/
                },
                {
                    test: /\.svg$/i,
                    issuer: /\.[jt]sx?$/,
                    use: ['@svgr/webpack'],
                },
            ]
        },
        plugins: [
            ...plugins,
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