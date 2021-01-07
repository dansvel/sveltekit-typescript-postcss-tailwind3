<script>
  import { preferences } from './store'

  import Counter from "../components/Counter.svelte";
  import Timer from "../components/Timer.svelte";
  import {onMount, tick} from "svelte";

  onMount(() => {
    if ($preferences.theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    }
  })

  // you can replace this function to navbar or else
  const toggleTheme = (e) => {
    $preferences.theme = $preferences.theme === 'dark' ? 'light' : 'dark';

    document.querySelector('html').classList.toggle('dark');
  };
</script>

<div>
  <article>
    <h1 class="text-5xl font-extrabold mb-4">Hello {$preferences.theme} world!</h1>

    <button on:click={toggleTheme}>
      Toggle Theme
    </button>

    <p>Visit the <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.</p>
    <p>The title is using utility class, but all other elements is using style component.</p>
    <p>Just check <code>src/routes/index.svelte</code> to see the code.</p>
  </article>

  <Counter/>
  <Timer/>
</div>

<style lang="postcss">
  div {
    @apply text-center;
  }
  p {
    @apply mt-0 mb-2;
  }
  a {
    @apply text-indigo-600 hover:underline;
  }
</style>