<script>
  import DraggableBox from "$lib/components/atoms/DraggableBox.svelte";
  import ProjectCard from "$lib/components/molecules/ProjectCard.svelte";
  import { onMount } from "svelte";
  import { utils, stagger } from "animejs";
  import { onNavigate } from "$app/navigation";

  let refs = []
  let colors = ["#ffff00", "#00ff00", "#0000ff", "#ff0000"]

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
  x={9}
  y={15}
  --color="#00ff00"
  --width={`${Math.random() * 3 + 20}vw`}
  --height={`${Math.random() * 2 + 15}vh`}
  --align="end"
>
  <a href="/">back to home</a>
</DraggableBox>

{#each [1,2,3,4,5,6,7,8,9,10] as i (i)}
  <ProjectCard
    bind:ref={refs[i]}
    element="section"
    color={colors[(i % colors.length)]}
    title={`Project ${i}`}
    link={`/projects/${i}`}
  >
    <p>21 May 2025</p>
    <a href={`/projects/${i}`}>test {i}</a>
  </ProjectCard>
{/each}

<style>
  a {
    font-size: 1rem;
    color: #ffffff;
    mix-blend-mode: difference;
  }
</style>