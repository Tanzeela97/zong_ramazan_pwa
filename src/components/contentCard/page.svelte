<script lang="ts">
  import type { PageData } from "../../routes/$types";

  export let props: any;
</script>

<div class="card w-80">
  <!-- <figure>
    <img
      src="src/assets/img/isra-miraj-illustration-paper-style-with-moon/4965307.jpg"
      alt="masjid"
    />
  </figure> -->
  <div class="card-body card-backdrop">
    <h2 class="card-title">{props.contentTitle}</h2>

    <p>{props.arabicText}</p>
    <p>{props.englishText}</p>
    <p>{props.urduText}</p>
    <p>{props.reference}</p>
  </div>
</div>

<style>
  /* .card-backdrop {
    background-image: url("src/assets/svg/quran_1.svg");
  } */
</style>
