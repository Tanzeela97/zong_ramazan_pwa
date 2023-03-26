<script lang="ts">
  import "../app.css";
  import TopNavBar from "../components/topNavBar/page.svelte";
  import BottomNavBar from "../components/bottomNavBar/page.svelte";
</script>

<TopNavBar />

<slot />
<BottomNavBar />
