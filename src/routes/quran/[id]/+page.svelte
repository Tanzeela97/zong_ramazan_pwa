<script lang="ts">
  import type { TSurah } from "../../../stores/store";

  export let data;
  const surah: TSurah[] = data.ayats;
  console.log("--------------surah", surah);
</script>

<div>
  {#each surah as sub}
    <!-- <div
    class="card w-96 border-gray-500 h-auto bg-gradient-to-r from-green-100 to-green-200"
  > -->
    {#each sub as ayat}
      <!-- <div class="card-body text-center"> -->
      {#if ayat.lang == "AR"}
        <h2 class="text-4xl p-1" dir="rtl">{ayat?.qtext}</h2>
      {/if}

      {#if ayat.lang == "UR"}
        <p class="text-1xl p-1" dir="rtl">{ayat?.qtext}</p>
      {/if}

      <!-- {#if ayat.lang == "EN"}
          <p class="text-1xl p-1" dir="ltr">{ayat?.qtext}</p>
        {/if} -->
      <!-- </div> -->
    {/each}
    <!-- </div> -->
  {/each}
  <!-- <p class="text-md">{surah[0]?.surah}:{surah[0]?.ayat}</p> -->
</div>
