import { writable } from "svelte/store";
import { CITIES_LIST } from "../assets/data/constants";

export type TQuranStatus = {
  surah: number;
  ayat: number;
};

export type TAyat = {
  surah: number;
  ayat: number;
  qtext: string;
  lang: string;
};
export type TSurah = TAyat[];

export const geoLocation = writable([24.7, 67.0]);
export const selectedCity = writable(CITIES_LIST[2]);
export const citiesList = writable(CITIES_LIST);
// export const selectedCity = writable();
// export const citiesList = writable();

export const notification = writable(false);
export const isRamadan = writable(false);
export const currentCityDailyPrayerTime = writable();
export const currentCityMonthSchedule = writable();
export const isLoading = writable(false);

export const currentAyat = writable({ surah: 1, ayat: 1 });
export const currentSurah = writable();
export const currentJuz = writable();
export const currentLangs = writable(["ar", "ur", "en"]);
