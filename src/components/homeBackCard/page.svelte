<script lang="ts">
  import { selectedCity } from "../../stores/store";
  import { currentCityDailyPrayerTime } from "../../stores/prayerTime";
  import {
    RAMADAN_MONTH_NO,
    HIJRI_MONTHS_LIST,
  } from "../../assets/data/constants";
</script>

<div class="parallax text-white gradient-pink-light">
  <div class="w-full h-96 ml-4 mt-40">
    <div class="w-96 h-96  relative z-0">
      <h2 class="card-title ">{$selectedCity.name}</h2>
      <h2>{$currentCityDailyPrayerTime.date_str}</h2>
      <h2>
        <br />({$currentCityDailyPrayerTime.hijri_date.hd}
        {HIJRI_MONTHS_LIST[+$currentCityDailyPrayerTime.hijri_date.hm - 1]}
        {$currentCityDailyPrayerTime.hijri_date.hy})
      </h2>
    </div>
  </div>
</div>

<style>
  .parallax {
    /* The image used */
    /* background-image: url("src/assets/img/home_img_1.jpg") no-repeat top center; */

    background-image: url("src/assets/img/home_img_1.jpg");
    overflow: hidden;

    /* Set a specific height */
    /* min-height: 100%; */
    /* min-width: 100%; */

    /* Create the parallax scrolling effect */
    /* background-attachment: fixed; */
    /* background-position: center; */
    background-repeat: no-repeat;
    background-size: 100%;
  }
</style>
