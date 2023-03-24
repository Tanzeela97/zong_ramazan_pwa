<script lang="ts">
  import Calendar from "../../components/calendar/page.svelte";
  export let data;
  const { prayerCalendar } = data;

  console.log("---------------data in calendar page", prayerCalendar);
</script>

<hr />

<div class="container justify-items-center m-10">
  <Calendar data={prayerCalendar} />
</div>
