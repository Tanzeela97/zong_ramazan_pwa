<script lang="ts">
  import AyatCard from "./components/AyatCard.svelte";
  import MenuBar from "./components/MenuBar.svelte";
  export let data;
  const { ayats } = data;
</script>

<div class="container">
  <MenuBar />
</div>
<div class="container justify-items-center mx-10 my-2">
  <ul>
    {#each ayats as ayat}
      <li class="p-2">
        <AyatCard data={ayat} />
      </li>
    {/each}
  </ul>
</div>
