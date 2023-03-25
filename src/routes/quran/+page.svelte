<script lang="ts">
  import AyatCard from "./components/AyatCard.svelte";
  import MenuBar from "./components/MenuBar.svelte";
  import { blur } from "svelte/transition";
  // import { quintOut } from "svelte/easing";

  export let data;
  const { ayats } = data;
</script>

<div
  class="container justify-items-center"
  transition:blur={{ delay: 300, amount: 30 }}
>
  <MenuBar />
  <ul>
    {#each ayats as ayat}
      <li class="p-2">
        <AyatCard data={ayat} />
      </li>
    {/each}
  </ul>
</div>
