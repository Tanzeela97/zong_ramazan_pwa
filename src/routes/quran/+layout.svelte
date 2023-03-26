<script lang="ts">
  import Fa from "svelte-fa";
  import {
    faArrowDown19,
    faArrowDownShortWide,
  } from "@fortawesome/free-solid-svg-icons";
  import { QURAN_JUZ_LIST, QURAN_SURAH_LIST } from "../../assets/data/quran";
  import type { TQuranStatus } from "../../stores/quran";
  import { currentJuz, currentAyat } from "../../stores/quran";
  import { invalidate, invalidateAll } from "$app/navigation";

  async function handleSurahClick(surah: number) {
    // console.log("Surah selected:", surah);
    currentAyat.set({ surah: surah, ayat: 1 });
    invalidateAll();
  }

  $: currentAyat;
</script>

<div class="navbar rounded-box">
  <div class="flex-1 px-2 lg:flex-none">
    <div class="normal-case text-xl text-secondary font-bold">Al Quran</div>
  </div>
  <div class="flex justify-end flex-1 px-2">
    <div class="flex items-stretch">
      <div class="dropdown dropdown-end">
        <label
          tabindex="0"
          class="btn btn-outline btn-secondary text-secondary rounded-btn"
        >
          <span><Fa icon={faArrowDownShortWide} /></span>
          <span>
            {QURAN_SURAH_LIST[$currentAyat.surah - 1].name}
          </span></label
        >
        <ul
          tabindex="0"
          class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
        >
          {#each QURAN_SURAH_LIST as surah}
            <li class="bg-base-100 text-justify">
              <a on:click={() => handleSurahClick(surah.no)} href={null}
                >{surah.no} - {surah.name}</a
              >
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>
<slot />
