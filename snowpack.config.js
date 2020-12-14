// Consult https://www.snowpack.dev to learn about these options
module.exports = {
	extends: '@sveltejs/snowpack-config',
  // -- the configuration bellow not work for now
	// plugins: [
  //   '@snowpack/plugin-typescript',
  //   '@snowpack/plugin-postcss'
  // ],
  plugins: require('@sveltejs/snowpack-config').plugins.concat([
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-postcss'
  ]),
	mount: {
		'src/components': '/_components'
	},
	alias: {
		'$components': './src/components'
	}
};
