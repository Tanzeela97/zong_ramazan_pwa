import { writable } from "svelte/store";
import { CITIES_LIST } from "../assets/data/constants";

export const geoLocation = writable([24.7, 67.0]);
export const selectedCity = writable(CITIES_LIST[2]);
export const citiesList = writable([]);
export const notification = writable(false);
export const isRamadan = writable(false);
export const currentCityDailyPrayerTime = writable();
export const currentCityMonthSchedule = writable();
export const isLoading = writable(false);

export const currentSurah = writable();
export const currentJuz = writable();
