import { get } from "svelte/store";
import type { TCityData } from "../assets/data/constants";
import { selectedCity, isHanafi } from "../stores/store";
import {
  //   citiesList,
  currentCityDailyPrayerTime,
  //   isLoading,
} from "../stores/prayerTime";
export const load = async ({ parent }) => {
  console.log("prayer time function called");
  await parent();
  async function fetchPrayerTime() {
    let currentCity: TCityData = get(selectedCity);
    // console.log("------------------currentCity", currentCity);

    let calcMethod;
    if (get(isHanafi)) {
      calcMethod = "KARACHI";
      // console.log("------------is Hanafi should be true = ", calcMethod);
    } else {
      calcMethod = "QUM";
      // console.log("------------is Hanafi should be false = ", calcMethod);
    }
    const url = `https://ap-1.ixon.cc/api/v3/prayertime/pt?lt=${currentCity.location.coordinates[0]}&lg=${currentCity.location.coordinates[1]}&m=${calcMethod}&a=HANAFI&tz=5&f=12h`;
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
