import { get } from "svelte/store";
import type { TCityData } from "../assets/data/constants";
import {
  selectedCity,
  //   citiesList,
  currentCityDailyPrayerTime,
  //   isLoading,
} from "../stores/store";
export const load = async ({ parent }) => {
  await parent();
  async function fetchPrayerTime() {
    let currentCity: TCityData = get(selectedCity);
    // console.log("------------------currentCity", currentCity);
    const url = `https://ap-1.ixon.cc/api/v3/prayertime/pt?lt=${currentCity.location.coordinates[0]}&lg=${currentCity.location.coordinates[1]}&m=${currentCity.name}&a=HANAFI&tz=5&f=12h`;
    // console.log(url);
    const response = await fetch(url);
    const data = await response.json();

    // console.log(
    //   "-----------------------------------------------------data",
    //   data
    // );
    currentCityDailyPrayerTime.set(data);
    return data;
  }
  return {
    prayerTime: fetchPrayerTime(),
  };
};
