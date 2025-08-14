<script>
  import DraggableBox from "$lib/components/atoms/DraggableBox.svelte";

  let {
    ref = $bindable(),
    title = "Project title",
    link = "https://www.google.com",
    image = "",
    color = "#000000",
  } = $props();
</script>


<DraggableBox
  bind:ref={ref}
  element="section"
  --direction="column"
  --color={color}
  --width={`${Math.random() * 10 + 30}vw`}
  --height={`${Math.random() * 10 + 25}vh`}
  --align="end"
>
  <img src={image} alt={title} />
  <a href={link}>{title}</a>
</DraggableBox>

<style>
  a {
    font-size: 1rem;
    color: #ffffff;
    mix-blend-mode: difference;
    contain: none;
    background-color: #000000;
  }

  img {
    width: 100%;
    height: auto;
  }
</style>