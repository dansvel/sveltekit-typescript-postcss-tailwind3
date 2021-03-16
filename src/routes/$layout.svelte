<script lang="ts">
  import {theme} from './store';
  import {onMount} from 'svelte';
  import GlobalStyle from '$lib/GlobalStyle.svelte';

  onMount(() => {
    if ($theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    }
  });
</script>

<GlobalStyle/>
<main>
  <slot />
</main>
