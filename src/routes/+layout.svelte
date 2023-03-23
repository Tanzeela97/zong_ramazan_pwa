<script lang="ts">
//   export const ssr = false;
  import NavBar from "../components/NavBar/page.svelte";
  import NotificationBar from "../components/NotificationBar/page.svelte";
</script>

<div class="container m-5">
  <NavBar />
  <div class="my-10">
    <NotificationBar />
  </div>
  <slot />
</div>
