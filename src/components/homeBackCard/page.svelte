<script lang="ts">
  import { selectedCity, currentCityDailyPrayerTime } from "../../stores/store";
  import {
    RAMADAN_MONTH_NO,
    HIJRI_MONTHS_LIST,
  } from "../../assets/data/constants";
</script>

<div class="parallax grad-pink-to-light">
  <div class="w-full h-96">
    <div class="w-96 h-96 relative z-0 justify-between">
      <h2 class="card-title">{$selectedCity.name}</h2>
      <div>
        <h2>{$currentCityDailyPrayerTime.date_str}</h2>
        <h3>
          <br />({$currentCityDailyPrayerTime.hijri_date.hd}
          {HIJRI_MONTHS_LIST[+$currentCityDailyPrayerTime.hijri_date.hm - 1]}
          {$currentCityDailyPrayerTime.hijri_date.hy})
        </h3>
      </div>
    </div>
  </div>
</div>

<!-- <style>
  .parallax {
    /* The image used */
    background-image: url("../assets/img/isra-miraj-illustration-paper-style-with-moon/4965307.jpg")
      no-repeat top center;

    /* background-image: url("../assets/img/isra-miraj-illustration-paper-style-with-moon/4965307.jpg"); */
    /* overflow: hidden; */

    /* Set a specific height */
    /* min-height: 100%; */

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style> -->
