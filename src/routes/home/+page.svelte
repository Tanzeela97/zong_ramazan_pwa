<script>
  import PrayerTime from "../../components/PrayerTime/page.svelte";
  export let data;
  // console.log("--------------data", data);
  const { prayerTime } = data;
  console.log("Home:", prayerTime);
</script>

<div class="container justify-items-center m-10">
  <PrayerTime data={prayerTime} />
</div>
