<script lang="ts">
  import { QURAN_SURAH_LIST } from "../../assets/data/quran";

  import quranSvgDecoded from "../../assets/svg/quran_1.svg";
  const quranSvgEncoded = `data:image/svg+xml,${encodeURIComponent(
    quranSvgDecoded
  )}`;
</script>

<div>
  <ul>
    {#each QURAN_SURAH_LIST as surah}
      <li>
        <!-- <img src={quranSvgDecoded} /> -->
        <div>
          <a href={"/quran/" + surah.no}>
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              /></svg
            > -->
            <!-- <svg> -->
            <!-- <img src={quranSvgDecoded} /> -->
            {surah.no}
            <!-- </svg> -->

            -----{surah.name}</a
          >
        </div>
      </li>
    {/each}
  </ul>
</div>
