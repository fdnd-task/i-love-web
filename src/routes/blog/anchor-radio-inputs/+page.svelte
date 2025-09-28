<script>
  import { onMount } from "svelte";
  import { onNavigate } from "$app/navigation";
  import { utils, stagger } from "animejs";

  // THIS PAGE IS ENTIRELY A PLACEHOLDER AND WILL BE REPLACED WITH A DYNAMIC PAGE LATER
  // It was built in a couple hours for an assignment. Not indicative of the usual level of my work.

  import Paragraph from "$lib/components/atoms/Paragraph.svelte";
  import AnchorDemo1 from "$lib/components/atoms/AnchorDemo1.svelte";
  import AnchorDemo2 from "$lib/components/atoms/AnchorDemo2.svelte";
  import AnchorDemo3 from "$lib/components/atoms/AnchorDemo3.svelte";
  import AnchorDemo4 from "$lib/components/atoms/AnchorDemo4.svelte";
  import AnchorDemo5 from "$lib/components/atoms/AnchorDemo5.svelte";
  import AnchorDemoNav from "$lib/components/atoms/AnchorDemoNav.svelte";
  import AnchorDemoList from "$lib/components/atoms/AnchorDemoList.svelte";
  import AnchorDemoGrid from "$lib/components/atoms/AnchorDemoGrid.svelte";

  let supported = $state(false);

  let windowRef;
  let backRef;
  let titleRef;
  let blockRef1;
  let blockRef2;
  let blockRef3;
  let blockRef4;
  let blockRef5;
  let blockRef6;
  let blockRef7;
  let blockRef8;
  let blockRef9;
  let blockRef10;
  let blockRef11;
  let blockRef12;
  let blockRef13;
  let blockRef14;
  let blockRef15;
  let blockRef16;
  let blockRef17;
  let blockRef18;
  let blockRef19;
  let blockRef20;
  let blockRef21;
  let blockRef22;
  let blockRef23;
  let blockRef24;

  const animationSpeed = 70;

  onMount(() => {
    supported = windowRef.CSS.supports("position-anchor: --my-anchor");

    let elements = [
      backRef,
      titleRef,
      blockRef1,
      blockRef2,
      blockRef3,
      blockRef4,
      blockRef5,
      blockRef6,
      blockRef7,
      blockRef8,
      blockRef9,
      blockRef10,
      blockRef11,
      blockRef12,
      blockRef13,
      blockRef14,
      blockRef15,
      blockRef16,
      blockRef17,
      blockRef18,
      blockRef19,
      blockRef20,
      blockRef21,
      blockRef22,
      blockRef23,
      blockRef24,
    ];

    utils.set(elements, {
      opacity: 1,
      delay: stagger(animationSpeed),
    });

    $effect(() => {
    if (supported) {
      utils.set(blockRef1, {
        opacity: 1,
      });
    }
  });
  });

  onNavigate((navigation) => {
    let elements = [
      backRef,
      titleRef,
      blockRef1,
      blockRef2,
      blockRef3,
      blockRef4,
      blockRef5,
      blockRef6,
      blockRef7,
      blockRef8,
      blockRef9,
      blockRef10,
      blockRef11,
      blockRef12,
      blockRef13,
      blockRef14,
      blockRef15,
      blockRef16,
      blockRef17,
      blockRef18,
      blockRef19,
      blockRef20,
      blockRef21,
      blockRef22,
      blockRef23,
      blockRef24,
    ];

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

<div class="back-button" bind:this={backRef}>
  <a href="/blog"> back to blog </a>
</div>

<div class="title" bind:this={titleRef}>
  <h1>css-only anchor() based radio selector animation</h1>
</div>

{#if !supported}
  <Paragraph bind:ref={blockRef1} --bg="var(--red)">
    <h2>
      Your browser doesn't support the anchor positioning API! Demos on this
      page will not work properly.
    </h2>
  </Paragraph>
{/if}

<Paragraph bind:ref={blockRef2} --bg="var(--blue)">
  <p>
    Trying to use the new anchor positioning in CSS can be a little intimidating
    at first. Once you do grasp the basics of it however, it's a very versatile
    and powerful attribute.
  </p>
  <p>
    It allows us to position an element relative to another element no matter
    where it is in the viewport, which is mostly meant for hovering elements
    like tooltips.
  </p>
  <p>
    However, with a little bit of creativity, it can be used to create some
    really interesting effects which previously were not possible without
    Javascript.
  </p>
  <p>
    One of the main things which makes it so useful, is that the anchor which an
    element is bound to can be transitioned between. This allows us to easily
    transition the position of one element to that of another.
  </p>
  <p>
    One of the first things I wanted to try with this approach, was to create a
    radio selector with a moving indicator:
  </p>
</Paragraph>

<AnchorDemo1 bind:ref={blockRef3} />

<Paragraph bind:ref={blockRef4} --bg="var(--yellow)">
  <p>
    The anchor positioning API has quite a lot of features, but the most
    important ones for this demo are the following:
  </p>

  <ul>
    <li>
      <p>
        <span class="highlight">position-anchor</span> &
        <span class="highlight">anchor-name</span>, which lets us bind one
        element to another (the anchor).
      </p>
    </li>
    <li>
      <p>
        <span class="highlight">anchor()</span>, which lets us access different
        properties of the anchor, and use them in attributes on the bound
        element.
      </p>
    </li>
  </ul>
</Paragraph>

<Paragraph bind:ref={blockRef5} --bg="var(--green)">
  <p>
    First things first; let's set up our radio inputs by creating a label for
    each option, and putting the input elements inside of them. We want to hide
    the original circle indicator, since we'll be using our own custom indicator
    instead, which we'll do by simply applying <span class="highlight"
      >display: none</span
    >
    to the inputs.
  </p>
  <p>
    We'll also need to make an element to be our indicator. For the sake of this
    demo, I've chosen to just make it an empty div.
  </p>
  <p>With this in place, our HTML should look something like this:</p>
</Paragraph>

<Paragraph bind:ref={blockRef6} scrollable={true} --bg="var(--blue)">
  <pre>
&#x3C;span&#x3E;What's your favourite color?&#x3C;/span&#x3E;
&#x3C;div class=&#x22;radio-container&#x22;&#x3E;
  &#x3C;label for=&#x22;green&#x22;&#x3E;
    &#x3C;input type=&#x22;radio&#x22; name=&#x22;demo1&#x22; id=&#x22;green&#x22; checked /&#x3E;
    Green
  &#x3C;/label&#x3E;
  &#x3C;label for=&#x22;blue&#x22;&#x3E;
    &#x3C;input type=&#x22;radio&#x22; name=&#x22;demo1&#x22; id=&#x22;blue&#x22; /&#x3E;
    Blue
  &#x3C;/label&#x3E;
  &#x3C;label for=&#x22;yellow&#x22;&#x3E;
    &#x3C;input type=&#x22;radio&#x22; name=&#x22;demo1&#x22; id=&#x22;yellow&#x22; /&#x3E;
    Yellow
  &#x3C;/label&#x3E;
  &#x3C;div class=&#x22;highlight&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;</pre>
</Paragraph>

<Paragraph bind:ref={blockRef7} --bg="var(--green)">
  <p>While our CSS should look something like this:</p>
</Paragraph>

<Paragraph bind:ref={blockRef8} scrollable={true} --bg="var(--blue)">
  <pre>
span {"{"}
  margin-bottom: 1.2rem;
{"}"}

.radio-container {"{"}
  display: flex;
  gap: 1rem;
{"}"}

label, span {"{"}
  padding: 0.2rem 0.5rem;
  cursor: pointer;
{"}"}

input {"{"}
  display: none;
{"}"}</pre>
</Paragraph>

<Paragraph bind:ref={blockRef9} --bg="var(--yellow)">
  <p>
    This gives us some nice basic styling to build upon, but you'll notice that
    nothing happens yet when we click on the radio inputs:
  </p>
</Paragraph>

<AnchorDemo2 bind:ref={blockRef10} />

<Paragraph bind:ref={blockRef11} --bg="var(--green)">
  <p>
    To make it interactive, we'll now be using the anchor positioning API to
    anchor the position of our indicator element to the position of whichever
    radio input is currently checked.
  </p>
  <p>
    The first step is establishing a link between the indicator element and the
    checked radio input, which is actually very simple.
  </p>
  <p>
    First, we add the <span class="highlight">position-anchor</span> attribute
    to the indicator element. This tells our indicator to bind to whatever
    element we specify. Do note that this needs to be a
    <a
      class="highlight"
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/dashed-ident"
      >{"<dashed-indent>"}</a
    >, which you've probably seen before when using custom properties. Something
    like <span class="highlight">--my-anchor</span> should work for now.
  </p>
  <p>
    Next, we add the <span class="highlight">anchor-name</span> attribute to
    whatever input is currently checked by utilising the
    <span class="highlight">:checked</span> selector. We'll want to set this one
    to <span class="highlight">--my-anchor</span> also.
  </p>
</Paragraph>

<Paragraph bind:ref={blockRef12} --bg="var(--yellow)">
  <p>
    Now that our elements are linked, we can use the <span class="highlight"
      >anchor()</span
    > function to access the checked radio input's position.
  </p>
  <p>
    We'll simply have to add the <span class="highlight"
      >position: absolute</span
    >
    to our indicator element, and set the <span class="highlight">top</span> and
    <span class="highlight">left</span>
    properties to values we read from <span class="highlight">anchor()</span> function.
  </p>
  <p>
    The <span class="highlight">anchor()</span> function actually lets us read
    several different properties, like <span class="highlight">top</span>,
    <span class="highlight">left</span>, <span class="highlight">right</span>,
    <span class="highlight">bottom</span>
    and <span class="highlight">center</span>.
  </p>
  <p>
    In our case, since we want the highlight element to be in the exact same
    position as the label, we'll simply want to add <span class="highlight"
      >top: anchor(top);</span
    >
    and <span class="highlight">left: anchor(left);</span> to our indicator element.
  </p>
  <p>
    We'll also want to add a <span class="highlight">width</span> and
    <span class="highlight">height</span>
    to our indicator element, so that it's visible. This we will also read from the
    anchor, using the <span class="highlight">anchor-size()</span> function.
  </p>
  <p>
    Simply adding <span class="highlight">width: anchor-size(width);</span> and
    <span class="highlight">height: anchor-size(height);</span> to our indicator
    element will give us a highlight element which is always the same size as the
    label.
  </p>
  <p>
    Finally, we'll want to make sure that the highlight is actually behind the
    label, so we'll be adding <span class="highlight">z-index: 1;</span> to our label
    element.
  </p>
  <p>Let's add this to our CSS:</p>
</Paragraph>

<Paragraph bind:ref={blockRef13} scrollable={true} --bg="var(--blue)">
  <pre>
.highlight {"{"}
  position: absolute;
  left: anchor(left);
  top: anchor(top);
  width: anchor-size(width);
  height: anchor-size(height);
  position-anchor: --my-anchor;
  background-color: #00ff00;
{"}"}

label:has(input:checked) {"{"}
  anchor-name: --my-anchor;
{"}"}

label, span {"{"}
  z-index: 1;
{"}"}</pre>
</Paragraph>

<AnchorDemo3 bind:ref={blockRef14} />

<Paragraph bind:ref={blockRef15} --bg="var(--green)">
  <p>It works! Great!</p>
  <p>
    Now let's make it a little more interesting by adding a transition to the
    highlight element, and also transitioning the colour based on the option
    selected.
  </p>
  <p>
    To start with, let's add a <span class="highlight">transition</span> to our
    highlight element, so that it animates smoothly when the radio input is
    checked. Something like
    <span class="highlight">transition: 0.3s ease-in-out;</span> should do the trick.
  </p>
  <p>
    Then, let's add a new custom property to our container element, which will
    be our current highlight colour. We'll call this <span class="highlight"
      >--highlight-color</span
    >, and set it to <span class="highlight">#00ff00</span>initially.
  </p>
  <p>
    Next, we'll want to add some selectors to our CSS which will change this
    custom property based on the option selected. This is slightly more complex
    than it seems, since we want to change the property on the container, and
    not on the labels.
  </p>
  <p>
    For this, we'll be using the <span class="highlight">:has</span> selector,
    to check whether container has a label in it which has a checked input as
    its first child. We'll want to have a different selector for each option,
    which should look something like
    <span class="highlight"
      >.radio-container:has(label:nth-of-type(3) > input:checked)</span
    >, changing the <span class="highlight">--highlight-color</span> property to
    to whatever colour is associated with this label.
  </p>
  <p>
    And finally, we'll want to add a <span class="highlight"
      >background-color</span
    >
    to our highlight element to
    <span class="highlight">var(--highlight-color);</span>
  </p>
  <p>Adding this to our CSS should look something like this:</p>
</Paragraph>

<Paragraph bind:ref={blockRef16} scrollable={true} --bg="var(--blue)">
  <pre>
.radio-container {"{"}
  --highlight-color: transparent;
{"}"}

.highlight {"{"}
  background-color: var(--highlight-color);
  transition: 0.3s ease-in-out;
{"}"}

.radio-container:has(label:nth-of-type(1) > input:checked) {"{"}
  --highlight-color: #00ff00; /* Green */
{"}"}

.radio-container:has(label:nth-of-type(2) > input:checked) {"{"}
  --highlight-color: #0000ff; /* Blue */
{"}"}

.radio-container:has(label:nth-of-type(3) > input:checked) {"{"}
  --highlight-color: #ffff00; /* Yellow */
{"}"}

  </pre>
</Paragraph>

<AnchorDemo4 bind:ref={blockRef17} />

<Paragraph bind:ref={blockRef18} --bg="var(--yellow)">
  <p>
    Works great! But, we're forgetting something... what happens if the browser
    doesn't support the anchor positioning API?
  </p>
  <p>
    Well, not much of anything. And that's a problem! There'll no indication for
    the user on what the currently active input is!
  </p>
  <p>
    To fix this, we'll need to add a fallback for the anchor positioning API
    using the <span class="highlight">@supports</span> rule.
  </p>
  <p>
    Let's make it so that if the browser doesn't support the anchor positioning
    API, we'll just change the background colour of whatever the active input is
    and make the highlight element invisible.
  </p>
  <p>
    We can do this by first adding some selectors to our CSS which will change
    the background colour of the active input and make the highlight element
    invisible, and then, after checking whether the browser supports the anchor
    positioning API, we'll add a <span class="highlight">@supports</span> rule which
    will change the background colour back to the default, and make the highlight
    visible!
  </p>
  <p>
    We'll want to replace our previous <span class="highlight"
      >.radio-container:has(label:nth-of-type(n) > input:checked)</span
    > selectors with the following:
  </p>
</Paragraph>

<Paragraph bind:ref={blockRef19} scrollable={true} --bg="var(--blue)">
  <pre>
label:nth-of-type(1):has(input:checked) {"{"}
  background-color: var(--green);
{"}"}
    
label:nth-of-type(2):has(input:checked) {"{"}
  background-color: var(--blue);
{"}"}
    
label:nth-of-type(3):has(input:checked) {"{"}
  background-color: var(--yellow);
{"}"}
    
@supports (position-anchor: --demo1-anchor) {"{"}
  .radio-container:has(label:nth-of-type(1) > input:checked) {"{"}
    --highlight-color: var(--green);
  {"}"}
    
  .radio-container:has(label:nth-of-type(2) > input:checked) {"{"}
    --highlight-color: var(--blue);
  {"}"}
    
  .radio-container:has(label:nth-of-type(3) > input:checked) {"{"}
    --highlight-color: var(--yellow);
  {"}"}
    
  label:nth-of-type(1):has(input:checked) {"{"}
    background-color: transparent;
  {"}"}
    
  label:nth-of-type(2):has(input:checked) {"{"}
    background-color: transparent;
  {"}"}
    
  label:nth-of-type(3):has(input:checked) {"{"}
    background-color: transparent;
  {"}"}
{"}"}</pre>
</Paragraph>

<AnchorDemo5 bind:ref={blockRef20} />

<Paragraph bind:ref={blockRef21} --bg="var(--green)">
  <p>
    And there it is! A smooth, elegant, colour changing radio selector with a
    moving highlight element.
  </p>
  <p>
    This is a pretty simple example, but it shows the power of the anchor
    positioning API, and how it can be used to create some really interesting
    effects.
  </p>
  <p>
    I've also made a <a href="https://codepen.io/robin1224/pen/zxxgGbx"
      >codepen</a
    > of this, so you can play around with it and see how it works.
  </p>
  <p>
    Here's a couple more demos to get some more inspiration on what can be done
    with the anchor positioning API, feel free to look around the code in the
    codepens, and make sure to experiment with it yourself!
  </p>
</Paragraph>

<AnchorDemoNav bind:ref={blockRef22} />

<AnchorDemoList bind:ref={blockRef23} />

<AnchorDemoGrid bind:ref={blockRef24} />

<style>
  a,
  p,
  h1,
  pre {
    font-size: 1rem;
    color: #ffffff;
    mix-blend-mode: difference;
  }

  h2 {
    color: #ffffff;
    mix-blend-mode: difference;
  }

  span {
    display: inline;
    width: fit-content;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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

  .highlight {
    background-color: var(--red);
  }
</style>
