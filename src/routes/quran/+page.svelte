<script lang="ts">
  import AyatCard from "./components/AyatCard.svelte";
  export let data;
  const { ayats } = data;
</script>

<div class="navbar  bg-green-300">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">Al Quran</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabindex="0">
        <a>
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            ><path
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
            /></svg
          >
        </a>
        <ul class="p-2 bg-base-100">
          <li><a>Surah 1</a></li>
          <li><a>Surah 2</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<div class="flex">
  <ul class="text-end">
    {#each ayats as ayat}
      <li class="p-2">
        <AyatCard data={ayat} />
      </li>
    {/each}
  </ul>
</div>
