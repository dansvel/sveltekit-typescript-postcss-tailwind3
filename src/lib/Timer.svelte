<script lang="ts">
  import { onMount } from 'svelte'

  let timer = 0
  let seconds: string
  let minutes: string

  onMount(() => count())

  const count = () => {
    timer++
    setTimeout(count, 1000)
  }

  const pad = (val: number) => {
    let res = val.toString()
    return res.length < 2 ? '0' + res : res
  }
  $: {
    seconds = pad(timer % 60)
    minutes = pad(Math.floor(timer / 60))
  }
</script>

<p>You open this page for: {minutes} minutes {seconds} seconds.</p>

<style lang="postcss">
  p {
    @apply font-mono;
  }
</style>
