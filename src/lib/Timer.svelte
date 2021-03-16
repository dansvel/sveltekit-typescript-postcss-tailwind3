<script lang="ts">
  import { onMount } from 'svelte';

  let timer = 0;
  let seconds;
  let minutes;

  onMount(() => count());

  const count = () => {
    timer++;
    setTimeout(count, 1000);
  };

  const pad = (val) => (val > 9 ? val : '0' + val);
  $: {
    seconds = pad(timer % 60);
    minutes = pad(Math.floor(timer / 60));
  }
</script>

<p>You open this page for: {minutes} minutes {seconds} seconds.</p>

<style lang="postcss">
  p {
    @apply font-mono;
  }
</style>
