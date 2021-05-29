<script lang="ts">
  import { theme } from './store'
  import ToggleTheme from '$lib/ToggleTheme.svelte'
  import Counter from '$lib/Counter.svelte'
  import Timer from '$lib/Timer.svelte'
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>SvelteKit ❤️ Tailwind 2</title>
  <meta name="title" content="SvelteKit ❤️ Tailwind 2" />
  <meta name="description" content="SvelteKit and Tailwind 2 toggle dark/light theme demo" />
  <meta name="keywords" content="Svelte, SvelteKit, Svelte-kit, Tailwind, HTML, CSS, JavaScript" />
  <meta name="author" content="@dansvel" />
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://metatags.io/" />
  <meta property="og:title" content="SvelteKit ❤️ Tailwind 2" />
  <meta property="og:description" content="SvelteKit and Tailwind 2 toggle dark/light theme demo" />
  <meta
    property="og:image"
    content="https://sveltekit-tailwind2.netlify.app/screenshot.png"
  />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://metatags.io/" />
  <meta property="twitter:title" content="SvelteKit ❤️ Tailwind 2" />
  <meta
    property="twitter:description"
    content="SvelteKit and Tailwind 2 toggle dark/light theme demo"
  />
  <meta
    property="twitter:image"
    content="https://sveltekit-tailwind2.netlify.app/screenshot.png"
  />
</svelte:head>

<h1 class="text-5xl font-extrabold mb-2">Hello {$theme} world!</h1>
<h2 class="text-3xl font-bold mb-4">Now using SvelteKit beta</h2>

<pre>
@sveltejs/kit 1.0.0.next-110
@sveltejs/adapter-static 1.0.0.next-12
</pre>

<ToggleTheme />

<blockquote class="text-xl p-2 bg-gray-200 dark:bg-gray-800 mb-2 transition-colors duration-500">
  <a href="https://github.com/dansvel/sveltekit-typescript-postcss-tailwind2"><b>Github repo</b></a>
</blockquote>
<p>
  Visit the <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps. And read
  the <a href="https://kit.svelte.dev/">Official SvelteKit Documentation</a> to learn more about nre
  features.
</p>
<p>The title is using utility class, but all other elements is using style component.</p>
<p>Just check <code>src/routes/index.svelte</code> to see the code.</p>

<Timer />
<Counter />

<style lang="postcss">
  p {
    @apply text-lg;
    @apply mt-0 mb-1;
  }
  code {
    @apply transition-colors duration-500;
    @apply px-1;
    @apply bg-gray-200;
    :global(.dark) & {
      @apply bg-gray-800;
    }
  }
  pre {
    @apply transition-colors duration-500;
    @apply text-left p-2 bg-gray-200;
    :global(.dark) & {
      @apply bg-gray-800;
    }
  }
</style>
