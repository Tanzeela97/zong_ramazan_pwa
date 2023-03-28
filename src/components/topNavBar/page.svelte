<script lang="ts">
  import { invalidate, invalidateAll } from "$app/navigation";

  // import { get } from "svelte/store";
  import type { TCityData } from "../../assets/data/constants";
  import { isHanafi, selectedCity, citiesList } from "../../stores/store";
  import { currentCityDailyPrayerTime } from "../../stores/prayerTime";
  // import {
  //   fetchCityMonthCalendar,
  //   fetchCityPrayerTime,
  // } from "../../helpers/prayerDataFetchers";

  let city_name: TCityData = {
    location: { coordinates: ["20.1", "20.5"] },
    name: "nothing important",
  };

  const updateTime = async () => {
    let day = new Date().getDate();
    const dayInStorage = await $currentCityDailyPrayerTime["date"].d;

    if (dayInStorage != day) {
      invalidateAll();
    }
  };
  updateTime();

  const handleClick = (selectCity: any) => {
    selectedCity.set({
      name: selectCity.name,
      location: selectCity.location,
    });
    invalidate("/");
    invalidate("/calendar");
    invalidateAll();
    // fetchCityPrayerTime($selectedCity);
    // fetchCityMonthCalendar($selectedCity);
  };

  const toggleCalcMethod = (e: any) => {
    invalidate("/calendar");
    invalidateAll();
  };
</script>

<nav class="navbar bg-secondary w-100 mb-2">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="/">Zong Islamic</a>
  </div>
  <div class="navbar-end">
    {#if $selectedCity != undefined}
      <div class="dropdown dropdown-end">
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
          >
        </label>
        <div class="z-10 ">
          <ul
            tabindex="0"
            class="w-60 h-60 overflow-y-scroll dropdown-content px-4 py-2  shadow bg-base-100 rounded-box"
          >
            {#each $citiesList as cityItem}
              <div class="w-full py-2 text-sm font-medium flex items-center">
                <li on:click={handleClick(cityItem)}>
                  <a href={null}>{cityItem.name}</a>
                </li>
              </div>
            {/each}
          </ul>
        </div>
      </div>
    {/if}
    <div class="dropdown dropdown-end">
      <div class="indicator">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-settings"
            ><circle cx="12" cy="12" r="3" /><path
              d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
            /></svg
          >
        </label>
      </div>
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <div class="form-control">
            <span class="label-text">Select Time method</span>
            <div class="divider" />
            <label class="label">
              <span class="label-text">Fiqh Ja'afria</span>
              <input
                on:click={toggleCalcMethod}
                name="toggle_calcmethod"
                type="checkbox"
                class="toggle toggle-primary"
                bind:checked={$isHanafi}
              />
              <span class="label-text">Fiqh Hanafi</span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
