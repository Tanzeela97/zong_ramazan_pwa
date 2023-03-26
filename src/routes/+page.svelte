<script lang="ts">
  const sampleAyat = {
    contentTitle: "Ayat of The Day",
    arabicText: "arabic text goes here",
    urduText: "urdu text goes here",
    englishText: "english text goes here",
    reference: "reference goes here",
  };

  const sampleHadith = {
    contentTitle: "Hadith of The Day",
    arabicText: "arabic text goes here",
    urduText: "urdu text goes here",
    englishText: "english text goes here",
    reference: "reference goes here",
  };

  import PrayerTime from "../components/prayerTime/page.svelte";
  import ContentCard from "../components/contentCard/page.svelte";
  import HomeFirstCard from "../components/homeBackCard/page.svelte";
  import SubscribeButton from "../components/subscribeButton/page.svelte";
</script>

<div>
  <div
    class="card-title text-secondary mb-5 flex flex-col  gradient-light-to-pink"
  >
    <h1 class="flex-1">Assalam Alaikum</h1>
    <h2 class="flex-2">and Ramadan Kareem!</h2>
  </div>
  <div>
    <HomeFirstCard />

    <div class="flex-row">
      <div class="absolute mt-8 inset-x-8 inset-y-80">
        <!-- <div class="absolute mt-8 inset-x-0 bottom-100 h-16"> -->
        <div>
          <PrayerTime />
        </div>
        <br />
        <!-- <div class="divider color-white" /> -->
        <div class="card">
          <SubscribeButton />
        </div>
        <br />
        <!-- <div class="divider color-white" /> -->
        <!-- <div class="divider" /> -->
        <div class="card grad-pink-to-light">
          <ContentCard props={sampleAyat} />
        </div>
        <br />
        <!-- <div class="divider" /> -->

        <div class="card grad-light-to-pink">
          <ContentCard props={sampleHadith} />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .parallax {
    /* The image used */
    background-image: url("../assets/img/isra-miraj-illustration-paper-style-with-moon/4965307.jpg")
      no-repeat top center;

    /* background-image: url("../assets/img/isra-miraj-illustration-paper-style-with-moon/4965307.jpg"); */
    overflow: hidden;

    /* Set a specific height */
    min-height: 100%;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
