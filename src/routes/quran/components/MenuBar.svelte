<script lang="ts">
  import Fa from "svelte-fa";
  import {
    faArrowDown,
    faArrowDownShortWide,
  } from "@fortawesome/free-solid-svg-icons";

  import { QURAN_JUZ_LIST, QURAN_SURAH_LIST } from "../../../assets/data/quran";

  import type { TSurah } from "../../../assets/data/quran";

  const handleClick = (e: any) => {
    console.log("Button clicked");
    console.log(e);
  };
  //   selectedCity.set({
  //     name: selectCity.name,
  //     location: selectCity.location,
  //   });

  //   fetchCityPrayerTime($selectedCity);
  //   fetchCityMonthCalendar($selectedCity);
  // };
</script>

<div class="navbar bg-base-100">
  <div class="flex-1 normal-case text-xl">Al Quran</div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <!-- <li><a>Surah</a></li> -->
      <li>
        <button class="btn btn-outline">
          Surah <Fa icon={faArrowDownShortWide} />
        </button>
        <ul class="p-2 bg-base-100">
          {#each QURAN_SURAH_LIST as surah}
            <li on:click={handleClick(surah)}>
              <a href={null}>{surah.no} - {surah.name}</a>
            </li>
          {/each}
        </ul>
      </li>

      <li class="px-3">
        <button class="btn btn-outline">
          Juz <Fa icon={faArrowDown} />
        </button>
        <ul class="p-2 bg-base-100">
          {#each QURAN_JUZ_LIST as juz}
            <li dir="rtl"><a href={null}> {juz.no} - {juz.arabic}</a></li>
          {/each}
        </ul>
      </li>
    </ul>
  </div>
</div>
