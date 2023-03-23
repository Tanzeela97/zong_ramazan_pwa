<script lang="ts">
  import { RAMADAN_MONTH_NO } from "../../data/constants";

  //   import { isRamadan } from "../../stores/store";
  export let data: any;
</script>

<!-- <h1 class="text-xl">Prayer Time on {data.date_str}</h1> -->
<div class="flex items-center text-3xl">
  <div class="card card-bordered bg-pink-500">
    <div class="card-body ">
      <div class="card-title">Prayer Time on {data.date_str}</div>
      <table class="table">
        <tbody>
          <!-- <tr>
                        <td>Imsak</td><td>{data.imsak}</td>
                    </tr> -->
          <tr>
            <td>
              {#if +data.hijri_date.hm == RAMADAN_MONTH_NO}
                Sehr
              {:else}
                Fajr
              {/if}
            </td>
            <td>{data.fajr}</td>
          </tr>
          <tr>
            <td>Sunrise</td><td>{data.sunrise}</td>
          </tr>
          <tr>
            <td>Zuhr</td><td>{data.dhuhr}</td>
          </tr>
          <tr>
            <td>Asar</td><td>{data.asr}</td>
          </tr>
          <tr>
            <td>
              {#if +data.hijri_date.hm == RAMADAN_MONTH_NO}
                Iftar
              {:else}
                Maghrib
              {/if}
            </td>
            <td>{data.maghrib}</td>
          </tr>
          <tr>
            <td>Isha</td><td>{data.isha}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
