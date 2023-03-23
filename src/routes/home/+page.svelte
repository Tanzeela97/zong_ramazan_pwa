<script>
  import PrayerTime from "../../components/PrayerTime/page.svelte";
  export let data
  const {prayerTime} = data
  console.log('Home:',prayerTime)
</script>

<PrayerTime data={prayerTime}/>

