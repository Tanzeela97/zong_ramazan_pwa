<script lang="ts">
  import { isRamadan } from "../../stores/store";
  import { HIJRI_MONTHS, RAMADAN_MONTH_NO } from "../../data/constants";
  export let data;
  const { prayerCalendar } = data;

  $: isRamadan;
</script>

<h1>Calendar</h1>

<div class="flex items-center text-3xl">
  <div class="card card-bordered bg-pink-500">
    <div class="card-body ">
      <table class="table table-compact text-center">
        <thead>
          <th>Date</th>
          <th
            >{#if +prayerCalendar[0].hijri_date.hm == RAMADAN_MONTH_NO}Sehr{:else}Fajr{/if}</th
          >
          <th>Sunrise</th>
          <th>Zuhr</th>
          <th>Asar</th>
          <th
            >{#if +prayerCalendar[0].hijri_date.hm == RAMADAN_MONTH_NO}Iftar{:else}Maghrib{/if}</th
          >
          <th>Isha</th>
          <th>Hijri</th>
        </thead>
        <tbody>
          {#each prayerCalendar as item}
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
                {HIJRI_MONTHS[+item.hijri_date.hm - 1]}</td
              >
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    <div class="mx-4 p-4 text-sm">
      * Hijri Dates subject to sighting of moon
    </div>
  </div>
</div>
