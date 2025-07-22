<script>
  import DraggableBox from "$lib/components/atoms/DraggableBox.svelte";
  import { onMount } from "svelte";
  import { utils, stagger } from "animejs";
  import { onNavigate } from "$app/navigation";

  let refs = []
  let colors = ["#ffff00", "#00ff00", "#0000ff"]

  const animationSpeed = 100;

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

<DraggableBox
  bind:ref={refs[0]}
  element="section"
  --color="#ffff00"
  --width={`${Math.random() * 10 + 30}vw`}
  --height={`${Math.random() * 10 + 25}vh`}
  --align="end"
>
<p>21 May 2025</p>
  <a href="/blog/anchor-radio-inputs">css-only anchor() based radio selector animation</a>
</DraggableBox>

{#each [1,2,3,4,5,6,7,8,9,10] as i (i)}
  <DraggableBox
    bind:ref={refs[i]}
    element="section"
    --color={colors[(i % 3)]}
    --width={`${Math.random() * 10 + 30}vw`}
    --height={`${Math.random() * 10 + 25}vh`}
    --align="end"
  >
    <p>21 May 2025</p>
    <a href="/blog/anchor-radio-inputs">test {i}</a>
  </DraggableBox>
{/each}

<style>
  a {
    font-size: 1rem;
    color: #ffffff;
    mix-blend-mode: difference;
  }
</style>