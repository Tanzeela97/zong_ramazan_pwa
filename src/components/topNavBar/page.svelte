<script lang="ts">
  import { invalidate, invalidateAll } from "$app/navigation";

  // import { get } from "svelte/store";
  import type { TCityData } from "../../assets/data/constants";
  import { selectedCity, citiesList } from "../../stores/store";
  import {
    fetchCityMonthCalendar,
    fetchCityPrayerTime,
  } from "../../helpers/prayerDataFetchers";

  let city_name: TCityData = {
    location: { coordinates: ["20.1", "20.5"] },
    name: "nothing important",
  };

  const handleClick = (selectCity: any) => {
    selectedCity.set({
      name: selectCity.name,
      location: selectCity.location,
    });
    fetchCityPrayerTime($selectedCity);
    fetchCityMonthCalendar($selectedCity);
  };
</script>

<nav class="navbar bg-secondary w-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="/">Zong Islamic</a>
  </div>
  {#if $selectedCity != undefined}
    <div class="dropdown dropdown-end ">
      <label tabindex="0" class="btn m-1 btn-primary">
        {$selectedCity.name}
        <svg
          class="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          ><path
            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
          /></svg
        ></label
      >
      <ul
        tabindex="0"
        class="dropdown-content menu  p-2 shadow bg-base-100 rounded-box w-52"
      >
        {#each $citiesList as cityItem}
          <li on:click={handleClick(cityItem)}>
            <a href={null}>{cityItem.name}</a>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</nav>
