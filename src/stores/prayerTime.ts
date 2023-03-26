import { writable } from "svelte/store";
import { fromLocalStorage, toLocalStorage } from "./storage";

export type TPrayerSetting = {
  calcMethod: string;
  asrMethod: string;
  timeZone: number;
  timeFormat: string;
};

export const prayerSettingsInitialValue = fromLocalStorage("prayerSettings", {
  calcMethod: "KARACHI",
  asrMethod: "HANAFI",
  timeZone: 5,
  timeFormat: "12hNS",
});
export const prayerSettings = writable(prayerSettingsInitialValue);
toLocalStorage(prayerSettings, "prayerSettings");

export const currentCityDailyPrayerTimeInitialValue = fromLocalStorage(
  "currentCityDailyPrayerTime",
  null
);
export const currentCityDailyPrayerTime = writable(
  currentCityDailyPrayerTimeInitialValue
);
toLocalStorage(currentCityDailyPrayerTime, "currentCityDailyPrayerTime");

export const currentCityMonthScheduleInitialValue = fromLocalStorage(
  "currentCityMonthSchedulePrayerTime",
  null
);
export const currentCityMonthSchedule = writable(
  currentCityMonthScheduleInitialValue
);
toLocalStorage(currentCityMonthSchedule, "currentCityMonthSchedule");
