<script>
  import PrayerTime from "../../components/PrayerTime/page.svelte";
  export let data;
  const { prayerTime } = data;
</script>

<div class="container justify-items-center">
  <PrayerTime data={prayerTime} />
</div>
