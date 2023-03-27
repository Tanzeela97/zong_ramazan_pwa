<script lang="ts">
  import type { PageData } from "../../routes/$types";

  export let props: PageData;
</script>

<div class="card w-80">
  <div class="card-body">
    <h2 class="card-title">Ayat of the Day</h2>

    <h3>{props.topic}</h3>
    <p>{props.ayat}</p>
  </div>
</div>

<style>
</style>
