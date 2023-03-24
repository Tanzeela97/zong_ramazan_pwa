<script lang="ts">
  import Fa from "svelte-fa";
  import {
    faBell,
    faBellSlash,
    faHome,
    faArrowDown,
  } from "@fortawesome/free-solid-svg-icons";

  import { notification, selectedCity, cities } from "../../stores/store";
  import { CITIES_LIST } from "../../data/constants";

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

<nav>
  <div class="navbar bg-secondary">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl" href="/">Zong Islamic</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li tabindex="0">
          <a class="bg-primary text-gray-50">
            City
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
  </div>
  <div class="tabs">
    <a class="tab tab-lg tab-bordered" href="/calendar">Calendar</a>
    <a class="tab tab-lg tab-bordered tab-active" href="/home">Prayer Timings</a
    >
    <a class="tab tab-lg tab-bordered" href="/quran">Quran</a>
  </div>
</nav>
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
