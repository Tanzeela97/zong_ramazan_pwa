<script lang="ts">
  import { ayatList, hadithList, selectedCity } from "../../stores/store";

  import PrayerTime from "../../components/prayerTime/page.svelte";
  import AyatOfDayCard from "../../components/ayatOfDayCard/page.svelte";
  import HadithOfDayCard from "../../components/hadithOfDayCard/page.svelte";
  import HomeFirstCard from "../../components/homeBackCard/page.svelte";

  import { invalidate, invalidateAll } from "$app/navigation";
  import { currentCityDailyPrayerTime } from "../../stores/prayerTime";

  import { fetchCityPrayerTime } from "../../helpers/prayerDataFetchers";

  let contentDayToGet = new Date().getDate() - 1;

  export const updateTime = async () => {
    // console.log("--------------updating time");
    let day = new Date().getDate();
    // day = 30;
    // console.log(new Date().getDate());
    // console.log(day);
    // console.log($currentCityDailyPrayerTime["date"].d);
    const dayInStorage = await $currentCityDailyPrayerTime["date"].d;

    if (dayInStorage != day) {
      // console.log($currentCityDailyPrayerTime.date_str);
      // console.log($currentCityDailyPrayerTime);
      $currentCityDailyPrayerTime["date"].d = day;
      // console.log($currentCityDailyPrayerTime.date_str);
      // console.log($currentCityDailyPrayerTime);
      // console.log($selectedCity);
      // console.log(day);
      // console.log($currentCityDailyPrayerTime["date"].d);
      fetchCityPrayerTime($selectedCity);
      // $currentCityDailyPrayerTime["date_str"] = `${day}-03-2023`;
      //   invalidateAll();
    }
  };
  updateTime();
  // import SubscribeButton from "../components/subscribeButton/page.svelte";
</script>

<div class="container">
  <div class="card-body title-card" />
  <div class="flex-row ">
    <div>
      <HomeFirstCard />
    </div>

    <div>
      <!-- <div class="z-0 flex-auto absolute mb-50 inset-x-8 inset-y-80"> -->
      <div class="z-0 absolute mb-40 inset-x-8 inset-y-80">
        <div class="shadow-2xl">
          <PrayerTime />
        </div>
        <br />
        <!-- <div class="card">
            <SubscribeButton />
          </div> -->
        <br />
        <div class="z-0 flex-auto pt-100 card shadow-lg ayat-card-bg ">
          <AyatOfDayCard props={$ayatList[contentDayToGet]} />
        </div>
        <br />

        <div class="z-0 flex-auto card shadow-lg hadith-card-bg">
          <HadithOfDayCard props={$hadithList[contentDayToGet]} />
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  </div>
</div>

<style>
  .title-card {
    /* background-image: url("/img/hometitle/ramadansmall.png"); */
    background-image: url("/img/hometitle/ramadan.png");
    /* width: 100%; */
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .ayat-card-bg {
    background-image: url("/img/cardbg/ayah.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .hadith-card-bg {
    background-image: url("/img/cardbg/hadith.png");
    background-size: auto 100%;
    background-repeat: no-repeat;
  }
</style>
