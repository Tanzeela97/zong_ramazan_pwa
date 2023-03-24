<script>
  import PrayerTime from "../../components/PrayerTime/page.svelte";
  export let data;
  const { prayerTime } = data;
</script>

<div class="container justify-items-center m-10">
  <PrayerTime data={prayerTime} />
</div>
