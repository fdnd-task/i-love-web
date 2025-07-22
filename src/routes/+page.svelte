<script>
  import DraggableBox from "$lib/components/atoms/DraggableBox.svelte";
  import { stagger, utils } from "animejs";
  import { onMount } from "svelte";
  import { onNavigate } from "$app/navigation";

  let headerRef;
  let sectionRef;
  let projectsRef;
  let blogRef;

  const animationSpeed = 100;

  onMount(() => {
    let elements = [headerRef, sectionRef, projectsRef, blogRef];

    utils.set(elements, {
      opacity: 1,
      delay: stagger(animationSpeed),
    });
  });

  onNavigate((navigation) => {
    let elements = [blogRef, projectsRef, sectionRef, headerRef];

    return new Promise((resolve) => {
      utils.set(elements, {
        opacity: 0,
        delay: stagger(animationSpeed),
        onComplete: resolve,
      });
    });
  });
</script>

<!-- Fallback for when Javascript is disabled, and for people who have trouble with the colour constrasts -->
<div class="fallback">
  <h1>robin van der heijden</h1>
  <h2>creative frontend developer</h2>
  <a href="/projects">projects</a>
  <a href="/blog">blog</a>
</div>

<DraggableBox
  bind:ref={headerRef}
  element="header"
  --color="#0000ff"
  --width={`${Math.random() * 60 + 5}vw`}
  --height={`${Math.random() * 60 + 5}vh`}
  --align="start"
>
  <h1>robin van der heijden</h1>
</DraggableBox>

<DraggableBox
  bind:ref={sectionRef}
  element="section"
  --color="#ff0000"
  --width={`${Math.random() * 60 + 5}vw`}
  --height={`${Math.random() * 60 + 5}vh`}
  --align="start"
>
  <h2>creative frontend developer</h2>
</DraggableBox>

<DraggableBox
  bind:ref={projectsRef}
  element="section"
  --color="#ffff00"
  --width={`${Math.random() * 60 + 5}vw`}
  --height={`${Math.random() * 60 + 5}vh`}
  --align="end"
>
  <a href="/projects">projects</a>
</DraggableBox>

<DraggableBox
  bind:ref={blogRef}
  element="section"
  --color="#00ff00"
  --width={`${Math.random() * 60 + 5}vw`}
  --height={`${Math.random() * 60 + 5}vh`}
  --align="end"
>
  <a href="/blog">blog</a>
</DraggableBox>

<style>
  h1,
  h2,
  a {
    font-size: 1rem;
    color: #ffffff;
    mix-blend-mode: difference;
  }

  .fallback a,
  .fallback h1,
  .fallback h2 {
    color: #000000;
  }

  .fallback a:hover {
    color: #7a71eb;
  }

  /* :global(body) {
    filter: contrast(50);
  } */
</style>
