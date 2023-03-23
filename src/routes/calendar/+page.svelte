<script lang="ts">
    import {IS_RAMADAN} from '../../stores/store'
    export let data
    const {prayerCalendar} = data
    $: IS_RAMADAN
</script>

<h1>Calendar</h1>

<div class="flex items-center text-3xl">
    <div class="card card-bordered bg-pink-500">
        <div class="card-body ">
<table class="table table-compact text-center">
    <thead>
        <th>Date</th>
        <th>{#if $IS_RAMADAN}Sehr{:else}Fajr{/if}</th>
        <th>Sunrise</th>
        <th>Zuhr</th>
        <th>Asar</th>
        <th>{#if $IS_RAMADAN}Iftar{:else}Maghrib{/if}</th>
        <th>Isha</th>
    </thead>
    <tbody>
        {#each prayerCalendar as item}
            <tr>
                <td>{item.date_str}</td>
                <td>{item.fajr}</td>
                <td>{item.sunrise}</td>
                <td>{item.dhuhr}</td>
                <td>{item.asr}</td>
                <td>{item.maghrib}</td>
                <td>{item.isha}</td>
            </tr>
        {/each}
    </tbody>
</table>
</div>
</div>
</div>
