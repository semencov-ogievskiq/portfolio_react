/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    webpack5: true,
    eslint: {
        dirs: ["pages", "ui"],
    },
    async redirects() {
        return [
            {
                source: "/storybook",
                destination: "/storybook/index.html",
                permanent: true,
            },
        ];
    },
};
