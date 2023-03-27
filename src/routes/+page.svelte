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

<div class="container overscroll-y-none">
  <div class="card-body title-card" />
  <!-- <h1>{currentDate}</h1> -->
  <!-- <div
    class="card-title text-secondary mb-5 flex flex-col  gradient-light-to-pink"
  >
    <h1 class="flex-1">Assalam Alaikum</h1>
    <h2 class="flex-2">and Ramadan Kareem!</h2>
  </div> -->
  <div>
    <HomeFirstCard />

    <div class="flex-row">
      <div class="absolute mt-8 inset-x-8 inset-y-80">
        <!-- <div class="absolute mt-8 inset-x-0 bottom-100 h-16"> -->
        <div class="shadow-2xl">
          <PrayerTime />
        </div>
        <br />
        <!-- <div class="card">
          <SubscribeButton />
        </div> -->
        <br />
        <div class="card shadow-lg ayat-card-bg">
          <AyatOfDayCard props={$ayatList[day - 1]} />
        </div>
        <br />

        <div class="card shadow-lg hadith-card-bg">
          <HadithOfDayCard props={$hadithList[day - 1]} />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .title-card {
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
