const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: {
        content: [
            './src/**/*.html',
            './src/**/*.svelte'
        ],
        options: {
            defaultExtractor: (content) => [
                ...tailwindExtractor(content),
                // Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
                ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
            ],
            keyframes: true,
        },
    },
    darkMode: 'class',
	theme: {},
	variants: {
		extend: {},
	},
	plugins: [],
};
