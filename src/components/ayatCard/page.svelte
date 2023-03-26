<script lang="ts">
  export let data: any[];
</script>

<div
  class="card w-96 border-gray-500 h-auto bg-gradient-to-r from-green-100 to-green-200"
>
  <div class="card-body text-center">
    {#each data as ayat}
      {#if ayat.lang == "AR"}
        <h2 class="text-4xl p-1" dir="rtl">{ayat?.qtext}</h2>
      {/if}

      {#if ayat.lang == "UR"}
        <p class="text-1xl p-1" dir="rtl">{ayat?.qtext}</p>
      {/if}

      <!-- {#if ayat.lang == "EN"}
        <p class="text-1xl p-1" dir="ltr">{ayat?.qtext}</p>
      {/if} -->
    {/each}
    <p class="text-md">{data[0]?.surah}:{data[0]?.ayat}</p>
  </div>
</div>
