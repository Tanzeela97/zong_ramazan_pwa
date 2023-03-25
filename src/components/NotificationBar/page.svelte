<script lang="ts">
  import NotificationBar from "../../components/NotificationBar/page.svelte";
  import { city } from "../../stores/store";
  import { CITIES_LIST, type TCityData } from "../../assets/data/constants";
  import Fa from "svelte-fa";
  import { faBell, faBellSlash } from "@fortawesome/free-solid-svg-icons";

  import { notification } from "../../stores/store";

  function handleClick() {
    console.log("Button clicked!");
    notification.set(!$notification);
  }
</script>

<button class="badge badge-primary text-lg p-5" on:click={handleClick}
  >Subscribe to notifications
  <div class="px-2">
    {#if $notification}
      <Fa icon={faBell} />
    {:else}
      <Fa icon={faBellSlash} />
    {/if}
  </div>
</button>
