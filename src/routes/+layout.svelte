<script>
  import { setContext } from "svelte";
  import ReaderModeToggle from "$lib/components/molecules/ReaderModeToggle.svelte";

  let { children } = $props();
  let readingModeActive = $state({ value: false });

  setContext("readingModeActive", readingModeActive);
</script>

<ReaderModeToggle bind:readingModeActive />
{@render children()}