<script>
  import GlobalStyle from '$components/GlobalStyle.svelte'
</script>

<GlobalStyle/>
<main>
  <slot/>
</main>

<style lang="postcss">
  main {
    @apply px-8 py-16 mx-auto max-w-3xl;
  }
</style>