<script lang="ts">
  import AyatCard from "./components/AyatCard.svelte";
  import MenuBar from "./components/MenuBar.svelte";
  export let data;
  const { ayats } = data;
</script>

<MenuBar />
<div class="flex">
  <ul class="text-end">
    {#each ayats as ayat}
      <li class="p-2">
        <AyatCard data={ayat} />
      </li>
    {/each}
  </ul>
</div>
