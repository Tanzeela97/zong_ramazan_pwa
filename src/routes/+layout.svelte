<script lang="ts">
  //   export const ssr = false;
  import NavBar from "../components/NavBar/page.svelte";
  import NotificationBar from "../components/NotificationBar/page.svelte";
  import { city } from "../stores/store";
  import { CITIES_LIST, type TCityData } from "../data/constants";

  function handleSelect(e: Event) {
    // const selectedCity = e.target;
    console.log(e.target);
    // const myCity: Array<TCityData> = cityList.filter((city: TCityData) => {
    //   city.name == selectedCity;
    // });
    // city.set(myCity[0]);
  }
</script>

<div class="container p-2 m-5">
  <NavBar />
  <slot />
</div>
