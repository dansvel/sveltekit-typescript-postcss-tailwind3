const mode = process.env.NODE_ENV;
const dev = mode === 'development';

module.exports = {
    plugins: [
        require('postcss-preset-env')({stage: 1}),
        require('tailwindcss'),
        require('autoprefixer'),

        !dev && require('cssnano')({
            preset: 'default',
        }),
    ],
};
