<script>
  import { onMount } from "svelte";
  import { onNavigate } from "$app/navigation";
  import { utils, stagger } from "animejs";
  import Paragraph from "$lib/components/atoms/Paragraph.svelte";

  let { data } = $props()
  let item = data.items[0]

  console.log(item.description.json.content[0].content[0].value);

  let windowRef;
  let backRef;
  let titleRef;

  let refs = $state([])

  const colours = ["#0000ff", "#ffff00"]

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

<div class="back-button" bind:this={refs[0]}>
  <a href="/projects"> back to projects </a>
</div>

<div class="title" bind:this={refs[1]}>
  <h1>{item.title}</h1>
</div>

<Paragraph bind:ref={refs[2]}>
  <img src={item.coverImage.url} alt={item.coverImage.description} />
</Paragraph>

{#each item.description.json.content as paragraph, i}
  <Paragraph bind:ref={refs[i + 3]} --bg={Math.random() < 0.5 ? colours[0] : colours[1]}>
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
</style>
