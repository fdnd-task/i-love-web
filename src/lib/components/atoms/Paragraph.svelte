<script>
  import { getContext } from "svelte";

  let {
    ref = $bindable(),
    children,
    maxWidth = "32rem",
    totalPadding = 20,
    scrollable = false,
  } = $props();

  let readingModeActive = $derived(getContext("readingModeActive"));

  const paddingLeft = Math.random() * totalPadding;
  const paddingRight = totalPadding - paddingLeft;
</script>

<div bind:this={ref} style={`width: min(calc(100% - ${totalPadding}vw), ${maxWidth}); margin: 1rem ${paddingRight}vw 0 ${paddingLeft}vw; ${scrollable ? "overflow-x: scroll;" : ""}`} class={[readingModeActive.value && "reading-mode"]}>
  {@render children()}
</div>

<style>
  div {
    height: fit-content;
    background-color: var(--bg);
    display: flex;
    line-height: 1.2;
    gap: 1.2rem;
    flex-direction: column;
    opacity: 0;
    position: relative;
  }

  .reading-mode {
    position: static !important;
    max-width: 32rem !important;
    width: calc(100% - 2rem) !important;
    transform: none !important;
    left: 0 !important;
    top: 0 !important;
    margin: 1rem !important;
    padding: 1rem !important;
    border: 1px solid #000000 !important;
    border-radius: 0 !important;
    height: fit-content !important;
    background-color: color(from var(--bg) srgb r g b / 0.1) !important;
    cursor: default !important;
    font-family: "Inter", sans-serif !important;
  }
</style>