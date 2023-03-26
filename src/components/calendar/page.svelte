<script lang="ts">
  import { fade, slide } from "svelte/transition";
  import { currentCityMonthSchedule } from "../../stores/prayerTime";
  import {
    RAMADAN_MONTH_NO,
    HIJRI_MONTHS_LIST,
  } from "../../assets/data/constants";

  let i = 5;
</script>

<!-- <label>
  <input type="checkbox" bind:checked={showItems} />
  show list
</label>

<label>
  <input type="range" bind:value={i} max="10" />
</label> -->

<!-- {#if showItems}
  {#each items.slice(0, i) as item}
    <div transition:slide>
      {item}
    </div>
  {/each}
{/if} -->

<label class="flex place-content-end mb-3">
  <!-- <input type="range" bind:value={i} max="30" /> -->
  <h2 class="flex-2 text-primary mr-4">show more days</h2>
  <input
    type="range"
    bind:value={i}
    min="2"
    max="30"
    class="flex- 1 range range-primary w-20"
  />
</label>
<div
  class="overflow-x-auto w-full"
  transition:fade={{ delay: 100, duration: 500 }}
>
  <!-- <label>
    <input type="checkbox" bind:checked={showItems} />
    show list
  </label> -->

  <table class="table table-zebra w-full">
    <!-- head -->
    <thead>
      <th>Date</th>
      <th
        >{#if +$currentCityMonthSchedule[0].hijri_date.hm == RAMADAN_MONTH_NO}Sehr<br
          />End{:else}Fajr{/if}</th
      >
      <th>Sunrise</th>
      <th>Zuhr</th>
      <th>Asar</th>
      <th
        >{#if +$currentCityMonthSchedule[0].hijri_date.hm == RAMADAN_MONTH_NO}Iftar{:else}Maghrib{/if}</th
      >
      <th>Isha</th>
      <th>Hijri</th>
    </thead>
    <!-- body -->
    <tbody>
      {#each $currentCityMonthSchedule.slice(0, i) as item}
        <tr transition:slide>
          <!-- <tr transition:slide={{ delay: 0, duration: 200 }}></tr> -->
          <td>{item.date_str}</td>
          <td>{item.fajr}</td>
          <td>{item.sunrise}</td>
          <td>{item.dhuhr}</td>
          <td>{item.asr}</td>
          <td>{item.maghrib}</td>
          <td>{item.isha}</td>
          <td
            >{item.hijri_date.hd}
            {HIJRI_MONTHS_LIST[+item.hijri_date.hm - 1]}</td
          >
        </tr>
      {/each}
    </tbody>
  </table>
</div>
<!-- <table class="table table-compact text-center">
  <thead>
    <th>Date</th>
    <th
    >{#if +$currentCityMonthSchedule[0].hijri_date.hm == RAMADAN_MONTH_NO}Sehr<br
    />End{:else}Fajr{/if}</th
    >
    <th>Sunrise</th>
    <th>Zuhr</th>
    <th>Asar</th>
    <th
    >{#if +$currentCityMonthSchedule[0].hijri_date.hm == RAMADAN_MONTH_NO}Iftar{:else}Maghrib{/if}</th
    >
      <th>Isha</th>
      <th>Hijri</th>
    </thead>
    <tbody>
      {#each $currentCityMonthSchedule as item}
      <tr>
        <td>{item.date_str}</td>
        <td>{item.fajr}</td>
        <td>{item.sunrise}</td>
        <td>{item.dhuhr}</td>
        <td>{item.asr}</td>
        <td>{item.maghrib}</td>
        <td>{item.isha}</td>
        <td
        >{item.hijri_date.hd}
        {HIJRI_MONTHS_LIST[+item.hijri_date.hm - 1]}</td
        >
      </tr>
      {/each}
    </tbody>
  </table> -->
<div class="p-4 text-sm">* Hijri Dates subject to sighting of moon</div>
