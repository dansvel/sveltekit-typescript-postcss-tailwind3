<script lang="ts">
  let seconds, minutes, timer :number = 0

  setInterval(() => {
    timer++;
  }, 1000);

  $: {
    minutes = Math.floor(timer / 60)
    seconds = Math.floor(timer - minutes * 60)
  }
</script>

<p>You open this page for : {minutes} minute{minutes >= 1 ? 's' : ''} and {seconds} seconds.</p>