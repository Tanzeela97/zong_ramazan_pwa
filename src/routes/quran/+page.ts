export const load = async () => {
    async function fetchData () {
        const surahNo = 1;
        const startAyat = 1;
        const limit = 5;
        const url = `https://ap-1.ixon.cc/api/v3/quran?surah=${surahNo}&ayat=${startAyat}&limit=${limit}&lang=ar,ur,en`;
        const response = await fetch(url);
        const data = await response.json();
        const ayats = data.data;
        // console.log(ayats);
        // return ayats;
        // const ayats_ar = ayats.filter((i: any) => i.lang == "AR");
        // const ayats_ur = ayats.filter((i: any) => i.lang == "UR");
        // const ayats_en = ayats.filter((i: any) => i.lang == "EN");

        // Group ayats by ayat number
        const outArray = [];
        for (let i = startAyat; i <= limit; i++) {
            const groupedAyat = ayats.filter((j: any) => j.ayat == i);
            outArray.push(groupedAyat);
        }
        console.log(outArray);
        return outArray;
        // return { ayats_ar, ayats_ur, ayats_en };

    }
    return {
        ayats: fetchData()
    };
};