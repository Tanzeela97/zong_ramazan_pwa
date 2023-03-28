<script lang="ts">
  import { ayatList, hadithList } from "../stores/store";

  let currentDate = new Date();
  let day = currentDate.getDate();

  import PrayerTime from "../components/prayerTime/page.svelte";
  import AyatOfDayCard from "../components/ayatOfDayCard/page.svelte";
  import HadithOfDayCard from "../components/hadithOfDayCard/page.svelte";
  import HomeFirstCard from "../components/homeBackCard/page.svelte";

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
          <AyatOfDayCard props={$ayatList[day - 1]} />
        </div>
        <br />

        <div class="z-0 flex-auto card shadow-lg hadith-card-bg">
          <HadithOfDayCard props={$hadithList[day - 1]} />
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
