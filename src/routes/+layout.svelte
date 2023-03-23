<script lang="ts">
//   export const ssr = false;

import NavBar from "../components/NavBar/page.svelte";
import NotificationBar from "../components/NotificationBar/page.svelte";
import  {City} from '../stores/store.ts'

function handleSelect (e: Event) {
  
    const selectedCity = e.target.text
    City.set(selectedCity)
}
</script>

<div class="container p-2 m-5">
  <NavBar />
  <div class="my-10">
  <span>
    <NotificationBar />

  </span>
  
  <span class="dropdown dropdown-end" on:select={handleSelect}>
    <div tabindex="0" class="badge badge-outline text-lg p-5">{$City}</div> 
    <ul tabindex="0" class="p-4 shadow menu dropdown-content bg-base-100 rounded-box primary-box w-38">
      <li>
        <a on:click={handleSelect}>Karachi</a>
      </li>
      <li>
        <a on:click={handleSelect}>Lahore</a>
      </li>
      <li>
        <a on:click={handleSelect}>Islamabad</a>
      </li>
    </ul>
  </span>
</div>
  <slot />
</div>
