![Sveltekit with Tailwind](https://dev-to-uploads.s3.amazonaws.com/i/jvi8p68ke4kkiv715iby.png)

# Running the project

Clone this repo and cd to the directory, then run npm or yarn

```bash
npx degit dansvel/sveltekit-typescript-postcss-tailwind2 myproject
cd myproject
pnpm install # or npm or yarn
pnpm run dev
```

Open up your favorite browser, go to localhost:3000 and try clicking around.

Or you can play with the code, just check `src/routes/index.svelte` and try to edit the CSS.

# build and generate static webapp

```bash
pnpm run build
```

with the command above, now you can generate static webapp, you can deploy the project in netlify, begin, vercel or else

For more information about this boilerplate, check my dev.to post [here](https://dev.to/dansvel/sveltekit-svelte-next-with-tailwind-2-4dnn).

# Credits

 - [svelte-local-storage-store](https://github.com/joshnuss/svelte-local-storage-store) by Joshua Nussbaum
