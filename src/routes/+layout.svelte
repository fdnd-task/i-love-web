<script>
  import ReaderModeToggle from "$lib/components/molecules/ReaderModeToggle.svelte";

  let { children } = $props();
  let readerMode = $state(false);
</script>

<ReaderModeToggle bind:readerMode />
{@render children()}


<style>
</style>
