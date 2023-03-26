import { get } from "svelte/store";
import type { TQuranStatus } from "../../stores/quran";
import { currentAyat, currentLangs } from "../../stores/quran";

export const load = async ({ fetch }: { fetch: any }) => {
  async function fetchData() {
    const { surah, ayat } = get(currentAyat);
    // const surahNo = get(currentAyat);
    // const startAyat = get(currentAyat);
    const langs = get(currentLangs).join(",");
    const limit = 5;
    const url = `https://ap-1.ixon.cc/api/v3/quran?surah=${surah}&ayat=${ayat}&limit=${limit}&lang=${langs}`;
    // console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    const ayats = data.data;
    // console.log(ayats);

    // Group ayats by ayat number
    const outArray = [];
    for (let i = ayat; i <= limit; i++) {
      const groupedAyat = ayats.filter((j: any) => j.ayat == i);
      outArray.push(groupedAyat);
    }
    // console.log(outArray);
    return outArray;
  }
  return {
    ayats: fetchData(),
  };
};
