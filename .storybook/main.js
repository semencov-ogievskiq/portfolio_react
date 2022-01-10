const path = require("path");

module.exports = {
    stories: ["../ui/**/*.stories.mdx", "../ui/**/*.stories.@(js|jsx|ts|tsx)"],
    core: {
        builder: "webpack5",
    },
    typescript: {
        check: true,
        tsconfig: path.resolve(__dirname, "../tsconfig.json"),
    },
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-scss",
    ],
    framework: "@storybook/react",
};
