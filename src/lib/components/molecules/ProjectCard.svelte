<script>
  import DraggableBox from "$lib/components/atoms/DraggableBox.svelte";

  let {
    ref = $bindable(),
    title = "Project title",
    link = "https://www.google.com",
    color = "#000000",
  } = $props();
</script>


<DraggableBox
  bind:ref={ref}
  element="section"
  --color={color}
  --width={`${Math.random() * 10 + 30}vw`}
  --height={`${Math.random() * 10 + 25}vh`}
  --align="end"
>
  <p>{title}</p>
  <a href={link}>{link}</a>
</DraggableBox>