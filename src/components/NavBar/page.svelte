<script lang="ts">
  import Fa from "svelte-fa";
  import {
    faBell,
    faBellSlash,
    faHome,
    faArrowDown,
  } from "@fortawesome/free-solid-svg-icons";

  import { notification, city, cities } from "../../stores/store";
  import { CITIES_LIST } from "../../data/constants";

  import { fetchCityPrayerTime } from "../../helpers/fetchCityPrayerTime";

  function handleNotificationClick() {
    console.log("Button clicked!");
    notification.set(!$notification);
  }

  const handleClick = (selectedCity: any) => {
    city.set({
      name: selectedCity.name,
      key: selectedCity.name,
      geoloc: selectedCity.location.coordinates,
    });

    let new_city_data = fetchCityPrayerTime(
      $city.name,
      $city.geoloc[0],
      $city.geoloc[1]
    );
    // console.log("-----------------------new city data", new_city_data);
  };
</script>

<div class="navbar bg-secondary w-fit min-w-full">
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
            <li
              on:click={handleClick(cityItem)}
              class="cursor-pointer hover:bg-green-300"
            >
              <a href={null}>{cityItem.name}</a>
            </li>
          {/each}
        </ul>
      </li>
    </ul>
  </div>
</div>
