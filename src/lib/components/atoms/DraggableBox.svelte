<script>
  import { createDraggable, animate, utils, engine } from "animejs";
  import { onMount } from "svelte";
  import { getContext } from "svelte";

  let {
    element = "div",
    class: className = "",
    children,
    ref = $bindable(),
    x = null,
    y = null,
    container = null,
  } = $props();

  let elementRef = $derived(ref);
  let bodyRef;
  let innerWidth = $state(0);
  let innerHeight = $state(0);
  let offsetWidth = $state(0);
  let offsetHeight = $state(0);

  let readingModeActive = $derived(getContext("readingModeActive"));

  onMount(() => {
    engine.precision = 0;

    if (x && y) {
      utils.set(elementRef, {
        left: x,
        top: y,
      });
    } else if (x && y === null) {
      utils.set(elementRef, {
        left: x,
        top: Math.random() * innerHeight - offsetHeight,
      });
    } else if (x === null && y) {
      utils.set(elementRef, {
        left: Math.random() * innerWidth - offsetWidth,
        top: y,
      });
    } else {
      utils.set(elementRef, {
        left: Math.random() * innerWidth - offsetWidth,
        top: Math.random() * innerHeight - offsetHeight,
      });
    }

    createDraggable(elementRef, {
      container: bodyRef,
    });
  });
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<svelte:body bind:this={bodyRef} />

  {#if element === "header"}
    <header bind:this={ref} bind:offsetWidth bind:offsetHeight style="opacity: 0;" class={[className, readingModeActive.value && "reading-mode"]}>
      {@render children()}
    </header>
  {:else if element === "footer"}
    <footer bind:this={ref} bind:offsetWidth bind:offsetHeight style="opacity: 0;" class={[className, readingModeActive.value && "reading-mode"]}>
      {@render children()}
    </footer>
  {:else if element === "section"}
    <section bind:this={ref} bind:offsetWidth bind:offsetHeight style="opacity: 0;" class={[className, readingModeActive.value && "reading-mode"]}>
      {@render children()}
    </section>
  {:else if element === "article"}
    <article bind:this={ref} bind:offsetWidth bind:offsetHeight style="opacity: 0;" class={[className, readingModeActive.value && "reading-mode"]}>
      {@render children()}
    </article>
  {:else if element === "main"}
    <main bind:this={ref} bind:offsetWidth bind:offsetHeight style="opacity: 0;" class={[className, readingModeActive.value && "reading-mode"]}>
      {@render children()}
    </main>
  {:else if element === "aside"}
    <aside bind:this={ref} bind:offsetWidth bind:offsetHeight style="opacity: 0;" class={[className, readingModeActive.value && "reading-mode"]}>
      {@render children()}
    </aside>
  {:else}
    <div bind:this={ref} bind:offsetWidth bind:offsetHeight style="opacity: 0;" class={[className, readingModeActive.value && "reading-mode"]}>
      {@render children()}
    </div>
{/if}

<style>
  :root {
    --align: start;
    --direction: row;
  }

  div, header, footer, section, article, main, aside {
    position: absolute;
    display: flex;
    flex-direction: var(--direction);
    gap: 1rem;
    align-items: var(--align);
    justify-content: var(--align);
    background-color: var(--color);
    width: var(--width);
    height: var(--height);
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
    background-color: color(from var(--color) srgb r g b / 0.1) !important;
    cursor: default !important;
    font-family: "Inter", sans-serif !important;
  }

  .container-inline-size {
    container-type: inline-size;
  }

  .container-size {
    container-type: size;
  }

  .container-normal {
    container-type: normal;
  }
</style>
