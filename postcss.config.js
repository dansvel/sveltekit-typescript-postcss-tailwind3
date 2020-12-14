const postcssImport = require('postcss-import')
const postcssPresetEnv = require('postcss-preset-env')
const tailwindCSS = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

let plugins = [
  postcssImport,
  postcssPresetEnv({ stage: 1 }),
  tailwindCSS,
  autoprefixer
]

if (process.env.NODE_ENV === 'production') {
  plugins = [
    ...plugins,
    cssnano({
      preset: [
        'default',
        {discardComments: {removeAll: true}},
      ],
    })
  ]
}
module.exports = {plugins};