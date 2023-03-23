<script lang="ts">
  import "../app.css";
  //   export const ssr = false;
  import NavBar from "../components/NavBar/page.svelte";
  //   import NotificationBar from "../components/NotificationBar/page.svelte";
  //   import { city } from "../stores/store";
  //   import { CITIES_LIST, type TCityData } from "../data/constants";

  function handleSelect(e: Event) {
    // const selectedCity = e.target;
    console.log(e.target);
    // const myCity: Array<TCityData> = cityList.filter((city: TCityData) => {
    //   city.name == selectedCity;
    // });
    // city.set(myCity[0]);
  }
</script>

<div>
  <NavBar />
  <div class="container">
    <slot />
  </div>
</div>
