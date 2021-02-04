<script>
  import { theme } from './store';
  import ToggleTheme from '../components/ToggleTheme.svelte';
  import Counter from '../components/Counter.svelte';
  import Timer from '../components/Timer.svelte';
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>SvelteKit ❤️ Tailwind 2</title>
  <meta name="title" content="SvelteKit ❤️ Tailwind 2">
  <meta name="description" content="SvelteKit and Tailwind 2 toggle dark/light theme demo">
  <meta name="keywords" content="Svelte, SvelteKit, Svelte-kit, Tailwind, HTML, CSS, JavaScript">
  <meta name="author" content="@dansvel">
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://metatags.io/">
  <meta property="og:title" content="SvelteKit ❤️ Tailwind 2">
  <meta property="og:description" content="SvelteKit and Tailwind 2 toggle dark/light theme demo">
  <meta property="og:image" content="https://dev-to-uploads.s3.amazonaws.com/i/yyqy860f5z4n4vk8euzz.png">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://metatags.io/">
  <meta property="twitter:title" content="SvelteKit ❤️ Tailwind 2">
  <meta property="twitter:description" content="SvelteKit and Tailwind 2 toggle dark/light theme demo">
  <meta property="twitter:image" content="https://dev-to-uploads.s3.amazonaws.com/i/yyqy860f5z4n4vk8euzz.png">
</svelte:head>

<h1 class="text-5xl font-extrabold mb-4">Hello {$theme} world!</h1>

<ToggleTheme />

<blockquote class="text-xl p-2 bg-gray-200 dark:bg-gray-800 mb-2">
  <a href="https://github.com/dansvel/sveltekit-typescript-postcss-tailwind2"
    ><b>Github repo</b></a>
  or <a href="https://dev.to/dansvel/sveltekit-svelte-next-with-tailwind-2-4dnn"><b>dev.to post</b></a>
</blockquote>
<p>Visit the <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.</p>
<p>The title is using utility class, but all other elements is using style component.</p>
<p>Just check <code>src/routes/index.svelte</code> to see the code.</p>

<Counter />
<Timer />

<style>
  p {
    @apply text-lg;
    @apply mt-0 mb-1;
  }
</style>
