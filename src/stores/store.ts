import { writable } from "svelte/store";
import { CITIES_LIST } from "../data/constants";

export const geoLocation = writable([24.7, 67.0]);
export const city = writable(CITIES_LIST[2]);
export const cities = writable([]);
export const notification = writable(false);
export const isRamadan = writable(false);
export const currentCitySchedule = writable();
