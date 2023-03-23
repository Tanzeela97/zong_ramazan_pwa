<script lang="ts">
  import { RAMADAN_MONTH_NO, HIJRI_MONTHS_LIST } from "../../data/constants";
  export let data: any;

  import { city, currentCitySchedule } from "../../stores/store";

  $currentCitySchedule = data;
  console.log("------------current city", $city);

  // console.log("----------currentCitySchedule", $currentCitySchedule);
  // console.log("------------cityPrayerSchedule", cityPrayerSchedule);
  // city.subscribe((data) => {
  //   cityPrayerSchedule = data;
  //   console.log("------------cityPrayerSchedule----2", cityPrayerSchedule);
  // });
</script>

<!-- <h1 class="text-xl">Prayer Time on {data.date_str}</h1> -->

<div class="card card-bordered bg-primary text-3xl">
  <!-- <h1>{$city.name}</h1> -->
  <div class="card-body ">
    <div class="card-title text-gray-100">
      Prayer Time on {$currentCitySchedule.date_str}
      <br />({$currentCitySchedule.hijri_date.hd}
      {HIJRI_MONTHS_LIST[+$currentCitySchedule.hijri_date.hm - 1]}
      {$currentCitySchedule.hijri_date.hy})
    </div>
    <table class="table">
      <tbody>
        <!-- <tr>
                        <td>Imsak</td><td>{data.imsak}</td>
                    </tr> -->
        <tr>
          <td>
            {#if +$currentCitySchedule.hijri_date.hm == RAMADAN_MONTH_NO}
              Sehr ends
            {:else}
              Fajr
            {/if}
          </td>
          <td>{$currentCitySchedule.fajr}</td>
        </tr>
        <tr>
          <td>Sunrise</td><td>{$currentCitySchedule.sunrise}</td>
        </tr>
        <tr>
          <td>Zuhr</td><td>{$currentCitySchedule.dhuhr}</td>
        </tr>
        <tr>
          <td>Asar</td><td>{$currentCitySchedule.asr}</td>
        </tr>
        <tr>
          <td>
            {#if +$currentCitySchedule.hijri_date.hm == RAMADAN_MONTH_NO}
              Iftar
            {:else}
              Maghrib
            {/if}
          </td>
          <td>{$currentCitySchedule.maghrib}</td>
        </tr>
        <tr>
          <td>Isha</td><td>{$currentCitySchedule.isha}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

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
