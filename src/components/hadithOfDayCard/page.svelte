<script lang="ts">
  import type { PageData } from "../../routes/$types";

  export let props: PageData;
</script>

<div class="card w-full">
  <div class="card-body ">
    <h2 class="card-title">Hadith of the Day</h2>

    <h3>{props.topic}</h3>
    <p>{props.hadith}</p>
  </div>
</div>

<style>
</style>
