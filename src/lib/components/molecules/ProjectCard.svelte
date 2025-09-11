<script>
  import DraggableBox from "$lib/components/atoms/DraggableBox.svelte";

  let {
    ref = $bindable(),
    title = "Project title",
    link = "https://www.google.com",
    liveURL = "https://www.google.com",
    image = "",
    color = "#000000",
  } = $props();
</script>


<DraggableBox
  bind:ref={ref}
  element="section"
  class="container-inline-size"
  --direction="column"
  --color={color}
  --width={`${Math.random() * 15 + 25}vw`}
  --height={"auto"}
  --align="end"
>
  <img src={image} alt={title} />
  <h2>{title}</h2>
  <div>
    <a href={liveURL}>Live site <span aria-hidden="true">→</span></a>
    <a href={link}>Details <span aria-hidden="true">→</span></a>
  </div>
</DraggableBox>

<style>
  a, h2 {
    font-size: 1rem;
    color: #ffffff;
    mix-blend-mode: difference;
    contain: none;
    background-color: #000000;
  }

  img {
    width: 100%;
    height: auto;
    pointer-events: none;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @container (width < 11rem) {
      flex-direction: column-reverse;
      gap: 0.75rem;
      align-items: flex-start;
      justify-content: flex-end;
    }
  }

  
</style>