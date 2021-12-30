import preprocess from 'svelte-preprocess'
import ssr from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: [
    preprocess({
      postcss: true
    })
  ],

  kit: {
    adapter: ssr(),
    target: '#svelte'
  }
}
