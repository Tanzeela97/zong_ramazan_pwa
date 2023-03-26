<script lang="ts">
  import "../app.css";
  import TopNavBar from "../components/topNavBar/page.svelte";
  import BottomNavBar from "../components/bottomNavBar/page.svelte";
</script>

<!-- <div class="overscroll-y-none"> -->
<TopNavBar />

<slot />
<!-- </div> -->
<BottomNavBar />

<!-- <style>
  .page-container
</style> -->
