const postcssPresetEnv = require('postcss-preset-env');
const tailwindCSS = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssNano = require('cssnano');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
    plugins: [
        postcssPresetEnv({
            stage: 4,
            features: {
                'nesting-rules': true
            }
        }),
        tailwindCSS('tailwind.config.cjs'),
        autoprefixer,

        !dev && cssNano({
            preset: 'default',
        }),
    ],
};
