<script lang="ts">
  import AyatCard from "../../components/ayatCard/page.svelte";
  //   import MenuBar from "./components/MenuBar.svelte";
  export let data;
  const { ayats } = data;
</script>

<!-- <MenuBar /> -->

<!-- <div class="container justify-items-center mx-10 my-2"> -->
<ul>
  {#each ayats as ayatGroup}
    {#if ayatGroup[0]?.ayat == 1 && ayatGroup[0]?.surah !== 9}
      <li class="mt-3">
        <div class=" border-gray-500 bg-green-100">
          <div class="card-body text-start">
            {#if ayatGroup[0].lang == "AR"}
              <h2 class="text-4xl p-2 leading-loose font-quran" dir="rtl">
                بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
              </h2>
            {/if}

            {#if ayatGroup[1].lang == "UR"}
              <p class="text-1xl leading-loose font-urdu" dir="rtl">
                شُروع اَللہ کے پاک نام سے جو بڑا مہر بان نہايت رحم والا ہے
              </p>
            {/if}
          </div>
        </div>
      </li>
    {/if}
    <li class="mt-3">
      <!-- <AyatCard data={ayat} /> -->

      <div class=" border-gray-500 bg-green-100">
        <div class="card-body text-start">
          {#each ayatGroup as ayat}
            <!-- {#if ayat.lang == "UR"}
              <p class="text-1xl leading-loose font-urdu" dir="rtl">
                {ayat?.qtext}
              </p>
            {/if} -->

            {#if ayat.lang == "AR"}
              <h2 class="text-4xl p-2 leading-loose font-quran" dir="rtl">
                {ayat?.qtext} o
              </h2>
            {/if}

            {#if ayat.lang == "UR"}
              <p class="text-1xl leading-loose font-urdu" dir="rtl">
                {ayat?.qtext}
              </p>
            {/if}

            <!-- {#if ayat.lang == "EN"}
                <p class="text-1xl" dir="rtl">{ayat?.qtext}</p>
              {/if} -->
          {/each}
          <p class="text-md leading-loose">
            {ayatGroup[0]?.surah}:{ayatGroup[0]?.ayat}
          </p>
        </div>
      </div>
    </li>
  {/each}
</ul>

<!-- </div> -->
