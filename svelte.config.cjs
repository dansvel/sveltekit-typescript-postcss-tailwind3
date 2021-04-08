const sveltePreprocess = require('svelte-preprocess')
const ssr = require('@sveltejs/adapter-static')
const pkg = require('./package.json')

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  preprocess: [
    sveltePreprocess({
      defaults: {
        style: 'postcss'
      },
      postcss: true
    })
  ],
  kit: {
    adapter: ssr(),
    target: '#svelte',
    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {})
      }
    }
  }
}
