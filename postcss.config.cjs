const postcssPresetEnv = require('postcss-preset-env');
const tailwindCSS = require('@tailwindcss/jit');
// ^ Just for now, will merge to tailwindcss. Check https://blog.tailwindcss.com/just-in-time-the-next-generation-of-tailwind-css
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        postcssPresetEnv({
            stage: 4,
            features: {
                'nesting-rules': true
            }
        }),

        tailwindCSS(),
        autoprefixer,
    ],
};

