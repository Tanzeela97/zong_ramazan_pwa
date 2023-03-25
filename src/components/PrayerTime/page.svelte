<script lang="ts">
  import { fade } from "svelte/transition";
  import {
    RAMADAN_MONTH_NO,
    HIJRI_MONTHS_LIST,
  } from "../../assets/data/constants";
  // export let data: any;

  import { selectedCity, currentCityDailyPrayerTime } from "../../stores/store";

  // $currentCityDailyPrayerTime = data;
  // console.log("------------current city", $selectedCity);

  // console.log(
  //   "----------currentCityDailyPrayerTime",
  //   $currentCityDailyPrayerTime
  // );
  // console.log("------------cityPrayerSchedule", cityPrayerSchedule);
  // city.subscribe((data) => {
  //   cityPrayerSchedule = data;
  //   console.log("------------cityPrayerSchedule----2", cityPrayerSchedule);
  // });
</script>

<!-- <h1 class="text-xl">Prayer Time on {data.date_str}</h1> -->

<!-- <div class="card w-96 glass">
  <figure>
    <img
      src=""
      alt="Assalam Alaikum"
    />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div> -->

<div
  class="card w-80 bg-base-100 shadow-xl image-full"
  in:fade={{ delay: 100, duration: 250 }}
>
  <figure>
    <img
      src="src/assets/img/isra-miraj-illustration-paper-style-with-moon/4965307.jpg"
      alt="Ramadan"
    />
  </figure>
  <div class="card-body">
    <div class="flex flex-row justify-between mb-5">
      <div>
        <h2 class="card-title">{$selectedCity.name}</h2>
      </div>
      <div>
        <h3>
          {$currentCityDailyPrayerTime.date_str}
          <br />({$currentCityDailyPrayerTime.hijri_date.hd}
          {HIJRI_MONTHS_LIST[+$currentCityDailyPrayerTime.hijri_date.hm - 1]}
          {$currentCityDailyPrayerTime.hijri_date.hy})
        </h3>
      </div>
    </div>
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

<!-- <h1>{$selectedCity.name}</h1>
<div class="card-bordered bg-primary text-3xl">
  <div class="card-body ">
    <div class="card-title text-gray-100">
      Prayer Time on {$currentCityDailyPrayerTime.date_str}
      <br />({$currentCityDailyPrayerTime.hijri_date.hd}
      {HIJRI_MONTHS_LIST[+$currentCityDailyPrayerTime.hijri_date.hm - 1]}
      {$currentCityDailyPrayerTime.hijri_date.hy})
    </div>
    <table class="table">
      <tbody>
        <tr>
          <td>Imsak</td><td>{data.imsak}</td>
        </tr>
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
</div> -->

<!-- <div class="card card-bordered bg-primary text-3xl">
  <div class="card-body ">
    <div class="card-title text-gray-100">
      Prayer Time on {data.date_str} <br />({data.hijri_date.hd}
      {HIJRI_MONTHS_LIST[+data.hijri_date.hm - 1]}
      {data.hijri_date.hy})
    </div>
    <table class="table">
      <tbody> -->
<!-- <tr>
                        <td>Imsak</td><td>{data.imsak}</td>
                    </tr> -->
<!-- <tr>
          <td>
            {#if +data.hijri_date.hm == RAMADAN_MONTH_NO}
              Sehr ends
            {:else}
              Fajr
            {/if}
          </td>
          <td>{data.fajr}</td>
        </tr>
        <tr>
          <td>Sunrise</td><td>{data.sunrise}</td>
        </tr>
        <tr>
          <td>Zuhr</td><td>{data.dhuhr}</td>
        </tr>
        <tr>
          <td>Asar</td><td>{data.asr}</td>
        </tr>
        <tr>
          <td>
            {#if +data.hijri_date.hm == RAMADAN_MONTH_NO}
              Iftar
            {:else}
              Maghrib
            {/if}
          </td>
          <td>{data.maghrib}</td>
        </tr>
        <tr>
          <td>Isha</td><td>{data.isha}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div> -->
