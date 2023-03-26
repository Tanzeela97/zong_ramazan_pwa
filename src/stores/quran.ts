import { writable } from "svelte/store";
import { fromLocalStorage, toLocalStorage } from "./storage";

export type TQuranStatus = {
    surah: number,
    ayat: number;
};
// export const currentSurah = writable(1);
// export const currentAyat = writable(1);
// export const currentAyat = writable({ surah: 1, ayat: 1 });
// export const currentLangs = writable(['ar', 'ur', 'en']);
// export const currentJuz = writable(1);

export const currentAyatInitialValue = fromLocalStorage('currentAyat', { surah: 1, ayat: 1 });
export const currentAyat = writable(currentAyatInitialValue);
toLocalStorage(currentAyat, 'currentAyat');

export const currentJuzInitialValue = fromLocalStorage('currentJuz', 1);
export const currentJuz = writable(currentJuzInitialValue);
toLocalStorage(currentJuz, 'currentJuz');

export const currentLangsInitialValue = fromLocalStorage('currentLangs', ['ar', 'ur', 'en']);
export const currentLangs = writable(currentLangsInitialValue);
toLocalStorage(currentLangs, 'currentLangs');