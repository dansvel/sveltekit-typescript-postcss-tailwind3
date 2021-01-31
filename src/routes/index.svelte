<script>
  import { theme } from './store';
  import ToggleTheme from '../components/ToggleTheme.svelte';
  import Counter from '../components/Counter.svelte';
  import Timer from '../components/Timer.svelte';
</script>

<div>
  <h1 class="text-5xl font-extrabold mb-4">Hello {$theme} world!</h1>

  <ToggleTheme />

  <blockquote class="text-xl p-2 bg-gray-200 dark:bg-gray-800 mb-2">
    For more information, check <a href="https://github.com/dansvel/sveltekit-typescript-postcss-tailwind2"
      ><b>Github repo</b></a>
    or <a href="https://dev.to/dansvel/sveltekit-svelte-next-with-tailwind-2-4dnn"><b>dev.to post</b></a>
  </blockquote>
  <p>Visit the <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.</p>
  <p>The title is using utility class, but all other elements is using style component.</p>
  <p>Just check <code>src/routes/index.svelte</code> to see the code.</p>

  <Counter />
  <Timer />
</div>

<style>
  div {
    @apply text-center;
  }
  p {
    @apply text-lg;
    @apply mt-0 mb-1;
  }
</style>
