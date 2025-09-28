<script>
  let { readingModeActive = $bindable() } = $props();
</script>

<button onclick={() => (readingModeActive.value = !readingModeActive.value)} class={[readingModeActive.value && "active"]}>
  Reading mode
</button>

<style>
  button {
    background-color: #eeeeee;
    color: #000000;
    padding: 0.5rem 1rem;
    cursor: pointer;
    z-index: 999999;
    position: fixed;
    top: 1rem;
    right: 1rem;
    text-decoration: underline;
    border: 1px solid #000000;
  }

  button.active {
    background-color: #000000;
    color: #ffffff;
  }
</style>