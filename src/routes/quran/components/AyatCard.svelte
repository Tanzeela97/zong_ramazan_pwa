<script lang="ts">
  export let data: any[];
</script>

<div class="card card-bordered bg-green-100 border-gray-700">
  <div class="card-body">
    {#each data as ayat}
      {#if ayat.lang == "AR"}
        <h2 class="text-4xl p-1" dir="rtl">{ayat?.qtext}</h2>
      {/if}
      {#if ayat.lang == "UR"}
        <p class="text-2xl p-1" dir="rtl">{ayat?.qtext}</p>
      {/if}

      {#if ayat.lang == "EN"}
        <p class="text-2xl p-1">{ayat?.qtext}</p>
      {/if}
    {/each}
    <p class="text-md text-start">{data[0]?.surah}:{data[0]?.ayat}</p>
  </div>
</div>
