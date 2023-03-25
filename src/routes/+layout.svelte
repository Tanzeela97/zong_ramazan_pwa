<script lang="ts">
  import "../app.css";
  // import type { TCityData } from "../assets/data/constants";

  import NavBar from "../components/NavBar/page.svelte";
  // import { invalidate, invalidateAll } from "$app/navigation";
  // invalidateAll();

  // import { notification, selectedCity, citiesList } from "../stores/store";

  // import { goto } from "$app/navigation";

  // goto("/home");
</script>

<NavBar />
<slot />
