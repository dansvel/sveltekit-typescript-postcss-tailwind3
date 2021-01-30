<script>
  import { theme } from './store'

  import Counter from '../components/Counter.svelte';
  import Timer from '../components/Timer.svelte';
  import {onMount} from 'svelte';

  onMount(() => {
    if ($theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    }
  })

  // you can move this function to navbar or else
  const toggleTheme = (e) => {
    $theme = $theme === 'dark' ? 'light' : 'dark';

    document.querySelector('html').classList.toggle('dark');
  };
</script>

<div>
  <article>
    <h1 class='text-5xl font-extrabold mb-4'>Hello {$theme} world!</h1>

    <button on:click={toggleTheme}>
      Toggle Theme
    </button>

    <h3 class="text-2xl py-2">For more information, check <a href="https://github.com/dansvel/sveltekit-typescript-postcss-tailwind2"><b>Github repo</b></a>
      or <a href="https://dev.to/dansvel/sveltekit-svelte-next-with-tailwind-2-4dnn"><b>dev.to post</b></a></h3>
    <p>The title is using utility class, but all other elements is using style component.</p>
    <p>Just check <code>src/routes/index.svelte</code> to see the code.</p>

    <p></p>
  </article>

  <Counter/>
  <Timer/>


</div>

<style lang='postcss'>
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
