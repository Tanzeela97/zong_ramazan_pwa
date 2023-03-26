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

<div class="bg-gradient-to-b">
  <div class="m-0 p-0">
    <!-- <div class="parallax"> -->
    <HomeFirstCard />
    <!-- </div> -->

    <div class="flex-row">
      <div class="absolute mt-8 inset-x-9 inset-y-40 justify-center py-6">
        <!-- <div class="absolute mt-8 inset-x-0 bottom-100 h-16"> -->
        <div>
          <PrayerTime />
        </div>
        <div class="divider" />
        <div>
          <SubscribeButton />
        </div>
        <div class="divider" />
        <div class="card grad-pink-to-light">
          <ContentCard props={sampleAyat} />
        </div>
        <div class="divider" />

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
