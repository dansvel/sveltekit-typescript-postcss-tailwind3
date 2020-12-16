<script lang="ts">
  import { preferences } from './store'
  import Counter from '$components/Counter.svelte'
  import Timer from '$components/Timer.svelte'
  import {onMount} from 'svelte';

  $: {
    if ($preferences.theme !== 'dark') {
      document.querySelector('html').classList.remove('dark')
    } else {
      document.querySelector('html').classList.add('dark')
    }
  }
</script>

<div>
  <h1 class="text-5xl font-extrabold">Hello {$preferences.theme} world!</h1>

  <button on:click={() => $preferences.theme = $preferences.theme === 'dark' ? 'light' : 'dark'}>
    Toggle Theme
  </button>

  <article>
    <p>Visit the <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.</p>
    <p>The title is use inline style utility class, but all other elements is using style component.</p>
    <p>Just check <b>`src/routes/index.svelte`</b> to see the code.</p>
  </article>

  <Counter/>
  <Timer/>
</div>

<style lang="postcss">
  div {
    @apply text-center;
  }
  button {
    @apply text-xl py-2 px-8 rounded border border-gray-500;
    @apply hover:bg-gray-500 hover:shadow-md;
    @apply focus:outline-none;
  }
  a {
    @apply text-indigo-600 dark:text-indigo-400;
    &:hover {
      @apply text-indigo-500 underline;
    }
  }
  * + * {
    @apply mb-0 mt-4;
  }
</style>

