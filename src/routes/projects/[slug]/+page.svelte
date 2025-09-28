<script>
  import { onMount } from "svelte";
  import { onNavigate } from "$app/navigation";
  import { utils, stagger } from "animejs";
  import Paragraph from "$lib/components/atoms/Paragraph.svelte";
  import { getContext } from "svelte";
  
  let { data } = $props();
  let item = data.items[0];

  let readingModeActive = $derived(getContext("readingModeActive"));

  let windowRef;
  let backRef;
  let titleRef;

  let refs = $state([]);

  const colours = ["#0000ff", "#ffff00"];

  const animationSpeed = 70;

  onMount(() => {
    let elements = refs;

    utils.set(elements, {
      opacity: 1,
      delay: stagger(animationSpeed),
    });
  });

  onNavigate((navigation) => {
    let elements = refs.reverse();

    return new Promise((resolve) => {
      utils.set(elements, {
        opacity: 0,
        delay: stagger(animationSpeed),
        onComplete: resolve,
      });
    });
  });
</script>

<svelte:window bind:this={windowRef} />

<div bind:this={refs[0]} class={["back-button", readingModeActive.value && "reading-mode"]}>
  <a href="/projects"> back to projects </a>
</div>

<div bind:this={refs[1]} class={["title", readingModeActive.value && "reading-mode"]}>
  <h1>{item.title}</h1>
</div>

<Paragraph bind:ref={refs[2]}>
  <img src={item.coverImage.url} alt={item.coverImage.description} />
</Paragraph>

{#each item.description.json.content as paragraph, i}
  <Paragraph
    bind:ref={refs[i + 3]}
    --bg={Math.random() < 0.5 ? colours[0] : colours[1]}
  >
    <p>{paragraph.content[0].value}</p>
  </Paragraph>
{/each}

<style>
  a,
  p,
  h1 {
    font-size: 1rem;
    color: #ffffff;
    mix-blend-mode: difference;
  }

  .back-button {
    --color: var(--green);
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 120px;
    width: max(200px, 20vw);
    background-color: var(--green);
    margin-left: 5vw;
    margin-top: 5vh;
    opacity: 0;
  }

  .title {
    --color: var(--red);
    height: fit-content;
    width: fit-content;
    position: absolute;
    top: 8vh;
    left: 13vw;
    background-color: var(--red);
    opacity: 0;
  }

  h1 {
    font-size: 1rem;
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
</style>
