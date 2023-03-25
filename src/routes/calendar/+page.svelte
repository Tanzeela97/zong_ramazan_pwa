<script lang="ts">
  import Calendar from "../../components/calendar/page.svelte";
  export let data;
  const { prayerCalendar } = data;

  console.log("---------------data in calendar page", prayerCalendar);
</script>

<hr />

<div class="container justify-items-center">
  <Calendar data={prayerCalendar} />
</div>
