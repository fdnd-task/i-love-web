<script>
  import { createDraggable, animate, utils, engine } from "animejs";
  import { onMount } from "svelte";

  let {
    element = "div",
    class: className = "",
    children,
    ref = $bindable(),
    x = null,
    y = null,
  } = $props();

  let elementRef = $derived(ref);
  let bodyRef;
  let innerWidth = $state(0);
  let innerHeight = $state(0);
  let offsetWidth = $state(0);
  let offsetHeight = $state(0);


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
    <header bind:this={ref} bind:offsetWidth bind:offsetHeight style="opacity: 0;">
      {@render children()}
    </header>
  {:else if element === "footer"}
    <footer bind:this={ref} bind:offsetWidth bind:offsetHeight style="opacity: 0;">
      {@render children()}
    </footer>
  {:else if element === "section"}
    <section bind:this={ref} bind:offsetWidth bind:offsetHeight style="opacity: 0;">
      {@render children()}
    </section>
  {:else if element === "article"}
    <article bind:this={ref} bind:offsetWidth bind:offsetHeight style="opacity: 0;">
      {@render children()}
    </article>
  {:else if element === "main"}
    <main bind:this={ref} bind:offsetWidth bind:offsetHeight style="opacity: 0;">
      {@render children()}
    </main>
  {:else if element === "aside"}
    <aside bind:this={ref} bind:offsetWidth bind:offsetHeight style="opacity: 0;">
      {@render children()}
    </aside>
  {:else}
    <div bind:this={ref} bind:offsetWidth bind:offsetHeight style="opacity: 0;">
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
</style>
