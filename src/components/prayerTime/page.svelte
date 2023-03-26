<script lang="ts">
  import { fly } from "svelte/transition";
  import {
    RAMADAN_MONTH_NO,
    HIJRI_MONTHS_LIST,
  } from "../../assets/data/constants";
  // export let data: any;

  import { selectedCity, currentCityDailyPrayerTime } from "../../stores/store";
</script>

{#if $selectedCity != undefined}
  <div
    class="card w-80 glass p-1"
    in:fly={{ delay: 200, duration: 800, y: 100 }}
  >
    <div class="card-body">
      <!-- <table class="bg-white bg-opacity-30 rounded-md w-full text-primary"> -->
      <table class="table w-full text-primary">
        <tbody>
          <!-- <tr>
              <td>Imsak</td><td>{data.imsak}</td>
            </tr> -->
          <tr>
            <td>
              {#if +$currentCityDailyPrayerTime.hijri_date.hm == RAMADAN_MONTH_NO}
                Sehr ends
              {:else}
                Fajr
              {/if}
            </td>
            <td>{$currentCityDailyPrayerTime.fajr}</td>
          </tr>
          <tr>
            <td>Sunrise</td><td>{$currentCityDailyPrayerTime.sunrise}</td>
          </tr>
          <tr>
            <td>Zuhr</td><td>{$currentCityDailyPrayerTime.dhuhr}</td>
          </tr>
          <tr>
            <td>Asar</td><td>{$currentCityDailyPrayerTime.asr}</td>
          </tr>
          <tr>
            <td>
              {#if +$currentCityDailyPrayerTime.hijri_date.hm == RAMADAN_MONTH_NO}
                Iftar
              {:else}
                Maghrib
              {/if}
            </td>
            <td>{$currentCityDailyPrayerTime.maghrib}</td>
          </tr>
          <tr>
            <td>Isha</td><td>{$currentCityDailyPrayerTime.isha}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
{/if}
