<script>
  import Fa from "svelte-fa";
  import {
    faBell,
    faBellSlash,
    faHome,
  } from "@fortawesome/free-solid-svg-icons";
  import { notification } from "../../stores/store";
  import { CITIES_LIST } from "../../data/constants";
  import { city } from "../../stores/store";

  function handleNotificationClick() {
    console.log("Button clicked!");
    notification.set(!$notification);
  }
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <div class="normal-case text-xl"><a href="/home">Ramadan Kareem</a></div>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
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
      <li tabindex="0">
        <a>
          {$city?.name}
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
          {#each CITIES_LIST as cityItem}
            <li><a>{cityItem.name}</a></li>
          {/each}
        </ul>
      </li>
    </ul>
  </div>
</div>
