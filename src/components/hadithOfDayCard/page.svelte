<script lang="ts">
  import type { PageData } from "../../routes/$types";

  export let props: PageData;
</script>

<div class="card w-80">
  <div class="card w-80">
    <div class="card-body card-backdrop">
      <h2 class="card-title">Hadith of the Day</h2>

      <h3>{props.topic}</h3>
      <p>{props.hadith}</p>
    </div>
  </div>
</div>

<style>
  /* .card-backdrop {
    background-image: url("src/assets/svg/quran_1.svg");
  } */
</style>
