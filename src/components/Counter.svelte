<script lang="ts">
	let count: number = 0

	const increment = () => {
		count += 1;
	};
</script>

<button on:click={increment}>
	Clicks: {count}
</button>

<style lang="postcss">
  button {
    @apply my-4 py-2 px-8 rounded border border-gray-500;
    @apply hover:bg-gray-500 hover:shadow-md;
    @apply focus:outline-none;
  }
</style>