<script lang="ts">
  import Fa from "svelte-fa";
  import {
    faBell,
    faBellSlash,
    faHome,
    faArrowDown,
  } from "@fortawesome/free-solid-svg-icons";

  import { notification, selectedCity, cities } from "../../stores/store";
  import { CITIES_LIST } from "../../assets/data/constants";

  import {
    fetchCityMonthCalendar,
    fetchCityPrayerTime,
  } from "../../helpers/prayerDataFetchers";

  function handleNotificationClick() {
    console.log("Button clicked!");
    notification.set(!$notification);
  }

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
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn m-1"
      >{$selectedCity.name}
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
      {#each $cities as cityItem}
        <li on:click={handleClick(cityItem)}>
          <a href={null}>{cityItem.name}</a>
        </li>
      {/each}
    </ul>
  </div>
</nav>
<div class="tabs mb-5">
  <a class="tab tab-lg tab-bordered" href="/calendar">Calendar</a>
  <a class="tab tab-lg tab-bordered tab-active" href="/home">Prayer Timings</a>
  <a class="tab tab-lg tab-bordered" href="/quran">Quran</a>
</div>

<!-- <div class="btm-nav">
  <button class="text-primary">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      /></svg
    >
  </button>
  <button class="text-primary active">
    <a href="/calendar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        /></svg
      >
    </a>
  </button>
  <button class="text-primary">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      /></svg
    >
  </button>
</div> -->

<!-- <div class="navbar bg-secondary">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="/">Zong Islamic</a>
  </div>
  <div class=" dropdown dropdown-end flex-none">
      <ul class="menu menu-horizontal px-1">
        <li tabindex="0">
          <btn class="btn bg-primary rounded-full">
            <a class=" text-gray-50">
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
            </a>
          </btn>
          <ul class="p-2 bg-base-100">
            {#each $cities as cityItem}
              <li on:click={handleClick(cityItem)}>
                <a href={null}>{cityItem.name}</a>
              </li>
            {/each}
          </ul>
        </li>
      </ul>
    </div>
  </div> -->
<!-- <nav>
  <div class="navbar bg-primary text-primary-content">
    <div class="navbar-start text-neutral-content">
      <a class="btn btn-ghost normal-case text-xl" href="/">Zong Islamic</a>
    </div>
    <ul
      tabindex="0"
      class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
    >
      <ul class="p-2">
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
      </ul>

      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div class="tabs">
    <a class="tab tab-bordered">Tab 1</a>
    <a class="tab tab-bordered tab-active">Tab 2</a>
    <a class="tab tab-bordered">Tab 3</a>
  </div>
</nav> -->

<!-- <div class="navbar bg-secondary w-fit min-w-full">
  <div class="flex-1">
    <div class="normal-case text-xl"><a href="/home">Ramadan Kareem</a></div>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal">
      <li>
        <a href="/home" class="px-2">
          <Fa icon={faHome} />
        </a>
      </li>
      <li><a href="/calendar" class="btn btn-ghost">Calendar</a></li>
      <li><a href="/quran" class="btn btn-ghost">Al-Quran</a></li>
      <li>
        <button class="px-2" on:click={handleNotificationClick}>
          {#if $notification}
            <Fa icon={faBell} />
          {:else}
            <Fa icon={faBellSlash} />
          {/if}
        </button>
      </li>
      <li>
        <button class="btn btn-outline">
          {$city?.name || "City"}<Fa icon={faArrowDown} />
        </button>

        <ul class="p-2 bg-base-100">
          {#each $cities as cityItem}
            <li on:click={handleClick(cityItem)}>
              <a href={null}>{cityItem.name}</a>
            </li>
          {/each}
        </ul>
      </li>
    </ul>
  </div>
</div> -->
